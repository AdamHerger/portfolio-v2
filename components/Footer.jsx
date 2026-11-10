"use client";

function Footer() {
  return (
    <ul id="contact" className="footer">
      <li>
        <a onClick={copy}>email: adam [at] herger (dot) at</a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/AdamHerger">
          Github
        </a>
      </li>
      <li>
        <a href="/">Back to top</a>
      </li>
    </ul>
  );
}

function copy() {
  navigator.clipboard.writeText("adam@herger.at");
  alert("Email address copied");
}

export default Footer;
