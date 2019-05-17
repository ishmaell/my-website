import React from 'react';
import { Aux } from 'components'

export class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount = () => {
        const { isOn } = this.props;
        if(isOn) {
            //document.getElementsByClassName('main-container')[0].classList += ' blur';
        }
    }

    render() {
        return (
            <Aux>
                <div className="overlay">
                    <div className="modal"></div>
                </div>
            </Aux>
        )
    }
}