export const deletePost = (post) => {
  return (dispatch) => {
    fetch(`http://127.0.0.1:3000/posts/${post.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((responseJSON) => dispatch({ type: "DELETE_POST_REQUEST", payload: responseJSON }));
  };
};
