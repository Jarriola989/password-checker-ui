import React, { Component } from "react";

class CheckPass extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      isHacked: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () =>
      console.log(this.state.password)
    );
  };

  verifyPassword = (e) => {
    e.preventDefault();
    console.log("entered post request");
    const { password } = this.state;
    let result = fetch(
      "https://password-checker-api.herokuapp.com/check-pass",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      }
    );
    result.then(async (res) => {
      let hacked = await res.json();

      this.setState({ isHacked: hacked.result });
    });
  };

  render() {
    return (
      <div className="check-pass-box">
        <h1>Password Checker</h1>
        <div className="info">
          <span>Type in any password you want to check!</span>
          <span>How do we check if your password was hacked?</span>
        </div>
        <form type="submit" onSubmit={this.verifyPassword}>
          <input
            type="text"
            className="check-input"
            id="password"
            onChange={this.handleChange}
          />
          <button className="check-btn" onClick={this.verifyPassword}>
            Check
          </button>
        </form>
        <div className="hack-result">{this.state.isHacked}</div>
      </div>
    );
  }
}
export default CheckPass;
