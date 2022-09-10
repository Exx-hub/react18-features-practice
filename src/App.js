import "./App.css";
import CounterTransition from "./components/CounterTransition";
import SuspenseComponent from "./components/SuspenseComponent";
import UseDeferredValueParent from "./components/UseDeferredValueParent";

import UseTransitionHook from "./components/UseTransitionHook";
import UseEffectComponent from "./useeffecttutorial/UseEffectComponent";
import UseEffectJack from "./useeffecttutorial/UseEffectJack";

function App() {
  return (
    <div className="App">
      {/* <CounterTransition /> */}
      {/* <SuspenseComponent /> */}
      {/* <UseTransitionHook /> */}
      {/* <UseDeferredValueParent /> */}
      {/* <UseEffectComponent /> */}
      <UseEffectJack />
    </div>
  );
}

export default App;
