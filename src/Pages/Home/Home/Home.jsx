import Accordionn from "./Home/Accordion/Accordionn";
import Banner from "./Home/Banner/Banner";
import PricingTable from "./Home/PricingTable/PricingTable";
import Testimonial from "./Home/Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Testimonial></Testimonial>
            <PricingTable></PricingTable>
            <Accordionn></Accordionn>
        </div>
    );
};

export default Home;