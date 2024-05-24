import BannerDown from "./BannerDown/BannerDown";

const Banner = () => {
    return (
        <div className="px-5 py-4 max-w-screen-2xl mx-auto lg:px-10 overflow-x-hidden pb-5 md:pb-96 lg:pb-72 xl:pb-80">
            <div className="text-center pt-6 md:pt-20 lg:pt-24">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800">Ask questions <br /></h2>
            </div>
            <BannerDown className="pb-0"></BannerDown>
        </div>
    );
};

export default Banner;


 