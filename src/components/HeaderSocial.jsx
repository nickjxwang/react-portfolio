import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HeaderSocial = () => {
  return (
    <div className='text-2xl flex justify-center items-center gap-4 text-blueberry md:pl-[13px] md:text-3xl md:flex-col'>
      <Link to='https://www.linkedin.com/in/nwang15/' target='_blank'>
        <AiFillLinkedin className='transition-all duration-300  hover:text-pantone hover:scale-125 cursor-pointer' />
      </Link>

      <Link to='https://github.com/nickjxwang' target='_blank'>
        <AiFillGithub className='transition-all duration-300 hover:text-pantone hover:scale-125 cursor-pointer' />
      </Link>

      <Link to='mailto:nick.jxw@gmail.com' target='_blank'>
        <AiOutlineMail className='transition-all duration-300 hover:text-pantone hover:scale-125 cursor-pointer' />
      </Link>

      <div className='w-[1px] h-20 bg-pantone hidden md:block'></div>
    </div>
  )
}
export default HeaderSocial
