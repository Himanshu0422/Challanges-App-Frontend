import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty, setSearch } from '../redux/questionsSlice';

const Layout = ({ children }) => {

    const location = useLocation();
    const dispatch = useDispatch();
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    const changeHandler = (e) => {
        dispatch(setSearch(e.target.value));
    }
    
    const changeDiffHandler = (e) => {
        dispatch(setDifficulty(e.target.value));
    }

    const questionMenu = [
        {
            name: 'Hooks',
            path: '/challenges/hooks'
        },
        {
            name: 'Router',
            path: '/challenges/router'
        },
        {
            name: 'Custom Hooks',
            path: '/challenges/custom-hooks'
        },
        {
            name: 'Context Api',
            path: '/challenges/context-api'
        },
        {
            name: 'Debugging',
            path: '/challenges/debugging'
        },
        {
            name: 'Portals',
            path: '/challenges/portals'
        },
    ]

    return (
        <div className='flex h-[calc(100vh-11rem)] max-md:flex-col backgound-color'>
            <div className='flex md:w-[15%] md:justify-center max-md:w-[100%] max-md:hidden'>
                <div className='flex md:flex-col md:justify-evenly'>
                    {questionMenu.map((menu, i) => {
                        const isActive = location.pathname === menu.path;
                        return <div key={i} className={`flex justify-center items-center text-white ${isActive ? 'button-background' : ''}`}>
                            <Link
                                className='p-3 rounder-lg border-transparent button-background-hover'
                                to={menu.path}>
                                {menu.name}
                            </Link>
                        </div>
                    })}
                </div>
            </div>
            <div className='max-md:flex flex-col hidden'>
                <div onClick={handleSidebar} className='block lg:hidden cursor-pointer mt-2 ml-2 z-10 w-7'>
                    {sidebar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={sidebar ? 'fixed left-0 bg-opacity-50 backdrop-blur-lg w-[60%] h-full ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    {questionMenu.map((menu, i) => {
                        return <li key={i} className='flex justify-center items-center text-white' onClick={handleSidebar}>
                            <Link
                                className='p-3'
                                to={menu.path}>
                                {menu.name}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
            <div className="border border-white mx-1 max-md:hidden"></div>
            <div className='md:w-[85%] max-md:mt-3 max-md:mx-2 max-md:h-full'>
                <div className='flex w-full md:h-[18%]'>
                    <div className='w-[80%] md:h-[90%] max-md:h-full inline-flex items-center'>
                        <AiOutlineSearch className='h-6 w-6' />
                        <input
                            className='w-full h-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            type='text'
                            placeholder='Seacrh'
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="border border-white h-[90%]"></div>
                    <div className='w-[20%] md:h-[90%] max-md:h-full'>
                        <select
                            className="w-full h-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="difficulty"
                            name="difficulty"
                            onChange={changeDiffHandler}
                        >
                            <option disabled selected>Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Difficult">Difficult</option>
                        </select>
                    </div>
                </div>
                <div className='mt-5 mb-5 md:h-[75%] max-md:mt-4 max-md:ml-2 max-md:h-[calc(100vh-18rem)]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;