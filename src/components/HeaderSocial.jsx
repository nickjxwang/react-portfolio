import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='text-2xl flex justify-center items-center gap-4 text-blueberry md:pl-[13px] md:text-3xl md:flex-col'>
      <a href='https://www.linkedin.com/in/chin-hsueh-wang/' target='_blank'>
        <AiFillLinkedin className='transition-all duration-300  hover:text-pantone hover:scale-125 cursor-pointer' />
      </a>

      <a href='https://github.com/nickjxwang' target='_blank'>
        <AiFillGithub className='transition-all duration-300 hover:text-pantone hover:scale-125 cursor-pointer' />
      </a>

      <a href='mailto:nick.jxw@gmail.com' target='_blank'>
        <AiOutlineMail className='transition-all duration-300 hover:text-pantone hover:scale-125 cursor-pointer' />
      </a>

      <div className='w-[1px] h-20 bg-pantone hidden md:block'></div>
    </div>
  )
}
export default HeaderSocial
