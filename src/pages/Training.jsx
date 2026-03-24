
import { useEffect, useState } from 'react'


import Particles from '../components/common/Particles'
import { FaUsers, FaTrophy, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import algoTutorImg from '../assets/certi/AlgoTutorTraining.jpeg';

const extracurricularImages = [
	{
		src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
		alt: 'Team activity event'
	},
	{
		src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
		alt: 'Community volunteering'
	},
	{
		src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80',
		alt: 'Hackathon participation'
	},
	{
		src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80',
		alt: 'College fest'
	},
	{
		src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
		alt: 'Public speaking event'
	},
	{
		src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
		alt: 'Seminar participation'
	},
	{
		src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
		alt: 'Workshop collaboration'
	},
	{
		src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
		alt: 'Group project discussion'
	},
	{
		src: 'https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?auto=format&fit=crop&w=1200&q=80',
		alt: 'Sports and activity day'
	},
	{
		src: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=1200&q=80',
		alt: 'Campus achievement event'
	},
	{
		src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
		alt: 'Technical event'
	},
	{
		src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1200&q=80',
		alt: 'Networking event'
	},
	{
		src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
		alt: 'Award ceremony'
	},
	{
		src: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80',
		alt: 'Student activity'
	}
]

const nssImage = 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80'
const fiftyDayBadge = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80'
const youngTurksCert = 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80'

const Training = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		// Set tab title for Training section
		document.title = 'Training | Sayanna Sai Venkata Krishna';

		const mediaQuery = window.matchMedia('(max-width: 768px)')
		const updateIsMobile = () => setIsMobile(mediaQuery.matches)

		updateIsMobile()
		mediaQuery.addEventListener('change', updateIsMobile)

		return () => {
			mediaQuery.removeEventListener('change', updateIsMobile)
		}
	}, [])

	return (
		<div className='min-h-screen w-full bg-black text-white overflow-x-hidden' style={{ position: 'relative' }}>
			<div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
				<Particles
					particleColors={['#d3fd50']}
					particleCount={isMobile ? 80 : 200}
					particleSpread={10}
					speed={0.1}
					particleBaseSize={isMobile ? 65 : 100}
					moveParticlesOnHover={false}
					alphaParticles={false}
					disableRotation={false}
					pixelRatio={1}
				/>
			</div>
			<div className='py-16 sm:py-20 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto' style={{ position: 'relative', zIndex: 1 }}>
        
				{/* Training Section */}
				<div className='mb-20'>
					<h2 className='text-[10vw] lg:text-[5vw] uppercase mb-10 font-[font1]' style={{ textAlign: 'left' }}>
						Training
					</h2>
					<div className='flex justify-center'>
						<div className='border-2 border-white rounded-3xl overflow-hidden hover:border-[#D3FD50] transition-all duration-300 bg-black/40 max-w-3xl w-full hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_14px_32px_rgba(211,253,80,0.25)]'>
							<div className='h-52 sm:h-60 border-b border-white/20 bg-white/5 flex items-center justify-center'>
								<img
								 src={algoTutorImg}
								 alt='AlgoTutor Certificate'
								 className='h-full w-auto object-contain'
								 loading='lazy'
								/>
							</div>
							<div className='p-4 sm:p-5'>
								<h3 className='text-lg lg:text-xl font-bold mb-2 text-[#D3FD50]'>Mastering Data Structures and Algorithms – AlgoTutor</h3>
								<ul className='list-disc pl-5 text-base lg:text-lg mb-3'>
									<li>Mastered core data structures and algorithms with hands-on C++ practice.</li>
									<li>Focused on efficient, performance-driven coding and real-world problem solving.</li>
									<li>Sharpened logical thinking and debugging through competitive programming.</li>
								</ul>
								<a href='https://drive.google.com/file/d/13tazmgiAMO_dj3KMa79QTd87wGj9Grug/view?usp=sharing bg-[#D3FD50] text-black font-semibold rounded hover:bg-[#b6e800] transition'>Verify Original</a>
							</div>
						</div>
					</div>
				</div>

				{/* Extracurricular Activities Section */}
				<div className='mb-20'>
					<div className='mb-10 leading-[0.95]'>
						<h2 className='text-[9.5vw] sm:text-[7.8vw] md:text-[6.2vw] lg:text-[5vw] uppercase font-[font1] whitespace-nowrap' style={{ textAlign: 'left' }}>
							Extracurricular
						</h2>
						<h2 className='text-[9.5vw] sm:text-[7.8vw] md:text-[6.2vw] lg:text-[5vw] uppercase font-[font1] whitespace-nowrap' style={{ textAlign: 'left' }}>
							Activities
						</h2>
					</div>
          
					{/* Extracurricular Activities Content */}
					<div className='w-full max-w-3xl mx-auto mb-8 flex flex-col md:flex-row gap-8'>
						{/* Hackathons Card */}
						<div className='flex-1 border border-white/20 rounded-2xl p-6 text-lg leading-relaxed shadow-lg transition-all duration-300 bg-gradient-to-br from-[#232526] via-[#414345] to-black hover:border-[#D3FD50] hover:from-[#232526] hover:via-[#232526] hover:to-black hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_14px_32px_rgba(211,253,80,0.25)] cursor-pointer'>
							<div className='flex items-center gap-3 mb-3'>
								<span className="inline-flex items-center gap-2"><FaLaptopCode className='text-[#D3FD50] text-2xl' title='Hackathon' /><span className='font-bold text-[#D3FD50] text-xl'>Hackathons</span></span>
								<FaLightbulb className='text-yellow-300 text-xl' title='Innovation' />
							</div>
							<p className='mb-4'>
								I actively participated in multiple hackathons, including <b>BinaryBlitz Hackathon (April 2024)</b> and <b>HackWithVertos 1.0</b>, a 24-hour intensive coding event. These experiences helped me strengthen my problem-solving skills, teamwork, and ability to build solutions under pressure.
							</p>
							<div className='flex gap-2 mt-2'>
								<span className='inline-flex items-center gap-1 text-sm text-[#60A5FA] bg-[#232526] px-2 py-1 rounded'><FaUsers /> Teamwork</span>
								<span className='inline-flex items-center gap-1 text-sm text-yellow-300 bg-[#232526] px-2 py-1 rounded'><FaLightbulb /> Innovation</span>
							</div>
						</div>
						{/* Student Organization Card */}
						<div className='flex-1 border border-white/20 rounded-2xl p-6 text-lg leading-relaxed shadow-lg transition-all duration-300 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-black hover:border-[#D3FD50] hover:from-[#0f2027] hover:via-[#0f2027] hover:to-black hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_14px_32px_rgba(211,253,80,0.25)] cursor-pointer'>
							<div className='flex items-center gap-3 mb-3'>
								<span className="inline-flex items-center gap-2"><FaUsers className='text-[#60A5FA] text-2xl' title='Student Organization' /><span className='font-bold text-[#60A5FA] text-xl'>Student Club</span></span>
								<FaTrophy className='text-[#FFD700] text-xl' title='Leadership' />
							</div>
							<p>
								I served as a member of the <b>Department of Student Organization</b>, where I contributed to organizing events and collaborating with peers, enhancing my leadership and communication skills.
							</p>
							<div className='flex gap-2 mt-2'>
								<span className='inline-flex items-center gap-1 text-sm text-[#60A5FA] bg-[#0f2027] px-2 py-1 rounded'><FaUsers /> Collaboration</span>
								<span className='inline-flex items-center gap-1 text-sm text-[#FFD700] bg-[#0f2027] px-2 py-1 rounded'><FaTrophy /> Leadership</span>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Training
