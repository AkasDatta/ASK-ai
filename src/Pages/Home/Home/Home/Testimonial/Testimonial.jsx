import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import { FaTwitter } from 'react-icons/fa';

const Testimonial = () => {
    const options = {
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            }
        }
    };

    return (
        <div className="bg-[#F9FAFB] px-5 max-w-screen-2xl mx-auto lg:px-10 overflow-x-hidden py-10 md:py-20 lg:py-24">
            <h2 className="text-center text-2xl md:text-5xl lg:text-5xl font-bold text-gray-800">
                What More Users Say <br />About Ask Ai?
            </h2>

            <div className='max-w-screen-xl mx-auto pt-8 md:pt-20 lg:pt-24'>
                <OwlCarousel className="owl-theme" {...options}>
                    <div className="item">
                        <div className='bg-gray-800 rounded-xl'>
                            <div
                                className="group bg-black border border-solid border-gray-300 rounded-xl p-8 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                                <div className="">
                                    <div className="flex items-center mb-7 gap-6 text-white file:transition-all duration-500  ">
                                        <h2 className='text-xl text-gray-300 pe-8'>
                                            “Ask Ai keeps innovating in the AI space.  Traffic Monster is unbelievable.  I am looking forward to seeing the datapoints from this."
                                        </h2>
                                        <span className=" font-semibold text-white text-xl absolute top-0 right-0 mt-2 mr-2 pt-8 pe-8 "><FaTwitter /></span>

                                    </div>
                                    
                                </div>
                                <div className=" border-t border-solid border-gray-200 pt-5">
                                    <div className="flex gap-4">
                                        <div>
                                            <img
                                            alt=""
                                            src="https://images.unsplash.com/profile-1673549329853-4c1a89707ebcimage?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                                            className=" w-12 h-12 rounded-full"
                                            />
                                        </div>

                                        <div>
                                        <h3 className="text-lg text-gray-200">JAMAL WOODLEY</h3>
                                        <p className="text-lg text-gray-200" >Mindmade Brands</p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className='bg-gray-800 rounded-xl'>
                            <div
                                className="group bg-black border border-solid border-gray-300 rounded-xl p-8 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                                <div className="">
                                    <div className="flex items-center mb-7 gap-6 text-white file:transition-all duration-500  ">
                                        <h2 className='text-xl text-gray-300 pe-8'>
                                            “We were one of the first to use this tool.  It's very impressive.  I think this is something that every entrepreneur will be excited about..
                                        </h2>
                                        <span className=" font-semibold text-white text-xl absolute top-0 right-0 mt-2 mr-2 pt-8 pe-8 "><FaTwitter /></span>

                                    </div>
                                    
                                </div>
                                <div className=" border-t border-solid border-gray-200 pt-5">
                                    <div className="flex gap-4">
                                        <div>
                                            <img
                                            alt=""
                                            src="https://images.unsplash.com/profile-1640617386311-ae373bf421cb?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                                            className=" w-12 h-12 rounded-full"
                                            />
                                        </div>

                                        <div>
                                        <h3 className="text-lg text-gray-200"> KRISTINA BRUHAHN</h3>                  <p className="text-lg text-gray-200  " >Continuum</p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className='bg-gray-800 rounded-xl'>
                            <div
                                className="group bg-black border border-solid border-gray-300 rounded-xl p-8 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                                <div className="">
                                    <div className="flex items-center mb-7 gap-6 text-white file:transition-all duration-500  ">
                                        <h2 className='text-xl text-gray-300 pe-8'>
                                            “Traffic Monster solves a problem that every business encounters.  How do you get traffic and leads and ultimately sales to your business."
                                        </h2>
                                        <span className=" font-semibold text-white text-xl absolute top-0 right-0 mt-2 mr-2 pt-8 pe-8 "><FaTwitter /></span>

                                    </div>
                                    
                                </div>
                                <div className=" border-t border-solid border-gray-200 pt-5">
                                    <div className="flex gap-4">
                                        <div>
                                            <img
                                            alt=""
                                            src="https://images.unsplash.com/profile-1586620491173-afd32dbd0c0cimage?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                                            className=" w-12 h-12 rounded-full"
                                            />
                                        </div>

                                        <div>
                                        <h3 className="text-lg text-gray-200">KURT KUMAR</h3>
                                        <p className="text-lg text-gray-200">SAPX</p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Testimonial;
