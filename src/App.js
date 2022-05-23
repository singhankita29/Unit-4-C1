import React,{useState} from "react";
import TaskApp from "./components/TaskApp";

function App() {
const[inputList,setInputList] = useState("");
const [Items,setItems] =useState([]);

const itemEvent = (event) => {
  setInputList(event.target.value);
};
const listOfItems=() =>{
 setItems((oldItems)=>{
   return [...oldItems,inputList];
 });
 setInputList("");
};

const deleteItem = (id) => {
  console.log('delete');

  setItems((oldItems)=>{
    return oldItems.filter((arrElem,index) =>{
      return index !== id;
    });
  });
};
  return <div>{/* Code Here */
  <div className="main_div">
    <div className="center_div>">
      <br/>
      <h1>Todo List</h1>
      <br/>
      <input type="text" 
      placeholder="Add task" 
      onChange={itemEvent}/>

      <button onClick={listOfItems}> + </button>
      <ol>
        {/* <li>{inputList}</li>*/}
       {
          Items.map( (itemvalue,index) =>{
           return <TaskApp 
            key={index}
            id={index} 
            text={itemvalue}
            onSelect={deleteItem}/>
          })
       }
      </ol>
      </div>
    </div>
  }
  </div>;
}

export default App;
