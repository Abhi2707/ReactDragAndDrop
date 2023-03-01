import "./App.css";
import Login from "./login/Login";
import Dashboard from "./dashboard";

function App() {
  const isAuth = localStorage.getItem("isAuth");
  const taskData = localStorage.getItem(`${isAuth}`);
  return typeof isAuth === "string" ? (
    <Dashboard taskData={taskData} loggedInUser={isAuth} />
  ) : (
    <Login />
  );
}

export default App;
