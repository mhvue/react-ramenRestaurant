import React from "react";
import {HomeJumbotron} from "../component/Jumbotron";
import Footer from "../component/Footer";
import ramenBowl from "../Images/ramenbowl.jpg"
import "../component/style.css";

function About (){
    return(
        <div>
            <HomeJumbotron />
            <div className="container">
                <div className="mainInfo">
                    <h2 className="aboutUs">About Us</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas elementum, est eget porttitor lacinia, massa nunc sodales lorem,
                    vel tincidunt ante sem et nunc. Quisque non viverra leo, ac elementum odio.
                    Duis eu dui id elit lobortis sagittis sit amet ac nulla. Duis varius mi eu
                    tortor volutpat pretium. Etiam lacinia quam vitae enim fermentum, a feugiat
                    tellus tincidunt. Integer efficitur venenatis tellus et fringilla.
                    Suspendisse molestie sodales est sit amet convallis. Proin aliquam posuere accumsan.
                </div>
            </div>

            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="mainPic" src={ramenBowl} alt="ramen bowl" class="img-responsive"></img>
                    </div>

                    <div className="col-md-6 infoContainer">
                        <br></br>
                        <h3 className="loveRamenHead">Why ramen?</h3>
                            <div className="loveRamenContainer">
                                n rutrum est eu iaculis cursus. Aliquam eget consectetur nisi.
                                Sed egestas ex nec ante eleifend mattis. Suspendisse vitae imperdiet felis.
                                Aliquam erat volutpat. Ut libero tortor, imperdiet eget mattis at, rhoncus id
                                lacus. Vivamus et felis scelerisque, dictum ex vel, eleifend elit. Aliquam a
                                euismod leo, nec tincidunt ante. Mauris semper tortor ac sem molestie, aliquet
                                lobortis tellus molestie. Ut nec ipsum vitae leo lobortis tempus. Fusce ex diam,
                                malesuada sed nisl id, fermentum fringilla ex. Donec scelerisque non ipsum sit
                                amet pellentesque.
                            </div>
                    </div>
                </div>
            </div>
             <Footer />
        </div>
        
)}

export default About;