import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <p>Call us: 123-456-6789</p>
              <p>Email us:Email@email.com</p>
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
  );
}


// export function ContactModal(){
//     return(
//         //want this to be a modal. this a draft 
//         <div className="contactInfo">
//           <p>Call us: 123-456-6789</p>
//           <p>Email us:Email@email.com</p>
//         </div>
//     )
// }

// //navbar is working to get here 
export function orderModal(){
  return(
      //want this to be a modal. this a draft 
      <div className="orderInfo">
        <p>Here is your order:</p>
        <p>Order to go here</p>
      </div>
  )
}