import { useState } from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { HiMenuAlt2 } from 'react-icons/hi'
import { content } from '../Content'

const Navbar = () => {
  const { nav } = content
  const [showMenu, setShowMenu] = useState(false)
  const [active, setActive] = useState(0)

  return (
    <div className='bg-dark_primary/40 fixed inset-x-0 top-0 left-0 z-[999]'>
      <nav className='container flex justify-between mx-auto mb-4 p-4 pb-0 max-w-screen-xl'>
        <img
          className='h-12 w-12 rounded-full border-2 border-pantone'
          src={content.logo.logo}
          alt='logo'
        />
        <ul className='flex items-center'>
          <li>
            <div className='text-3xl flex justify-center gap-4 px-10 text-light_primary'>
              <a
                href='https://www.linkedin.com/in/chin-hsueh-wang/'
                target='_blank'
              >
                <AiFillLinkedin className='hover:text-pantone hover:scale-125 duration-200 cursor-pointer' />
              </a>

              <a href='https://github.com/nickjxwang' target='_blank'>
                <AiFillGithub className='hover:text-pantone hover:scale-125 duration-200 cursor-pointer' />
              </a>
            </div>
          </li>
          <li>
            <a
              className='bg-gradient-to-r from-blueberry/70 to-blueberry text-white border-2 border-dark_primary hover:border-pantone px-4 py-2 rounded-md'
              href='https://www.linkedin.com/in/chin-hsueh-wang/'
              target='_block'
            >
              Resume
            </a>
          </li>
          <li className='flex justify-center items-center'>
            <div
              className={` bg-dark_primary/40 cursor-pointer rounded-lg z-[999] ${
                showMenu ? 'text-pantone' : 'text-white'
              }  ml-6`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <HiMenuAlt2 size={40} />
            </div>
            <div
              className={`fixed z-[998] flex flex-col items-center gap-5 bg-dark_primary/40 px-2 py-3 ml-6 backdrop-blur-md rounded-full text-blueberry/80 right-[50%-768px] duration-300 ${
                showMenu ? 'top-20' : 'top-[-100%]'
              }`}
            >
              {nav.map((item, i) => (
                <a key={i} href={item.link} onClick={() => setActive(i)}>
                  <div
                    className={`text-[10px] p-2 border-2 rounded-md sm:cursor-pointer ${
                      i === active && 'border-pantone text-light_primary'
                    } `}
                  >
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
