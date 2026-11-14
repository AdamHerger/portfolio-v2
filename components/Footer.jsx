"use client";

function Footer() {
  return (
    <ul id="contact" className="footer footerdynamic">
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
      <li className="email-footer">
        <a onClick={scrollOnClick}>Back to top</a>
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

function scrollOnClick() {
  document
    .getElementById("navbar")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default Footer;
