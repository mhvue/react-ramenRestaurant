import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ContactModal} from "./Modal";


function NavBar(){
    // our state is we are on the Home page
    const [homePage, setPage] = useState(true);

    return(
        <div>
            <nav className="navbar navbar-light bg-dark">
                <form className="form-inline">
                    <button className="btn btn-outline-info homeBtn" type="button" onClick={() =>setPage(true)}><Link to ="/">Home</Link></button>
                    {/* <button className="btn btn-outline-success contactBtn" id="contactBtn" type="button">Contact */}
                        <ContactModal />
                        {/* <Link to="Contact">Contact</Link> */}
                        {/* </button> */}
                {homePage ? (
                    <button className="btn btn-outline-success orderNav" type="button" onClick={()=>setPage(false)}><Link to= "Order">Order</Link></button>
                ):(
                    <button className="btn btn-outline-success orderNav" type="button" onClick={()=>setPage(false)}>
                        <Link to="orderModal">View Cart</Link></button>
                )}
                </form>
            </nav>

        </div>
    )
}

export default NavBar;