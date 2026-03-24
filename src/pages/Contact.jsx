import { useState } from 'react'
import Particles from '../components/common/Particles'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:saivenkatakrishna130@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

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
      <div className='py-12 px-4 lg:px-12 max-w-7xl mx-auto' style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Contact Section */}
        <div className='mb-12'>
          <h2 className='text-[10vw] lg:text-[5vw] uppercase mb-8 font-[font1]' style={{ textAlign: 'left' }}>
            Contact
          </h2>

          {/* Split Layout: Form on Left, Social Links on Right */}
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
            
            {/* Left Half - Contact Form */}
            <div className='border-2 border-white p-6 rounded-2xl hover:border-[#D3FD50] transition-colors'>
              <h3 className='text-xl lg:text-2xl mb-6 text-[#D3FD50] font-[font2]'>Send Message</h3>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label htmlFor='name' className='block text-sm mb-1.5 font-[font2]'>Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full bg-transparent border-2 border-white rounded-lg px-3 py-2 text-sm focus:border-[#D3FD50] focus:outline-none transition-colors'
                    placeholder='Your Name'
                  />
                </div>
                
                <div>
                  <label htmlFor='email' className='block text-sm mb-1.5 font-[font2]'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full bg-transparent border-2 border-white rounded-lg px-3 py-2 text-sm focus:border-[#D3FD50] focus:outline-none transition-colors'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm mb-1.5 font-[font2]'>Subject</label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full bg-transparent border-2 border-white rounded-lg px-3 py-2 text-sm focus:border-[#D3FD50] focus:outline-none transition-colors'
                    placeholder='What is this about?'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm mb-1.5 font-[font2]'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='5'
                    className='w-full bg-transparent border-2 border-white rounded-lg px-3 py-2 text-sm focus:border-[#D3FD50] focus:outline-none transition-colors resize-none'
                    placeholder='Your message...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full px-6 py-3 bg-[#D3FD50] text-black font-[font2] text-base rounded-lg hover:bg-white transition-colors uppercase'
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Half - Social Links Vertical */}
            <div className='flex flex-col justify-center items-center gap-6'>
              {/* Email Icon */}
              <a href='mailto:saivenkatakrishna130@gmail.com' className='w-full border-2 border-white p-4 rounded-2xl hover:border-[#D3FD50] hover:bg-[#D3FD50]/10 transition-all group flex items-center gap-4'>
                <svg className='w-10 h-10 text-white group-hover:text-[#D3FD50] transition-all duration-500' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className='text-sm text-gray-400 font-[font2]'>Email</p>
                  <p className='text-base lg:text-lg'>saivenkatakrishna130@gmail.com</p>
                </div>
              </a>
              
              {/* GitHub Icon */}
              <a href='https://github.com/saivenkatakrishna13' target='_blank' rel='noopener noreferrer' className='w-full border-2 border-white p-4 rounded-2xl hover:border-[#D3FD50] hover:bg-[#D3FD50]/10 transition-all group flex items-center gap-4'>
                <svg className='w-10 h-10 text-white group-hover:text-[#D3FD50] transition-all duration-500' fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <div>
                  <p className='text-sm text-gray-400 font-[font2]'>GitHub</p>
                  <p className='text-base lg:text-lg'>saivenkatakrishna13</p>
                </div>
              </a>
              
              {/* LinkedIn Icon */}
              <a href='https://www.linkedin.com/in/saivenkatakrishna130/' target='_blank' rel='noopener noreferrer' className='w-full border-2 border-white p-4 rounded-2xl hover:border-[#D3FD50] hover:bg-[#D3FD50]/10 transition-all group flex items-center gap-4'>
                <svg className='w-10 h-10 text-white group-hover:text-[#D3FD50] transition-all duration-500' fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div>
                  <p className='text-sm text-gray-400 font-[font2]'>LinkedIn</p>
                  <p className='text-base lg:text-lg'>saivenkatakrishna130</p>
                </div>
              </a>

              {/* Location Info */}
              <div className='w-full border-2 border-white rounded-2xl hover:border-[#D3FD50] transition-all overflow-hidden'>
                <div className='grid grid-cols-2 gap-0'>
                  <div className='p-4 border-r-2 border-white'>
                    <p className='text-sm text-gray-400 font-[font2] mb-2'>Location</p>
                    <p className='text-sm leading-relaxed'>
                      8H63+38H, Road No. 5, Vinayaka Hills, Tirumala Nagar,<br />
                      Sripuram, B.N Reddy Nagar, Hyderabad,<br />
                      Telangana 500112, India
                    </p>
                  </div>
                  <div className='h-full'>
                    <iframe
                      src="https://maps.google.com/maps?q=17.3356,78.5736&hl=en&z=16&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '120px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Lovely Professional University Location */}
              <div className='w-full border-2 border-white rounded-2xl hover:border-[#D3FD50] transition-all overflow-hidden'>
                <div className='grid grid-cols-2 gap-0'>
                  <div className='p-4 border-r-2 border-white'>
                    <p className='text-sm text-gray-400 font-[font2] mb-2'>Lovely Professional University</p>
                    <p className='text-sm leading-relaxed'>
                      Jalandhar - Delhi G.T. Road<br />
                      Phagwara, Punjab 144411<br />
                      India
                    </p>
                  </div>
                  <div className='h-full'>
                    <iframe
                      src="https://maps.google.com/maps?q=31.2550,75.7049&hl=en&z=14&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '120px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lovely Professional University Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
