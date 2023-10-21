import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Use the provided API to fetch post details
    fetch(`https://hn.algolia.com/api/v1/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>Points : {post.points}</p>
          <h1>Comments</h1>
          <div className="user-card shadow p-3 mb-4 bg-body-tertiary rounded">
            {post.children.map((comment, index) => (
                <div className='box1 user-card shadow p-3 mb-3 bg-body-tertiary rounded' key={index}>📍{comment.text}</div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PostDetail;