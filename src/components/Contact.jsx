import emailjs from '@emailjs/browser'
import { useRef } from 'react'

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
    <section className='w-full mb-10 pt-20 md:px-32' id='contact'>
      <div className=''>
        <div className='w-[64px] h-[6px] bg-gradient-to-r from-pantone to-blueberry rounded-lg mb-5' />
        <h3 className='font-bold text-light_primary/80'>Contact</h3>
      </div>
      <br />

      <form
        ref={form}
        onSubmit={sendEmail}
        className='mx-auto flex flex-col gap-6 p-4 justify-center items-center text-light_primary md:w-[70%]'
      >
        <input
          className=''
          type='text'
          name='name'
          placeholder='Your Full Name'
          required
        />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required />
        <button className='btn' type='submit'>
          Send Message
        </button>
      </form>
    </section>
  )
}
export default Contact
