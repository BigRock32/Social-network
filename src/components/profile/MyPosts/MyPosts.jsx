import st from './MyPosts.module.css'
import Post from './Post/Post';
import {React, useRef} from 'react';




const MyPosts = (props) => {

   let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} likes={post.likes} />)

   let newPostElement = useRef()

   let OnAddPosts = () => {
      props.addPost()
   }
   
   let onPostChange = () => {
      let text = newPostElement.current.value
      props.updateNewPostText(text)
   }

   return (
      <div className={st.content}>
         <div>
            <h3>My posts</h3>
            <div className={st.addPost}>
               <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
               <button onClick={OnAddPosts}>Add post</button>
            </div>
            <div className={st.posts}>
               {postsElements}
            </div>
         </div>

      </div>
   );
}

export default MyPosts;