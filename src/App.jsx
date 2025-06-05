import "./styles/css/App.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      <h1>Argent Bank</h1>
    </Provider>
  );
}

export default App;
