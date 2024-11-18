import './skills.css'
import 'react-multi-carousel/lib/styles.css';
import reactLogo from "../../assets/img/react-2.svg";
import angularLogo from "../../assets/img/angular-icon-1.svg";
import jsLogo from "../../assets/img/javascript-1.svg";
import htmlLogo from "../../assets/img/html-1.svg";
import cssLogo from "../../assets/img/css-3.svg";
import reactNativeLogo from "../../assets/img/react-native-1.svg"
import nodeLogo from "../../assets/img/nodejs-3.svg"
import firebaseLogo from "../../assets/img/firebase-1.svg"
import TPLogo from "../../assets/img/typescript.svg"
import javaLogo from "../../assets/img/java-4.svg";
import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of the technologies I work with:</p>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src={reactLogo} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="skill-item">
                  <img src={angularLogo} alt="Angular" />
                  <h5>Angular</h5>
                </div>
                <div className="skill-item">
                  <img src={jsLogo} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="skill-item">
                  <img src={TPLogo} alt="Typescript" />
                  <h5>Typescript</h5>
                </div>
                <div className="skill-item">
                  <img src={htmlLogo} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="skill-item">
                  <img src={cssLogo} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="skill-item">
                  <img src={reactNativeLogo} alt="React Native" />
                  <h5>React Native</h5>
                </div>
                <div className="skill-item">
                  <img src={nodeLogo} alt="Node.js" />
                  <h5>Node.js</h5>
                </div>
                <div className="skill-item">
                  <img src={firebaseLogo} alt="Firebase" />
                  <h5>Firebase</h5>
                </div>
                <div className="skill-item">
                  <img src={javaLogo} alt="Java" />
                  <h5>Java</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
