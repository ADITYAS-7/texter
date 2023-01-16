import React, { useState } from "react";

export default function Textform(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setbtnText] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        className: "btn-light",
      });
      setbtnText("Enable dark mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText("Enable light mode");
    }
  };

  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const handleLowClick = () => {
    let LowerText = text.toLowerCase();
    setText(LowerText);
  };

  const handleCopyClick = () => {
    let textcopy = document.getElementById("Textarea");
    textcopy.select();
    navigator.clipboard.writeText(textcopy.value);
  };
  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <style>{"body { background-color: #002147; }"}</style>
      <div className="container my-5" style={myStyle}>
        <div className="mb-3 heading_textbox">
          <h1>{props.heading}</h1>
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            style={myStyle}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="Textarea"
            rows="15"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-success"
        >
          Upper case
        </button>
        <button
          type="button"
          onClick={handleLowClick}
          className="btn btn-success mx-2 my-4"
        >
          Lower case
        </button>
        <button
          type="button"
          onClick={handleCopyClick}
          className="btn btn-success mx-2"
        >
          Copy
        </button>

        <button
          type="button"
          onClick={handleClearClick}
          className="btn btn-success"
        >
          Clear
        </button>
      </div>

      <div className="container my-5" style={myStyle}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>Reading time: {0.008 * text.split(" ").length} minutes</p>
        <p>Speaking time: {0.006 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      <br />

      <div className="container my-5" style={myStyle}>
        <h2>About Us</h2>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                style={myStyle}
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                style={myStyle}
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          style={myStyle}
          class="btn btn-dark my-5"
          onClick={toggleStyle}
        >
          {btntext}
        </button>
      </div>
    </>
  );
}
