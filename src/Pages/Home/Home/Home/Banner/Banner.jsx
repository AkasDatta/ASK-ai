import BannerDown from "./BannerDown/BannerDown";

const Banner = () => {
    return (
        <div>
            <div className="text-center pt-6 md:pt-20 lg:pt-24">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800">Ask questions <br /></h2>
            </div>
            <BannerDown></BannerDown>
        </div>
    );
};

export default Banner;