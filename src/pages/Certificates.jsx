import { useEffect, useState } from 'react'

import Carousel from '../components/common/Carousel'
import Particles from '../components/common/Particles'
import algoTutorImg from '../assets/certi/nlp.jpeg';
import cloudComputingImg from '../assets/certi/Cloud Computing (1)_page-0001.jpg';
import eCertificateImg from '../assets/certi/eCertificate_page-0001.jpg';

const Certificates = () => {
  const [carouselWidth, setCarouselWidth] = useState(250)

  const certificateCards = [
    {
      id: 1,
      title: 'Mastering Artificial Intelligence and Natural Language Processing',
      description: 'Certification for completing a comprehensive course in Artificial Intelligence and Natural Language Processing, covering core AI concepts, machine learning techniques, and NLP applications.',
      label: 'AlgoTutor',
      image: algoTutorImg,
      sourceUrl: 'https://drive.google.com/file/d/1EI2c0D2RBY-3PPGhTKKcaMoxSRNaY8BL/view?usp=sharing'
    },
    {
      id: 2,
      title: 'Cloud Computing NPTEL Certificate',
      description: 'NPTEL certification for successfully completing the Cloud Computing course.',
      label: 'NPTEL',
      image: cloudComputingImg,
      sourceUrl: 'https://drive.google.com/file/d/1sAdYUWAXAN-9MelmE9dLtpAKS3nAgiO5/view?usp=sharing'
    },
    {
      id: 3,
      title: 'Oracle Data Platform 2025 Certified Foundations Associate',
      description: 'Certification for successfully completing the Oracle Data Platform 2025 Foundations course.',
      label: 'Oracle',
      image: eCertificateImg,
      sourceUrl: 'https://drive.google.com/file/d/1zjfdmg1HlAJXqTt5DdHqHYA8C-EZnEo7/view?usp=sharing'
    }
  ]

  useEffect(() => {
    const updateCarouselWidth = () => {
      const viewport = window.innerWidth
      const horizontalPadding = viewport >= 1024 ? 320 : 84
      const next = Math.max(250, Math.min(540, viewport - horizontalPadding))
      setCarouselWidth(next)
    }

    updateCarouselWidth()
    window.addEventListener('resize', updateCarouselWidth)
    return () => window.removeEventListener('resize', updateCarouselWidth)
  }, [])

  return (
    <div className='h-screen w-full bg-black text-white overflow-hidden' style={{ position: 'relative' }}>
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
      <div className='pt-8 pb-6 px-4 lg:px-20 max-w-7xl mx-auto h-full' style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Certifications Section */}
        <div className='h-full flex flex-col'>
          <h2 className='text-[8vw] lg:text-[4vw] uppercase mb-4 font-[font1] leading-none' style={{ textAlign: 'left' }}>
            Certifications
          </h2>
          
          {/* Certificates Carousel */}
          <div className='flex justify-center items-start w-full flex-1'>
            <Carousel
              items={certificateCards}
              baseWidth={carouselWidth}
              autoplay={false}
              autoplayDelay={3000}
              pauseOnHover={false}
              loop
              round={false}
              neonDots
              renderItem={(cert) => (
                <div className='h-full w-full p-1.5 lg:p-2'>
                  <div className='h-full w-full rounded-[10px] border-2 border-white bg-black p-2 lg:p-2.5 transition-colors hover:border-[#D3FD50]'>
                    <div className='flex h-full flex-col'>
                      <div className='flex h-48 sm:h-56 w-full items-center justify-center overflow-hidden rounded-md border border-white/30 bg-black'>
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className='max-h-full max-w-full object-contain'
                          style={{ objectFit: cert.imageFit || 'contain', objectPosition: cert.imagePosition || 'center' }}
                          loading='lazy'
                        />
                      </div>
                      <div className='mt-2 flex-1'>
                        <p className='text-[11px] lg:text-xs uppercase tracking-[0.12em] text-[#D3FD50] mb-1'>{cert.label}</p>
                        <h3 className='text-base lg:text-lg font-[font2] mb-1'>{cert.title}</h3>
                        <p className='text-xs lg:text-sm text-white/90'>{cert.description}</p>
                        {cert.sourceUrl && (
                          <a
                            href={cert.sourceUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-2 inline-flex items-center rounded-md border border-white px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] text-white transition-colors hover:border-[#D3FD50] hover:text-[#D3FD50]'
                          >
                            View Original
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Certificates
