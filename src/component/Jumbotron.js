import React from "react";
import {Link} from "react-router-dom";
import "./style.css";


export function HomeJumbotron() {
    return(
        <div class="jumbotron jumbotron-home text-center">
          <header>
            <Link to="/"><h1>Ramen Restaurant</h1></Link>
          </header>
          <p class="lead">"But First...Ramen"</p>
          <hr class="my-4"></hr>
        </div>
    )
  }

export function OrderJumbotron() {
    return(
        <div class="jumbotron jumbotron-order text-center">
            <header>
              <Link to="/"><h1>Ramen Restaurant</h1></Link>
            </header>
            <p class="lead2">"Ramen: 10% noodles, 90% love."</p>
            <hr class="my-4"></hr>
        </div>
      )
}

