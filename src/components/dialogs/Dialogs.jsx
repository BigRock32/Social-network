import st from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';


const Dialogs = (props) => {

   let state = props.dialogsPage

   let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
   let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />)

   const addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody)
   }

   if (!props.isAuth) return <Navigate to={'/login'} />

   return (
      <div className={st.dialogs} >
         <div className={st.dialogsItems} >
            {dialogsElements}
         </div>
         <div className={st.messages} >
            {messagesElements}
            <AddMessageReduxForm onSubmit={addNewMessage} />
         </div>
      </div>
   );
}

const maxLength20 = maxLengthCreator(20)

const AddMessageForm = (props) => {
   return (
      <form className={st.messagesInputRow} onSubmit={props.handleSubmit}>
         <Field component={Textarea} validate={[required, maxLength20]} name={'newMessageBody'} className={st.messagesInput} placeholder='Write a message...'></Field>
         <button className={st.sendBtn}>Send</button>
      </form>
   )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;