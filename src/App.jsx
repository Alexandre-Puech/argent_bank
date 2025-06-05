import "./styles/css/App.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/User";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout header={<Header />} footer={<Footer />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
