import REACT from "react";
import { Link } from "react-router-dom";



export default function LinkButton(){
    return (
        <>

          <Link to="#" className="link-button"><button> Twitter Link</button></Link>  
          <Link to="#" className="link-button"><button> Zuri Team</button></Link>  
          <Link to="#" className="link-button"><button> Zuri Books</button></Link>  
          <Link to="#" className="link-button"><button> Python Books</button></Link>  
          <Link to="#" className="link-button"><button> Background Check for Coders</button></Link>  
          <Link to="#" className="link-button"><button> Design Books</button></Link> 
           
        </>

    )
}