export function getQuotes() {
  return (dispatch) => {
    fetch("http://127.0.0.1:3000/quotes")
      .then((response) => response.json())
      .then((quotes) =>
        dispatch({
          type: "GET_QUOTES_REQUEST",
          payload: quotes,
        })
      );
  };
}
