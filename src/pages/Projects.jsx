import React from 'react';
import { Aux, Header, Footer } from 'components';
import OnePintPhoto from 'assets/images/OPHomePage.png';
import IEDashboardPhoto from 'assets/images/IEDashboard.png';
import AuthePhoto from 'assets/images/Authe.png';


class Projects extends React.Component {
    render() {
        return (
            <Aux>
                <title>Projects</title>
                <Header />
                <div className="main-container">
                    <div className="projects">
                        <div className="container">
                            <h3 className="page-title">Projects</h3>
                            <div className="layout">
                                <div className="project">
                                    <div 
                                        className="project-screenshot"
                                        style={{ backgroundImage: `url(${OnePintPhoto})` }}></div>
                                        <div className="tech-stack">
                                            <ul>
                                                <li>React</li>
                                                <li>Redux</li>
                                            </ul>
                                        </div>
                                </div>
                                <div className="project">
                                    <div 
                                        className="project-screenshot"
                                        style={{ backgroundImage: `url(${AuthePhoto})` }}></div>
                                        <div className="tech-stack">
                                            <ul>
                                                <li>React</li>
                                                <li>SASS</li>
                                            </ul>
                                        </div>
                                </div>
                                <div className="project">
                                    <div 
                                        className="project-screenshot"
                                        style={{ backgroundImage: `url(${IEDashboardPhoto})` }}></div>
                                        <div className="tech-stack">
                                            <ul>
                                                <li>PHP</li>
                                                <li>jQuery</li>
                                                <li>ChartJS</li>
                                            </ul>
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

export default Projects;