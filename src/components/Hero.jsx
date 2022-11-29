import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import BgAnimation from '../components/BackgroundAnimation'

const Hero = () => {
  return (
    <section className=' relative md:px-32' id='home'>
      <div className='text-center mt-28 md:text-left'>
        <h1 className='text-4xl py-2 text-light_primary font-medium md:text-6xl md:pb-6'>
          CHIN-HSUEH WANG
        </h1>
        <h2 className='text-light_primary/80 text-2xl py-2 md:text-4xl md:pb-6'>
          <span className='text-pantone'>Front-End Developer</span> &{' '}
          <span className='text-pantone'>Artist</span>.
        </h2>
        <p className='text-md py-5 leading-8 text-light_primary/60 max-w-xl md:text-2xl md:pb-6 md:mb-20'>
          I enjoy solving technical problems, researching, and learning new
          technologies.
        </p>
      </div>
      <BgAnimation />
    </section>
  )
}

export default Hero
