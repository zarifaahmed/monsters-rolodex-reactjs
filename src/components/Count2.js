// import React, { useState, useReducer } from "react";

// const ACTIONS = {
//   ADD_TODO: "add_todo",
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...todos, newToDo(name)];
//   }
// }

// function newToDo(name) {
//   return { id: Date.now(), name: name, complete: false };
// }

// export default function Count2() {
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch({ type: ACTIONS.ADD_TODO });
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type={"text"}
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </form>
//     </>
//   );
// }
