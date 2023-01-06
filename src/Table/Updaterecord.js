// import React, { useState } from "react";
// import "../Style/Style.scss";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import { useDispatch, useSelector } from "react-redux";
// import { addrecords, updaterecords } from "../Redux/Action";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const addData = {
//   username: "",
//   query: "",
//   answeredby: "",
// };

// function Updaterecord() {
//   const [formRecords, setFormRecords] = useState(addData);
//   const [editMode, setEditMode] = useState(false);
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const { records } = useSelector((state) => state);
//   const dispatch = useDispatch();
//   var newcount =0,completedcount=0;
//   for(let i=0;i<records.length;i++){
//     if(records[i].Status=="New"){
//       newcount++;
//     }
//     else if(records[i].Status=="Completed"){
//       completedcount++;
//     }
//   }
//   const handleSubmit = () => {
//     const { username, query, answeredby } = formRecords;
//     console.log(username, query, answeredby);
//     if (username && query) {
//       if (editMode) {
//         dispatch(updaterecords(formRecords));
//         setEditMode(false);
//         // alert("Records updated successfully");
//         toast("Records updated successfully");
//       } else {
//         console.log("Records value", formRecords);
//         const id = records.length + 1;
//         const add = { ...formRecords, id: id };
//         dispatch(addrecords(add));
//         // alert("Records added successfully");
//         // notify();
//         toast("Records added successfully");
//       }
//     }
//   };
//   const onInputChange = (e) => {
//     setFormRecords({ ...formRecords, [e.target.name]: e.target.value });
//     console.log(formRecords);
//   };
  
// //  const notify=()=>{
// //   toast("Records added successfully");
// //  }
//   return (
//     <>
//       <div>
//         <div className="container-fluid">
//           <h1 className="header">Simple Ticketing System</h1>
//           <br/>
//           <div>
//           <button
//             className="button"
//             onClick={() => {
//               setEditMode(false);
//               setFormRecords(addData);
//               setShow(true);
//             }}
//           >
//             Add Ticket
//           </button>
//           </div>
//           <div className="content">
//             <h5>Total Records:{records.length}</h5>
//             <h5>Number of new records:{newcount}</h5>   
//             <h5>Number of completed records:{completedcount}</h5>         
//           </div>
          
//           <div>
//             <Form onSubmit={handleSubmit}>
//               <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>Ticket raise</Modal.Header>
//                 <Modal.Body>
//                   <label>Username</label>
//                   <br />
//                   <input
//                     className="input1"
//                     name="username"
//                     value={formRecords.username}
//                     // value={editMode ? editData.username : ""}
//                     onChange={onInputChange}
//                   />
//                   <br />
//                   <label>Query</label>
//                   <br />
//                   <textarea
//                     className="input2"
//                     name="query"
//                     value={formRecords.query}
//                     // value={editMode ? editData.query : ""}
//                     onChange={onInputChange}
//                   />
//                   <br />
//                   {editMode && (
//                     <div>
//                       <input
//                         className="input1"
//                         name="answeredby"
//                         value={formRecords.answeredby}
//                         onChange={onInputChange}
//                       />
//                     </div>
//                   )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                   <Button variant="secondary" onClick={handleClose}>
//                     Go Back
//                   </Button>
//                   <Button
//                     variant="primary"
//                     type="submit"
//                     onClick={() => {
//                       handleSubmit();
//                       handleClose();
                      
//                     }}
//                   >
//                     Submit
//                   </Button>
//                 </Modal.Footer>
//               </Modal>
//             </Form>
//           </div>
//           <div>
//             <table className="table">
//               <thead className="table-dark">
//                 <tr>
//                   <th scope="col" className="data">
//                     Id
//                   </th>
//                   <th scope="col" className="data">
//                     Username
//                   </th>
//                   <th scope="col" className="data">
//                     Query
//                   </th>
//                   <th scope="col" className="data">
//                     Created At
//                   </th>
//                   <th scope="col" className="data">
//                     Status
//                   </th>
//                   <th scope="col" className="data">
//                     Updated At
//                   </th>

//                   <th scope="col" className="data">
//                     Answered by
//                   </th>
//                   <th scope="col">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {records.length === 0 ? (
//                   <div>
//                     <h3>
//                       <i>No records display...</i>
//                     </h3>
//                   </div>
//                 ) : (
//                   records.map((item) => (
//                     <tr>
//                       {console.log("In map", item)}
//                       <td className="data">{item.id}</td>
//                       <td className="data">{item.username}</td>
//                       <td className="data">{item.query}</td>
//                       <td className="data">{item.createdOn}</td>
//                       <td className="data">{item.Status.toString()}</td>
//                       <td className="data">{item.updatedOn}</td>

//                       <td className="data">{item.answeredby}</td>
//                       <td>
//                         {" "}
//                         <button
//                           type="button"
//                           className="btn btn-light data"
//                           onClick={() => {
//                             setEditMode(true);
//                             setFormRecords(item);
//                             handleShow();
                            

//                           }}
//                         >
//                           <i className="fa fa-pen"></i>
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Updaterecord;
import React from 'react'

 function Updaterecord () {
  return (
    <div><h1>Hello World!</h1></div>
  )
}
export default Updaterecord