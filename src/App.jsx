import React,{useState} from 'react'

import './App.css'

const CommentList = ({comments, sortOption, filterUser}) =>{

  return (
    <div>
      <h2>Comments</h2>
      <hr />
      <hr />
      {comments.map((comment)=>(
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )

}

const Comment=({comment})=>{
    const[replyFormVisible, setReplyFormVisible] = useState(false);
    const[replies, setReplies] = useState([]);
    // const[score, setScore]=useState(0)

    const handleUpvote =()=>{
      // setScore(score+1)
    }
    const handleDownvote =()=>{
      // setScore(score-1)
    }
    const toggleReplyForm = () => {
      setReplyFormVisible(!replyFormVisible)
    }

    const handleSubmitReply = (reply)=>{
      setReplies([...replies, reply])

      setReplyFormVisible(false)
    }

    return(
      <div>
        <p>{comment.content}</p>
        <p>Score: {comment.score}</p>

        <button onClick={handleUpvote}> UpVote</button>
        <button onClick={handleDownvote}> Downvote</button>

        {replies.map((reply)=> (
          <div key={reply.id}>
            <p>{reply.content}</p>
            <p>Score: {reply.score}</p>            
          </div>
        ))}

        {replyFormVisible ? ( <ReplyForm onSubmit={handleSubmitReply} />) : <button onClick={toggleReplyForm}>Reply</button>}

      </div>
    )
}

const ReplyForm = ({onSubmit}) => {
  const [replyContent , setReplyContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  const reply = {
    id : generateUniqueId(),
    content : replyContent,
    score: 0,
  }

  onSubmit(reply);
  setReplyContent("")

}

  return (
    <form onSubmit={handleSubmit}>

      <textarea 
        value={replyContent}
        onChange={(e)=> setReplyContent(e.target.value)}
        placeholder = "write a reply "
        required
      />
      <button type='submit' >
        Submit Reply
      </button>

    </form>
  )
}

function App() {

  const comments = [
    {
      id : 1,
      content : 'First commnet' ,
      score : 0,
    },

    {
      id : 2,
      content : 'Second commnet' ,
      score : 0,
    },

   {
    id : 3,
    content : 'Third commnet',
    score : 0
   }


    
  ];

  return (
    <>
    <CommentList comments = {comments} sortOption = 'neweset' filterUser="Suman"/>
    </>
  )
}

export default App
