import DetailContent from '../../components/DetailContent'
import DetailHero from '../../components/DetailHero'
import Footer from '../Footer'
import { projects } from '/src/Content.js'

const ProjectDetail1 = () => {
  return (
    <section className='h-screen pt-28 md:px-32'>
      <DetailHero
        name={projects[1].name}
        types={projects[1].types}
        img={projects[1].img}
      />

      <div className='mt-20'>
        <div className='flex flex-col gap-20'>
          <DetailContent
            title='Overview'
            text='This personal website project is built using React and Tailwind technologies, aiming to showcase my personal information, portfolio, and technical skills. By leveraging these front-end technologies, I am committed to creating a modern, dynamic, and user-friendly website that highlights my professional expertise and creative achievements.'
          />

          <DetailContent
            title='Challenge'
            text="In this personal website project, I faced several specific challenges. Firstly, I needed to familiarize myself with the React framework and Tailwind CSS, mastering their best practices. I had to ensure the website's component structure was well-organized and scalable while maintaining excellent user experience and design. Additionally, I had to consider responsive design to ensure the website functions seamlessly across different devices and screen sizes."
          />

          <DetailContent
            title='Conclusion'
            text='Through my in-depth understanding of React and Tailwind, along with persistent efforts, I successfully completed this personal website project. The website showcases my personal information, portfolio, and technical skills, presenting a modern and personalized website style. I will continue to pursue technological advancements, regularly updating and optimizing my personal website to showcase the latest works and technical accomplishments.'
          />
        </div>
      </div>

      <div className='mt-20'>
        <Footer />
      </div>
    </section>
  )
}
export default ProjectDetail1
