import React, { useState, useEffect } from "react";
import axios from "axios";

function MainPage() {
  const [task, setTask] = useState({ taskName: "", taskContext: "" });
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4001")
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((error) => {
      });
  }, [taskList]);

  const handleAddClick = () => {
    console.log("run");
    if (task.taskName === "" || task.taskContext === "") {
      console.log("empty");
    } else {
      axios
        .post("http://127.0.0.1:4001", {
          taskName: task.taskName,
          taskContext: task.taskContext,
        })
        .then(function (response) {
          console.log("res", response);
        })
        .catch(function (error) {});
    }
  }
// let itemID = ''
 const handleDeleteClick = (itemId) => {
   console.log("no", itemId);
   axios
   .delete(`http://127.0.0.1:4001/${itemId}`, {
     
   })
   .then(function (response) {
     console.log("res", response);
   })
   .catch(function (error) {});

 };


 const handleCheck = (itemId,taskName,taskContext) => {
   console.log("no", itemId);

   axios
     .post("http://127.0.0.1:4001/done", {
       _id: itemId,
       taskName: taskName,
       taskContext: taskContext,
     })
     .then(function (response) {
       console.log("res", response);
       axios
         .delete(`http://127.0.0.1:4001/${itemId}`, {})
         .then(function (response) {
           console.log("res", response);
         })
         .catch(function (error) {});
     })
     .catch(function (error) {});
 };



  return (
    <>
   
            <input
        type="text"
        value={task.taskName}
        onChange={(e) => setTask({ ...task, taskName: e.target.value })}
      />
      <input
        type="text"
        value={task.taskContext}
        onChange={(e) => setTask({ ...task, taskContext: e.target.value })}
      />
      <button onClick={handleAddClick}>Add </button>
   

      <ul>
        {taskList.map((item) => (
          <li key={item._id}>
            {/* {(itemID = item._id)} */}
            {item.taskName} - {item.taskContext}
            <button onClick={() => handleDeleteClick(item._id)}>X</button>
            <input type='checkbox'onChange={() => handleCheck(item._id,item.taskName,item.taskContext)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default MainPage;
