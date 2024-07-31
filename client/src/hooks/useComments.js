import { useEffect, useState } from 'react'
import { createComment, getAllComments } from '../api/comments'


export function useCreateComment() {
  const createHandler = (gameId, comment) => createComment(gameId, comment)
  

  return createHandler
}

export function useGetAllComments(gameId) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    (async () => {
      const result = await getAllComments(gameId)
      setComments(result)
    })()


  }, [gameId])
  // console.log(comments)
  return [comments, setComments]
}