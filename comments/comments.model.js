const comments=[
    {
        id:'comment1',
        text:'It is a first comment',
        likes:1
    },
    {
        id:'comment2',
        text:'It is a second comment',
        likes:10
    }
]

// 모든 게시물을 반환하는 함수
function getAllComments(){
    return comments;
}

// 새로운 게시물을 추가하는 함수
function addNewComment(id, text){
    const newComment={
        id,
        text,
        likes:0
    }
    comments.push(newComment);
    return newComment
}

// 좋아요를 누른 게시물을 반환하는 함수
function getCommentsByLikes(minLikes) {
    return comments.filter(comment => {
        return comment.likes >= minLikes
    })
}


module.exports = {
    getAllComments,
    getCommentsByLikes,
    addNewComment
}