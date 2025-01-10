import Home from './Home';
import Footer from '../components/Footer';

import activity1 from '../assets/images/projects/activity/activity-1.png';
import activity2 from '../assets/images/projects/activity/activity-2.png';
import activity3 from '../assets/images/projects/activity/activity-3.png';
import activity4 from '../assets/images/projects/activity/activity-4.png';
import activity5 from '../assets/images/projects/activity/activity-5.png';
import activity6 from '../assets/images/projects/activity/activity-6.png';
import activity7 from '../assets/images/projects/activity/activity-7.png';
import activity8 from '../assets/images/projects/activity/activity-8.png';

import project1 from '../assets/images/projects/project-1.png';
import project2 from '../assets/images/projects/project-2.png';
import project3 from '../assets/images/projects/project-3.png';
import project4 from '../assets/images/projects/project-4.png';
import project5 from '../assets/images/projects/project-5.png';
import project6 from '../assets/images/projects/project-6.png';
import project7 from '../assets/images/projects/project-7.png';
import project8 from '../assets/images/projects/project-8.png';

import client1 from '../assets/images/projects/client/client-1.png';
import client2 from '../assets/images/projects/client/client-2.png';
import client3 from '../assets/images/projects/client/client-3.png';
import client4 from '../assets/images/projects/client/client-4.png';
import client5 from '../assets/images/projects/client/client-5.png';
import client6 from '../assets/images/projects/client/client-6.png';
import client7 from '../assets/images/projects/client/client-7.png';
import client8 from '../assets/images/projects/client/client-8.png';
import client9 from '../assets/images/projects/client/client-9.png';

import network1 from '../assets/images/projects/network/network-1.png';
import network2 from '../assets/images/projects/network/network-2.png';
import network3 from '../assets/images/projects/network/network-3.png';
import network4 from '../assets/images/projects/network/network-4.png';
import network5 from '../assets/images/projects/network/network-5.png';
import network6 from '../assets/images/projects/network/network-6.png';
import network7 from '../assets/images/projects/network/network-7.png';
import network8 from '../assets/images/projects/network/network-8.png';
import network9 from '../assets/images/projects/network/network-9.png';


import partner1 from '../assets/images/projects/partner/partner-1.png';
import partner2 from '../assets/images/projects/partner/partner-2.png';
import partner3 from '../assets/images/projects/partner/partner-3.png';
import partner4 from '../assets/images/projects/partner/partner-4.png';
import partner5 from '../assets/images/projects/partner/partner-5.png';
import partner6 from '../assets/images/projects/partner/partner-6.png';
import partner7 from '../assets/images/projects/partner/partner-7.png';
import partner8 from '../assets/images/projects/partner/partner-8.png';
import partner9 from '../assets/images/projects/partner/partner-9.png';

import supply1 from '../assets/images/projects/supply/supply-1.png';
import supply2 from '../assets/images/projects/supply/supply-2.png';
import supply3 from '../assets/images/projects/supply/supply-3.png';
import supply4 from '../assets/images/projects/supply/supply-4.png';
import supply5 from '../assets/images/projects/supply/supply-5.png';
import supply6 from '../assets/images/projects/supply/supply-6.png';
import supply7 from '../assets/images/projects/supply/supply-7.png';
import supply8 from '../assets/images/projects/supply/supply-8.png';


import icons1 from '../assets/images/projects/icons/icon-1.png';
import icons2 from '../assets/images/projects/icons/icon-2.png';
import icons3 from '../assets/images/projects/icons/icon-3.png';
import icons4 from '../assets/images/projects/icons/icon-4.png';
import icons5 from '../assets/images/projects/icons/icon-5.png';

import about_bg4 from '../assets/images/about/about-bg-4.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import '../components/project.css';

