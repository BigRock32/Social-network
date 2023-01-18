const APDATE_NEW_MESSAGE_BODY = 'APDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
   dialogs: [
      { id: '1', name: 'Dimych' },
      { id: '2', name: 'Andrey' },
      { id: '3', name: 'Sasha' },
      { id: '4', name: 'Petya' },
      { id: '5', name: 'Sveta' },
      { id: '6', name: 'Alina' }
   ],

   messages: [
      { id: '1', message: 'Hi' },
      { id: '2', message: 'How are you, man?' },
      { id: '3', message: 'Yo' },
      { id: '4', message: 'Yo' }
   ],
   newMessageBody: ''
}


const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case APDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body
         }
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, { id: 6, message: body }]
         }

      default:
         return state
   }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) =>
   ({ type: APDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer