import './App.css';
import ToDos from "./components/ToDos";
import todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import {useState} from "react";

function App() {
    const todos = [
        new todo('Learn React'),
        new todo('HI')
    ];

    const [todoList, setTodoList] = useState<todo[]>([]);
    const addTodoHandler = (text:string) => {
        const newTodo = new todo(text);
        setTodoList(prevState => {
            return prevState.concat(newTodo);
        })
    };

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}/>
            <ToDos items={todos}></ToDos>
        </div>
    );
}

export default App;
