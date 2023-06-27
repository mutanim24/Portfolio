
// import { FaHtml5, FaBootstrap, FaReact } from 'react-icons/fa';
// import { DiCss3 } from 'react-icons/di';
// import { SiTailwindcss, SiJavascript } from 'react-icons/si';
import html from '../../../assets/html.png'


const MySkill = () => {
    return (
        <div className="text-white my-20">
            <div className="text-center my-10">
                <h1 className="text-5xl font-bold mb-4">My skill</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                <div className='text-center p-8 shadow-lg shadow-orange-400 rounded-lg hover:scale-110 transform transition-all duration-300'>
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
                <div className='text-center p-8 shadow-lg shadow-orange-400 rounded-lg hover:scale-110 transform transition-all duration-300'>
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
                <div className='text-center p-8 shadow-lg shadow-orange-400 rounded-lg hover:scale-110 transform transition-all duration-300'>
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
                <div className='text-center p-8 shadow-lg shadow-orange-400 rounded-lg hover:scale-110 transform transition-all duration-300'>
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
                <div className='text-center p-8 shadow-lg shadow-orange-400 rounded-lg hover:scale-110 transform transition-all duration-300'>
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
            </div>
        </div>
    );
};

export default MySkill;