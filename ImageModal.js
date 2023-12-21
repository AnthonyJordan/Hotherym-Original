function ImageModal({ src, closeModal, description }) {
  return React.createElement(
    "div",
    { className: "modalBackground", onClick: () => closeModal(false) },
    React.createElement(
      "div",
      { className: "modalContainer" },
      React.createElement(
        "div",
        null,
        React.createElement("img", {
          className: "modalImage",
          src: src,
          description: description,
        }),
        React.createElement("p", { className: "modalDesc" }, description)
      )
    )
  );
}

export default ImageModal;
