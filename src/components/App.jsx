import React from "react";
import Header from "./Header";
import Newsfeed from "./Newsfeed";

function App(){
  return (
    <div>
      <Header/>
      <Newsfeed/>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </div>
  );
}
export default App;
