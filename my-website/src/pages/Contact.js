import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-box">
                <div>                    <FontAwesomeIcon icon={faEnvelope} /> jordan.torske1@gmail.com
                </div>
            </div>
        </div>
    );
}

export default Contact;
