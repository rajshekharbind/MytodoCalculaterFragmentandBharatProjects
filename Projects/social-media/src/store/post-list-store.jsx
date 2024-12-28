
import {  createContext ,useReducer } from "react";
 export const PostList = createContext({
    postList:[],
    addPost: () =>{},
    deletePost: () =>{},
});

const postListReducer = (currPostList,action) =>{
    return currPostList;
};

const PostListProvider = ({children}) =>{

   const [postList,dispatchPostList] = useReducer(
    postListReducer,DEFAULT_POST_LIST
);
   
   const addPost =() =>{
    
   };

   const deletePost = (postId) => {
    console.log(`delete post called for :${postId}`)
   };

   return(
      <PostList.Provider value= {{postList,addPost,deletePost}}>
        {children}
      </PostList.Provider>
   );
};

const DEFAULT_POST_LIST =[
    {
        id:"1",
        title:"Going to varanasi",
        body: "Hi Friends, I am going to varanasi for my vacation. Hope to you enjoy a lot. peace out..",
        reaction:20,
        userId:"user-9",
        tags:["vacation","varanasi","enjoy"],
},
{
    id:"9",
    title:"Going to varanasi",
    body: "Hi Friends, I am going to varanasi for my vacation. Hope to you enjoy a lot. peace out..",
    reaction:2,
    userId:"user-9",
    tags:["vacation","varanasi","enjoy"],
},
];
export default PostListProvider;
