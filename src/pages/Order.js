import React from "react";
import {OrderJumbotron} from "../component/Jumbotron";
import Footer from "../component/Footer";
import {orderModal} from "../component/Modal";
import OrderTable from "../component/OrderTable";

function Order(){
    return(
        <div>
            <OrderJumbotron />
            <orderModal />
            <div class="container">
                 <h2 id="menuHeader">Menu</h2>
                 <OrderTable />
            </div>
            <Footer />
        </div>
    )
}

export default Order;