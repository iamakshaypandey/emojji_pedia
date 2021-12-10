import react, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😃": "Smileys & People",
  "😍": "Smiling Face with Heart-Eyes",
  "😗": "Kissing Face",
  "😊": "Smiling Face with Smiling Eyes",
  "❤️": "Red Heart"
};

var emojiweknow = Object.keys(emojiDictionary);

export default function App() {
  const [mening, setmening] = useState("");

  function emojiHendler(event) {
    var userinput = event.target.value;
    var mening = emojiDictionary[userinput];
    if (mening === undefined) {
      mening = "we dont have database";
    }
    setmening(mening);
  }
  function emojiclickHandler(emoji) {
    var mening = emojiDictionary[emoji];
    setmening(mening);
  }

  return (
    <div className="App">
      <h1>input out</h1>
      <input onChange={emojiHendler} />
      <h2> {mening}</h2>
      <h3>emoji we know</h3>
      {emojiweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
