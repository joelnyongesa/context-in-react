import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import { useContext } from 'react';
import { PauseContext } from '../context/paused';

const CommentForm = ({ addComment }) => {
    const [text, setText] = useState("")
    const [paused, setPaused] = useContext(PauseContext)

    function handleSubmit(e){
        e.preventDefault();
        addComment({text, id: uuid() });
        setText("");
    }

    return ( 
        <form onSubmit={handleSubmit} autoComplete='off'>
            <label htmlFor='comment'>Leave a Comment</label>
            <input 
            type='text'
            id='comment'
            value={text}
            onChange={(e)=>setText(e.target.value``)}
            />
            <button disabled={paused} type='submit'>Submit</button>
        </form>
     );
}
 
export default CommentForm;