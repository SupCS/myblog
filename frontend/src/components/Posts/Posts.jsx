import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Posts.module.css';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts/')
            .then(res => {
                setPosts(res.data.reverse());
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className={styles.posts}>
            {posts.map(post => (
                <div key={post.id} className={styles.post}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postBody}>{post.body}</p>
                    <p>Дата: {new Date(post.created_on).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;
