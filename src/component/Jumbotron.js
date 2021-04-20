import React from "react";
import {Link} from "react-router-dom";

export function HomeJumbotron() {
    return(
        <div class="jumbotron">
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
        <div class="jumbotron">
            <header>
              <Link to="/"><h1>Ramen Restaurant</h1></Link>
            </header>
            <p class="lead2">"Ramen: 10% noodles, 90% love."</p>
            <hr class="my-4"></hr>
        </div>
      )
}

