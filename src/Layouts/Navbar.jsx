import { useEffect, useState } from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCodeSandbox,
  AiOutlineMail,
  AiOutlineUser,
} from 'react-icons/ai'
import { CgToolbarBottom } from 'react-icons/cg'
import { HiMenuAlt2 } from 'react-icons/hi'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { content, links } from '../Content'

import { AiOutlineHome } from 'react-icons/ai'
import HeaderSocial from '../components/HeaderSocial'

const Navbar = ({ setActivePath, activePath, showMenu, setShowMenu }) => {
  const location = useLocation()

  useEffect(() => {
    setActivePath(location.pathname)
  }, [])

  return (
    <div className='bg-dark_primary/80 fixed p-2 inset-x-0 top-0 left-0 z-[999]'>
      <nav className='container flex justify-between items-center mx-auto p-3 md:max-w-screen-xl'>
        <div className='w-14'>
          <Link to='/'>
            <img
              className='rounded-full border-2 border-pantone'
              src={content.logo.logo}
              alt='logo'
            />
          </Link>
          <div className='md:fixed bottom-0'>
            <div className='hidden md:inline-block'>
              <HeaderSocial />
            </div>
          </div>
        </div>

        <ul className='hidden items-center gap-8 md:flex'>
          {links.map(({ name, path, active }) => {
            return (
              <li key={name}>
                <NavLink
                  to={path}
                  onClick={() => setActivePath(path)}
                  className='relative group font-Poppins text-lg cursor-pointer text-light_primary/80 hover:text-pantone'
                >
                  {name}
                  <span
                    className={`absolute inline-block -bottom-[0.2rem] left-0 right-0 mx-auto h-[0.1rem] bg-pantone rounded-full group-hover:w-10 transition-[width] duration-300 ${
                      activePath === path ? 'w-10' : 'w-0'
                    }`}
                  ></span>
                </NavLink>
              </li>
            )
          })}
        </ul>

        <ul className='flex items-center md:hidden'>
          <li className='relative md:hidden'>
            <HeaderSocial />
          </li>
          <li className='flex justify-center items-center'>
            <div
              className={` bg-dark_primary/40 transition duration-300 ease-in-out cursor-pointer rounded-lg z-[999] ${
                showMenu ? 'text-pantone' : 'text-light_primary'
              }  ml-6`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <HiMenuAlt2 size={40} />
            </div>
            <div
              className={`fixed z-[998]  bg-dark_variant/30 backdrop-blur-md px-2 py-4 ml-6 rounded-full text-light_primary left duration-300 ${
                showMenu ? 'top-20' : 'top-[-100%]'
              }`}
            >
              <ul
                className={`flex flex-col items-center justify-between gap-4 text-2xl `}
              >
                <li>
                  <NavLink
                    to='/'
                    onClick={() => setActivePath('/')}
                    className={`${
                      location.pathname === '/' ? 'text-pantone' : ''
                    }`}
                  >
                    <AiOutlineHome />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    onClick={() => setActivePath('/about')}
                    className={`${
                      location.pathname === '/about' ? 'text-pantone' : ''
                    }`}
                  >
                    <AiOutlineUser />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/projects'
                    onClick={() => setActivePath('/projects')}
                    className={`${
                      location.pathname === '/projects' ? 'text-pantone' : ''
                    }`}
                  >
                    <AiOutlineCodeSandbox />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/contact'
                    onClick={() => setActivePath('/contact')}
                    className={`${
                      location.pathname === '/contact' ? 'text-pantone' : ''
                    }`}
                  >
                    <AiOutlineMail />
                  </NavLink>
                </li>
              </ul>

              {/* <ul
                className={`flex flex-col items-center justify-between gap-4 text-2xl `}
              >
                {links.map(({ name, path, icon }) => {
                  return (
                    <li key={name}>
                      <NavLink
                        to={path}
                        onClick={() => handleNavLinkClick(path)}
                        className={`${
                          location.pathname === path ? 'text-pantone' : ''
                        }`}
                      >
                        {icon}
                      </NavLink>
                    </li>
                  )
                })}
              </ul> */}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
