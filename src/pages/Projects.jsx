import React from 'react';
import { Aux, Header, Footer } from 'components';
import OnePintPhoto from 'assets/images/OPHomePage.png';
import IEDashboardPhoto from 'assets/images/IEDashboard.png';
import AuthePhoto from 'assets/images/Authe.png';
import Theme from 'components/Theme';


class Projects extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            imageStatus: "loading" 
        };
    }
    

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    handleImageLoaded() {
        this.setState({ 
            imageStatus: "loaded" 
        });
        
      }
    
    handleImageErrored() {
        this.setState({ imageStatus: "failed to load" });
    }
    render() {
        const { imageStatus } = this.state;
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
                                    <div className={ imageStatus === 'loaded' ? 'circle hide' : 'circle' }>
                                        <svg viewBox='0 0 100 100'>
                                            <circle cx="50" cy="50" r="50" />
                                            <path d="M50,0c13.26,0,25.98,5.27,35.36,14.64S100,36.74,100,50"/>
                                        </svg>
                                    </div>
                                    {/* <div 
                                        className="project-screenshot"
                                        style={{ backgroundImage: `url(${OnePintPhoto})` }}></div> */}
                                        <img src={OnePintPhoto} alt="Staff" onError={this.handleImageErrored.bind(this)} onLoad={this.handleImageLoaded.bind(this)} />
                                        <div className="tech-stack">
                                            <ul>
                                                <li>React</li>
                                                <li>Redux</li>
                                            </ul>
                                        </div>
                                </div>
                                <div className="project">
                                    <div className={ imageStatus === 'loaded' ? 'circle hide' : 'circle' }>
                                        <svg viewBox='0 0 100 100'>
                                            <circle cx="50" cy="50" r="50" />
                                            <path d="M50,0c13.26,0,25.98,5.27,35.36,14.64S100,36.74,100,50"/>
                                        </svg>
                                    </div>
                                    {/* <div 
                                        className="project-screenshot"
                                        style={{ backgroundImage: `url(${OnePintPhoto})` }}></div> */}
                                        <img src={AuthePhoto} alt="Staff" onError={this.handleImageErrored.bind(this)} onLoad={this.handleImageLoaded.bind(this)} />
                                        <div className="tech-stack">
                                            <ul>
                                                <li>React</li>
                                                <li>Redux</li>
                                                <li>Sass</li>
                                            </ul>
                                        </div>
                                </div>
                                <div className="project">
                                    <div className={ imageStatus === 'loaded' ? 'circle hide' : 'circle' }>
                                        <svg viewBox='0 0 100 100'>
                                            <circle cx="50" cy="50" r="50" />
                                            <path d="M50,0c13.26,0,25.98,5.27,35.36,14.64S100,36.74,100,50"/>
                                        </svg>
                                    </div>
                                    {/* <div 
                                        className="project-screenshot"
                                        style={{ backgroundImage: `url(${OnePintPhoto})` }}></div> */}
                                        <img src={IEDashboardPhoto} alt="Staff" onError={this.handleImageErrored.bind(this)} onLoad={this.handleImageLoaded.bind(this)} />
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
                    {/* <Theme /> */}
                </div>
            </Aux>
        );
    }
}

export default Projects;