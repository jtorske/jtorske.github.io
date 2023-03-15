import React from 'react';
import "../styles/Home.css"
function Home() {
  return (
    <>
      <div className="body-container">
        <div1>
          <img src="https://cdn.discordapp.com/attachments/843903601377804368/1073031875783819295/IMG_1660.jpg" alt="Image could not be opened..." />
          <h1 className="s0">Jordan Torske</h1>
          <h1 className="s1">Software Engineering</h1>
          <h1 className="s2">jordan.torske@outlook.com</h1>
        </div1>
        <div>
          <h1>About</h1>
          <br />
          <p>I am a software engineering student at the University of Calgary, where I am honing my skills in the development 
            and design of software applications. With a passion for technology and innovation, I strive to create efficient 
            and user-friendly software that solves real-world problems. Throughout my studies, I have gained hands-on experience 
            in various programming languages and software development methodologies, and I am eager to bring my knowledge and skills 
            to the industry. My ultimate goal is to make a positive impact on the world through my work in the tech sector.<br /><br />  
            Key skills:
            <br /> 
          </p>
          <table>
            <tr>
              <td>
                <input type="checkbox" defaultChecked={true} />Fast Learner
              </td>
              <td>
                <input type="checkbox" defaultChecked={true} />Efficient Under Pressure
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" defaultChecked={true} />Team Player
              </td>
              <td>
                <input type="checkbox" defaultChecked={true} />Problem Solver
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" defaultChecked={true} />Accuracy and Attention to Detail
              </td>
              <td>
                <input type="checkbox" defaultChecked={true} />Fluent in Multiple Programming Languages
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
