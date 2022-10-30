import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./Components";
import Home from "./Pages/Home";
import SingleUser from "./Components/SingleUser";
import Users from "./Pages/Users";
import { ErrorPage } from "./ErrorPage";
import { Navbar } from "./Components";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="users/:seed" element={<SingleUser />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
