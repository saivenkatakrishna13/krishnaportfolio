import { Link } from 'react-router-dom'
import { FiDownload, FiFolder, FiMail } from 'react-icons/fi'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex flex-col items-start justify-center gap-6 px-4 lg:px-10 w-full max-w-7xl'>
      <p className='w-full font-[font1] lg:text-base text-[0.95rem] lg:leading-relaxed leading-snug text-left'>
        I am a Computer Science student at Lovely Professional University passionate about building intelligent applications and scalable digital solutions. I enjoy solving complex problems using data structures and modern web technologies.
      </p>

      <div className='flex flex-nowrap items-center justify-start gap-3 lg:gap-4 mt-3 w-full overflow-x-auto lg:overflow-visible'>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-[3.25rem] h-[2.75rem] flex items-center px-3 lg:px-5 border-white rounded-full uppercase'>
          <Link className='lg:text-base text-sm inline-flex items-center gap-2 whitespace-nowrap' to='/projects'>
            <FiFolder className='text-[1.05em]' aria-hidden='true' />
            <span>View Projects</span>
          </Link>
        </div>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-[3.25rem] h-[2.75rem] flex items-center px-3 lg:px-5 border-white rounded-full uppercase'>
          <a className='lg:text-base text-sm inline-flex items-center gap-2 whitespace-nowrap' href='https://drive.google.com/file/d/15DNFlRdUrsdGx3JXU2ybJeABNvbN31Lg/view'download>
            <FiDownload className='text-[1.05em]' aria-hidden='true' />
            <span>Download Resume</span>
          </a>
        </div>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-[3.25rem] h-[2.75rem] flex items-center px-3 lg:px-5 border-white rounded-full uppercase'>
          <Link className='lg:text-base text-sm inline-flex items-center gap-2 whitespace-nowrap' to='/contact'>
            <FiMail className='text-[1.05em]' aria-hidden='true' />
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBottomText
