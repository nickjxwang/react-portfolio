import DetailContent from '../../components/DetailContent'
import DetailHeroVideo from '../../components/DetailHeroVideo'
import Footer from '../Footer'
import { projects } from '/src/Content.js'

const ProjectDetail3 = () => {
  return (
    <section className='h-screen pt-28 md:px-32'>
      <DetailHeroVideo
        name={projects[3].name}
        types={projects[3].types}
        video={projects[3].video}
      />

      <div className='mt-20'>
        <div className='flex flex-col gap-20'>
          <DetailContent
            title='Overview'
            text='The main objective of this project is to provide users with the ability to browse and virtually try on different clothing items using AR technology. My role in this project was to develop an AR application specifically designed for clothing exploration and information provision. The application utilizes Unity and Vuforia technologies to create an AR experience. The application enables users to view and interact with clothing models, providing them with information about the items. Users can utilize gesture-based zooming and button-controlled rotation to enhance their experience with the models.'
          />

          <DetailContent
            title='Challenge'
            text='During the development of this AR application, I encountered specific challenges. Firstly, I needed to familiarize myself with Unity and Vuforia, understanding how to accurately project virtual clothing models into the real world. I strived to ensure the stability and realism of the models, enhancing the overall visual experience. Additionally, I had to design and implement gesture-based zooming and button-controlled rotation functionalities to provide users with intuitive and user-friendly interactions.'
          />

          <DetailContent
            title='Conclusion'
            text='This AR application project has provided me with valuable learning experiences in developing AR applications using Unity and Vuforia technologies. I have gained knowledge on accurately projecting virtual models into the real world and implementing gesture-based interactions. This project has enhanced my technical skills and development experience, laying a foundation for my future learning and growth. I look forward to applying the knowledge I have acquired to future innovative projects and further advancing my technical abilities.'
          />
        </div>
      </div>

      <div className='mt-20'>
        <Footer />
      </div>
    </section>
  )
}
export default ProjectDetail3
