import React, { Component } from "react";

class SubmitEvnt extends Component {
  Submit(e) {
    let inputVal = document.getElementById("inputId").value;
    console.log(`submit inputVal : ${inputVal}`);

    //NOTE: submit 이후에 페이지 새로 고침을 방지할 수 있다.
    e.preventDefault();
  }
  render() {
    return (
      <>
        <form onSubmit={this.Submit}>
          <input type="text" name="inputName" id="inputId" />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default SubmitEvnt;
