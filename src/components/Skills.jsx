import { content } from '../Content'

const Skills = () => {
  return (
    <section className='mb-10 pt-20 md:px-32' id='skills'>
      <div className=''>
        <div className='w-[64px] h-[6px] bg-gradient-to-r from-pantone to-blueberry rounded-lg mb-5' />
        <h3 className='font-bold text-light_primary/80'>Skills</h3>
      </div>
      <br />
      <div className='flex flex-col items-center gap-20 p-4 md:flex-row md:justify-center md:gap-6 '>
        <div className='bg-slate-100 w-full flex flex-col items-center gap-5 p-5 max-w-md rounded-md border-2 border-pantone/60'>
          <div className='flex flex-col items-center gap-2'>
            <h4 className='font-bold text-dark_primary text-sm'>
              Front-End Developer
            </h4>

            <div className='w-[70px] h-[4px] bg-pantone rounded-lg mb-2' />
            <p className='text-sm text-center text-blueberry p-2 mb-4 max-w-xs'>
              I like to code things from scratch, and enjoy bringing ideas to
              life.
            </p>
          </div>

          <div className='w-full flex justify-between items-center px-8 md:px-4'>
            <div>
              <img
                src={content.react.react}
                alt='...'
                className='w-10 hover:scale-125 duration-200'
              />
            </div>
            <div>
              <h6>React</h6>
            </div>
          </div>

          <div className='w-full flex justify-between items-center px-8 md:px-4'>
            <div>
              <img
                src={content.tailwind.tailwind}
                alt='...'
                className='w-10 hover:scale-125 duration-200'
              />
            </div>
            <div>
              <h6>Tailwind</h6>
            </div>
          </div>

          <div className='w-full flex justify-between items-center px-8 md:px-4'>
            <div>
              <img
                src={content.git.git}
                alt='...'
                className='w-10 hover:scale-125 duration-200'
              />
            </div>
            <div>
              <h6>Git</h6>
            </div>
          </div>
        </div>

        <div className='bg-slate-100 w-full flex flex-col items-center gap-5 p-5 max-w-md rounded-md border-2 border-pantone/60'>
          <div className='flex flex-col items-center gap-2'>
            <h4 className='font-bold text-dark_primary text-sm'>Artist</h4>
            <div className='w-[70px] h-[4px] bg-pantone rounded-lg mb-2' />
            <p className='text-sm text-center text-blueberry p-2 mb-4 '>
              I am interested in digital art and trying to make fun stuff.
            </p>
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
        </div>
      </div>
    </section>
  )
}

export default Skills
