import { content } from '../Content'
import Footer from './Footer'

const Skills = () => {
  return (
    <div className='bg-dark_primary pt-28' id='skills'>
      <div className='mb-20'>
        <div className='w-[64px] h-[6px] bg-gradient-to-r from-pantone to-blueberry rounded-lg mb-5' />
        <h3 className='text-2xl font-bold font-Poppins text-light_primary/80 md:text-3xl'>
          Skills
        </h3>
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-center'>
        <div className='w-full flex flex-col text-center items-center justify-center gap-20 p-10 bg-dark_variant rounded-md border-2 border-pantone lg:flex-row lg:justify-center lg:items-start lg:gap-5'>
          <div className='w-full flex flex-col items-center justify-center gap-6'>
            <h4 className='whitespace-nowrap text-light_primary/80 text-xl text-center uppercase'>
              Programming Languages
              <div className='flex justify-center items-center mt-2'>
                <div className='w-[70px] h-[2px] bg-pantone rounded-lg mb-6' />
              </div>
            </h4>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl '>
                C#
              </h6>
            </div>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl'>
                JavaScript
              </h6>
            </div>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl'>
                HTML5
              </h6>
            </div>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl'>
                CSS3
              </h6>
            </div>
          </div>

          <div className='w-full flex flex-col items-center justify-center gap-6'>
            <h4 className='whitespace-nowrap text-light_primary/80 text-xl text-center uppercase'>
              Framework / Engine
              <div className='flex justify-center items-center mt-2'>
                <div className='w-[70px] h-[2px] bg-pantone rounded-lg mb-6' />
              </div>
            </h4>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl'>
                Unity
              </h6>
            </div>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl'>
                React
              </h6>
            </div>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl'>
                Tailwind
              </h6>
            </div>
          </div>

          <div className='w-full flex flex-col items-center justify-center gap-6'>
            <h4 className='whitespace-nowrap text-light_primary/80 text-xl text-center uppercase'>
              Software / Tool
              <div className='flex justify-center items-center mt-2'>
                <div className='w-[70px] h-[2px] bg-pantone rounded-lg mb-6' />
              </div>
            </h4>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl'>
                Blender
              </h6>
            </div>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl'>
                Photoshop
              </h6>
            </div>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl'>
                Illustrator
              </h6>
            </div>

            <div className='w-32 before:block before:absolute before:-inset-x-2 before:-inset-y-1 before:bg-blueberry before:rounded-lg relative inline-block'>
              <h6 className='relative font-Poppins text-light_primary/80 md:text-xl'>
                Git
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
