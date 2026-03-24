import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Particles from '../components/common/Particles'

const expPreview = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80'

const Home = () => {


  return (
    <div className='text-white overflow-hidden bg-black'>
      <div className='h-screen w-full relative pb-4 overflow-hidden flex flex-col'>
        {/* Particles background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
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
        <div className='w-full lg:px-10 pt-14 lg:pt-16' style={{ position: 'relative', zIndex: 1 }}>
          <div className='w-full max-w-7xl mx-auto flex items-start justify-between gap-6 lg:gap-9'>
            <div className='w-full lg:w-[58%]'>
              <HomeHeroText />
              <div className='mt-3 lg:mt-4'>
                <HomeBottomText />
              </div>
            </div>
            {/* Profile picture removed as requested */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home