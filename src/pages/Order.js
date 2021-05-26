import React, {useState,useRef, useEffect}  from "react";
import {OrderJumbotron} from "../component/Jumbotron";
import Footer from "../component/Footer";
import {OrderModal, ContactModal} from "../component/Modal";
import ContentModal from "../component/ContentModal";
import {ImgCard, ImgName} from "../component/ImgCard";
import ramenImages from "../Images";
import Button from "react-bootstrap/Button";

function Order(){
    //state here for intital cost of order 
    const [cost, setCost] = useState(0);
    // const [currentState, setState] = useState(false);
    const [show, setShow] = useState(true) //by setting this as true, it will not work propery in nav bar for now 
    // const handleShow = () => setShow(true);

    //get the cost of menu item clicked on
    const getCost = (e) => {
        setCost(e.target.innerText);
        setShow(true);
    }
    //toggle btwn click to not clicked as className
    // const toggleState = (e) => {
    //      setState(!currentState);
    // }
     console.log(cost,show)


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
                                   <Button   
                                        id={ramen.id} 
                                        variant="btn btn-outline-success" 
                                        // className ={currentState ? "notClicked" : "clicked"}
                                        onClick={getCost}
                                           >
                                        {ramen.cost}
                                    </Button>
                                   </td>
                                 </tr>
                                
                            ))}
                            {/* getting modal to pop up once with price of item*/}
                            {/* {currentState === true ? <ContentModal cost={cost}/>:null} */}
                            {setShow === true ? <OrderModal>
                                <ContentModal 
                                    cost={cost}/>
                                    </OrderModal>
                                :null}
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