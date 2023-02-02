import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { content } from '../Content'

const Works = () => {
  const [showDetail, setShowDetail] = useState(false)
  const [showDetail1, setShowDetail1] = useState(false)

  return (
    <section className=' w-full mb-10 pt-20 md:px-32' id='works'>
      <div className=''>
        <div className='w-[64px] h-[6px] bg-gradient-to-r from-pantone to-blueberry rounded-lg mb-5' />
        <h3 className='font-bold text-light_primary/80'>Projects</h3>
      </div>

      <br />

      <div className='relative flex flex-col gap-20 p-4 transition ease-in-out duration-300 lg:flex-row lg:justify-center'>
        {showDetail && (
          <div className='absolute top-0 left-0 w-full z-30 pb-16 bg-dark_primary/90 backdrop-blur-sm rounded-md border-2 border-pantone'>
            <div
              className='flex text-white items-end justify-end p-2 pb-4 text-3xl hover:cursor-pointer lg:p-4'
              onClick={() => setShowDetail(!showDetail)}
            >
              <AiOutlineClose />
            </div>
            <div className='px-4 pb-2 lg:px-16 lg:pb-4'>
              <img src={content.work1.work1} alt='' />
            </div>
            <div className='flex flex-col items-start justify-center px-4 gap-1 lg:px-16'>
              <div className='flex flex-col items-start justify-center gap-2 py-2'>
                <h5 className='pb-2 text-sm text-pantone/80 lg:text-lg'>
                  React Tailwind RapidAPI
                </h5>
                <h5 className='text-md font-bold lg:text-xl'>Music Web App</h5>
              </div>

              <div className='flex flex-col items-start justify-center px-4 gap-1 lg:px-8'>
                <div className='flex flex-col items-start justify-center gap-4 py-2'>
                  <h5 className='text-sm font-bold lg:text-lg'>
                    Description:{' '}
                  </h5>
                  <p className='text-sm lg:text-lg'>
                    Using React to build a music website. Through Rapid API
                    makes this website can play and search music like Spotify.
                    This project will show my skills as font-end developer.
                  </p>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 py-2'>
                  <h5 className='text-sm font-bold lg:text-lg'>Challenge: </h5>
                  <p className='text-sm lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla officia at eos quae voluptas voluptates, animi fugit
                    in consequatur odit ratione labore ipsam, modi incidunt.
                    Veniam dolores commodi quos eos!
                  </p>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 pt-2'>
                  <h5 className='text-sm font-bold lg:text-lg'>Conclusion: </h5>
                  <p className='text-sm lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla officia at eos quae voluptas voluptates, animi fugit
                    in consequatur odit ratione labore ipsam, modi incidunt.
                    Veniam dolores commodi quos eos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDetail1 && (
          <div className='absolute top-0 left-0 w-full z-30 pb-16 bg-dark_primary/90 backdrop-blur-sm rounded-md border-2 border-pantone'>
            <div
              className='flex text-white items-end justify-end p-2 pb-4 text-3xl hover:cursor-pointer lg:p-4'
              onClick={() => setShowDetail1(!showDetail1)}
            >
              <AiOutlineClose />
            </div>
            <div className='px-4 pb-2 lg:px-16 lg:pb-4'>
              <img src={content.work2.work2} alt='' />
            </div>
            <div className='flex flex-col items-start justify-center px-4 gap-1 lg:px-16'>
              <div className='flex flex-col items-start justify-center gap-2 pb-2'>
                <h5 className='pb-2 text-sm text-pantone/80 lg:text-lg'>
                  React Tailwind
                </h5>
                <h5 className='text-md font-bold lg:text-xl'>
                  Website Template
                </h5>
              </div>

              <div className='flex flex-col items-start justify-center px-4 gap-1 lg:px-8'>
                <div className='flex flex-col items-start justify-center gap-4 py-2'>
                  <h5 className='text-sm font-bold lg:text-lg'>
                    Description:{' '}
                  </h5>
                  <p className='text-sm lg:text-lg'>
                    Using React to build a music website. Through Rapid API
                    makes this website can play and search music like Spotify.
                    This project will show my skills as font-end developer.
                  </p>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 py-2'>
                  <h5 className='text-sm font-bold lg:text-lg'>Challenge: </h5>
                  <p className='text-sm lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla officia at eos quae voluptas voluptates, animi fugit
                    in consequatur odit ratione labore ipsam, modi incidunt.
                    Veniam dolores commodi quos eos!
                  </p>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 pt-2'>
                  <h5 className='text-sm font-bold lg:text-lg'>Conclusion: </h5>
                  <p className='text-sm lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla officia at eos quae voluptas voluptates, animi fugit
                    in consequatur odit ratione labore ipsam, modi incidunt.
                    Veniam dolores commodi quos eos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='group'>
          <div className='relative bg-dark_variant rounded-xl p-4 border-2 border-transparent transition duration-300 ease-in-out group-hover:border-pantone group-hover:cursor-pointer'>
            <div className='absolute bottom-0 left-0 right-0 top-0 h-full flex flex-col items-center justify-around gap-8 py-6 lg:gap-16'>
              <div
                className='absolute top-0 left-0 w-full h-full bg-dark_primary/50 backdrop-blur-sm transition opacity-0 duration-300 ease-in-out rounded-xl group-hover:opacity-100'
                onClick={() => setShowDetail(!showDetail)}
              ></div>
              <h3 className='text-lg pt-4 z-20 lg:text-xl opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 lg:pt-6'>
                Website
              </h3>

              <div className='flex justify-around gap-20 p-2 lg:gap-30 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100'>
                <button className='text-light_primary self-end border-2 border-pantone p-1 px-4 z-20 rounded-md transition duration-300 ease-in-out hover:bg-pantone'>
                  <a href='https://react-music-f851c.web.app' target='_block'>
                    DEMO
                  </a>
                </button>
                <button className='text-light_primary self-end border-2 border-pantone p-1 px-4 z-20 rounded-md transition duration-300 ease-in-out hover:bg-pantone'>
                  <a
                    href='https://github.com/nickjxwang/react-music'
                    target='_block'
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>

            <img src={content.work1.work1} alt='' />
          </div>
        </div>

        <div className='group'>
          <div className='relative bg-dark_variant rounded-xl p-4 border-2 border-transparent transition duration-300 ease-in-out group-hover:border-pantone group-hover:cursor-pointer'>
            <div className='absolute bottom-0 left-0 right-0 top-0 h-full flex flex-col items-center justify-around gap-8 py-6 lg:gap-16'>
              <div
                className='absolute top-0 left-0 w-full h-full bg-dark_primary/50 backdrop-blur-sm transition opacity-0 duration-300 ease-in-out rounded-xl group-hover:opacity-100'
                onClick={() => setShowDetail1(!showDetail1)}
              ></div>
              <h3 className='text-lg pt-4 z-20 lg:text-xl opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 lg:pt-6'>
                Website
              </h3>

              <div className='flex justify-around gap-20 p-2 lg:gap-30 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100'>
                <button className='text-light_primary self-end border-2 border-pantone p-1 px-4 z-20 rounded-md transition duration-300 ease-in-out hover:bg-pantone'>
                  <a href='https://tailwind-web-6f064.web.app/' target='_block'>
                    DEMO
                  </a>
                </button>
                <button className='text-light_primary self-end border-2 border-pantone p-1 px-4 z-20 rounded-md transition duration-300 ease-in-out hover:bg-pantone'>
                  <a
                    href='https://github.com/nickjxwang/tailwind-web'
                    target='_block'
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>

            <img src={content.work2.work2} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
