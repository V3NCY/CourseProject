import Cultr from "../components/culture/cultr";
import Navbar from "../components/navbar/Navbar";


function Culture (props){

        return <>
        <div className="container">
            <div className="row">
            <Navbar/>            
            <div className="row mt-4">
            </div>
            <div class="d-flex flex-column">
            <Cultr/>
                </div>
            </div>
        </div>
        </>
                   
    }
    export default Culture;