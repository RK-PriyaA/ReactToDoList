import React, { useState } from 'react';
import ToDoOL from './ToDoOL';

const App = () =>{
    const [inputList,setInputList] = useState("");
    const [Items,setItems]= useState([]);

    const itemEvent =(event) =>{
        setInputList(event.target.value);
    };
    const listOfItems =() =>{
        setItems((oldItems) =>{
            return[...oldItems,inputList];
        })
        setInputList("");
    };
    const deleteItems = (id) =>{
        console.log("deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index) =>{
                return index !== id;
            })
        })
    };
    return(
        <>
          <div className="main_div">
           <div className="center_div">
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" placeholder="Add a Items" onChange={itemEvent} value={inputList}/>
            <button onClick={listOfItems}> + </button>
            <ol>
              {/* <li> {inputList}</li> */}
              {Items.map((itemval,index) =>{
                  return( 
                  <ToDoOL 
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                  text={itemval}
                  />
                  );
              })}
            </ol>
           </div>
          </div>
        </>
    );
}
export default App;