import React, { useEffect } from "react";
import {OrderJumbotron} from "../component/Jumbotron";
import Footer from "../component/Footer";
import {orderModal} from "../component/Modal";
// import ramenImg from "../Images";
import ImgCard from "../component/ImgCard";
import OrderTable from "../component/OrderTable";

function Order(){
    // img to go here
    // const img = [{
    //     ""
    // }]
    //useEffect to display photos
    //[] 
    useEffect(()=>{

    },[])


    return(
        <div>
            <OrderJumbotron />
            <orderModal />
            <div class="container">
                 <h2 id="menuHeader">Menu</h2>
                 <OrderTable />
                        <div>
                        
                        {/* {ramenImg.map((ramen) =>(
                            <ImgCard
                                key={ramen.id}
                                id={ramen.id}
                                name={ramen.name}
                                image={ramen.image}
                            />
                        ))} */}
                        
                        </div>
            </div>
            <Footer />
        </div>
    )
}

export default Order;