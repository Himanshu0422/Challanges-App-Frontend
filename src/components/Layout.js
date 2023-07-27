import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

    const location=useLocation();

    const questionMenu = [
        {
            name: 'Hooks',
            path: 'hooks'
        },
        {
            name: 'Router',
            path: 'router'
        },
        {
            name: 'Custom Hooks',
            path: 'custom-hooks'
        },
        {
            name: 'Context Api',
            path: 'context-api'
        },
        {
            name: 'Debbuging',
            path: 'debbuging'
        },
        {
            name: 'Portals',
            path: 'portals'
        },
    ]

    return (
        <div className='flex h-[calc(100vh-11rem)] max-md:flex-col backgound-color'>
            <div className='flex md:w-[15%] md:justify-center max-md:w-[100%]'>
                <div className='flex md:flex-col md:justify-evenly'>
                    {questionMenu.map((menu,i)=>{
                        const isActive = location.pathname===menu.path;
                        return  <div className={`flex justify-center items-center text-white ${isActive ? '' : ''}`}>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </div> 
                    })}
                </div>
            </div>
            <div className='w-[85%]'>

                <div>{children}</div>
            </div>
        </div>
    )
}

export default Layout;