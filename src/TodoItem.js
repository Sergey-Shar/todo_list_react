import React,{useContext} from "react";
import { Context } from "./context";

const TodoItem = ({ title, id, completed }) => {
    const {dispatch} = useContext(Context)

    const cls = ['todo']
    
   
    completed && cls.push('completed')

    return (
        <li className={cls.join(' ')}>
            <label>
                <input type="checkbox"
                checked={completed}
                onChange={()=> dispatch({
                    type: 'toggle',
                    payload: id
                })}
                />
                <span>{title}</span>
                <i className="material-icons red-text"
                onClick={()=> dispatch({
                    type: 'remove',
                    payload: id
                })}
                >delete 
                </i>
            </label>
        </li>
    )
}

export  default TodoItem