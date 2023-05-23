import DetailContent from '../../components/DetailContent'
import DetailHero from '../../components/DetailHero'
import Footer from '../Footer'
import { projects } from '/src/Content.js'

const ProjectDetail = () => {
  return (
    <section className='h-screen pt-28 md:px-32'>
      <DetailHero
        name={projects[0].name}
        types={projects[0].types}
        img={projects[0].img}
      />

      <div className='mt-20'>
        <div className='flex flex-col gap-20'>
          <DetailContent
            title='Overview'
            text='Using React to build a music website. Through Rapid API
                    makes this website can play and search music like Spotify.
                    This project will show my skills as font-end developer.'
          />

          <DetailContent
            title='Challenge'
            text='The biggest challenge encountered in this project is that it
                    is the first time using RapidAPI technology for development,
                    so it will require some time to learn and explore this
                    technology.'
          />

          <DetailContent
            title='Conclusion'
            text='The goal of this project is to learn and master RapidAPI
                    technology while facing and overcoming the challenges
                    encountered during development, and gaining valuable skills
                    that will benefit me in future projects. Throughout the
                    process, I will also be learning how to find appropriate
                    solutions when encountering problems.'
          />
        </div>
      </div>

      <div className='mt-20'>
        <Footer />
      </div>
    </section>
  )
}
export default ProjectDetail
