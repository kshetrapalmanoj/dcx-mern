// import './css/style.css';
import img from "../images/web.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";

import { UserContext } from "./Home";
import { useContext } from "react";

function Dashboard() {
  const context = useContext(UserContext);

  return (
    <div>
      <div id="container">
        <Header />
      </div>
      <div id="container"  data-testid="dashboard">
        <aside>
          <nav id="leftMenu">
            {console.log(context)}
            <h3>Links</h3>
            <ul>
              <li>
                <Link to="/dashboard">SEO</Link>
              </li>
              <li>
                <Link to="/dashboard">PHP</Link>
              </li>
              <li>
                <Link to="/dashboard">Ajax</Link>
              </li>
              <li>
                <Link to="/dashboard">jQuery</Link>
              </li>
              <li>
                <Link to="/dashboard">Web design</Link>
              </li>
              <li>
                <Link to="/dashboard">Web Programming</Link>
              </li>
              <li>
                <Link to="/dashboard">Content Creation</Link>
              </li>
              <li>
                <Link to="/dashboard">Internet Marketing</Link>
              </li>
              <li>
                <Link to="/dashboard">XHTML Templates</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <section>
          <h2>Welcome to DCX Developer Directory!</h2>
          <img className="float" src={img} alt="web developer directory" />
          <h3>Who Are We?</h3>
          <p>
            We are a fictional website and service that list top web developers
            around the world. Search and browse fictional web developers on our
            website absolutley FREE!
          </p>
          <h3>What Skills Do Our Developers Have?</h3>
          <p>
            Our listed fictional web developers skill ranges from Graphic design
            with Photoshop, Illustrator and Fireworks to markup languages like
            HTML5, XHTML and XML to programming languages such as Javascript,
            PHP, Python and ASP
          </p>
        </section>
      </div>

      <div style={{ clear: "both" }}></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer>Copyright 2017. DCX Developer Directory.</footer>
    </div>
  );
}

export default Dashboard;
