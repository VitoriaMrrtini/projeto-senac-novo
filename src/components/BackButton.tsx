import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => (
  <button onClick={() => window.history.back()} className="backButton">
    <FontAwesomeIcon icon={faArrowLeft} className="arrowIcon" />
  </button>
);

export default BackButton;
