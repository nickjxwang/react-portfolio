const Footer = () => {
  return (
    <section className='md:px-32' id='contact'>
      <div className='h-[2px] bg-pantone/75 rounded-lg'></div>
      <div className='p-2 flex flex-col items-start justify-center'>
        <div className='pb-4'>
          <h3 className='text-sm text-blueberry p-2 pb-0'>Email</h3>\
          <a href='mailto:nick.jxw@gmail.com'>
            <h4 className='text-sm text-light_primary p-2 pt-0'>
              nick.jxw@gmail.com
            </h4>
          </a>
        </div>

        <span className='mx-auto font-medium pt-6 text-light_primary/70 text-center'>
          ©All CopyRights Reserved 2022.
        </span>
      </div>
    </section>
  )
}

export default Footer
