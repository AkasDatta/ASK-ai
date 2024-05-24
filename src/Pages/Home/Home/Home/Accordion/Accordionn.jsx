import { FaArrowRight } from "react-icons/fa";

const Accordionn = () => {
  return (

    <div className="bg-[#F9FAFB] px-5 max-w-screen-2xl mx-auto lg:px-10 overflow-x-hidden py-10 md:py-20 lg:py-24 text-center">
            <div className='flex justify-center py-4 md:py-6 lg:pb-6'>
                <p className="px-5 py-2 text-xs md:text-xl lg:text-xl text-[#344054] font-semibold bg-blue-50 rounded-full">
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

                <details className="w-full bg-white my-4 border hover:border-blue-700 rounded-lg">
                    <summary className="w-full bg-white text-dark flex justify-between  py-3  text-lg font-bold text-left px-5 text-black after:content-['+'] rounded-lg">Is there a 30-day money back guarantee?</summary>
                    <p className=" pb-4 px-5">
                        Hello
                    </p>
                </details>
                <details className="w-full bg-white my-4 border hover:border-blue-700 rounded-lg">
                    <summary className="w-full bg-white text-dark flex justify-between  py-3  text-lg font-bold text-left px-5 text-black after:content-['+'] rounded-lg">Can I change my plan later on?</summary>
                    <p className=" pb-4 px-5">
                        Hello
                    </p>
                </details>
                <details className="w-full bg-white my-4 border hover:border-blue-700 rounded-lg">
                    <summary className="w-full bg-white text-dark flex justify-between  py-3  text-lg font-bold text-left px-5 text-black after:content-['+'] rounded-lg">Can I use a custom domain?</summary>
                    <p className=" pb-4 px-5">
                        Yes. You can use your custom domain when you have “Traffic Monster” Plan.
                    </p>
                </details>
                <details className="w-full bg-white my-4 border hover:border-blue-700 rounded-lg">
                    <summary className="w-full bg-white text-dark flex justify-between  py-3  text-lg font-bold text-left px-5 text-black after:content-['+'] rounded-lg"> What are Ask AI?</summary>
                    <p className=" pb-4 px-5">
                        Hello
                    </p>
                </details>
                        
                <style>
                    {`
                        details summary::-webkit-details-marker {
                            display: none;
                        }

                        details[open] summary {
                            background: white;
                            color: black;
                        }

                        details[open] summary::after {
                            content: "-";
                        }

                        details[open] summary ~ * {
                            animation: slideDown 0.3s ease-in-out;
                            text-align: left;
                            color:black;
                        }

                        details[open] summary p {
                            opacity: 0;
                            animation-name: showContent;
                            animation-duration: 0.6s;
                            animation-delay: 0.2s;
                            animation-fill-mode: forwards;
                            margin: 0;
                        }

                        @keyframes showContent {
                            from {
                                opacity: 0;
                                height: 0;
                                }
                                to {
                                opacity: 1;
                                height: auto;
                                }
                            }

                        @keyframes slideDown {
                            from {
                                opacity: 0;
                                height: 0;
                                padding: 0;
                                }

                            to {
                                opacity: 1;
                                height: auto;
                                }
                        }
                    `}
                </style>
            </div>
    </div>
  
    
  );
};

export default Accordionn;
