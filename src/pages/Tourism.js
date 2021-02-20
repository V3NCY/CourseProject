import Tour from "../components/tourism/tour";
import Navbar from "../components/navbar/Navbar";


function Tourism (props){

        return <>
        <div className="container">
            <div className="row">
            <Navbar/>            
            <div className="row mt-4">
            <Tour/>
            </div>
            <div class="d-flex flex-column">
                </div>
            </div>
        </div>
        </>
                   
    }
    export default Tourism;