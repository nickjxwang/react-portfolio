const DetailContent = ({ title, text }) => {
  return (
    <div className='flex flex-col gap-8'>
      <h4 className='relative text-light_primary/80 text-2xl font-bold md:text-3xl'>
        <div className='ml-4'>{title}</div>
        <span className='absolute my-auto top-0 bottom-0 left-0 right-0 w-1 h-2/3 bg-pantone'></span>
      </h4>
      <p className='text-light_primary/80 text-lg'>{text}</p>
    </div>
  )
}
export default DetailContent
