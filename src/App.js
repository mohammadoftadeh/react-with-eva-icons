import React, { useEffect } from "react";
import "./App.css";

import * as eva from "eva-icons";

function App() {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <i
          data-eva="search"
          data-eva-animation="pulse"
          data-eva-hover="false"
          data-eva-infinite="true"
        />
        <br />
        <i
          data-eva="github"
          data-eva-animation="pulse"
          data-eva-hover="true"
          data-eva-infinite="true"
        />
        <br />
        <i
          data-eva="code"
          data-eva-animation="pulse"
          data-eva-hover="false"
          data-eva-infinite="true"
        />
      </header>
    </div>
  );
}

export default App;
