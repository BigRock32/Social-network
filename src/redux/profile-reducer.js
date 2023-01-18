const ADD_POST = 'ADD-POST'
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT'

let initialState = {
   posts: [
      { id: '1', message: 'Hi', likes: '0' },
      { id: '2', message: 'It\'s my first post', likes: 36 },
      { id: '3', message: 'HHello there', likes: 24 }
   ],
   newPostText: 'new post'
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likes: 0
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         }
      }
      case APDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         }
      }
      default:
         return state
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
   ({ type: APDATE_NEW_POST_TEXT, newText: text })

export default profileReducer