import { useRef } from "react";


const CreatePost = () =>{

const userId = useRef();





   
     return(
        <form className="create-post">

        <div className="mb-3">
          <label htmlFor="useId"
           className="form-label">
           Enter Your UserId here</label>

          <input type="text"
           className="form-control" 
           id="userId"
           placeholder="Your User Id.." 
           />
        </div>


        <div className="mb-3">
          <label htmlFor="title"
           className="form-label">
            Post Title</label>

          <input type="text"
           className="form-control" 
           id="title"
           placeholder="How are you feeling today.." 
           />
        </div>

        <div className="mb-3">
          <label htmlFor="body"
           className="form-label">
            Post Content
            </label>

          <textarea type="text" rows="4"
           className="form-control" 
           id="title"
           placeholder="Tell us more about it.." 
           />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions"
           className="form-label">
           Number of reactions</label>

          <input type="text"
           className="form-control" 
           id="reactions"
           placeholder="How many people reacted to this post.." 
           />
        </div>

        <div className="mb-3">
          <label htmlFor="tags"
           className="form-label">
           Enter your hashtag here</label>

          <input type="text"
           className="form-control" 
           id="tags"
           placeholder="Please enter your hashtags here" 
           />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
     );


}
export default CreatePost;