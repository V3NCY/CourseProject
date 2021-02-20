import Transp from "../components/transport/transport";
import Navbar from "../components/navbar/Navbar";


function Transport (props){

        return <>
        <div className="container">
            <div className="row">
            <Navbar/>            
            <div className="row mt-4">
                 <h1>Транспорт</h1>
            <Transp/>
            </div>
            <div class="d-flex flex-column">
                </div>
            </div>
        </div>
        </>
                   
    }
    export default Transport;