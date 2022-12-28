import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit, faGithub, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import './App.css';

function App() {
  return (
    <div>
      <div>
        Welcome to ProCodes
      </div>
      <div>
        <FontAwesomeIcon icon={faReact} style={{ color: "#61DAFB" }} id="Icon" />
        <FontAwesomeIcon icon={faNodeJs} style={{ color: "#036E01" }} id="Icon" />
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} id="Icon" />
        <FontAwesomeIcon icon={faGit} id="Icon" />
      </div>
      <div>
        B.V., certificated full stack developer
      </div>
    </div>
  );
}

export default App;
