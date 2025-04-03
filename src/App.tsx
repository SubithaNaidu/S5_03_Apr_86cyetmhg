import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./redux/store";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
