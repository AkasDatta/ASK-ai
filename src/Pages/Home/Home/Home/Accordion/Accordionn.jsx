import { FaArrowRight } from "react-icons/fa";

const Accordionn = () => {
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
                <button className="text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-6 py-2.5 text-center flex gap-2 justify-center">
                    Contact support <FaArrowRight className="mt-1"/>
                </button>
            </div>

            <div className="py-10 max-w-screen-md mx-auto">
                <div className="collapse collapse-plus bg-white my-4 border focus:border focus:border-blue-700 rounded-lg" tabIndex="0" onClick={(e) => e.currentTarget.focus()}>
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-lg font-bold text-left px-5 text-black">
                        Is there a 30-day money back guarantee?
                    </div>
                    <div className="collapse-content text-left text-black"> 
                        <p className="p-2">hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white my-4 border focus:border focus:border-blue-700 rounded-lg" tabIndex="0" onClick={(e) => e.currentTarget.focus()}>
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-lg font-bold text-left px-5 text-black">
                        Can I change my plan later on?
                    </div>
                    <div className="collapse-content text-left text-black"> 
                        <p className="p-2">hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white my-4 border focus:border focus:border-blue-700 rounded-lg" tabIndex="0" onClick={(e) => e.currentTarget.focus()}>
                    <input type="radio" name="my-accordion-3" defaultChecked /> 
                    <div className="collapse-title text-lg font-bold text-left px-5 text-black">
                        Can I use a custom domain?
                    </div>
                    <div className="collapse-content text-left text-black"> 
                        <p className="p-2">Yes. You can use your custom domain when you have “Traffic Monster” Plan.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white my-4 border focus:border focus:border-blue-700 rounded-lg" tabIndex="0" onClick={(e) => e.currentTarget.focus()}>
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-lg font-bold text-left px-5 text-black">
                        What are Ask AI?
                    </div>
                    <div className="collapse-content text-left text-black"> 
                        <p className="p-2">hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordionn;
