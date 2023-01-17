import st from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

   let state = props.dialogsPage

   let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
   let messagesElements = state.messages.map(message => <Message message={message.message} />)
   let newMessageBody = state.newMessageBody


   let onSendMessageClick = () => {
      props.sendMessage()
   }

   let onNewMassageChange = (e) => {
      let body = e.target.value
      props.updateNewMessageBody(body)
   }

   return (
      <div className={st.dialogs} >
         <div className={st.dialogsItems} >
            {dialogsElements}
         </div>
         <div className={st.messages} >
            {messagesElements}
            <div className={st.messagesInputRow}>
               <textarea value={newMessageBody} className={st.messagesInput} placeholder='Write a message...' onChange={onNewMassageChange}></textarea>
               <button className={st.sendBtn} onClick={onSendMessageClick}>Send</button>
            </div>
         </div>
      </div>
   );
}

export default Dialogs;