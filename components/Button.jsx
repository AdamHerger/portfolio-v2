"use client";
function Button({ text, id }) {
  function handleClick() {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return <button onClick={handleClick}>{text}</button>;
}

export default Button;