const activity = [
  {
    header: 'Training Activities',
    title: '',
    des: 'Conduct solar training to the communities',
    image: activity1
  },
  {
    header: 'Business Activities',
    title: 'EGE Cambodia Attended Cambuild',
    des: "The biggest exhibition for the building and construction industry in Cambodia.We were showcasing our supplier, Eco Green Energy's, solar solutions available here in Cambodia.Our team enjoyed meeting both national and international guests and were extremely happy to share our experiences within the solar industry",
    image: activity2
  },
  {
    header: 'Business Activities',
    title: 'Site Installation',
    des: 'We offer quick installation within any region of Cambodia.',
    image: activity3
  },
  {
    header: 'Installation Project',
    title: '',
    des: {
      Project: 'Sahmakum Teang Tnaut Organization (STT)',
      'Scope of work': 'Supply and Install solar street light 35 sets for community',
      Date: 'August 2024',
      Location: 'Kandal Province'
    },
    image: activity4
  },
  {
    header: 'Feasibility Study-Mondulkiri Province',
    title: 'Site Installation',
    des: {
      Project: "Feasibility Study-Mondulkiri Province In June 2022, EGE Cambodia has selected as consult and service",
    },
    image: activity5
  },
  {
    header: 'Feasibility Study-Siem Reap Province',
    title: '',
    des: 'Report assessment of Design and Installation of Solar Pump Irrigation System.',
    image: activity6
  },
  {
    header: 'Installation Activities / team',
    title: '',
    des: 'We offer quick installation with professional team within any regions of Cambodia.',
    image: activity7
  },
  {
    header: 'Some of Technical of Training, Operation, Maintenance',
    title: '',
    des: 'Technical Training of Solar Water Pump for fish farm, Kampong Thom Province in 2022',
    image: activity8
  },
]

const project = [
  {
    image: project1,
    des: {
      Project: 'Sahmakum Teang Tnaut Organization (STT)',
      'Scope of Work': 'National Water Supply Authority 50KW',
      Location: 'Kampot Province',
      Year: '2021'
    }
  },
  {
    image: project2,
    des: {
      Project: 'Workshop Rooftops',
      'Scope of Work': '20KW On-grid Hybrid & Mono-crystalline 450W Solar Panels',
      Location: 'Phnom Penh',
      Year: '2021'
    }
  },
  {
    image: project3,
    des: {
      Project: 'Cambodia Programme for Sustainable and Inclusive Growth in the Fisheries Sector & Capture Component (Capfish Capture)',
      'Scope of Work': 'A Complete Photovoltaic System 5KWP Hybrid PV System Supply & Installation',
      Location: 'Home Taste Food, Siem Reap Province',
      Year: 'April 2023'
    }
  },
  {
    image: project4,
    des: {
      Project: 'Oral District Resort',
      'Scope of Work': '15KW Off-grid Solar Light',
      Location: 'Kampong Speu Province',
      Year: '2022'
    }
  },
  {
    image: project5,
    des: {
      Project: 'Solar Rooftop for Amaru Rice Warehouse',
      'Scope of Work': '90KWP Off-grid Hybrid Solar PV System ,“Eco Green Energy” Monocrystalline Solar PV of 550W',
      Location: 'Phnom Penh',
      Year: '2023'
    }
  },
  {
    image: project6,
    des: {
      Project: 'Solar System',
      'Scope of Work': 'Monocrystalline  Module 450W',
      Location: '',
      Year: '2022'
    }
  },
  {
    image: project7,
    des: {
      Project: 'Villas Phnom Penh',
      'Scope of Work': '10KW  Terrace Top On-grid Hybrid Authority 50KW',
      Location: 'Phnom Penh',
    }
  },
  {
    image: project8,
    des: {
      Project: 'Oral District Resort',
      'Scope of Work': '200 Solar Light',
      Location: 'Kampong Speu Province',
      Year: '2022'
    }
  },
]

const client = [
  {
    image: client1,
  },
  {
    image: client2,
  },
  {
    image: client3,
  },
  {
    image: client4,
  },
  {
    image: client5,
  },
  {
    image: client6,
  },
  {
    image: client7,
  },
  {
    image: client8,
  },
  {
    image: client9,
  },
]

const network = [
  {
    image: network1,
  },
  {
    image: network2,
  },
  {
    image: network3,
  },
  {
    image: network4,
  },
  {
    image: network5,
  },
  {
    image: network6,
  },
  {
    image: network7,
  },
  {
    image: network8,
  },
  {
    image: network9,
  },
]

const partner = [
  {
    image: partner1,
  },
  {
    image: partner2,
  },
  {
    image: partner3,
  },
  {
    image: partner4,
  },
  {
    image: partner5,
  },
  {
    image: partner6,
  },
  {
    image: partner7,
  },
  {
    image: partner8,
  },
  {
    image: partner9,
  },
]

