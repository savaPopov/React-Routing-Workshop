import { useEffect, useReducer } from 'react'
import { createComment, getAllComments } from '../api/comments'


export function useCreateComment() {
  const createHandler = (gameId, comment) => createComment(gameId, comment)


  return createHandler
}

function commentsReducer(state, action) {

  switch (action.type) {
    case 'GET_ALL':
      return action.payload.slice()
    case 'ADD_COMMENT':
      return [...state, action.payload]
    default:
      return state

  }

}

export function useGetAllComments(gameId) {
  const [comments, dispatch] = useReducer(commentsReducer, [])

  useEffect(() => {
    (async () => {
      const result = await getAllComments(gameId)

      dispatch({ type: 'GET_ALL', payload: result })
    })()
  }, [gameId])
  // console.log('COMMENT');
  // console.log(comments)
  return [comments, dispatch]
}