const commentModel=require('./comments.model.js');

module.exports = {
    // 모든 게시물을 가져오는 쿼리
    Query:{
        comments: ()=>{
            return commentModel.getAllComments();
        },
        // 특정 ID의 게시물을 가져오는 쿼리
        commentsByLikes:(_,args)=>{
            return commentModel.getCommentsByLikes(args.minLikes);
        }
    },
    // 새로운 게시물을 추가하는 뮤테이션
    Mutation:{
        addNewComment:(_,args)=>{ 
            return commentModel.addNewComment(args.id, args.text);
        }
    }

}