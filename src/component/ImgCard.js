import React from "react";

export function ImgCard(props){
    return(
        <div>
            <img className="img-responsive"
            id={props.id}
            alt={props.name} 
            src={props.image} 
            />
            
        </div>
    );
};

export  function ImgName(props){
    return(
        <p>{props.name}</p>
    )
}


