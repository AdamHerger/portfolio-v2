"use client";
function AnchorButton({ text, id }) {
  return (
    <button className="contactbutton" onClick={copy}>
      {text}
    </button>
  );
}

function copy() {
  navigator.clipboard.writeText("adam@herger.at");
  const popup = document.getElementById("popup");
  popup.classList.add("open");
  setTimeout(() => popup.classList.remove("open"), 3000);
}

export default AnchorButton;
