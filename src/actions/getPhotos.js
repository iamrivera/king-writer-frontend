export default function getPhotos() {
  return (dispatch) => {
    fetch("http://127.0.0.1:3000/photos")
      .then((response) => response.json())
      .then((photos) =>
        dispatch({
          type: "GET_PHOTOS_REQUEST",
          payload: photos,
        })
      );
  };
}
