import logo from './logo.svg';
import './App.css';
import FunctionalClick from './components/FunctionalClick';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Classclick from './components/Classclick';
import Login,{ Message } from './components/Message';
import HooksCounter from './components/Hookscounter';
import HooksCounter2 from './components/Hookcounter2';
import HookCounter3 from './components/HookCounter3';
import IntervalHook from './components/IntervalHook';
import DataFetching from './components/DataFetching';
import ComponentE from './components/ComponentE';
import Rendering from './components/Rendering';
import UseRef from './components/UseRef';
import React, { createContext } from 'react';
import CounterOne from './components/CounterOne';
import DocumentTitle from './components/DocumentTitle';
import UseCount from './components/UseCount';
export const context = createContext();
export const context2 = createContext();
function App() {

  return (
    <div className="App">
     {/* <FunctionalClick/>
     <Classclick/>
     <HooksCounter/>
     <HooksCounter2/>
     <HookCounter3/> */}
     {/* <IntervalHook/> */}

     {/* <DataFetching/> */}
    {/* <context.Provider value={"surya"}>
      <context2.Provider value={"48"}>
     <ComponentE/>
     </context2.Provider>
     </context.Provider> */}
     {/* <CounterOne/> */}
     {/* <Rendering/> */}
    {/* <UseRef/> */}

<DocumentTitle/>
<UseCount/>

     
    </div>
  );
}

export default App;
