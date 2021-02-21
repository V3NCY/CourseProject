import Carousel from "../components/carousel/carousel";
import Calendar from "../components/calendar/calendar";
import BackgroundVideo from "../components/video/background";


function Home (props){
        return <>
            <BackgroundVideo/>
            <div className="container">
                <Carousel/>
                <div className="mt-3">
                    <Calendar/>
                </div>
                <div className="mt-5">   
                </div>
            </div>
        </>
}
export default Home;