import React from "react";


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
                        <tr id="dataRow1"></tr>
                        <tr id="dataRow2"></tr>
                        <tr id="dataRow3"></tr>
                        <tr id="dataRow4"></tr>
                        <tr id="dataRow5"></tr>
                    </table> 
            </div>
        </div>
    )
}

export default OrderTable;