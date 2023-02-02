import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='md:px-32' id='contact'>
      <div className='h-[2px] bg-pantone/75 rounded-lg'></div>
      <div className='p-2 flex flex-col items-start justify-center'>
        {/* <div className='py-4 flex flex-col justify-start items-start gap-2'>
          <AiOutlineMail className='text-light_primary' />
          <h3 className='text-sm text-light_primary'>Email</h3>
          <a href='mailto:nick.jxw@gmail.com' target='_blank'>
            <h4 className='text-sm text-light_primary'>nick.jxw@gmail.com</h4>
          </a>
        </div> */}

        <span className='mx-auto font-medium pt-6 text-light_primary/70 text-center'>
          © 2023 Developed by Chin-hsueh Wang
        </span>
      </div>
    </section>
  )
}

export default Footer
