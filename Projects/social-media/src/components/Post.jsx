import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) =>{
    return(
      <div className="card post-card" style={{width:"40rem"}}>
      <div className="card-body">
        <h5 className="card-title">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge bg-danger  border-light rounded-pill"
        onClick={() => deletePost(post.id)}
        >
        <MdDelete />
  </span>
        </h5>
        <p className="card-text">{post.body}</p>
          {post.tags.map((tag)=>(
            <span key={tag} className="badge text-bg-primary hastag">{tag}</span>
          ))}
          <div className="alert alert-success reactions" role="alert">
  A simple success alert—check it out! {post.reactions}
</div>
      </div>
    </div>
    );
  
  }
  export default Post;