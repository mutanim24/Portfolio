
import html from '../../../assets/html.png'
import css from '../../../assets/css.png'
import tailwind from '../../../assets/tailwind.png'
import bootstrap from '../../../assets/bootrstrap.png'
import javascript from '../../../assets/js.png'
import react from '../../../assets/react.png'
import nodejs from '../../../assets/nodejs.png'
import mongodb from '../../../assets/mongodb.png'
import expressjs from '../../../assets/expressjs.png'
import firebase from '../../../assets/firebase.png'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
// import typescript from '../../../assets/typescript.png'
// import nextjs from '../../../assets/nextjs.png'


const MySkill = () => {
    return (
        <div className="text-white my-20" id='skills'>
            <div>
                <SectionTitle title='My' subtitle='Skills'></SectionTitle>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-10'>
                <div className='text-center p-8 shadow-lg shadow-orange-500 rounded-lg hover:scale-110 transform transition-all duration-300'>
                    {/* <span>HTML</span><FaHtml5 className='text-2xl'></FaHtml5> */}
                    <div className='mb-3'>
                        <img className='mx-auto w-20 mb-2' src={html} alt="" />
                        <h4>HTML</h4>
                    </div>
                    <div className="flex w-full gap-2">
                        <label
                            id="p01e-label"
                            className="order-2 mb-0 text-center text-xs text-white"
                        >
                            <span className="sr-only">uploading</span> 95%
                        </label>
                        <progress
                            aria-labelledby="p01e-label"
                            id="p01e"
                            max="100"
                            value="95"
                            className="h-2 mt-1 block w-full overflow-hidden rounded bg-gray [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
                        >
                            25%
                        </progress>
                    </div>
                </div>
                <div className='text-center p-8 shadow-lg shadow-sky-400 rounded-lg hover:scale-110 transform transition-all duration-300'>
                    {/* <span>HTML</span><FaHtml5 className='text-2xl'></FaHtml5> */}
                    <div className='mb-3'>
                        <img className='mx-auto w-20 mb-2' src={css} alt="" />
                        <h4>CSS</h4>
                    </div>
                    <div className="flex w-full gap-2">
                        <label
                            id="p01e-label"
                            className="order-2 mb-0 text-center text-xs text-white"
                        >
                            <span className="sr-only">uploading</span> 95%
                        </label>
                        <progress
                            aria-labelledby="p01e-label"
                            id="p01e"
                            max="100"
                            value="95"
                            className="h-2 mt-1 block w-full overflow-hidden rounded bg-gray [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
                        >
                            25%
                        </progress>
                    </div>
                </div>
                <div className='text-center p-8 shadow-lg shadow-cyan-600 rounded-lg hover:scale-110 transform transition-all duration-300'>
                    {/* <span>HTML</span><FaHtml5 className='text-2xl'></FaHtml5> */}
                    <div className='mb-3'>
                        <img className='mx-auto w-20 mb-2' src={tailwind} alt="" />
                        <h4>Tailwind CSS</h4>
                    </div>
                    <div className="flex w-full gap-2">
                        <label
                            id="p01e-label"
                            className="order-2 mb-0 text-center text-xs text-white"
                        >
                            <span className="sr-only">uploading</span> 95%
                        </label>
                        <progress
                            aria-labelledby="p01e-label"
                            id="p01e"
                            max="100"
                            value="95"
                            className="h-2 mt-1 block w-full overflow-hidden rounded bg-gray [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
                        >
                            25%
                        </progress>
                    </div>
                </div>
                <div className='text-center p-8 shadow-lg shadow-purple-900 rounded-lg hover:scale-110 transform transition-all duration-300'>
                    {/* <span>HTML</span><FaHtml5 className='text-2xl'></FaHtml5> */}
                    <div className='mb-3'>
                        <img className='mx-auto w-20 mb-2' src={bootstrap} alt="" />
                        <h4>Bootstrap</h4>
                    </div>
                    <div className="flex w-full gap-2">
                        <label
                            id="p01e-label"
                            className="order-2 mb-0 text-center text-xs text-white"
                        >
                            <span className="sr-only">uploading</span> 95%
                        </label>
                        <progress
                            aria-labelledby="p01e-label"
                            id="p01e"
                            max="100"
                            value="95"
                            className="h-2 mt-1 block w-full overflow-hidden rounded bg-gray [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
                        >
                            25%
                        </progress>
                    </div>
                </div>
                <div className='text-center p-8 shadow-lg shadow-yellow-500 rounded-lg hover:scale-110 transform transition-all duration-300'>
                    {/* <span>HTML</span><FaHtml5 className='text-2xl'></FaHtml5> */}
                    <div className='mb-3'>
                        <img className='mx-auto w-20 mb-2' src={javascript} alt="" />
                        <h4>JavaScript</h4>
                    </div>
                    <div className="flex w-full gap-2">
                        <label
                            id="p01e-label"
                            className="order-2 mb-0 text-center text-xs text-white"
                        >
                            <span className="sr-only">uploading</span> 85%
                        </label>
                        <progress
                            aria-labelledby="p01e-label"
                            id="p01e"
                            max="100"
                            value="85"
                            className="h-2 mt-1 block w-full overflow-hidden rounded bg-gray [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
                        >
                            25%
                        </progress>
                    </div>
                </div>
                <div className='text-center p-8 shadow-lg shadow-sky-700 rounded-lg hover:scale-110 transform transition-all duration-300'>
                    {/* <span>HTML</span><FaHtml5 className='text-2xl'></FaHtml5> */}
                    <div className='mb-3'>
                        <img className='mx-auto w-20 mb-2' src={react} alt="" />
                        <h4>React</h4>
                    </div>
                    <div className="flex w-full gap-2">
                        <label
                            id="p01e-label"
                            className="order-2 mb-0 text-center text-xs text-white"
                        >
                            <span className="sr-only">uploading</span> 90%
                        </label>
                        <progress
                            aria-labelledby="p01e-label"
                            id="p01e"
                            max="100"
                            value="90"
                            className="h-2 mt-1 block w-full overflow-hidden rounded bg-gray [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
                        >
                            25%
                        </progress>
                    </div>
                </div>
                <div className='text-center p-8 shadow-lg shadow-green-800 rounded-lg hover:scale-110 transform transition-all duration-300'>
                    {/* <span>HTML</span><FaHtml5 className='text-2xl'></FaHtml5> */}
                    <div className='mb-3'>
                        <img className='mx-auto w-20 mb-2' src={nodejs} alt="" />
                        <h4>NodeJS</h4>
                    </div>
                    <div className="flex w-full gap-2">
                        <label
                            id="p01e-label"
                            className="order-2 mb-0 text-center text-xs text-white"
                        >
                            <span className="sr-only">uploading</span> 90%
                        </label>
                        <progress
                            aria-labelledby="p01e-label"
                            id="p01e"
                            max="100"
                            value="90"
                            className="h-2 mt-1 block w-full overflow-hidden rounded bg-gray [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
                        >
                            25%
                        </progress>
                    </div>
                </div>
                <div className='text-center p-8 shadow-lg shadow-white rounded-lg hover:scale-110 transform transition-all duration-300'>
                    {/* <span>HTML</span><FaHtml5 className='text-2xl'></FaHtml5> */}
                    <div className='mb-3'>
                        <img className='mx-auto w-20 mb-2' src={expressjs} alt="" />
                        <h4>ExpressJS</h4>
                    </div>
                    <div className="flex w-full gap-2">
                        <label
                            id="p01e-label"
                            className="order-2 mb-0 text-center text-xs text-white"
                        >
                            <span className="sr-only">uploading</span> 85%
                        </label>
                        <progress
                            aria-labelledby="p01e-label"
                            id="p01e"
                            max="100"
                            value="85"
                            className="h-2 mt-1 block w-full overflow-hidden rounded bg-gray [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
                        >
                            25%
                        </progress>
                    </div>
                </div>
                <div className='text-center p-8 shadow-lg shadow-green-600 rounded-lg hover:scale-110 transform transition-all duration-300'>
                    {/* <span>HTML</span><FaHtml5 className='text-2xl'></FaHtml5> */}
                    <div className='mb-3'>
                        <img className='mx-auto w-20 mb-2' src={mongodb} alt="" />
                        <h4>MongoDB</h4>
                    </div>
                    <div className="flex w-full gap-2">
                        <label
                            id="p01e-label"
                            className="order-2 mb-0 text-center text-xs text-white"
                        >
                            <span className="sr-only">uploading</span> 85%
                        </label>
                        <progress
                            aria-labelledby="p01e-label"
                            id="p01e"
                            max="100"
                            value="85"
                            className="h-2 mt-1 block w-full overflow-hidden rounded bg-gray [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
                        >
                            25%
                        </progress>
                    </div>
                </div>
                <div className='text-center p-8 shadow-lg shadow-orange-400 rounded-lg hover:scale-110 transform transition-all duration-300'>
                    {/* <span>HTML</span><FaHtml5 className='text-2xl'></FaHtml5> */}
                    <div className='mb-3'>
                        <img className='mx-auto w-20 mb-2' src={firebase} alt="" />
                        <h4>Firebase</h4>
                    </div>
                    <div className="flex w-full gap-2">
                        <label
                            id="p01e-label"
                            className="order-2 mb-0 text-center text-xs text-white"
                        >
                            <span className="sr-only">uploading</span> 95%
                        </label>
                        <progress
                            aria-labelledby="p01e-label"
                            id="p01e"
                            max="100"
                            value="95"
                            className="h-2 mt-1 block w-full overflow-hidden rounded bg-gray [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
                        >
                            25%
                        </progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkill;