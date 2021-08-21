import React, { Component } from "react";
import Swal from "sweetalert2";

class SweetAlert2Confirm extends Component {
  deleteAlert = (e) => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4B088A",
      cancelButtonColor: "#01DF01",
      confirmButtonText: "예",
      cancelButtonText: "아니요",
    }).then((res) => {
      if (res.value) {
        document.getElementById("deletedId").remove();
        Swal.fire("Deleted", "sweetalert2 삭제완료", "success");
      }
    });
  };

  render() {
    return (
      <>
        <h1 id="deletedId">sweetalert2</h1>
        <button onClick={(e) => this.deleteAlert()}>삭제</button>
      </>
    );
  }
}

export default SweetAlert2Confirm;
