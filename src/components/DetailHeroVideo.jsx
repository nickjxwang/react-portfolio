const DetailHeroVideo = ({ name, types, video }) => {
  return (
    <header className='flex flex-col justify-center items-center gap-6'>
      <div className='relative'>
        <h2 className='text-5xl text-center font-bold font-Poppins text-light_primary/80 md:text-7xl'>
          {name}
        </h2>
        <div className='absolute -bottom-1 -z-10'>
          <h2 className='text-5xl text-center font-bold font-Poppins text-blueberry md:text-7xl'>
            {name}
          </h2>
        </div>
      </div>

      <div className='flex gap-4'>
        {types.map((type, index) => {
          return (
            <h3
              key={index}
              className='text-pantone text-sm underline underline-offset-2 mt-8 md:text-lg'
            >
              {type}
            </h3>
          )
        })}
      </div>

      <div className='relative'>
        <iframe
          width='1024'
          height='514.617'
          title='Youtube Video'
          src={video}
          className='p-3'
          allowFullScreen
        ></iframe>
        <div className='absolute inset-0 bg-dark_variant -z-10 '></div>
      </div>
    </header>
  )
}
export default DetailHeroVideo
