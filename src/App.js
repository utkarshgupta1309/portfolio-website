import "./App.css";
import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import IsLoading from "./Components/IsLoading";

function App() {
  const bodyElement = document.getElementsByTagName('body')[0]
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
  }, []);

  if (isLoading) {
    bodyElement.classList.remove('dark')
    return <IsLoading />;
  }
  else{
    bodyElement.classList.add('dark')
    return <Home />;
  }
}

export default App;
