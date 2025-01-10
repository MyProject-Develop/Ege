import careerBg from "../assets/images/career/career-1.png";
import about_bg4 from '../assets/images/about/about-bg-4.png';

import Home from "./Home";
import Footer from "./Footer";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Career = () => {
  return (
    <section>
      <Home />
      <div id="careers" className="w-full h-[60vh] sm:min-h-screen bg-center bg-cover px-4 relative overflow-hidden" style={{ backgroundImage: `url(${careerBg})` }}>
        <hr className="h-4 bg-[#A4CA62] border-none max-w-7xl mx-auto" />
        <div className="absolute w-full px-4 left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:left-[50px] top-[50px] sm:top-[70px] xl:left-[120px] xl:top-[100px]">
          <motion.hr variants={fadeIn('right', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="h-2 bg-[#A4CA62] border-none w-[80%] sm:max-w-[400px]" />
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="py-6 px-4 sm:px-10 sm:max-w-[500px] lg:max-w-[600px] bg-[#2B4452]/95 bg-blend-multiply">
            <h1 className="text-[30px] md:text-[40px] text-[#ffffff] font-[700]">Our Culture</h1>
            <p className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] text-[#A4CA62] font-[700] py-4 lg:py-6 leading-none">Let’s build greener world together with us</p>
            <p className="text-[16px] md:text-[20px] text-[#ffffff]">Apply your dream job today!</p>

            <div className="text-[#ffffff] pt-8 max-w-[300px]">
              <a href="mailto:vc-raksmey@egecambodia.com" className="flex items-center bg-[#415464] space-x-2 px-2 py-1 rounded-[20px]">
                <svg width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.5 45C10.0934 45 0 34.9066 0 22.5C0 10.0934 10.0934 0 22.5 0C34.9066 0 45 10.0934 45 22.5C45 34.9066 34.9066 45 22.5 45ZM34.1682 30.4041C34.4456 30.4041 34.6714 30.1784 34.6714 29.9009V15.7754L23.2236 24.8661C23.0118 25.0344 22.7558 25.1185 22.4999 25.1185C22.2441 25.1185 21.9881 25.0343 21.7762 24.8661L10.3286 15.7754V29.9009C10.3286 30.1784 10.5543 30.4041 10.8317 30.4041H34.1682ZM32.4139 14.5959L22.5 22.4687L12.586 14.5959H32.4139ZM36.999 15.0991V29.9011C36.999 31.4619 35.729 32.7319 34.1682 32.7319H10.8317C9.27079 32.7319 8.00103 31.4619 8.00103 29.9011V15.0991C8.00103 13.5382 9.27088 12.2684 10.8317 12.2684H34.1682C35.729 12.2683 36.999 13.5382 36.999 15.0991Z" fill="white" />
                </svg>
                <p className="text-[12px] sm:text-[14px] font-[700]">vc-raksmey@egecambodia.com</p>
              </a>
            </div>
          </motion.div>
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

export default Career