import React from 'react'
import "../styles/Skills.css"

function Skills() {
  return ( <>
        <div className="body-container">
        <div1>
          <img src="https://cdn.discordapp.com/attachments/843903601377804368/1073031875783819295/IMG_1660.jpg" alt="Image could not be opened..." />
          <h1 className="s0">Jordan Torske</h1>
          <h1 className="s1">Software Engineering</h1>
          <h1 className="s2">jordan.torske@outlook.com</h1>
        </div1>

    <div className="skills">
    <h1>Skills</h1>
    <li>

<li>
  <h3>Python</h3>
  <span className="bar"><span className="python"></span></span>
</li>
<li>
  <h3>C/C++</h3>
  <span className="bar"><span className="c"></span></span>
</li>
<h3>HTML/CSS</h3>
  <span className="bar"><span className="html"></span></span>
</li>

    </div>
            </div>
</>
  )
}

export default Skills