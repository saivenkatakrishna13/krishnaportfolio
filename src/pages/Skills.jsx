import Particles from '../components/common/Particles'
import PropTypes from 'prop-types'
import {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiGreensock,
  SiFramer,
  SiGithub,
  SiOpenai,
  SiSelenium,
  SiJira,
  SiDocker,
  SiKubernetes
} from 'react-icons/si'
import { FaProjectDiagram, FaCubes, FaDatabase, FaComments, FaPuzzlePiece, FaUsers, FaChessKnight, FaHandshake } from 'react-icons/fa'

const skillGroups = [
  {
    title: 'Programming Languages',
    accent: 'from-lime-300/25 to-emerald-400/5',
    wide: true,
    skills: [
      { name: 'Python', Icon: SiPython, iconColor: 'text-[#3776AB]', bg: 'bg-[#dcefff]' },
      { name: 'C++', Icon: SiCplusplus, iconColor: 'text-[#00599C]', bg: 'bg-[#e3f0ff]' },
      { name: 'SQL', Icon: SiMysql, iconColor: 'text-[#00758F]', bg: 'bg-[#e3f7ff]' },
      { name: 'JavaScript', Icon: SiJavascript, iconColor: 'text-[#111111]', bg: 'bg-[#F7DF1E]' }
    ]
  },
  {
    title: 'Frameworks & Technologies',
    accent: 'from-[#d3fd50]/25 to-[#5cffd6]/5',
    wide: true,
    skills: [
      { name: 'React', Icon: SiReact, iconColor: 'text-[#61DAFB]', bg: 'bg-[#102228]' },
      { name: 'Node.js', Icon: SiJavascript, iconColor: 'text-[#43853d]', bg: 'bg-[#e8f5e9]' },
      { name: 'MongoDB', Icon: SiMongodb, iconColor: 'text-[#47A248]', bg: 'bg-[#e8f5e9]' },
      { name: 'Express.js', Icon: SiJavascript, iconColor: 'text-[#000000]', bg: 'bg-[#f5f5f5]' },
      { name: 'GSAP', Icon: SiGreensock, iconColor: 'text-[#88CE02]', bg: 'bg-[#efffd8]' },
      { name: 'Framer Motion', Icon: SiFramer, iconColor: 'text-[#0055FF]', bg: 'bg-[#e9f0ff]' }
    ]
  },
  {
    title: 'Tools & Platforms',
    accent: 'from-cyan-300/25 to-lime-300/5',
    wide: true,
    skills: [
      { name: 'GitHub', Icon: SiGithub, iconColor: 'text-[#111111]', bg: 'bg-white' },
      { name: 'OpenAI API', Icon: SiOpenai, iconColor: 'text-[#111111]', bg: 'bg-white' },
      { name: 'Selenium', Icon: SiSelenium, iconColor: 'text-[#43B02A]', bg: 'bg-[#e9ffe4]' },
      { name: 'Jira', Icon: SiJira, iconColor: 'text-[#0052CC]', bg: 'bg-[#e7eeff]' },
      { name: 'Docker', Icon: SiDocker, iconColor: 'text-[#2496ED]', bg: 'bg-[#e6f4ff]' },
      { name: 'Kubernetes', Icon: SiKubernetes, iconColor: 'text-[#326CE5]', bg: 'bg-[#e9eeff]' }
    ]
  },
  {
    title: 'CS Fundamentals',
    accent: 'from-sky-300/25 to-lime-300/5',
    wide: true,
    skills: [
      { name: 'Data Structures & Algorithms', Icon: FaProjectDiagram, iconColor: 'text-[#0F766E]', bg: 'bg-[#e4fffb]' },
      { name: 'Object-Oriented Programming', Icon: FaCubes, iconColor: 'text-[#4338CA]', bg: 'bg-[#ecebff]' },
      { name: 'Database Systems', Icon: FaDatabase, iconColor: 'text-[#0E7490]', bg: 'bg-[#e7f9ff]' }
    ]
  },
  {
    title: 'Soft Skills',
    accent: 'from-yellow-300/25 to-lime-300/5',
    wide: true,
    skills: [
      { name: 'Problem Solving', Icon: FaPuzzlePiece, iconColor: 'text-[#B45309]', bg: 'bg-[#fff6de]' },
      { name: 'Team Leadership', Icon: FaUsers, iconColor: 'text-[#4338CA]', bg: 'bg-[#eeebff]' },
      { name: 'Strategic Planning', Icon: FaChessKnight, iconColor: 'text-[#0F766E]', bg: 'bg-[#e5fff9]' },
      { name: 'Client Relations', Icon: FaHandshake, iconColor: 'text-[#92400E]', bg: 'bg-[#fff1df]' },
      { name: 'Communication', Icon: FaComments, iconColor: 'text-[#1D4ED8]', bg: 'bg-[#eaf1ff]' }
    ]
  }
]

