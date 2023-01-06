import React, { useState } from "react";
import "../Style/Style.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addrecords } from "../Redux/Action";

const addData = {
  username: "",
  query: "",
};

function Table() {
  const [formRecords, setFormRecords] = useState(addData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { records } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    const { username, query } = formRecords;
    console.log(username);
    if (username && query) {
      console.log("Records value", formRecords);
      const id = records.length + 1;
      console.log("id", id);
      const add = { ...formRecords, id: id };
      console.log(add);
      dispatch(addrecords(add));
      alert("Records added successfully");
    }
  }

  const onInputChange = (e) => {
    setFormRecords({ ...formRecords, [e.target.name]: e.target.value });
    console.log(formRecords);
  };

  return (
    <>
      <div>
        <div className="container-fluid">
          <h1 className="header">Simple Ticketing System</h1>
          <button className="button" onClick={handleShow}>
            Add Ticket
          </button>
          <Form onSubmit={handleSubmit}>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>Ticket raise</Modal.Header>
              <Modal.Body>
                <label>Username</label>
                <br />
                <input
                  className="input1"
                  name="username"
                  onChange={onInputChange}
                />
                <br />
                <label>Query</label>
                <br />
                <textarea
                  className="input2"
                  name="query"
                  onChange={onInputChange}
                />
                <br />
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Go Back
                </Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>

          <div>
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Username</th>
                  <th scope="col">Query</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.query}</td>
                    <td>{item.createdOn.toString()}</td>
                    <td>
                      {" "}
                      <button type="button" className="m-1 btn btn-light">
                        <i class="fa fa-pen"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
