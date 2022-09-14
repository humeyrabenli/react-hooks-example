import "./App.css";
import StateExample from "./useState/StateExample";
import EffectExample from "./useEffect/EffectExample";
import ContextExample from "./useContext/ContextExample";
import ReducerExample from "./useReducer/ReducerExample";
import RefExample from "./useRef/RefExample";
import RefExample2 from "./useRef/RefExample2";
import MemoExample from "./reactMemo/memoExample";
import UseMemoExample from "./useMemo/UseMemoExample";
import CallbackExample from "./useCallback/CallbackExample";

function App() {
  return (
    <div className="App">
      {/* <StateExample/> */}
      {/* <EffectExample/> */}
      {/*  <ContextExample/> */}
      {/* <ReducerExample/>  */}
      {/* <RefExample2/> */}
      {/*  <MemoExample/> */}
      {/* <UseMemoExample/> */}
      <CallbackExample />
    </div>
  );
}

export default App;
