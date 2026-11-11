"use client";
function AnchorButton({ text, id }) {
  function handleClick() {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <button className="anchorbutton" onClick={handleClick}>
      {text}
    </button>
  );
}

export default AnchorButton;
