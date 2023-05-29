import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";



function App() {
  return (
    < >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
