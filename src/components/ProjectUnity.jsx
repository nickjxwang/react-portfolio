import { AiFillGithub, AiFillYoutube, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProjectUnity = ({ title, type, img, detail, link, youtube }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-light_primary/80 bg-dark_variant p-6 relative'>
      <Link
        to={detail}
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <img
          src={img}
          alt={title}
          className='w-full h-auto hover:scale-105 transition duration-300 ease-in-out'
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-pantone text-2xl'>{type}</span>

        <Link
          to={link}
          target='_blank'
          className='text-3xl text-light_primary hover:underline underline-offset-2 '
        >
          <h2 className='my-2 w-full text-left text-2xl text-light_primary/80 font-bold md:text-3xl'>
            {title}
          </h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-end'>
          {/* <Link
            to={link}
            target='_blank'
            className='rounded-lg text-light_primary/80 text-lg underline'
          >
            Visit
          </Link> */}

          <Link to={youtube} target='_blank' className='text-light_primary/80'>
            <AiFillYoutube className='text-3xl' />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectUnity
