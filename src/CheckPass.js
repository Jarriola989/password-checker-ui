import React, { Component } from "react";

class CheckPass extends Component {
  render() {
    return (
      <div className="check-pass-box">
        <h1>Password Checker</h1>
        <div>
          <span>Type in any password you want to check!</span>
          <br />
          <br />
          <span>How do we check if your password was hacked?</span>
          <br />
          <br />
          <br />
        </div>
        <form>
          <input type="text" className="check-input" />
          <button className="check-btn">Check</button>
        </form>
      </div>
    );
  }
}
export default CheckPass;
