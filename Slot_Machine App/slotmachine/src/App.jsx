import React from "react";
import SlotM from "./SlotM";






function App(){



    return(
        < >
    <h1 className="heading"> 🎰 Welcome to <span className="card_title">slot machine App 🎰</span></h1>
    <div className="slotOuter">
    <SlotM x='😂' y='😂'  z='😂'/>
    <SlotM x='😁' y='😂'  z='😂'/>
    <SlotM x='😘' y='😂'  z='😂'/>
    <SlotM x='😂' y='😂'  z='😂'/>
    </div>
    </>
    );
}

export default App;