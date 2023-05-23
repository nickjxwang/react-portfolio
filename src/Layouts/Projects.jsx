import { useState } from 'react'
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai'
import { content, projects } from '../Content'
import Footer from '../Layouts/Footer'
import Project from '../components/Project'
import ProjectUnity from '../components/ProjectUnity'
import ProjectDetail from './ProjectDetails/ProjectDetail'

const Projects = () => {
  const [showDetail, setShowDetail] = useState(false)
  const [showDetail1, setShowDetail1] = useState(false)

  return (
    <section className='relative w-full pt-28 md:px-32' id='works'>
      <div className='mb-20'>
        <div className='w-[64px] h-[6px] bg-gradient-to-r from-pantone to-blueberry rounded-lg mb-5' />
        <h3 className='text-2xl font-bold font-Poppins text-light_primary/80 md:text-3xl'>
          Projects
        </h3>
      </div>
      <div className='grid grid-cols-12 mb-20 gap-6 xl:gap-10'>
        <div className='col-span-12 px-6 py-3 mb-8 rounded-lg border-2 border-pantone'>
          <h3 className=' text-light_primary/80 font-bold text-xl text-center md:text-2xl'>
            Website
          </h3>
        </div>

        <div className='col-span-12 z-10 xl:col-span-6'>
          <Project
            title='Music Web Application'
            img='/src/assets/images/Works/work-1.png'
            link='https://react-music-f851c.web.app'
            github='https://github.com/nickjxwang/react-music'
            type='Website'
            detail='/ProjectDetail'
          />
        </div>

        <div className='col-span-12 z-10 xl:col-span-6'>
          <Project
            title='Personal Website'
            img='/src/assets/images/Works/work-2.png'
            link='https://chinhsuehwang.com'
            github='https://github.com/nickjxwang/react-portfolio'
            type='Website'
            detail='/ProjectDetail1'
          />
        </div>

        <div className='col-span-12 px-6 py-3 my-10 rounded-lg border-2 border-pantone'>
          <h3 className=' text-light_primary/80 text-xl font-bold text-center md:text-2xl'>
            AR
          </h3>
        </div>

        <div className='col-span-12 z-10 xl:col-span-6'>
          <ProjectUnity
            title='Monster Battle AR Game'
            img='/src/assets/images/Works/work-3.png'
            link='/'
            type='AR Game'
            detail='/ProjectDetail2'
            youtube='https://www.youtube.com/embed/lwDSuDfKlIo'
          />
        </div>

        <div className='col-span-12 z-10 xl:col-span-6'>
          <ProjectUnity
            title='AR Clothing'
            img='/src/assets/images/Works/work-4.png'
            link='/'
            type='AR Application'
            detail='/ProjectDetail3'
            youtube='https://www.youtube.com/embed/jSQUVWTtPJI'
          />
        </div>
      </div>
      <div className='absolute -bottom-20 left-0 right-0'>
        <Footer />
      </div>
    </section>
  )
}

export default Projects
