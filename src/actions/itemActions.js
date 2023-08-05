export const fetchPosts = () => async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      
      const postsWithImages = data.map(post => ({
        ...post,
        imgSrc: `https://picsum.photos/200?random=${post.id}`
      }));
  
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: postsWithImages });
    } catch (error) {
      dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
    }
  };
  