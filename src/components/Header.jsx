import React from 'react';
import { Link } from 'react-router-dom';
import { Aux } from 'components';
import myBitmoji from '../assets/images/Ishmael.png';

export class Header extends React.Component {
    render() {
        return (
            <Aux>
                <header>
                    <div className="container">
                        <div className="layout">
                            
                            {/* <div className='link'>
                                <Link to='./'>Home</Link>
                            </div> */}
                            {/* <div className='link'>
                                <Link to='./about'>About</Link>
                            </div> */}
                            
                            <div className='link'>
                                <Link to='./projects'>Projects</Link>
                            </div>
                            <div className="logo">
                                <Link to='./'>
                                    <img src={myBitmoji} alt="My Bitmoji"/>
                                </Link>
                            </div>
                            <div className='link'>
                                <Link to='./contact'>Contact</Link>
                            </div>
                        </div>
                    </div>
                </header>
            </Aux>
        )
    }
}