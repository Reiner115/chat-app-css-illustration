import React, { Component } from 'react';
import "../css/style.css";
import profile from "../images/avatar.jpg";
import img1  from "../images/dog-image-1.jpg";
import img2  from "../images/dog-image-2.jpg";
import img3  from "../images/dog-image-3.jpg";
import send from "../images/send-arrow.svg";
import back from "../images/back-arrow.svg";

class Phone extends Component {
    render() {
        return (
            <div className="phone">
                <header className="header">
                    <div className="speakers"></div>
                    <div className="container">
                        <div className="row">
                            
                            <div className="left-row">
                                <img src={back} className="back-arrow"></img>
                                <img src={profile} alt="" className="profile" />
                                
                                <div className="column">
                                    <div className="title">Samuel Green</div>
                                    <div className="subtitle">Available to walk</div>
                                </div>

                            </div>



                            <div className="dots"></div>
                        </div>
                    </div>
                </header>
           
            
            <div className="phone-body">
                <div className="messages-column">
                    <div className="message"> That sounds greate i''d be happy to discuss more. </div>
                    <div className="message"> Could you send me some pictures of your dog. please ? </div>
                </div>

                <div className="messages-column-right">
                    <div className="imgs">
                        <img src={img1} alt="" className="img" />
                        <img src={img2} alt="" className="img" />
                        <img src={img3} alt="" className="img" />
                    </div>
                    <div className="message-right"> Here a few pictures. She's a happy girl </div>
                    <div className="message-right"> Can you make it? </div>
                </div>

                <div className="messages-column">
                    <div className="message"> She looks so happy! The time we discussed works. How long shall i take her out for? </div>
                    <div className="price-container">
                        <div className="circle"></div>
                        <div className="time">30 minute walk</div>
                        <div className="price">$29</div>
                    </div>

                    <div className="price-container">
                        <div className="circle"></div>
                        <div className="time">1 hour walk</div>
                        <div className="price">$49</div>
                    </div>
                </div>

                <div className="send-message">
                    <div className="placeholder">Type a message...</div>
                    <div className="send-button">
                        <img src={send} alt="" className="back" />
                    </div>
                </div>
                
            </div>
           
            </div>
        );
    }
}

export default Phone;