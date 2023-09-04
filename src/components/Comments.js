import { useState, useContext } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { PauseContext } from "../context/paused";

const Comments = () => {
    const [comments, setComments] = useState([])
    const paused = useContext(PauseContext)
    
    function addComment(comment){
        setComments((comments)=>{
            return [...comments, comment]
        });
    }

    function deleteComment(id){
        setComments((comments)=>{
            return comments.filter((comment)=>comment.id !== id)
        });
    }
    return ( 
        <div>
            <CommentList comments = {comments} deleteComment={deleteComment}/>
            <CommentForm addComment={addComment} paused={paused}/>
        </div>
     );
}
 

export default Comments;