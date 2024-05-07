import './About.css'
import me from '../images/me.png';

function About() {
    return (
        <div className="about-container">
            <h1 className="about-title">About</h1>
            <div className="content-boxes">

                <div className="content-box1">
                    <img src={me} alt="Placeholder" /></div>
                <div className="content-box2">
                    <p>I'm a third-year Software Engineering student at the University of Calgary with a passion in
                        front-end development. I have experience in numerous technologies such as Figma, React, and Angular, and have a deep understanding
                        of HTML/CSS, SASS, JavaScript, and TypeScript. <br></br><br></br>Besides front-end development, I love solving problems and challenging myself as an engineer, and I'm always
                        open to learning new things. Through my coursework, I've become proficient in numerous languages such as C/C++, Java, and Python, and I have areas of interest
                        in cybersecurity as well as machine learning. <br></br><br></br>When I'm not at my computer, I enjoy skiing, hiking, or playing soccer with my friends.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
