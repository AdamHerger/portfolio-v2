"use client";

function Navbar() {
  return (
    <ul className="footer animate-on-load-above" id="navbar">
      <li className="email-footer">
        <a onClick={copy}>email: adam [at] herger (dot) at</a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/AdamHerger">
          Github
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/adamherger/">
          LinkedIn
        </a>
      </li>
    </ul>
  );
}

function copy() {
  navigator.clipboard.writeText("adam@herger.at");
  const popup = document.getElementById("popup");
  popup.classList.add("open");
  setTimeout(() => popup.classList.remove("open"), 3000);
}

export default Navbar;
