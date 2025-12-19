'use client';

import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AppForm from '../forms/AppForm';
import EnvForm from '../forms/EnvForm';

export default function AddNewModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="px-3">
        Add New
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} dialogClassName="modal-top">
        <Modal.Header className="bg-dark text-white">
          <Modal.Title className="text-white">Add New </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <div className="row">
            <div className="col-12">
              <AppForm />
            </div>
            <div className="col-12 mt-4">
              <h4 className="card-title">Environment Variables</h4>
              <EnvForm showHeader={false} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white d-flex justify-content-end p-3">
          <Button variant="primary" onClick={handleClose} className="btn btn-warning mr-2">
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
