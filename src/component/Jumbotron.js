import React from "react";
import {Link} from "react-router-dom";
import "./style.css";


export function HomeJumbotron() {
    return(
        <div className="jumbotron jumbotron-home text-center">
          <header>
            <Link to="/"><h1>Ramen Restaurant</h1></Link>
          </header>
          <p className="lead">"But First...Ramen"</p>
          <hr className="my-4"></hr>
        </div>
    )
  }

export function OrderJumbotron() {
    return(
        <div className="jumbotron jumbotron-order text-center">
            <header>
              <Link to="/"><h1>Ramen Restaurant</h1></Link>
            </header>
            <p className="lead2">"Ramen: 10% noodles, 90% love."</p>
            <hr className="my-4"></hr>
        </div>
      )
}

