import {BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';

function App() {
  const ProfileImage = "https://media.istockphoto.com/id/969233490/photo/young-african-woman-smiling-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=YpZQaMcBrcftg7P7OhZhR1fySRRwDI6ssSsc5ev7x-k=";
  return (
    <>
    <Router>
    <div className="app">
      
     <div className="profile">
        <img src={ProfileImage} alt="profile-image" />
        <h3>Annette Black</h3>
        </div>
        <div className="buttons">
          <Link to="#" className="link-button"><button> Twitter Link</button></Link>  
          <Link to="#" className="link-button"><button> Zuri Team</button></Link>  
          <Link to="#" className="link-button"><button> Zuri Books</button></Link>  
          <Link to="#" className="link-button"><button> Python Books</button></Link>  
          <Link to="#" className="link-button"><button> Background Check for Coders</button></Link>  
          <Link to="#" className="link-button"><button> Design Books</button></Link>  
        </div>
          <div className="bottom-icons">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" alt="slack" />
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
          </div>
          <hr />
          <div className="footer">
            
            <h3>Zuri <span>.</span> Internship</h3>
            
            <p>HNG Internship 9 Frontend Task</p>
          </div>
    </div>
      </Router>
      </>
  );
}

export default App;
