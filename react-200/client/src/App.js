/* import "./App.css"; */

import "bootstrap/dist/css/bootstrap.css";
import GrandParent from "./ContextApi/GrandParent";

import KeyboardEvnt from "./eventHandle/KeyboardEvnt";
import MouseMoveEvnt from "./eventHandle/MouseEvnt";
import RefBasic from "./eventHandle/RefBasic";
import SubmitEvnt from "./eventHandle/SubmitEvnt";
import CurringBasic from "./funcComponent/CurringBasic";
import CurringBasic2 from "./funcComponent/CurringBasic2";
import HOCBasic from "./funcComponent/HOCBasic";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/*       <PropsObj objectJSON={{ react: "리액트", twohundred: "200" }} /> */}
      {/* <PropsObj
        objectJSON={JSON.stringify({ react: "리액트", twohundred: 200 })}
      /> */}
      {/* <ReqProps reactNum={200}></ReqProps> */}
      {/*  <DefaultVal /> */}
      {/* <NodeChildren>
        <span>node from App.js</span>
        <ul>
          <li className="item">아이템1</li>
          <li className="item">아이템2</li>
          <li className="item">아이템3</li>
        </ul>
      </NodeChildren> */}
      {/* <BasicState reactString={"state-learn-react"}></BasicState> */}
      {/* <R25_SetState /> */}
      {/*  <ClassComponent></ClassComponent> */}
      {/* <R28_PureComponent /> */}
      {/* <R029_ShallowEqual /> */}
      {/* <R30_FunctionComponent contents="THIS IS FUNCTION COMPONENT" /> */}
      {/* <R31Hook /> */}
      {/*  <R032_Fragments /> */}
      {/* <ReturnMAp /> */}
      {/* <ReactstrapAlerts /> */}
      {/* <StrapBadge /> */}
      {/* <R056SweetAlert2Basic /> */}
      {/*  <FetchGet /> */}
      {/* <AxiousPost /> */}
      {/* <AxiousGet /> */}
      {/* <CallBackBasic /> */}
      {/* <PromiseBasic /> */}
      {/* <Reject /> */}
      {/* NOTE:part3 */}
      {/* <ClickEvnt /> */}
      {/* <ChangEvnt /> */}
      <MouseMoveEvnt />
      <KeyboardEvnt />
      <SubmitEvnt />
      <h1>Ref Exam</h1>
      <RefBasic />
      <CurringBasic />
      <CurringBasic2 />
      <HOCBasic name="App to React200" />
      <br />
      <br />
      Context API Basic
      {/* <GrandParent /> */}
      <GrandParent />
    </div>
  );
}

export default App;
