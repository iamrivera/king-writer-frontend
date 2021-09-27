export const deletePost = (postId) => {
  return (dispatch) => {
    fetch("http://127.0.0.1:3000/photos", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((post) => dispatch({ type: "DELETE_POST_REQUEST", payload: post }));
  };
};
