import st from './MyPosts.module.css'
import Post from './Post/Post';
import { React } from 'react';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';



const MyPosts = (props) => {

   let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} likes={post.likes} />)

   const addNewPost = (values) => {
      props.addPost(values.newPostText)
   }

   return (
      <div className={st.content}>
         <div>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPost} />
            <div className={st.posts}>
               {postsElements}
            </div>
         </div>
      </div>
   );
}

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
   return (
      <form className={st.addPost} onSubmit={props.handleSubmit}>
         <Field component={Textarea} name={'newPostText'} placeholder='Write a text...' validate={[required, maxLength10]} />
         <button>Add post</button>
      </form>
   )
}

const AddPostReduxForm = reduxForm({ form: 'ProfileAddPostForm' })(AddPostForm)

export default MyPosts;