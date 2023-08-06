import DetailContent from '../../components/DetailContent'
import DetailHero from '../../components/DetailHero'
import Footer from '../Footer'
import { projects } from '/src/Content.js'

const ProjectDetail4 = () => {
    return (
        <section className='h-screen pt-28 md:px-32'>
            <DetailHero
                name={projects[4].name}
                types={projects[4].types}
                img={projects[4].img}
            />

            <div className='mt-20'>
                <div className='flex flex-col gap-20'>
                    <DetailContent
                        title='Overview'
                        text='This project is an e-commerce website focused on product sales, developed using React and styled-components technologies. The website aims to help consumers create comfortable environments by browsing and selecting various products. Utilizing React ensures a dynamic and interactive website, while styled-components contribute to creating aesthetically pleasing user interfaces. This project not only offers a diverse range of options but also delivers an exceptional shopping experience through intuitive design, providing consumers with a convenient platform for purchasing products.'
                    />

                    {/* <DetailContent
            title='Challenge'
            text='During the development of this AR application, I encountered specific challenges. Firstly, I needed to familiarize myself with Unity and Vuforia, understanding how to accurately project virtual clothing models into the real world. I strived to ensure the stability and realism of the models, enhancing the overall visual experience. Additionally, I had to design and implement gesture-based zooming and button-controlled rotation functionalities to provide users with intuitive and user-friendly interactions.'
          /> */}

                    {/* <DetailContent
            title='Conclusion'
            text='This AR application project has provided me with valuable learning experiences in developing AR applications using Unity and Vuforia technologies. I have gained knowledge on accurately projecting virtual models into the real world and implementing gesture-based interactions. This project has enhanced my technical skills and development experience, laying a foundation for my future learning and growth. I look forward to applying the knowledge I have acquired to future innovative projects and further advancing my technical abilities.'
          /> */}
                </div>
            </div>

            <div className='mt-20'>
                <Footer />
            </div>
        </section>
    )
}
export default ProjectDetail4
