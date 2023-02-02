import { content } from '../Content'

const Skills = () => {
  return (
    <section className='mb-10 pt-20 md:px-32' id='skills'>
      <div className=''>
        <div className='w-[64px] h-[6px] bg-gradient-to-r from-pantone to-blueberry rounded-lg mb-5' />
        <h3 className='font-bold text-light_primary/80'>Skills</h3>
      </div>

      <br />

      <div className='flex flex-col p-4 lg:flex-row lg:justify-center'>
        <div className='w-full flex flex-col text-center items-center justify-center gap-20 p-10 bg-dark_variant rounded-md border-2 border-pantone/60 lg:flex-row lg:justify-center lg:items-start lg:gap-5'>
          <div className='w-full flex flex-col items-center justify-center gap-4'>
            <h4 className='whitespace-nowrap font-bold text-light_primary text-xl text-center uppercase'>
              Programming Languages
            </h4>

            <div className='w-[70px] h-[4px] bg-pantone rounded-lg mb-6' />
            {/* <p className='text-sm text-center text-light_primary/70 p-2 mb-4 max-w-xs'>
              I like to code things from scratch, and enjoy bringing ideas to
              life.
            </p> */}
            <div className='text-lg'>
              <h6>C#</h6>
            </div>

            <div>
              <h6>JavaScript</h6>
            </div>

            <div>
              <h6>HTML5</h6>
            </div>

            <div>
              <h6>CSS3</h6>
            </div>
          </div>

          <div className='w-full flex flex-col items-center justify-center gap-4'>
            <h4 className='whitespace-nowrap font-bold text-light_primary text-xl text-center uppercase'>
              Framework / Engine
            </h4>

            <div className='w-[70px] h-[4px] bg-pantone rounded-lg mb-6' />
            {/* <p className='text-sm text-center text-light_primary/70 p-2 mb-4 max-w-xs'>
              I like to code things from scratch, and enjoy bringing ideas to
              life.
            </p> */}
            <div>
              <h6>Unity</h6>
            </div>

            <div>
              <h6>React</h6>
            </div>

            <div>
              <h6>Tailwind</h6>
            </div>
          </div>

          <div className='w-full flex flex-col items-center justify-center gap-4'>
            <h4 className='whitespace-nowrap font-bold text-light_primary text-xl text-center uppercase'>
              Software / Tool
            </h4>

            <div className='w-[70px] h-[4px] bg-pantone rounded-lg mb-6' />
            {/* <p className='text-sm text-center text-light_primary/70 p-2 mb-4 max-w-xs'>
              I like to code things from scratch, and enjoy bringing ideas to
              life.
            </p> */}
            <div>
              <h6>Blender</h6>
            </div>

            <div>
              <h6>Photoshop</h6>
            </div>

            <div>
              <h6>Illustrator</h6>
            </div>

            <div>
              <h6>Git</h6>
            </div>
          </div>
        </div>

        {/* <div className='bg-dark_variant w-full flex flex-col flex-1 items-center gap-5 p-5 max-w-md rounded-md border-2 border-pantone/60'>
          <div className='flex flex-col items-center gap-2'>
            <h4 className='font-bold text-light_primary text-sm'>
              Game Developer
            </h4>
            <div className='w-[70px] h-[4px] bg-pantone rounded-lg mb-2' />
            <p className='text-sm text-center text-light_primary/70 p-2 mb-4 '>
              I'm interested in programming in different fields, and trying to
              make fun stuff.
            </p>
          </div>

          <div className='w-full flex justify-between items-center px-8 md:px-4'>
            <div>
              <img
                src={content.unity.unity}
                alt='...'
                className='w-10 hover:scale-125 duration-200'
              />
            </div>
            <div>
              <h6>Unity</h6>
            </div>
          </div>

          <div className='w-full flex justify-between items-center px-8 md:px-4'>
            <div>
              <img
                src={content.blender.blender}
                alt='...'
                className='w-10 hover:scale-125 duration-200'
              />
            </div>
            <div>
              <h6>Blender</h6>
            </div>
          </div>

          <div className='w-full flex justify-between items-center px-8 md:px-4'>
            <div>
              <img
                src={content.photoshop.photoshop}
                alt='...'
                className='w-10 hover:scale-125 duration-200'
              />
            </div>
            <div>
              <h6>Photoshop</h6>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Skills
