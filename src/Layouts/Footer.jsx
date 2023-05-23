import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='bg-dark_primary' id='contact'>
      <div className='flex flex-col items-center justify-center'>
        <div className='h-[2px] w-10/12 bg-pantone/80 rounded-lg'></div>

        <span className='mx-auto pt-6 text-light_primary/70 text-center'>
          © 2023 by Chin-hsueh Wang
        </span>
      </div>
    </section>
  )
}

export default Footer
