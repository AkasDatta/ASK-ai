import Accordion from "./Home/Accordion/Accordion";
import Banner from "./Home/Banner/Banner";
import PricingTable from "./Home/PricingTable/PricingTable";
import Testimonial from "./Home/Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Testimonial></Testimonial>
            <PricingTable></PricingTable>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;