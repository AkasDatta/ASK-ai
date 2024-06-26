import { FaArrowRight, FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";

const PricingTable = () => {
    const [isMonthly, setIsMonthly] = useState(false);

    const yearlyPrices = {
        basics: 82.5,
        pro: 165.8,
        ultraPro: 249.16
    };

    const monthlyPrices = {
        basics: yearlyPrices.basics / 12,
        pro: yearlyPrices.pro / 12,
        ultraPro: yearlyPrices.ultraPro / 12
    };

    const prices = isMonthly ? monthlyPrices : yearlyPrices;

    return (
        <div className="bg-white px-5 max-w-screen-2xl mx-auto lg:px-10 overflow-x-hidden py-10 md:py-20 lg:py-24 text-center">
            <h2 className="text-2xl md:text-5xl lg:text-5xl font-bold text-gray-800">
                Choose Your Plan And Start <br />Your Free <span className="text-blue-500">7-Day Trial</span>
            </h2>
            <p className="py-4 md:py-8 lg:pt-8 lg:pb-0 text-xs md:text-2xl lg:text-2xl max-w-screen-sm mx-auto text-[#344054] font-semibold">
                Save up to $5,468/year with the ‘Ask AI’ plan
            </p>
            <div className='flex justify-center gap-8 text-xl'>
                <button 
                    onClick={() => setIsMonthly(false)}
                    className={`font-bold p-4 ${!isMonthly ? 'text-black border-black border-b-2' : 'text-[#344054]'}`}
                >
                    Yearly Discount
                </button>
                <button 
                    onClick={() => setIsMonthly(true)}
                    className={`font-bold p-4 ${isMonthly ? 'text-black border-black border-b-2' : 'text-[#344054]'}`}
                >
                    Monthly Plan
                </button>
            </div>

            <div className="">
                <section>
                    <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0">
                            {/* Pricing Card for Basics */}
                            <div className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white hover:bg-gray-900 rounded-2xl border border-blue-100 shadow hover:text-white">
                                <div className="bg-gray-50 hover:bg-gray-800 xl:p-8 p-6 rounded-t-2xl">
                                    <h3 className="mb-4 text-2xl font-extrabold">Basics</h3>
                                    <h3 className="mb-4 text-lg text-gray-500 font-bold line-through">Normally $99/mo.</h3>
                                    <h3 className="mb-4 text-xl font-extrabold">${prices.basics.toFixed(2)}/Month</h3>
                                    <h3 className="mb-4 text-xl font-bold">
                                        <span className="text-gray-500">Billed {isMonthly ? 'monthly' : 'annually'}</span>
                                        {isMonthly ? '(Save $22.76/year)' : ' (Save $198/year)'}
                                    </h3>
                                    <a href="#" className="text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2 justify-center">
                                        Start Free Trial <FaArrowRight className="mt-1"/>
                                    </a>
                                </div>
                                <div className="xl:p-8 p-6 rounded-t-2xl">
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>2 FREE content pages</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>20 new content pages per month</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>Personalized to your business</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>High Quality Mixed Content</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>SEO Optimized</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>​Instant Indexing with Google & Bing</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>Full Editing of all Blogs</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>Internal Page Links</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>​Call to Action (CTA) to any URL</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2 justify-center mx-8 mb-8 lg:mt-16 xl:mt-10 ">
                                    Start Free Trial <FaArrowRight className="mt-1"/>
                                </a>
                            </div>
                            {/* Pricing Card for Pro */}
                            <div className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white hover:bg-gray-900 rounded-2xl border border-blue-100 shadow hover:text-white">
                                <div className="bg-gray-50 hover:bg-gray-800 xl:p-8 p-6 rounded-t-2xl">
                                    <h3 className="mb-4 text-2xl font-extrabold">Pro</h3>
                                    <h3 className="mb-4 text-lg text-gray-500 font-bold line-through">Normally $199/mo.</h3>
                                    <h3 className="mb-4 text-xl font-extrabold">${prices.pro.toFixed(2)}/Month</h3>
                                    <h3 className="mb-4 text-xl font-bold">
                                        <span className="text-gray-500">Billed {isMonthly ? 'monthly' : 'annually'}</span>
                                        {isMonthly ? '(Save $36.64/year)' : ' (Save $398/year)'}
                                    </h3>
                                    <a href="#" className="text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2 justify-center">
                                        Start Free Trial <FaArrowRight className="mt-1"/>
                                    </a>
                                </div>
                                <div className="xl:p-8 p-6 rounded-t-2xl">
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>2 FREE content pages</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>50 new content pages per month</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>Personalized to your business</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>High Quality Mixed Content</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>SEO Optimized</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>​Instant Indexing with Google & Bing</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>Full Editing of all Blogs</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>Internal Page Links</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>​Call to Action (CTA) to any URL</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2 justify-center mx-8 mb-8 lg:mt-16 xl:mt-10 ">
                                    Start Free Trial <FaArrowRight className="mt-1"/>
                                </a>
                            </div>
                            {/* Pricing Card for Ultra Pro */}
                            <div className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white hover:bg-gray-900 rounded-2xl border border-blue-100 shadow hover:text-white">
                                <div className="bg-gray-50 hover:bg-gray-800 xl:p-8 p-6 rounded-t-2xl">
                                    <h3 className="mb-4 text-2xl font-extrabold">Ultra Pro</h3>
                                    <h3 className="mb-4 text-lg text-gray-500 font-bold line-through">Normally $299/mo.</h3>
                                    <h3 className="mb-4 text-xl font-extrabold">${prices.ultraPro.toFixed(2)}/Month</h3>
                                    <h3 className="mb-4 text-xl font-bold">
                                        <span className="text-gray-500">Billed {isMonthly ? 'monthly' : 'annually'}</span>
                                        {isMonthly ? '(Save $53.52/year)' : ' (Save $598/year)'}
                                    </h3>
                                    <a href="#" className="text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2 justify-center">
                                        Start Free Trial <FaArrowRight className="mt-1"/>
                                    </a>
                                </div>
                                <div className="xl:p-8 p-6 rounded-t-2xl">
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>2 FREE content pages</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>100 new content pages per month</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>Personalized to your business</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>High Quality Mixed Content</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>SEO Optimized</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>​Instant Indexing with Google & Bing</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>Full Editing of all Blogs</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>Internal Page Links</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <FaRegCheckCircle className="text-green-600 text-2xl"/>
                                            <span>​Call to Action (CTA) to any URL</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2 justify-center mx-8 mb-8 lg:mt-16 xl:mt-10 ">
                                    Start Free Trial <FaArrowRight className="mt-1"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PricingTable;
