import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Transp = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Разписания на влаковете
      </Button>
      <div className="my-3">
        {/* <img
          src="https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/81654276_109334967253924_4725974015842189312_o.jpg?_nc_cat=106&ccb=3&_nc_sid=e3f864&_nc_ohc=cD9ER0VQ6HMAX86Pacp&_nc_oc=AQnrC8aOB5I9POAc8E8iF_gRK56AIleEelQFP6XLEYPfQLq60sRVEf6g8LZ_5KU7I5k&_nc_ht=scontent.fsof3-1.fna&oh=99734cfdb6de1c9f28ba7ad355070225&oe=605310BF"
          width="100%"
        ></img> */}
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        data-dismiss="modal"
        data-toggle="modal"
      >
        <ModalHeader toggle={toggle}>
          Разписания на влаковете от и за гара Копривщица - в сила от
          16.01.2021г.
        </ModalHeader>
        <ModalBody>
          <img src="https://i.ibb.co/17nCBBM/Capture.jpg" width="100%" />
          <br />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Transp;
