/* import "./App.css"; */

import "bootstrap/dist/css/bootstrap.css";
import AxiousGet from "./awaitasync/AxiosGet";
import AxiousPost from "./awaitasync/AxiosPost";
import CallBackBasic from "./awaitasync/callBackBasic";

import FetchGet from "./awaitasync/FetchGet";
import PromiseBasic from "./awaitasync/PromiseBasic";
import Reject from "./awaitasync/Reject";

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
      <Reject />
    </div>
  );
}

export default App;