const supply = [
  {
    image: supply1,
  },
  {
    image: supply2,
  },
  {
    image: supply3,
  },
  {
    image: supply4,
  },
  {
    image: supply5,
  },
  {
    image: supply6,
  },
  {
    image: supply7,
  },
  {
    image: supply8,
  },
  {
    image: supply5,
  },
]
const Project = () => {
  return (
    <section >
      <Home />
      {/* activity */}
      <div id='activities' className='bg-[#D9ECEE]'>
        <div className="max-w-7xl mx-auto px-4">
          <hr className='h-4 bg-[#A4CA62] border-none' />
          <div className='py-10 md:py-20'>
            <h1 className='text-[30px] md:text-[40px] lg:text-[50px] text-[#415464] font-[700] leading-none md:mb-4'>Case <br /> Studies/Activities</h1>
            {/* laptop */}
            <div className="hidden md:grid grid-cols-3 xl:grid-cols-4 gap-4">
              {activity.map((activities, index) => (
                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} key={index} className="relative group overflow-hidden">
                  <hr className='h-2 bg-[#A4CA62] border-none' />
                  <img src={activities.image} alt="" className='w-full h-full object-cover' />
                  <div className='absolute bottom-0 left-0 pt-2 pb-4 px-2 w-full translate-y-full bg-black/80 group-hover:translate-y-0 duration-300 ease-in-out'>
                    <h1 className="text-[16px] text-[#A4CA62] font-[600]">{activities.header}</h1>
                    <p className='text-[12px] font-[600] text-[#ffffff]'>{activities.title}</p>
                    <p className='text-[12px] text-[#ffffff]'>
                      {typeof activities.des === 'string' ? (
                        <p>{activities.des}</p>
                      ) : (
                        Object.entries(activities.des).map(([key, value]) => (
                          <div key={key} className="mb-2">
                            <span>{key}:</span> {value}
                          </div>
                        ))
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* mobile */}
            <div className='swiper-activity md:hidden'>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView='auto'
                loop={true}
                spaceBetween={'50'}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 200, modifier: 1, slideShadows: false }}
                pagination={true} modules={[Pagination, Autoplay, EffectCoverflow]}
                autoplay >
                {activity.map((activities, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative group overflow-hidden">
                      <hr className='h-2 bg-[#A4CA62] border-none' />
                      <img src={activities.image} alt="" className='w-full h-full object-cover' />
                      <div className='absolute bottom-0 left-0 pt-2 pb-4 px-2 w-full translate-y-full bg-black/80 group-hover:translate-y-0 duration-300 ease-in-out'>
                        <h1 className="text-[14px] text-[#A4CA62] font-[600]">{activities.header}</h1>
                        <p className='text-[11px] font-[600] text-[#ffffff]'>{activities.title}</p>
                        <p className='text-[11px] text-[#ffffff]'>
                          {typeof activities.des === 'string' ? (
                            <p>{activities.des}</p>
                          ) : (
                            Object.entries(activities.des).map(([key, value]) => (
                              <div key={key} className="mb-2">
                                <span>{key}:</span> {value}
                              </div>
                            ))
                          )}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Project Credentials */}
      <div id='project' className='max-w-7xl mx-auto px-4 py-10'>
        <h1 className='text-[30px] md:text-[40px] lg:text-[50px] text-[#415464] font-[700] leading-none md:mb-4'>Project <br /> Credentials</h1>
        {/* laptop */}
        <div className='hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4'>
          {project.map((projects, index) => (
            <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} key={index}>
              <img src={projects.image} alt="" className='w-full h-auto' />
              <hr className='h-2 bg-[#A4CA62] border-none' />
              <div className='bg-[#415464] text-[#ffffff] p-3 h-[170px] xl:h-[150px]'>
                {Object.entries(projects.des).map(([key, value]) => (
                  <div key={key} className="mb-2 leading-none text-[12px]">
                    <span>{key}:</span> {value}
                  </div>
                ))
                }
              </div>
            </motion.div>
          ))}
        </div>

        {/* mobile */}
        <div className='swiper-project md:hidden'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView='auto'
            loop={true}
            spaceBetween={'50'}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 200, modifier: 1, slideShadows: false }}
            pagination={true} modules={[Pagination, Autoplay, EffectCoverflow]}
            autoplay
          >
            {project.map((projects, index) => (
              <SwiperSlide key={index}>
                <img src={projects.image} alt="" className='w-full h-auto' />
                <hr className='h-2 bg-[#A4CA62] border-none' />
                <div className='bg-[#415464] text-[#ffffff] p-3 h-[150px]'>
                  {Object.entries(projects.des).map(([key, value]) => (
                    <div key={key} className="mb-2 leading-none text-[12px]">
                      <span>{key}:</span> {value}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* clients */}
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-[25px] md:text-[30px] text-[#415464] font-[700]'>Our Clients</h1>
        <div className="h-[200px] w-full max-w-7xl mx-auto relative overflow-hidden">
          {client.map((clients, index) => (
            <div key={index} className={`client_item item${index + 1} flex items-center justify-center`}>
              <img src={clients.image} alt="" />
            </div>
          ))}
        </div>

        {/* network */}
        <h1 className='text-[25px] md:text-[30px] text-[#415464] font-[700]'>Our Networks</h1>
        <div className="h-[200px] w-full max-w-7xl mx-auto relative overflow-hidden">
          {network.map((networks, index) => (
            <div key={index} className={`network_item item${index + 1} flex items-center justify-center`}>
              <img src={networks.image} alt="" />
            </div>
          ))}
        </div>

        {/* partner */}
        <h1 className='text-[25px] md:text-[30px] text-[#415464] font-[700]'>Our Partner</h1>
        <div className="h-[200px]  w-full max-w-7xl mx-auto relative overflow-hidden">
          {partner.map((partners, index) => (
            <div key={index} className={`partner_item item${index + 1} flex items-center justify-center`}>
              <img src={partners.image} alt="" />
            </div>
          ))}
        </div>

        {/* supplies */}
        <h1 className='text-[25px] md:text-[30px] text-[#415464] font-[700]'>Our Suppliers</h1>
        <div className="h-[200px]  w-full max-w-7xl mx-auto relative overflow-hidden">
          {supply.map((supplies, index) => (
            <div key={index} className={`supply_item item${index + 1} flex items-center justify-center`}>
              <img src={supplies.image} alt="" />
            </div>
          ))}
        </div>

      </div>

      {/*  */}
      <div className='w-full bg-[#D9ECEE]'>
        <div className='max-w-7xl mx-auto py-10 md:py-20 px-4'>
          <h2 className='text-[20px] md:text-[30px] font-[400] text-[#415464]'>Long-term project sustainability Project contributions to Climate <br /> Change Mitigation and SDGs</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-20 py-10'>
            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
              className='flex flex-col sm:flex-row items-start sm:space-x-4'>
              <img src={icons1} alt="" className='w-32' />
              <div className='text-[12px] p-2 sm:p-0'>
                <p>Provided Solar technologies for sustainable agriculture practice</p>
                <p className='mt-2'>Reduce cost from</p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
              className='flex flex-col sm:flex-row items-start sm:space-x-4'>
              <img src={icons2} alt="" className='w-32' />
              <div className='text-[12px] p-2 sm:p-0'>
                <p>Convenience for women to access solar water pump</p>
                <p className='mt-2'>4 +50% of women in agriculture practice</p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('right', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
              className='flex flex-col sm:flex-row items-start sm:space-x-4'>
              <img src={icons3} alt="" className='w-32' />
              <div className='text-[12px] p-2 sm:p-0'>
                <p>Water governance</p>
                <p className='mt-2'>Increase rice field productions 20% to 25% per hectare</p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
              className='flex flex-col sm:flex-row items-start sm:space-x-4'>
              <img src={icons4} alt="" className='w-32' />
              <div className='text-[12px] p-2 sm:p-0'>
                <p>Increase job opportunities for communities through farming and cropping</p>
                <p className='mt-2'>Reduce migration</p>
                <p className='mt-2'>Become a green community with abundant agriculture and clean energy sources</p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
              className='flex flex-col sm:flex-row items-start sm:space-x-4'>
              <img src={icons5} alt="" className='w-32' />
              <div className='text-[12px] p-2 sm:p-0'>
                <p>Reduce carbon emission 134 tons/year </p>
                <p className='mt-2'>SWITCH from diesel engine to solar technologies.</p>
                <p className='mt-2'>Promote clean energy and environmental friendly</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className='w-full h-full relative mt-4'>
        <img src={about_bg4} alt="" className='w-full h-full' />
        <div className='absolute inset-0 w-full h-full bg-[#000000]/70 bg-blend-multiply'></div>
        <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='absolute inset-0 w-full h-full flex items-center text-center justify-center text-[30px] sm:text-[50px] md:text-[60px] lg:text-[100px] leading-none text-[#ffffff] font-[700] italic'>
          Innovation meets <br />
          sustainability.
        </motion.div>
      </div>


      <Footer />
    </section>
  )
}

export default Project