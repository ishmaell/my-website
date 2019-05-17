import React from 'react';
import { Aux, Header, Footer, Modal } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5,
    faCss3,
    faSass,
    faNode,
    faPhp,
    faReact,
    faNpm,
    faGit,
    faJs,
    faAppStoreIos,
    faAndroid
 } from '@fortawesome/free-brands-svg-icons';

class Home extends React.Component {
    componentDidMount = () => {

    }
    render() {
        return (
            <Aux>
                <title>Home</title>
                <Modal isOn={true} />
                <Header />
                <div className="main-container">
                    <div className="welcome-area">
                        <div className="container">
                            <div className="layout">
                                <div className="welcome-note">
                                    <h2>Isiaka Ismaila</h2>
                                    <h4>Front End Developer</h4>
                                </div>
                                <div className="tech-stack">
                                    <h4>Tech Stack</h4>
                                    <div className="layout">
                                        <FontAwesomeIcon icon={faHtml5} />
                                        <FontAwesomeIcon icon={faCss3} />
                                        <FontAwesomeIcon icon={faSass} />
                                        <FontAwesomeIcon icon={faNode} />
                                        <FontAwesomeIcon icon={faNpm} />
                                        <FontAwesomeIcon icon={faPhp} />
                                        <FontAwesomeIcon icon={faAppStoreIos} />
                                        <FontAwesomeIcon icon={faAndroid} />
                                        <FontAwesomeIcon icon={faGit} />
                                        <FontAwesomeIcon icon={faJs} />
                                        <FontAwesomeIcon icon={faReact} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                
            </Aux>
        );
    }
}

export default Home;