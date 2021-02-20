import PriceB from "../components/price/priceMuseums";
import PriceA from "../components/price/pricePool";
import Navbar from "../components/navbar/Navbar";


function Prices (props){

        return <>
        <div className="container">
            <div className="row">
            <Navbar/>            
            <div className="col-mt-4">
                 <h1>Цени</h1>
            <PriceA/>
            <PriceB/>
            </div>
            <div class="d-flex flex-column">
                </div>
            </div>
        </div>
        </>
                   
    }
    export default Prices;