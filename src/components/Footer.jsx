const Footer = () => {
  return (
    <footer className='p-4 sm:p-6 bg-slate-500'>
      <div className='mx-10 flex flex-wrap justify-between'>
        <div className='flex items-center'>
          <span className='self-center text-2xl font-semibold text-white'>
            Developed By Charan
          </span>
        </div>
        <div className='mt-5 md:mt-0 text-sm font-semibold uppercase'>
          <ul className='flex flex-wrap justify-around mr-20'>
            <li className='mx-2'>
              <a
                href='https://github.com/CharanReddy404'
                target={'_blank'}
                className='p-2 text-white hover:bg-white hover:text-black rounded-md'
              >
                GitHub
              </a>
            </li>
            <li className='mx-2'>
              <a
                href='https://www.linkedin.com/in/charanreddy404/'
                target={'_blank'}
                className='p-2 text-white hover:bg-white hover:text-black rounded-md'
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
