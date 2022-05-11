export function autoPlaySound({ id, src, callback }) {
  document.body.insertAdjacentHTML(
    'beforeend',
    /* html */ `<audio id=${id} src=${src}></audio>`
  );

  window.navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      callback();
      stream.getTracks().forEach((track) => track.stop());
    })
    .catch((error) => console.error(error.message));
}
