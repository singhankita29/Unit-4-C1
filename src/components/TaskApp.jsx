import React from "react";
import remove from "../assets/remove.svg"
import styles from "./taskApp.module.css";

const TaskApp = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
     
       <>
       <div className="todo_style">
         <i className="circle" src={remove} 
         onClick={props.onSelect}/>
       <li>{props.text}</li>
       </div>
       </>
    
      
    </div>
  );
};

export default TaskApp;
