
import Muze from "../components/museums/museum";
import Navbar from "../components/navbar/Navbar";


function Museums (props){

        return <>
        <div className="container">
            <div className="row">
            <Navbar/>            
            <div className="row mt-4">
            <Muze/>
            </div>
            </div>
        </div>
        </>
                   
    }
    export default Museums;