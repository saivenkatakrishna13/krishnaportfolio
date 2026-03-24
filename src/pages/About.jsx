import Particles from '../components/common/Particles'

const About = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white overflow-x-hidden' style={{ position: 'relative' }}>
      {/* Particles background */}
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
        
        {/* About Section */}
        <div className='relative font-[font2] mb-20'>
          <div className='lg:mt-[15vh] mt-[10vh]'>
            <h1
              className='text-[10vw] lg:text-[5vw] uppercase leading-tight mb-10'
              style={{ textAlign: 'center' }}
            >
              About Me
            </h1>
          </div>
          <div className='lg:px-10 px-0'>
            <p className='lg:text-2xl text-lg leading-relaxed mb-8'>
              Hi, I&apos;m <span className='text-[#D3FD50]'>Sayanna Sai Venkata Krishna</span> - a <span className='text-[#D3FD50]'>MERN Stack Developer</span> who enjoys building scalable, high-performance web applications.
            </p>

            <p className='lg:text-xl text-lg leading-relaxed mb-6'>
              I work with MongoDB, Express.js, React, and Node.js to create full-stack products that are fast, reliable, and user-focused. My approach is simple: write clean code, design intuitive interfaces, and build systems that solve real problems.
            </p>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 my-10'>
              <div className='border border-white/25 rounded-2xl p-4 bg-white/5'>
                <p className='text-[#D3FD50] text-sm uppercase tracking-widest mb-2'>Build</p>
                <p className='text-base lg:text-lg leading-relaxed'>I turn ideas into complete web applications, from backend logic to polished frontend experiences.</p>
              </div>
              <div className='border border-white/25 rounded-2xl p-4 bg-white/5'>
                <p className='text-[#D3FD50] text-sm uppercase tracking-widest mb-2'>Optimize</p>
                <p className='text-base lg:text-lg leading-relaxed'>I focus on improving performance, structuring scalable architecture, and writing efficient code.</p>
              </div>
              <div className='border border-white/25 rounded-2xl p-4 bg-white/5'>
                <p className='text-[#D3FD50] text-sm uppercase tracking-widest mb-2'>Collaborate</p>
                <p className='text-base lg:text-lg leading-relaxed'>I believe great products come from strong teamwork, clear communication, and a shared vision.</p>
              </div>
            </div>

            <p className='lg:text-xl text-lg leading-relaxed mb-6'>
              I&apos;ve worked on full-stack projects where I balance functionality with user experience, ensuring everything works smoothly from database to UI.
            </p>

            <p className='lg:text-xl text-lg leading-relaxed mb-6'>
              Beyond development, I&apos;m constantly learning, exploring new technologies, and pushing myself to grow as a developer.
            </p>

            <p className='lg:text-xl text-lg leading-relaxed text-[#D3FD50]'>
              I don&apos;t just build projects - I build solutions that are meant to last.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
