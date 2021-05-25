import {React, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

 function ContentModal(props){
    const [show, setShow] = useState(false); //by setting this as true, it will not work propery in nav bar for now 
    const handleClose = () => setShow(true);
  
    return(
      <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Order Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <p>Order To Go Here</p>
              <p>{props.cost}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  };

  export default ContentModal;