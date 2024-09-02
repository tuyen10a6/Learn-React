import React, {useEffect, useState} from 'react';


const Post = ({post}) => {
    console.log('Rendering Post ID:', post.id, 'name:', post.name)
    return (
        <div className={'post'}>
            <h3> {post.id}</h3>
            <p> {post.name}</p>
        </div>
    )
}

const Memo = React.memo(Post);

const Posts = ({posts}) => {

    return (
        <div>
            {posts.map(item => (
                <Memo key={item.id} post={item}/>
            ))}
        </div>
    )
}

function App() {
    const [posts, setPosts] = useState([
        {id: 1, name: 'Phạm Văn Ước'},
        {id: 2, name: 'Cao Thị Nụ'},
        {id: 3, name: 'Phạm Xuân Tuyển'},
        {id: 4, name: 'Phạm Văn Khải'}
    ])

    useEffect(() => {
        setTimeout(() => {
            setPosts(prevPosts => [
                ...prevPosts, {id: 5, name: 'Phạm Thị Minh Anh'}
            ])
        }, 2000)
    }, []);
    return (
        <div>
            <Posts posts={posts}/>
        </div>
    )
}

export default App;