const SkillChip = ({ name, Icon, bg, iconColor, logoSrc, href }) => {
  const content = (
    <>
      <div className={`h-14 w-14 min-h-14 min-w-14 shrink-0 rounded-xl ${bg} p-2 ring-1 ring-white/20 flex items-center justify-center`}>
        {logoSrc ? (
          <img src={logoSrc} alt={`${name} logo`} className='h-full w-full object-contain' loading='lazy' />
        ) : (
          Icon && <Icon className={`h-full w-full ${iconColor}`} aria-hidden='true' />
        )}
      </div>
      <p className='min-w-0 break-words font-[font2] text-base lg:text-lg tracking-wide leading-tight'>{name}</p>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 px-5 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-[#D3FD50] hover:bg-white/10 hover:-translate-y-0.5'
      >
        {content}
      </a>
    )
  }

  return <div className='group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 px-5 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-[#D3FD50] hover:bg-white/10 hover:-translate-y-0.5'>{content}</div>
}

SkillChip.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType,
  bg: PropTypes.string,
  iconColor: PropTypes.string,
  logoSrc: PropTypes.string,
  href: PropTypes.string
}

const Skills = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white overflow-x-hidden' style={{ position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Particles
          particleColors={['#d3fd50']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className='py-20 px-4 lg:px-20 max-w-7xl mx-auto' style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Skills Section */}
        <div className='mb-20'>
          <h2 className='text-[10vw] lg:text-[5vw] uppercase mb-10 font-[font1]' style={{ textAlign: 'left' }}>
            Skills
          </h2>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-6 items-stretch'>
            {skillGroups.map((group) => (
              <section
                key={group.title}
                className={`relative overflow-hidden rounded-3xl border border-white/30 bg-black/35 p-5 lg:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#D3FD50] h-[360px] lg:h-[380px] flex flex-col ${group.wide ? 'lg:col-span-3' : 'lg:col-span-2'}`}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.accent}`} />
                <div className='relative flex h-full flex-col'>
                  <h3 className='mb-4 text-xl lg:text-2xl text-[#D3FD50] font-[font2]'>{group.title}</h3>
                  <div className='grid grid-cols-1 gap-3 2xl:grid-cols-2 flex-1 overflow-y-auto pr-1'>
                    {group.skills.map((skill) => (
                      <SkillChip
                        key={skill.name}
                        name={skill.name}
                        Icon={skill.Icon}
                        bg={skill.bg}
                        iconColor={skill.iconColor}
                        logoSrc={skill.logoSrc}
                        href={skill.href}
                      />
                    ))}
                  </div>
                </div>
              </section>
            ))}
            <section className='relative overflow-hidden rounded-3xl border border-white/30 bg-black/35 p-5 lg:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#D3FD50] h-[360px] lg:h-[380px] flex flex-col lg:col-span-3'>
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-300/20 to-lime-300/5' />
              <div className='relative flex h-full flex-col'>
                <h3 className='mb-4 text-xl lg:text-2xl text-[#D3FD50] font-[font2]'>Profiles</h3>
                <div className='grid flex-1 grid-cols-1 gap-4 items-center sm:grid-cols-2'>
                  <a
                    href='https://codolio.com/profile/KRISHNA9878'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/5 px-5 py-3 font-[font2] transition-all duration-300 hover:border-[#D3FD50] hover:bg-[#D3FD50]/10'
                  >
                    <span className='flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2'>
                      <img src='https://www.google.com/s2/favicons?domain=codolio.com&sz=128' alt='Codolio logo' className='h-full w-full object-contain' loading='lazy' />
                    </span>
                    <span className='text-sm lg:text-base text-white'>Codolio Profile</span>
                  </a>
                  <a
                    href='https://leetcode.com/u/6neLePlf51/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/5 px-5 py-3 font-[font2] transition-all duration-300 hover:border-[#D3FD50] hover:bg-[#D3FD50]/10'
                  >
                    <span className='flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2'>
                      <img src='https://cdn.simpleicons.org/leetcode/000000' alt='LeetCode logo' className='h-full w-full object-contain' loading='lazy' />
                    </span>
                    <span className='text-sm lg:text-base text-white'>LeetCode Profile</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
