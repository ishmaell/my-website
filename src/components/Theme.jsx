import React, { Component } from "react";
import { Aux } from './';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

class Theme extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDark: false
        }
    }

    componentDidMount = () => {  
        console.log(this.props.currentTheme);
       //this.changeColors(this.state.isDark);
    }

    changeColors = (isDark) => {
        const rootSelector = document.querySelector(':root'); 
        if(isDark) {
            rootSelector.style.setProperty('--theme-color', '#f9f9f9');
            rootSelector.style.setProperty('--text-color', '#333');
            rootSelector.style.setProperty('--text-border-color', '#333'); 
            rootSelector.style.setProperty('--header-border-color', 'rgba(0,0,0,0.05)');
        } else {
            rootSelector.style.setProperty('--theme-color', '#143352');
            rootSelector.style.setProperty('--text-color', '#fffc'); 
            rootSelector.style.setProperty('--text-border-color', '#fffc'); 
            rootSelector.style.setProperty('--header-border-color', '#667a8f');
        }
    }

    toogle = (isDark) => {
        this.setState(prevState => ({
            isDark: !prevState.isDark
        }), this.changeColors(this.state.isDark));
        console.log("Is day is: ", this.state.isDark);
    }

    render() {
        const { isDark } = this.state;
        return (
            <Aux>
                <div onClick={(isDark) => this.toogle(isDark)} className="theme-icon">
                    <FontAwesomeIcon icon={  isDark ? faMoon : faSun } />
                </div>
            </Aux>
        );
    }
}
export default Theme;