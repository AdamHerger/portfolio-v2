"use client";
function Button({ text }) {
  function handleClick() {
    console.log("clicked");
  }
  return <button onClick={handleClick}>{text}</button>;
}

export default Button;
