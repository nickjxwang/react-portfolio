import DetailContent from '../../components/DetailContent'
import DetailHeroVideo from '../../components/DetailHeroVideo'
import Footer from '../Footer'
import { projects } from '/src/Content.js'

const ProjectDetail2 = () => {
  return (
    <section className='h-screen pt-28 md:px-32'>
      <DetailHeroVideo
        name={projects[2].name}
        types={projects[2].types}
        video={projects[2].video}
      />

      <div className='mt-20'>
        <div className='flex flex-col gap-20'>
          <DetailContent
            title='Overview'
            text='This project is an AR game created using Unity and Vuforia technologies. It brings the excitement of a monster showdown to life, with gameplay inspired by the classic "Rock, Paper, Scissors" game. I used pre-made models downloaded from the Unity Asset Store, harnessing the power of Unity engine and Vuforia to craft an immersive and enjoyable AR gaming experience.'
          />

          <DetailContent
            title='Challenge'
            text='During the development of this AR game project, I encountered specific challenges. Firstly, I needed to familiarize myself with the workings of Unity engine and Vuforia, understanding how to accurately project the monster models into the real world. I strived to ensure seamless interaction between the virtual monsters and the real environment, creating impressive and realistic AR effects. Additionally, I had to design and implement game rules that offer strategic gameplay similar to "Rock, Paper, Scissors," ensuring that players would enjoy the excitement of battles.'
          />

          <DetailContent
            title='Conclusion'
            text='This AR game project has provided me with valuable technical knowledge and learning experiences. Through the utilization of Unity and Vuforia technologies, I have gained expertise in developing captivating AR games, mastering skills such as model projection, interaction design, and game rule implementation. This project not only showcases the technical skills I have acquired but also enhances my creativity and design abilities. I look forward to applying this knowledge to future innovative projects, continuing my journey of learning and growth.'
          />
        </div>
      </div>

      <div className='mt-20'>
        <Footer />
      </div>
    </section>
  )
}
export default ProjectDetail2
