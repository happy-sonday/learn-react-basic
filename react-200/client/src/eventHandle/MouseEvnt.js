import React, { Component } from "react";

class MouseMoveEvnt extends Component {
  mouseMove(tag) {
    console.log(tag);
  }

  mouseOver(overStr) {
    console.log(overStr);
  }

  MouseOut(outCheck) {
    console.log(outCheck);
  }

  render() {
    return (
      <>
        {/*NOTE:mouse가 해당 영역내에서 계속 detecting  */}
        <div onMouseMove={(e) => this.mouseMove("div")}>
          <h3>DIV onMouseMove</h3>
        </div>

        <select onMouseMove={(e) => this.mouseMove("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>

        {/* NOTE:mouse가 영역 진입할 때 작동 */}
        <h1
          onMouseOver={(e) => this.mouseOver("mouseOver")}
          onMouseOut={(e) => this.MouseOut("area out")}
        >
          Mouse In and Out
        </h1>
      </>
    );
  }
}

export default MouseMoveEvnt;
