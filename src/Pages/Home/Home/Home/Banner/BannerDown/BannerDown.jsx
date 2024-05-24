import './BannerDown.css';
import simpleVideo from "../../../../../../assets/Banner/samplevideo.mp4";
import { useRef, useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const BannerDown = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };



    return (
        <div className='relative pb-0 lg:pb-72 xl:pb-80'>
            <div className="bg-container text-center rounded-lg">
                <div className='px-2 md:px-0 lg:px-0'>
                    <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800"> from <span className="text-blue-500">any document</span></h2>
                    <p className="py-4 md:py-8 lg:py-10 text-xs md:text-2xl lg:text-2xl max-w-screen-sm mx-auto text-[#344054] font-semibold">
                        Upload your PDF or DOC files and get instant answers to your questions with our AI-powered system
                    </p>
                    <button className="bg-blue-500 text-white  duration-200 font-bold px-14 py-3 rounded-lg mt-4 mb-8 focus:border-4 focus:border-gray-200">
                        Upload Your File
                    </button>

                    <div className='border bg-[#F5FBFF] max-w-screen-sm mx-auto p-5 rounded-lg'>
                        <textarea id="message" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search in PDF..."></textarea>
                    </div>
                </div>
                <div className='mt-8 p-5'>
                    <div className='relative border-4 2xl:mx-48 xl:mx-40 border-[#9fa1fe] rounded-xl shadow-2xl'>
                        <video
                            ref={videoRef}
                            src={simpleVideo}
                            width='1080px'
                            height='720px'
                            className='mx-auto rounded-lg'
                            onClick={() => {
                                if (isPlaying) {
                                    videoRef.current.pause();
                                    setIsPlaying(false);
                                } else {
                                    handlePlayClick();
                                }
                            }}
                        ></video>
                        {!isPlaying && (
                            <div
                                className='absolute inset-0 flex items-center justify-center cursor-pointer'
                                onClick={handlePlayClick}
                            >
                                <FaPlayCircle className='text-3xl md:text-6xl lg:text-6xl text-[#B042E3] bg-white rounded-full m-0 p-0' />
                            </div>
                        )}
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default BannerDown;
