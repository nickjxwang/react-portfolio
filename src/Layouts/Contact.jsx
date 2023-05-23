import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import Footer from './Footer'

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm(
      'service_s583u0h',
      'template_a1fx8ro',
      form.current,
      'Tc3X2wBUz9w1GP8PO'
    )

    e.target.reset()
  }

  return (
    <section className='w-full pt-28 md:px-32' id='contact'>
      <div className='mb-20'>
        <div className='w-[64px] h-[6px] bg-gradient-to-r from-pantone to-blueberry rounded-lg mb-5' />
        <h3 className='text-2xl font-bold font-Poppins text-light_primary/80 md:text-3xl'>
          Contact
        </h3>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className='mx-auto flex flex-col gap-6 p-4 justify-center items-center text-light_primary md:w-[70%]'
      >
        <input
          className=''
          type='text'
          name='name'
          placeholder='Your name'
          required
        />
        <input type='email' name='email' placeholder='Your email' required />
        <textarea name='message' rows='7' placeholder='Your message' required />
        <button className='btn' type='submit'>
          Send Message
        </button>
      </form>

      <div className='absolute -bottom-1 left-0 right-0'>
        <Footer />
      </div>
    </section>
  )
}
export default Contact
