export const createPost = (formData) => {
  return (dispatch) => {
    dispatch({ type: "POST_POCKET_REQUEST" });
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      return response.json();
    });
  };
};
