import { content } from '../Content'
import Footer from './Footer'
import Skills from './Skills'

const About = () => {
  return (
    <section className='h-screen flex flex-col pt-28 md:px-32' id='about'>
      <div className='mb-20'>
        <div className='w-[64px] h-[6px] bg-gradient-to-r from-pantone to-blueberry rounded-lg mb-5' />
        <h3 className='text-2xl font-bold font-Poppins text-light_primary/80 md:text-3xl'>
          About Me
        </h3>
      </div>

      <div className='flex flex-col justify-center items-start gap-6 text-light_primary md:flex-row md:justify-around'>
        <div className='relative overflow-hidden p-6 rounded-2xl border-2 border-pantone'>
          <img
            src={content.avatar.avatar}
            alt='avatar'
            className='w-full h-auto rounded-2xl'
          />
          <div className='absolute inset-0 p-10 bg-dark_primary opacity-30'></div>
        </div>

        <div className='flex flex-col'>
          <p className='text-lg text-center leading-8 p-2 '>
            I have a passion for computer programming. This passion has given me
            the ability to develop programs for websites. My goal is to get a
            Front-end Developer position after graduating in spring 2023.
            <br />
            <br />I am passionate about games and game development as well.
          </p>
        </div>
      </div>
      <div className='mb-20'>
        <Skills />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  )
}
export default About
