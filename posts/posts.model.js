const posts=[
    {
        id:'post1',
        title:'It is a first title',
        description:'It is a first description',
        comments:[{
            id:'comment1',
            text:'It is a first comment',
            likes:1
        }]
    },
    {
        id:'post2',
        title:'It is a second title',
        description:'It is a second description',
    },
]

function getALlPosts(){
    return posts;
}

function getPostById(id){
    return posts.find(post => {
        return post.id === id;
    })
}

module.exports ={
    getALlPosts,
    getPostById
}