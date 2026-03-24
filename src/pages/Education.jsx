import Particles from '../components/common/Particles'
import { gsap } from 'gsap'

const educationData = [
  {
    institute: 'Lovely Professional University, Punjab, India',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    duration: 'Aug 2023 - Present',
    scoreLabel: 'CGPA',
    score: '7.22',
    image:
      'https://www.collegebatch.com/static/clg-gallery/lpu-jalandhar-360559.webp'
  },
  {
    institute: 'Vaaradhi Vidhyapeet Junior College',
    degree: 'Intermediate',
    duration: 'Higher Secondary',
    scoreLabel: 'Percentage',
    score: '96.5%',
    imageScale: 0.84,
    imagePosition: 'center',
    image:
      'https://content3.jdmagicbox.com/v2/comp/hyderabad/s9/040pxx40.xx40.220521153752.c2s9/catalogue/vaaradhi-vidyapeet-junior-college-vanasthalipuram-hyderabad-colleges-e2u50jbohi.jpg'
  },
  {
    institute: 'Nagarjuna Model School',
    degree: 'Matriculation',
    duration: 'Secondary School',
    scoreLabel: 'Percentage',
    score: '100%',
    image:
      'https://scontent.fdel1-4.fna.fbcdn.net/v/t39.30808-6/472924994_598526949554569_209203109975118532_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=3PK1GsdPzxoQ7kNvwFSG5JY&_nc_oc=Adq4-HEq991YiqD-b3fSljRafrvOALjdw3WmMp0uDhzsYkat5kh5yFGdYfNVh6DEZwY&_nc_zt=23&_nc_ht=scontent.fdel1-4.fna&_nc_gid=qY_7gj_2wQPhkt0u4Q5F7A&_nc_ss=7a30f&oh=00_Afy3OrMUm7wsmdibqiB4phFoHuDICcKUCJ39CtldIeo_kw&oe=69C88315'
  }
]

const Education = () => {
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

        {/* Education Section */}
        <div className='mb-20'>
          <h2 className='text-[10vw] lg:text-[5vw] uppercase mb-10 font-[font1]' style={{ textAlign: 'left' }}>
            Education
          </h2>
         

          <div className='space-y-6'>
            {educationData.map((item) => (
              <div
                key={item.institute}
                className='border-2 border-white rounded-3xl overflow-hidden hover:border-[#D3FD50] transition-colors bg-black/40 backdrop-blur-sm will-change-transform'
                onMouseEnter={(event) => {
                  gsap.to(event.currentTarget, {
                    scale: 0.975,
                    duration: 0.35,
                    ease: 'power2.out'
                  })
                }}
                onMouseLeave={(event) => {
                  gsap.to(event.currentTarget, {
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                  })
                }}
              >
                <div className='grid lg:grid-cols-12 grid-cols-1'>
                  <div className='lg:col-span-4 h-56 lg:h-60 overflow-hidden bg-black/40'>
                    <img
                      src={item.image}
                      alt={item.institute}
                      className='h-full w-full object-cover'
                      style={{
                        objectPosition: item.imagePosition || 'center',
                        transform: `scale(${item.imageScale || 1})`
                      }}
                      loading='lazy'
                    />
                  </div>
                  <div className='lg:col-span-8 p-6 lg:p-8'>
                    <h3 className='text-xl lg:text-2xl mb-2 text-[#D3FD50] font-[font2]'>{item.institute}</h3>
                    <p className='text-lg lg:text-xl mb-2'>{item.degree}</p>
                    <p className='text-base text-gray-400 mb-3'>{item.duration}</p>
                    <p className='text-base lg:text-lg'>
                      <span className='text-[#D3FD50]'>{item.scoreLabel}:</span> {item.score}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education
