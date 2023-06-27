import profile from '../../../assets/profile-pic.png'
import './Banner.css'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='h-screen flex items-center justify-center gap-10 bg-black text-white w-10/12 mx-auto'>
            <div className='w-4/12'>
                <img className='h-72 w-72 rounded-full' src={profile} alt="" />
            </div>
            <div className='w-8/12'>
                <h1 className='name  text-5xl font-bold'>Muhim Uddin Tanim</h1>
                <p className='w-10/12 my-5'>Passionate about MERN development, I thrive on pushing boundaries, embracing challenges, and delivering cutting-edge solutions that exceed expectations.</p>
                <div className='flex gap-8'>
                    <FaFacebook className='text-3xl'></FaFacebook>
                    <FaLinkedin className='text-3xl'></FaLinkedin>
                    <FaGithub className='text-3xl'></FaGithub>
                </div>
            </div>
        </div>
    );
};

export default Banner;