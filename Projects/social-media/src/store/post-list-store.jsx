
import {  createContext ,useReducer } from "react";
 export const PostList = createContext({
    postList:[],
    addPost: () =>{},
    deletePost: () =>{},
});

const postListReducer = (currPostList,action) =>{
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId
    );
    } else if (action.type === 'ADD_POST'){
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
};

const PostListProvider = ({children}) =>{

   const [postList,dispatchPostList] = useReducer(
    postListReducer,DEFAULT_POST_LIST
);
   
   const addPost =(userId,postTitle,postBody,reactions,tags) =>{
    //console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
    dispatchPostList({
        type:'ADD_POST',
        payload:{
            
                id:Date.now() ,
                title:postTitle,
                body: postBody,
                reaction:reactions,
                userId:userId,
                tags:tags,
        },
    });

   };

   const deletePost = (postId) => {
   // console.log(`delete post called for :${postId}`)
   dispatchPostList({
    type:"DELETE_POST",
    payload:{
        postId,
    },
   })
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
        reactions:20,
        userId:"user-9",
        tags:["vacation","varanasi","enjoy"],
},
{
    id:"9",
    title:"Going to varanasi",
    body: "Hi Friends, I am going to varanasi for my vacation. Hope to you enjoy a lot. peace out..",
    reactions:2,
    userId:"user-9",
    tags:["vacation","varanasi","enjoy"],
},
];
export default PostListProvider;
