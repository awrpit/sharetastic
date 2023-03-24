import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="bg-cyan-50 h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default App;
