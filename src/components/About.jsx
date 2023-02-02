import { content } from '../Content'

const About = () => {
  return (
    <section className='mb-10 pt-20 md:px-32' id='about'>
      <div className=''>
        <div className='w-[64px] h-[6px] bg-gradient-to-r from-pantone to-blueberry rounded-lg mb-5' />
        <h3 className='font-bold text-light_primary/80'>About Me</h3>
      </div>
      <br />

      <div className='flex flex-col justify-center items-center p-4 gap-6 text-light_primary md:flex-row md:justify-around'>
        <div className='relative flex-1 rounded-xl bg-gradient-to-bl from-transparent via-dark_variant to-transparent'>
          <img
            src={content.avatar.avatar}
            alt='avatar'
            className='rounded-xl'
          />
        </div>

        <div className='flex flex-col flex-1'>
          <p className='text-xl text-center leading-8 p-2 md:text-sm lg:text-lg'>
            I have a passion for computer programming. This passion has given me
            the ability to develop programs for websites. My goal is to get a
            Front-end Developer position after graduating in spring 2023.
            <br />
            <br />I am passionate about games and game development as well.
          </p>
        </div>
      </div>
    </section>
  )
}
export default About
