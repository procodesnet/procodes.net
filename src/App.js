import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit, faGithub, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          Welcome to ProCodes
        </Col>
      </Row>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faReact} id="Icon" style={{ color: "#61DAFB" }} />
          <FontAwesomeIcon icon={faNodeJs} id="Icon" style={{ color: "#036E01" }} />
          <FontAwesomeIcon icon={faGithub} id="Icon" />
          <FontAwesomeIcon icon={faGit} id="Icon" />
        </Col>
      </Row>
      <Row>
        <Col>
          B.V., full stack developer
        </Col>
      </Row>
    </Container>
  );
}

export default App;
