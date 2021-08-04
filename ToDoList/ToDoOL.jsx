import React from 'react';

const ToDoOL = (propes) => {
   
     return (
     <>
       <div className="todo_style">
         <i className="fa fa-times" aria-hidden="true" onClick={() =>{
             propes.onSelect(propes.id);
         }}/>
         <li>{propes.text}</li>
       </div>
     </>
     );
    }
export default ToDoOL;