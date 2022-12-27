import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit, faGithub, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import './App.css';

function App() {
  return (
    <div className="App">
      <div><FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faJs} /></div>
      <div><FontAwesomeIcon icon={faGithub} /> <FontAwesomeIcon icon={faGit} /></div>
    </div>
  );
}

export default App;
