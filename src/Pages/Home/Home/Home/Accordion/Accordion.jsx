import { FaArrowRight } from "react-icons/fa";

const Accordion = () => {
    return (
        <div className="bg-[#F9FAFB] px-5 max-w-screen-2xl mx-auto lg:px-10 overflow-x-hidden py-10 md:py-20 lg:py-24 text-center">
            <div className='flex justify-center py-4 md:py-6 lg:pb-6'>
                <p className="px-5 py-2 text-xs md:text-2xl lg:text-2xl text-[#344054] font-semibold bg-blue-50 rounded-full">
                    Have Questions About Pricing?
                </p>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 pb-6 md:pb-8 lg:pb-8">
                Frequently Asked Questions
            </h2>
            <div className="flex justify-center">
                <button className="text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-6 py-2.5 text-center flex gap-2 justify-center">Contact support <FaArrowRight className="mt-1"/></button>
            </div>
            
        </div>
    );
};

export default Accordion;