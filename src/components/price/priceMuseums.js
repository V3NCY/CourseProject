
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PriceA = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  return (

    <div>
      <Button color="primary" onClick={toggle}>Цени на билетите на музеите</Button>
      <div className="my-3"><img src="https://imgrabo.com/pics/companies/42ebb3a6595b31794f43de612c231113.jpeg" width="100%"></img></div>
      <Modal isOpen={modal} toggle={toggle} className={className} data-dismiss="modal" data-toggle="modal">
        <ModalHeader toggle={toggle}>Цени на билетите на музеите</ModalHeader>
        <ModalBody>
          <img src="https://i.ibb.co/N1Vrj7J/price.jpg" width="100%"/>
          <br />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PriceA;
