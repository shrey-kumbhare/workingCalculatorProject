import React, { useState } from "react";

function calculator(props) {
  const [item, setItem] = useState("");

  function mcgange(event) {
    setItem(event.target.value);
  }

  function cal(event) {
    setItem(eval(item));
    event.preventDefault();
  }
  function c() {
    setItem(0);
  }
  display = (event) => {
    setItem((previous) => previous + event.target.innerText);
    event.preventDefault();
  };

  return (
    <div>
      <div className="title">
        <h1>CASIO</h1>
      </div>
      <div className="container">
        <form onSubmit={cal}>
          <div className="form">
            <input onChange={mcgange} value={item}></input>
            <button onClick={c}>
              <span>c</span>
            </button>
            <table>
              <tr>
                <td>
                  <button onClick={this.display}>
                    <span>1</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>2</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>3</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>/</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={this.display}>
                    <span>4</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>5</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>6</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>-</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={this.display}>
                    <span>7</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>8</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>9</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>+</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={this.display}>
                    <span>.</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>0</span>
                  </button>
                </td>
                <td>
                  <button type="submit">
                    <span>=</span>
                  </button>
                </td>
                <td>
                  <button onClick={this.display}>
                    <span>*</span>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

export default calculator;
