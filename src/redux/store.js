import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
   _state: {

      profilePage: {
         posts: [
            { id: '1', message: 'Hi', likes: '0' },
            { id: '2', message: 'It\'s my first post', likes: 36 },
            { id: '3', message: 'HHello there', likes: 24 }
         ],
         newPostText: 'new post'
      },

      dialogsPage: {
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
      },

      sideBar: {
         friends: [
            { id: '1', name: 'Andrew' },
            { id: '2', name: 'Misha' },
            { id: '3', name: 'Sveta' },
         ]
      }
   },

   _callSubscriber() {
      console.log('state changed');
   },

   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.sideBar = sidebarReducer(this._state.sideBar, action)

      this._callSubscriber(this._state)
   }
}



export default store