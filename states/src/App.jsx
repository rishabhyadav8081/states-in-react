import { useState, useCallback, useEffect,useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [char, setchar] = useState(false);
  const [num, setnum] = useState(false);
  const [pass, setpass] = useState("");
  // ref hook
  const ref = useRef(null)

  const password = useCallback(() => {
    let passw = "";
    let str = "ABCDEFGHIJKLMNOPasksdnskldndfkvnfvfldkldsfl";

    if (char) {
      str += "!@#$%^&*";
    }
    if (num) {
      str += "0123456789";
    }

    for (let i = 0; i <= length; i++) {
      let pass = Math.floor(Math.random() * str.length);
      passw += str.charAt(pass);
    } 
    setpass(passw);
  }, [length, char, num]);

  useEffect(() => {
    password();
  }, [length, char, num]);

  const copy = ()=>{
    ref.current?.select()
    window.navigator.clipboard.writeText(pass)
  }
  return (
    <>
      <h1>password generator </h1>
      <div>
        <input className="input" type="text" value={pass} placeholder="password" 
          ref={ref}
        />
        <button 
        onClick={copy}
        >
        copy
        </button>
      </div>
      <div>
        <input
        className="input2"
          type="range"
          min={8}
          max={20}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label htmlFor="">length:{length}</label>
      </div>
      <div  className="input3">
        <input
          type="checkbox"
          defaultChecked={char}
          onChange={() => {
            setchar((prev) => !prev);
          }}
        />
        <label htmlFor="">characters</label>
        <input
          type="checkbox"
          defaultChecked={num}
          onChange={(e) => {
            setnum((prev) => !prev);
          }}
        />
        <label htmlFor="">numbers</label>
      </div>
    </>
  );
}

export default App;
