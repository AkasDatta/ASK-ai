import './BannerDown.css';

const BannerDown = () => {
    return (
        <div className='relative'>
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
                
            </div>   
        </div>
    );
};

export default BannerDown;
