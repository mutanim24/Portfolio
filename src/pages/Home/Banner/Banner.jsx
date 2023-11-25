import { Link } from 'react-router-dom';
import profile from '../../../assets/profile-pic.png'
import './Banner.css'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div id="home" className='py-8 md:py-0 md:h-[400px] md:flex items-center justify-center gap-10 bg-black text-white md:w-10/12 mx-auto'>
            <div className='md:w-5/12'>
                <img data-aos="zoom-in" className='h-72 w-72 rounded-full border-2 p-2 border-white md:ml-20' src={profile} alt="" />
            </div>
            <div className='md:w-7/12'>
                <h1 data-aos="fade-left" className='name text-3xl mt-8 md:mt-0 md:text-5xl font-bold'>Muhim Uddin Tanim</h1>
                <p data-aos="fade-left" className='md:w-10/12 my-5'>Passionate about MERN development, I thrive on pushing boundaries, embracing challenges, and delivering cutting-edge solutions that exceed expectations.</p>
                <div data-aos="fade-up" className='flex gap-8'>
                    <Link to='https://www.facebook.com/mutanim24'><FaFacebook className='text-3xl hover:text-yellow-600 transition duration-300'></FaFacebook></Link>
                    <Link to='https://www.linkedin.com/in/mutanim/'><FaLinkedin className='text-3xl hover:text-yellow-600 transition duration-300'></FaLinkedin></Link>
                    <Link to='https://github.com/mutanim24'><FaGithub className='text-3xl hover:text-yellow-600 transition duration-300'></FaGithub></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;