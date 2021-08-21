import React, { Component } from "react";

class R015_Map extends Component {
  componentDidMount() {
    let MapArr = [3, 2, 8, 8];
    let MapNewArr = MapArr.map((x) => x);
    console.log(`1. MapNewArr :${MapNewArr}`);

    let MapMultiArr = MapArr.map((x) => x * 2);
    console.log(`2. MapMultiArr :${MapMultiArr}`);

    let ObjArray = [
      { key: "react", value: "200" },
      { key: "리액트", value: "TwoHundred" },
    ];

    let MapObjArr = ObjArray.map((obj, index) => {
      console.log(obj);
      console.log(obj.key);
      console.log(`${index + 3}. obj ${JSON.stringify(obj)}`);
      let Obj = {};
      Obj[obj.key] = obj.value;
      console.log(Obj);

      return Obj;
    });

    console.log(`5. MapObjArr : ${JSON.stringify(MapObjArr)}`);
  }

  render() {
    return <h2>[THIS IS Map ]</h2>;
  }
}

export default R015_Map;
