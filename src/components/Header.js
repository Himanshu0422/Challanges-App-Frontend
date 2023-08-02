import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
import { useSelector } from 'react-redux';

export default function Header() {

    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const handleLinkClick = () => {
        window.open('https://www.linkedin.com/in/himanshumittal035/', '_blank');
    };
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const logoutHandler = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className="flex justify-between items-center p-7 mb-7">
            <div className=''>
                <h1 className='text-4xl italic font-mono lg:flex hidden'>
                    Challenges App
                </h1>
                <h1 className='text-4xl italic font-mono max-lg:flex hidden'>
                    Challenges
                </h1>
                <h1 className='text-4xl italic font-mono max-lg:flex hidden'>
                    App
                </h1>
            </div>
            <nav className="text-white hidden lg:flex">
                <ul className='flex'>
                    <li className='flex cursor-pointer px-3'
                        onClick={() => navigate('/')}
                    >
                        <img src='https://img.icons8.com/office/40/000000/home--v1.png' alt='home' className='w-[25px] h-[25px] m-1' />
                        <div className='p-1 font-serif text-lg'>Home</div>
                    </li>
                    <li className='flex cursor-pointer px-3'
                        onClick={() => navigate('/challenges')}
                    >
                        <img src='https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-coding-online-learning-vitaliy-gorbachev-flat-vitaly-gorbachev.png'
                            alt='home' className='w-[25px] h-[25px] m-1' />
                        <div className='p-1 font-serif text-lg'>Challenges</div>
                    </li>
                    <li className='flex cursor-pointer px-3'
                        onClick={() => handleLinkClick()}
                    >
                        <img src='https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-developer-basic-ui-elements-2.2-sbts2018-outline-color-sbts2018.png'
                            alt='home' className='w-[25px] h-[25px] m-1' />
                        <div className='p-1 font-serif text-lg'>Author</div>
                    </li>
                    {user?.isAdmin ? (
                        <li className='flex cursor-pointer px-3'
                            onClick={() => navigate('/question')}
                        >
                            <img src='https://img.icons8.com/officel/40/000000/community-grants.png' alt='home' className='w-[25px] h-[25px] m-1' />
                            <div className='p-1 font-serif text-lg'>Add Question</div>
                        </li>
                    ) : (
                        <li className='flex cursor-pointer px-3'
                            onClick={() => navigate('/contribute')}
                        >
                            <img src='https://img.icons8.com/officel/40/000000/community-grants.png' alt='home' className='w-[25px] h-[25px] m-1' />
                            <div className='p-1 font-serif text-lg'>Contribute</div>
                        </li>
                    )
                    }
                    <li className='flex cursor-pointer px-3'
                        onClick={() => logoutHandler()}
                    >
                        <AiOutlineLogout className='w-[25px] h-[25px] m-1' />
                        <div className='p-1 font-serif text-lg'>Logout</div>
                    </li>
                </ul>
            </nav>
            <div onClick={handleNav} className='block lg:hidden cursor-pointer'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 bg-opacity-50 backdrop-blur-lg w-[60%] h-full ease-in-out duration-500 text-white z-20' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => {navigate('/')}}>Home</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => navigate('/challenges')}>Challenges</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => handleLinkClick()}>About</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => navigate('/question')}>{user?.isAdmin ? 'Add Question' : 'Contribute'}</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={() => logoutHandler()}>Logout</li>
            </ul>
        </div>
    )
}