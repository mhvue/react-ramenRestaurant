import {React, useState}  from "react";
import {OrderJumbotron} from "../component/Jumbotron";
import Footer from "../component/Footer";
import {OrderModal} from "../component/Modal";
import {ImgCard, ImgName} from "../component/ImgCard";
import ramenImages from "../Images";

function Order(){
    //state here for intital cost of order 
    const [initalCost, setCost] = useState(0);
    const [state, setState] = useState("notClick");

    const togglePage = () => {
        setState("clicked");
    }

    return(
        <div>
            <OrderJumbotron />
            <div className="container">
                 <h2 id="menuHeader">Menu</h2>
                    <div className="row">
                        <div className="col-md-12">
                         <table className="table table-sm table-hover menuTable">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col" id="btnHere"></th>
                                </tr>
                            </thead>
                            <tbody>
                        {/* /* per tr, display an image, item#, price and description  */}
                            {ramenImages.map((ramen) =>(
                                <tr>
                                    <td>
                                        <p>{ramen.id}</p>
                                    </td>
                                    <td>
                                        <ImgName
                                            key={ramen.id}
                                            id={ramen.id}
                                            name={ramen.name}
                                        />
                                    </td>
                                    <td>
                                        <ImgCard
                                            key={ramen.id}
                                            id={ramen.id}
                                            name={ramen.name}
                                            image= {ramen.image}
                                        />
                                   </td>
                                   <td>
                                       {ramen.description}
                                   </td>
                                   <td>
                                       {ramen.cost}
                                   </td>
                                   <td>
                                   {state === "notClick" ? (<button type="button" onClick={togglePage}className="btn btn-info">Order</button>) :
                                    (state === "clicked" &&  <OrderModal /> && <button type="button" className="btn btn-info">Order</button>
                                    )}
                                   </td>
                                </tr>
                            ))}
                        </tbody>
                        </table> 
                     </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Order;