import React, { Component } from 'react';
import SocialContact from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Contact Me</h1>
            <h3>Email  :   faculista2@gmail.com</h3>
            <h3>Instagram   :   @faculista</h3>
            <SocialContact className="SocialContact" />
            </div>
            )
        }
    }
    
    export default Contact
    