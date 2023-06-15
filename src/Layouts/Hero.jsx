import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Hero = ({ setActivePath }) => {
  return (
    <section
      className='relative bg-dark_primary pt-24 h-screen md:px-32'
      id='home'
    >
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-dark_primary opacity-60'></div>
        <div className='h-full bg-hero-pattern bg-cover bg-center bg-no-repeat lg:bg-contain'></div>
      </div>

      <div className='flex flex-col justify-center items-center relative z-10 mt-28 md:items-start'>
        {/* <h5 className='text-light_primary text-xl'>Hello, I'm</h5> */}
        <h1 className='text-4xl text-center py-2 text-light_primary font-bold md:text-6xl md:pb-6 md:text-left'>
          Front-End <span className='text-pantone'>React</span> Developer
        </h1>
        {/* <h2 className='text-light_primary text-2xl py-2 md:text-4xl md:pb-6'>
          <span className='text-pantone text-xl md:text-4xl'>
            CHIN-HSUEH (NICK) WANG
          </span>
        </h2> */}
        <p className='text-md py-5 leading-8 text-center text-light_primary max-w-xl md:text-2xl md:pb-6 md:mb-15 md:text-left'>
          Hi, I'm Chin-hsueh (Nick) Wang who is passionate about front-end
          development and has a background in interaction design.
        </p>
        <div className='mt-6'>
          <Link
            className='bg-blueberry  text-light_primary/80 border-2 border-blueberry transition ease-in-out duration-300 hover:bg-pantone hover:text-dark_primary hover:border-pantone px-4 py-3 rounded-md'
            to='/contact'
            onClick={() => setActivePath('/contact')}
          >
            Let's Talk
          </Link>
        </div>
      </div>
      <div className='absolute -bottom-20 left-0 right-0'>
        <Footer />
      </div>
    </section>
  )
}

export default Hero
