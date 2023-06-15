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

      {/* <div className='flex flex-col justify-center items-center gap-6 text-light_primary md:flex-row md:justify-center'>
        <div className='relative overflow-hidden mx-20 p-6 rounded-2xl border-2 border-pantone md:m-0'>
          <img
            src={content.avatar.avatar}
            alt='avatar'
            className='rounded-2xl'
          />
          <div className='absolute inset-0 p-10 bg-dark_primary opacity-30'></div>
        </div>

        <div className=''>
          <p className='text-lg text-center leading-8 p-2 md:text-left '>
            I am passionate about web development and have extensive experience
            in interaction design. I excel in utilizing front-end technologies
            such as HTML, CSS, JavaScript, Tailwind, and React to transform the
            visual concepts of designers into dynamic, interactive, and
            user-friendly websites. As a front-end engineer, I not only focus on
            technical aspects but also place great importance on effective
            communication and teamwork. I am dedicated to building powerful,
            user-friendly, and visually appealing web applications.
          </p>
        </div>
      </div> */}

      <div className='w-full max-w-xl flex flex-row items-center justify-center mx-auto md:max-w-full'>
        <div className='flex flex-col justify-center items-center gap-10 md:flex-row w-4/6 md:w-5/6'>
          <div className='w-full md:w-3/5 flex flex-col items-center justify-center'>
            <figure className='relative w-full md:w-5/5 flex flex-col items-center justify-center rounded-2xl border-2 border-pantone p-6'>
              <img
                src={content.avatar.avatar}
                alt='avatar'
                className='rounded-2xl'
              />
              <div className='absolute inset-0 p-10 bg-dark_primary opacity-30'></div>
            </figure>
          </div>
          <div className='w-full md:w-5/5 space-y-4 flex flex-col justify-center items-center'>
            <div class='flex flex-col justify-center'>
              <p class='text-lg text-center leading-8 p-2 md:text-left'>
                I am passionate about web development and have extensive
                experience in interaction design. I excel in utilizing front-end
                technologies such as HTML, CSS, JavaScript, Tailwind, and React
                to transform the visual concepts of designers into dynamic,
                interactive, and user-friendly websites. As a front-end
                engineer, I not only focus on technical aspects but also place
                great importance on effective communication and teamwork. I am
                dedicated to building powerful, user-friendly, and visually
                appealing web applications.
              </p>
            </div>
          </div>
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
