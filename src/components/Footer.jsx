import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="message-me">   
                    <p>If you would like to work with me, <a href="mailto:isiakaismaila@gmail.com">shoot me an email</a>.</p>
                </div>
                <ul className="footer-social-links">
                    <li>
                        <a href="https://twitter.com/Ish_maell" target="_blank" id="twitter">
                            <FontAwesomeIcon icon={ faTwitter } />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/isiaka-ismaila-1b109baa/" id="linkedin">
                            <FontAwesomeIcon icon={ faLinkedinIn } />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ishmael.codes/" id="instagram">
                            <FontAwesomeIcon icon={ faInstagram } />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ishmaell" id="github">
                            <FontAwesomeIcon icon={ faGithub } />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}