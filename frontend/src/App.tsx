// App.tsx
import Login from "./components/Login.components.js";
import SignUp from "./components/Signup.components.js";
import TodoApp from "./components/TodoApp.js";

function App() {
  const isLoggedIn = true; 

  return (
    <>
      {isLoggedIn ? <TodoApp /> : <Login />}
    
    </>
  );
}

export default App;
