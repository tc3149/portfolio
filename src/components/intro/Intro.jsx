import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Student", "Developer", "Casual Academic"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="header">
        <div className="wrapper">
          <h1>Thomas Chen</h1>
          <h3>
            UNSW <span ref={textRef}></span>
          </h3>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
