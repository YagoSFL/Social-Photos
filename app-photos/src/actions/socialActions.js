export const handleUps = post => {
    return (dispatch, getState) => {
        let i = post.id -1
        post.upVotes++
        let photo = getState().gallery.gallery
        let data = Object.assign(
            [...photo], {[i]:
              Object.assign({}, photo[i], post)})  
        return dispatch({
            type: 'POST_CHANGED',
            payload: data
        })
    }
}

export const handleDowns = post => {
    return (dispatch, getState) => {
        let i = post.id -1
        post.downVotes++
        let photo = getState().gallery.gallery
        let data = Object.assign(
            [...photo], {[i]:
              Object.assign({}, photo[i], post)})  
        return dispatch({
            type: 'POST_CHANGED',
            payload: data
        })
    }
}
