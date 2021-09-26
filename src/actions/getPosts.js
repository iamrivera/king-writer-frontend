export function getPosts() {
    return (dispatch) => {
      fetch("http://127.0.0.1:3000/posts")
        .then((response) => response.json())
        .then((posts) =>
          dispatch({
            type: "GET_POSTS_SUCCESS",
            payload: posts,
          })
        );
    };
  }
  