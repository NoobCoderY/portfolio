import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Yash</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
        <a  href={"https://www.linkedin.com/in/yashdiwaker/"} style={{textDecoration:"none"}}><LinkedInIcon /></a> 
        <a href={"yashdiwaker74@gmail.com"} style={{textDecoration:"none"}}> <EmailIcon /></a> 
        <a href={"https://github.com/NoobCoderY"} style={{textDecoration:"none"}}><GithubIcon /></a>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Programming</h2>
            <span>
            C++, Data Structures and Algorithm (C++), C, HTML, CSS, JavaScript, SQL
            </span>
          </li>
          <li className="item">
            <h2>Frameworks</h2>
            <span>
            React.js,Redux, Node.js, Express.js , MongoDb

            </span>
          </li>
          <li className="item">
            <h2>Technology</h2>
            <span>Git, MySQL, VSCode
</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
