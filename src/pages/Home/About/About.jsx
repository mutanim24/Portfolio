import profile from '../../../assets/profile-pic.png'
import programmer from '../../../assets/programmer.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import resume from '../../../assets/MUHIM UDDIN TANIM - MERN stack developer.docx (1).pdf'

const About = () => {
    return (
        <>
            <SectionTitle title='About' subtitle='Me'></SectionTitle>
            <div className="text-white flex justify-center items-center gap-14">
                <div className='w-7/12'>
                    <p>As a full-stack developer with expertise in the MERN stack, I bring a passion for crafting efficient and scalable web applications. With a solid foundation in front-end technologies such as React.js and Next.js, combined with my proficiency in back-end development using Node.js and Express.js, I have successfully delivered end-to-end solutions that meet client requirements and deliver exceptional user experiences. </p>
                    <div className='flex gap-4 mt-6'>
                        <div className='w-7/12 space-y-3'>
                            <h1 className='text-3xl font-semibold'>Full-stack Developer</h1>
                            <p>Age: 25</p>
                            <p>Gender: Male</p>
                            <p>Gender: </p>
                            <a
                                href={resume}
                                download="Resume - Muhim Uddin Tanim">
                                <button className='btn bg-white text-black font-semibold p-3 px-5 rounded mt-6 hover:bg-yellow-600 hover:text-white transition duration-300'>Download My Resume</button>
                            </a>

                        </div>
                        <div className='w-5/12 mt-8 grid grid-cols-2 gap-4'>
                            <div className='text-center p-4 border-2 border-yellow-600 rounded-full'>
                                <h1 className='text-4xl font-bold text-yellow-600'>2+</h1>
                                <p>Years of Experience</p>
                            </div>
                            <div className='text-center p-4 border-2 border-yellow-600'>
                                <h1 className='text-4xl font-bold text-yellow-600'>20+</h1>
                                <p>Complete Projects</p>
                            </div>
                            <div className='text-center p-4 border-2 border-yellow-600'>
                                <h1 className='text-4xl font-bold text-yellow-600'>8+</h1>
                                <p>Happy Clients</p>
                            </div>
                            <div className='text-center p-4 border-2 border-yellow-600 rounded-full'>
                                <h1 className='text-4xl font-bold text-yellow-600'>8+</h1>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-5/12'>
                    <img src={programmer} alt="" />
                </div>
            </div>
        </>
    );
};

export default About;