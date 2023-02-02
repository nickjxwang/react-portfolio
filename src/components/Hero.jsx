import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import BgAnimation from '../components/BackgroundAnimation'

const Hero = () => {
  return (
    <section className='relative md:px-32' id='home'>
      <div className='flex flex-col justify-center items-center mt-28 md:items-start'>
        <h5 className='text-light_primary text-xl'>Hello, I'm</h5>
        <h1 className='text-4xl text-center py-2 text-light_primary font-blod md:text-6xl md:pb-6 md:text-left'>
          CHIN-HSUEH WANG
        </h1>
        <h2 className='text-light_primary/80 text-2xl py-2 md:text-4xl md:pb-6'>
          <span className='text-pantone'>Front-End Developer</span>
        </h2>
        <p className='text-md py-5 leading-8 text-center text-light_primary/60 max-w-xl md:text-2xl md:pb-6 md:mb-15 md:text-left'>
          I enjoy solving technical problems, researching, and learning new
          technologies.
        </p>
        <div className='mt-6'>
          <a
            className='bg-blueberry  text-light_primary border-2 border-dark_primary transition ease-in-out duration-300 hover:bg-pantone hover:text-dark_primary px-4 py-3 rounded-md'
            href='#contact'
          >
            Let's Talk
          </a>
        </div>
      </div>
      <BgAnimation />
    </section>
  )
}

export default Hero
