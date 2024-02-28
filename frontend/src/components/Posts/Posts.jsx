import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Posts.module.css';
import Modal from '../Modal/Modal';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        axios.get('/api/posts/')
            .then(res => {
                setPosts(res.data.reverse());
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    return (
        <>
          <div className={styles.postsContainer}>
            {posts.map(post => (
                <div key={post.id} className={styles.postCard} onClick={() => handlePostClick(post)}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postBody}>{post.body.substring(0, 100)}...</p>
                </div>
            ))}
          </div>
          {selectedPost && (
              <Modal isOpen={Boolean(selectedPost)} onClose={handleCloseModal}>
                  <h2>{selectedPost.title}</h2>
                  <p>{selectedPost.body}</p>
              </Modal>
          )}
        </>
    );
}

export default Posts;