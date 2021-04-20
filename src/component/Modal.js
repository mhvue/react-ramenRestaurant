import React from "react";

export function ContactModal(){
    return(
        //want this to be a modal. this a draft 
        <div className="contactInfo">
          <p>Call us: 123-456-6789</p>
          <p>Email us:Email@email.com</p>
        </div>
    )
}

//navbar is working to get here 
export function orderModal(){
  return(
      //want this to be a modal. this a draft 
      <div className="orderInfo">
        <p>Here is your order:</p>
        <p>Order to go here</p>
      </div>
  )
}