import "./App.css";
import Wallet from "./Wallet";
import Auth from "./Auth";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SendAssets from "./SendAssets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wallet />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/send-assets" element={<SendAssets />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
