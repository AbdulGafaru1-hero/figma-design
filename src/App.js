import {BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';
import LinkButton from './LinkButton';

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
            <LinkButton className="link-button"/>
          
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
//npm install -g firebase-tools
//firebase login
//firebase init
//firebase deploy
export default App;
