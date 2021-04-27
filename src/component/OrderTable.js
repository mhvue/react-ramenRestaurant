import React from "react";
import {ImgCard, ImgName} from "./ImgCard";
import ramenImages from "../Images";

function OrderTable () {

    return(
        
        <div class="row">
            <div class="col-md-12">
                    <table class="table table-sm table-hover menuTable">
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
                        {/* per tr, display an image  */}
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
                                </tr>
                            ))}

                    </table> 
            </div>
        </div>
    )
}

export default OrderTable;