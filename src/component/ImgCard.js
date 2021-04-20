import React from "react";

function ImgCard(props){
    return(
            <img className="img-responsive"
            id={props.id}
            alt={props.name} 
            src={props.image} 
            />
    );
}


export default ImgCard;