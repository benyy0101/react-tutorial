import React from "react";
import todo from "../models/todo";
import TodoItem from "./TodoItem";
const ToDos: React.FC<{items:todo[]}> = (props)=>{
    return(
        <ul>
            {props.items.map(item=>{
                return <TodoItem key={item.id} text={item.text}></TodoItem>
            })}
        </ul>
    );
}

export default ToDos;