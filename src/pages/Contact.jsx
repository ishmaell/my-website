import React from 'react';
import { Aux, Header } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Contact extends React.Component {
    render() {
        return (
            <Aux>
                <title>Contact</title>
                <Header />
                <div className="main-container">
                    <div className="contact">
                        <div className="container">
                            <h3 className="page-title">Hi!</h3>
                            <p>Feel free to reach me through any of these mediums.</p>
                            <ul>
                                <li>
                                    <a href="mailto:isiakaismaila@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Ish_maell" target="_blank">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/isiaka-ismaila-1b109baa/" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Contact;