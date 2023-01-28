const ADD_POST = 'ADD-POST'
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
   posts: [
      { id: '1', message: 'Hi', likes: '0' },
      { id: '2', message: 'It\'s my first post', likes: 36 },
      { id: '3', message: 'HHello there', likes: 24 }
   ],
   newPostText: 'new post',
   profile: null
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
      case SET_USER_PROFILE: {
         return {...state, profile: action.profile}
      }
      default:
         return state
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const updateNewPostTextActionCreator = (text) =>
   ({ type: APDATE_NEW_POST_TEXT, newText: text })

export default profileReducer