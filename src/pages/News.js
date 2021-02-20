import New from "../components/news/new";
import Navbar from "../components/navbar/Navbar";


function News (props){

        return <>
        <div className="container">
            <div className="row">
            <Navbar/>            
            <div className="row mt-4">
            <New/>
            </div>
            <div class="d-flex flex-column">
                </div>
            </div>
        </div>
        </>
                   
    }
    export default News;