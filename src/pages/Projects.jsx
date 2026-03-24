import { useEffect, useRef, useState } from 'react'
import Particles from '../components/common/Particles'
import womenSafetyImage from '../assets/projes/womensaf.png'
import weatherImage from '../assets/projes/weather.png'
import translatorImage from '../assets/projes/translator.png'
import nlpImage from '../assets/projes/nlp.png'

const eventImage = 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80'


const Projects = () => {
  const [visibleSections, setVisibleSections] = useState({})
  const sectionRefs = useRef([])

  const projects = [
    {
      title: 'Women Safety Prediction Platform',
      description: 'An AI-driven safety platform designed to help users identify safer routes using crime data analytics.',
      projectLink: 'https://women-safety-black.vercel.app/',
      features: [
        'Analyzed 350+ public crime data points to generate location-based safety scores',
        'Implemented an SOS alert system with a 2-second GPS refresh rate',
        'Sends automatic emergency notifications to 5+ trusted contacts',
        'Built a React + Flask dashboard to visualize crime data insights',
        'Achieved 92% prediction accuracy using machine learning models'
      ],
      technologies: 'React, Flask, Python, Machine Learning',
      image: womenSafetyImage
    },
     {
      title: 'WeatherAlertScheduler',
      description: 'A modern, responsive weather monitoring and smart alert scheduling platform for citizens, farmers, and emergency responders using real-time OpenWeather API and NOAA data.',
      projectLink: 'https://weather-scheduler-sandy.vercel.app/',
      features: [
        'Real-time weather dashboard with global location search and 5-day forecast',
        'Custom severe weather alerts with temperature, humidity, wind, and visibility insights',
        'Smart agriculture tools: crop alerts, irrigation planning, and sowing/harvest advisory',
        'Disaster response support: evacuation routes, shelter mapping, and emergency notices',
        'Built with vanilla JavaScript, HTML, GSAP,Locomotive Scroll and CSS for fast, responsive performance'
      ],
      technologies: 'JavaScript, HTML, CSS, OpenWeather API, NOAA, GSAP, Locomotive, PostgreSQL',
      image: weatherImage
    },
    {
      title: 'Universal Language Translator',
      description: 'A real-time multilingual communication platform designed to eliminate language barriers.',
      projectLink: 'https://translator-self-tau.vercel.app/',
      features: [
        'Supports translation across 50+ languages',
        'Enables text, voice, and image (OCR-based) translation',
        'Integrated Google Translation APIs for accurate multilingual support',
        'Designed an engaging user interface to improve accessibility and usability'
      ],
      technologies: 'Python, APIs, OCR, Web Technologies',
      image: translatorImage
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          setVisibleSections((prev) => ({ ...prev, [index]: entry.isIntersecting }))
        })
      },
      {
        threshold: 0.25,
        rootMargin: '-5% 0px -5% 0px'
      }
    )

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className='min-h-screen w-full bg-black text-white' style={{ position: 'relative' }}>
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
      <div className='pt-10 lg:pt-[8vh] px-4 pb-8' style={{ position: 'relative', zIndex: 1 }}>
        <h2 className='font-[font2] text-[10vw] lg:text-[5vw] uppercase' style={{ textAlign: 'center' }}>
          Projects
        </h2>
      </div>
      <div className='px-4 lg:px-8 pb-12 space-y-8 lg:space-y-0' style={{ position: 'relative', zIndex: 1 }}>
        {projects.map((project, idx) => {
          const isVisible = !!visibleSections[idx]

          return (
            <section
              key={project.title}
              ref={(el) => {
                sectionRefs.current[idx] = el
              }}
              data-index={idx}
              className={`mx-auto min-h-[90vh] max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className='text-2xl lg:text-4xl mb-3 text-[#D3FD50] font-[font2]'>
                  {project.title}
                </h3>
                <p className='text-sm lg:text-lg mb-4 leading-relaxed'>{project.description}</p>

                <h4 className='text-base lg:text-xl mb-2 text-[#D3FD50] font-[font2]'>Key Features:</h4>
                <ul className='text-xs lg:text-base space-y-1 mb-4'>
                  {project.features.map((feature, fidx) => (
                    <li key={fidx}>- {feature}</li>
                  ))}
                </ul>

                <h4 className='text-base lg:text-xl mb-1 text-[#D3FD50] font-[font2]'>Technologies:</h4>
                <p className='text-xs lg:text-base'>{project.technologies}</p>

                <a
                  href={project.projectLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-5 inline-flex items-center gap-2 rounded-full border border-[#D3FD50] px-4 py-2 text-xs lg:text-sm text-[#D3FD50] hover:bg-[#D3FD50] hover:text-black transition-colors'
                >
                  View Project
                  <span aria-hidden='true'>↗</span>
                </a>
              </div>

              <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''} flex items-center justify-center`}>
                <div className='h-[260px] w-full max-w-[560px] lg:h-[420px] rounded-2xl border border-zinc-700 bg-zinc-900/70 p-3'>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className='h-full w-full object-contain'
                    loading='lazy'
                  />
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Projects