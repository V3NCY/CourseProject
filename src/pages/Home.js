import Carousel from "../components/carousel/carousel";
import Calendar from "../components/calendar/calendar";
import BackgroundVideo from "../components/video/background";
import Statistics from "../components/contact/statistics";

function Home (props){
        return <>
            <BackgroundVideo/>
            <div className="container">
                <Carousel/>
                <div className="mt-3">
                    <Calendar/>
                </div>
                <div className="mt-5">   
                    <Statistics/>       
                </div>
            </div>
        </>
}
export default Home;