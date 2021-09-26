export const createPost = (formData) => {
  return (dispatch) => {
    fetch("http://127.0.0.1:3000/posts", {
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((post) => dispatch({ type: "POST_POST_REQUEST", payload: post }));
  };
};
