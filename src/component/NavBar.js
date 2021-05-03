import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ContactModal,OrderModal} from "./Modal";


function NavBar(){
    // our state is we are on the Home page
    const [homePage, setPage] = useState(true);

    return(
        <div>
            <nav className="navbar navbar-light bg-dark">
                <form className="form-inline">
                    <button className="btn btn-outline-info homeBtn" type="button" onClick={() =>setPage(true)}><Link to ="/">Home</Link></button>
                        <ContactModal />
                {homePage ? (
                    <button className="btn btn-outline-success orderNav" type="button" onClick={()=>setPage(false)}><Link to= "Order">Order</Link></button>
                ):(<OrderModal />)}
                </form>
            </nav>

        </div>
    )
}

export default NavBar;