const HamburgerMenu = () => {
  return (
    <ul className='flex items-center'>
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
              <a
                href='#home'
                onClick={() => setActive('#home')}
                className={active === '#home' ? 'text-pantone' : ''}
              >
                <AiOutlineHome />
              </a>
            </li>
            <li>
              <a
                href='#about'
                onClick={() => setActive('#about')}
                className={active === '#about' && 'text-pantone'}
              >
                <AiOutlineUser />
              </a>
            </li>
            <li>
              <a
                href='#skills'
                onClick={() => setActive('#skills')}
                className={active === '#skills' && 'text-pantone'}
              >
                <CgToolbarBottom />
              </a>
            </li>
            <li>
              <a
                href='#works'
                onClick={() => setActive('#works')}
                className={active === '#works' && 'text-pantone'}
              >
                <AiOutlineCodeSandbox />
              </a>
            </li>
            <li>
              <a
                href='#contact'
                onClick={() => setActive('#contact')}
                className={active === '#contact' && 'text-pantone'}
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  )
}
export default HamburgerMenu
