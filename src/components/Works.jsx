import { content } from '../Content'

const Works = () => {
  return (
    <section className='w-full mb-10 pt-20 md:px-32' id='works'>
      <div className=''>
        <div className='w-[64px] h-[6px] bg-gradient-to-r from-pantone to-blueberry rounded-lg mb-5' />
        <h3 className='font-bold text-light_primary/80'>Works</h3>
      </div>
      <br />

      <div className='flex flex-col items-center gap-20 p-4 md:flex-row md:justify-center md:gap-6'>
        <div className='group'>
          <div className='bg-zinc-800 rounded-3xl p-5 border-b-8 border-pantone/10 group-hover:drop-shadow-primary'>
            <img src={content.work1.work1} alt='' />
            <div className='flex flex-col gap-1 mt-2'>
              <h5 className='font-bold text-light_primary font-Poppins p-2'>
                Music
              </h5>
              <ul className='w-100% flex justify-around items-center text-light_primary/80 gap-2 p-2 mb-4'>
                <li>React</li>
                <li>Tailwind</li>
                <li>RapidApi</li>
              </ul>
              <button className='text-light_primary self-end border-2 border-pantone p-1 px-2 rounded-md hover:bg-pantone'>
                <a
                  href='https://github.com/nickjxwang/react-music'
                  target='_block'
                >
                  CODE
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className='group'>
          <div className='bg-zinc-800 rounded-3xl p-5 border-b-8 border-pantone/10 group-hover:drop-shadow-primary'>
            <img src={content.work2.work2} alt='' />
            <div className='flex flex-col gap-1 mt-2'>
              <h5 className='font-bold text-light_primary font-Poppins p-2'>
                Website
              </h5>
              <ul className='w-100 flex justify-around items-center text-light_primary/80 gap-12 p-2 mb-4'>
                <li>JavaScript</li>
                <li>Tailwind</li>
              </ul>
              <button className='text-light_primary self-end border-2 border-pantone p-1 px-2 rounded-md hover:bg-pantone'>
                <a
                  href='https://github.com/nickjxwang/tailwind-web'
                  target='_block'
                >
                  CODE
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
