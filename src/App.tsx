import { AppProviders } from "./providers/AppProviders";
import React from "react";

// import Greet from "./components/greet/greet";
// import Application from "./components/application/application";
// import Skills from "./components/skills/skills";
// import skills from "./components/skills/skillItems";
// import Counter from "./components/counter/Counter";
import MuiMode from "./components/mui/MuiMode";
// import CounterTwo from "./components/counter-two/CounterTwo";
import Users from "./components/users/Users";

import "./sass/App.css";

function App()
{
  return (
    <AppProviders>
      <div className="App">
        {/* <Greet name="Juan Kerr" /> */}
        {/* <Application /> */}
        {/* <Skills skills={skills} /> */}
        {/* <Counter /> */}
        <MuiMode />
        {/* <CounterTwo count={0} /> */}
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
