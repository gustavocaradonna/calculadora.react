import React from "react";
import "../css/calcu.css";
import { useState, useEffect } from "react";
import { Cuadrado, Rectangulo } from "../styledComponents";
import gsap from "gsap";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <form>
        <input type="text" value={result} />
      </form>
      <br></br>

      <div className="keypad">
        <button onClick={clear} id="clear" className="color2">
          Clear
        </button>
        <button onClick={backspace} id="backspace" className="color2">
          C
        </button>
        <button name="/" onClick={handleClick} className="color3">
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick} className="color3">
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick} className="color3">
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick} className="color3">
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button name="=" onClick={calculate} id="result" className="color3">
          =
        </button>
        {/* <Cuadrado />
        <Rectangulo /> */}
      </div>
    </div>
  );
};

export default Calculator;
