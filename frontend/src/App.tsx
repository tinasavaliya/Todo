// App.tsx
import Login from "./components/Login.components";
import SignUp from "./components/Signup.components";
import TodoApp from "./components/TodoApp";

function App() {
  const isLoggedIn = true; 

  return (
    <>
      {isLoggedIn ? <TodoApp /> : <Login />}
    
    </>
  );
}

export default App;
