
import { MdOutlineEmail, MdCall, MdLocationOn } from 'react-icons/md';

const GetTouch = () => {
    return (
        <div>
            <div className="text-center mt-10 text-white">
                <h1 className="text-5xl font-bold mb-4">Get in touch!</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex gap-14 py-12">
                <div className="my-10">
                    <h1 className="text-3xl text-white font-bold mb-4">Contact Info</h1>
                    <ul
                        aria-label="Activity feed"
                        role="feed"
                        className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
                    >
                        <li role="article" className="relative pl-6">
                            <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
                                <MdLocationOn></MdLocationOn>
                            </span>
                            <div className="flex flex-col flex-1 gap-0">
                                <h4 className="text-sm font-medium text-white mt-2">
                                    Sylhet, Bangladesh
                                </h4>
                            </div>
                        </li>
                        <li role="article" className="relative pl-6">
                            <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
                                <MdOutlineEmail></MdOutlineEmail>
                            </span>
                            <div className="flex flex-col flex-1 gap-0">
                                <h4 className="text-sm font-medium text-white mt-2">
                                    muhimuddintanim@gmail.com
                                </h4>
                            </div>
                        </li>
                        <li role="article" className="relative pl-6">
                            <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
                                <MdCall></MdCall>
                            </span>
                            <div className="flex flex-col flex-1 gap-0">
                                <h4 className="text-sm font-medium text-white mt-2">
                                    +88 01746404687 (WhatsApp)
                                </h4>
                            </div>
                        </li>

                    </ul>
                </div>

                {/*<!-- Component: Card with form --> */}
                <form className="w-8/12 overflow-hidden rounded bg-black text-slate-500 ">
                    {/*  <!-- Body--> */}
                    <div className="p-6 text-white">
                        <header className="mb-4">
                            <h3 className="text-xl font-medium text-white text-slate-700">Message me!!</h3>
                        </header>
                        <div className="flex flex-col space-y-8">
                            {/*      <!-- Input field --> */}
                            <div className="grid grid-cols-2 -mb-5 gap-x-5">
                                <div className="relative my-6">
                                    <input
                                        id="id-b03"
                                        type="text"
                                        name="id-b03"
                                        placeholder="your name"
                                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-white-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed bg-transparent disabled:text-slate-400"
                                    />
                                    <label
                                        htmlFor="id-b03"
                                        className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                    >
                                        Name *
                                    </label>
                                </div>
                                <div className="relative my-6">
                                    <input
                                        id="id-b03"
                                        type="email"
                                        name="id-b03"
                                        placeholder="your name"
                                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-white-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed bg-transparent disabled:text-slate-400"
                                    />
                                    <label
                                        htmlFor="id-b03"
                                        className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                    >
                                        Email *
                                    </label>
                                </div>

                            </div>
                            <div className="relative my-6">
                                <input
                                    id="id-b03"
                                    type="text"
                                    name="id-b03"
                                    placeholder="Subject"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-white-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed bg-transparent disabled:text-slate-400"
                                />
                                <label
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Subject *
                                </label>
                            </div>
                            <div className="relative my-6">
                                <textarea
                                    id="id-b03"
                                    type="email"
                                    name="id-b03"
                                    placeholder="your message"
                                    className="h-32 peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-white-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed bg-transparent disabled:text-slate-400"
                                ></textarea>

                                <label
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Your message*
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-end p-6 ">
                        <button className="text-black inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-white px-5 text-sm font-medium tracking-wide transition duration-300 hover:bg-gray-800 focus:bg-gray-800 focus-visible:outline-none disabled:cursor-not-allowed">
                            <span>Send Message</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GetTouch;