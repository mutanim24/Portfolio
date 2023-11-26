import profile from '../../../assets/profile-pic.png'
import programmer from '../../../assets/programmer.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import resume from '../../../assets/MUHIM UDDIN TANIM - MERN stack developer.pdf'
import { Button } from 'keep-react';

const About = () => {
    return (
        <div id='about'>
            <SectionTitle title='About' subtitle='Me'></SectionTitle>
            <div className="text-white md:flex justify-center items-center gap-14">
                <div data-aos="fade-right" className='md:w-7/12'>
                    <p>As a full-stack developer with expertise in the MERN stack, I bring a passion for crafting efficient and scalable web applications. With a solid foundation in front-end technologies such as React.js and Next.js, combined with my proficiency in back-end development using Node.js and Express.js, I have successfully delivered end-to-end solutions that meet client requirements and deliver exceptional user experiences. </p>
                    <div className='md:flex gap-4 mt-6'>
                        <div className='md:w-7/12 space-y-3'>
                            <h1 className='text-3xl font-semibold text-yellow-600'>Myself</h1>
                            <p>Name: Muhim Uddin Tanim</p>
                            <p>Education: Diploma in Computer Science</p>
                            <p>Language: Bangla, English</p>
                            <a
                                href={resume}
                                download="Resume - Muhim Uddin Tanim">
                                <button className='btn bg-white text-black font-semibold p-3 px-5 rounded mt-6 hover:bg-yellow-600 hover:text-white transition duration-300'>Download My Resume</button>
                            </a>

                        </div>
                        <div className='md:w-5/12 mt-8 grid grid-cols-2 gap-4'>
                            <div className=' text-center p-4 border-2 border-yellow-600 rounded-full'>
                                <h1 className='text-4xl font-bold text-yellow-600'>2+</h1>
                                <p>Years of Experience</p>
                            </div>
                            <div className='text-center p-4 border-2 border-yellow-600'>
                                <h1 className='text-4xl font-bold text-yellow-600'>20+</h1>
                                <p>Complete Projects</p>
                            </div>
                            <div className='text-center p-4 border-2 border-yellow-600'>
                                <h1 className='text-4xl font-bold text-yellow-600'>3+</h1>
                                <p>Month of Job Experience</p>
                            </div>
                            <div className='text-center p-4 border-2 border-yellow-600 rounded-full'>
                                <h1 className='text-4xl font-bold text-yellow-600'>8+</h1>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-5/12'>
                    <img data-aos="fade-left" src={programmer} alt="" />
                </div>
            </div>
        </ div>
    );
};

export default About;