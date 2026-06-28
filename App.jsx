import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Quiz from "./pages/Quiz";
import Start from "./pages/Start";
import "./style.css";
import Install from "./pages/Install";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/lesson" element={<Lesson/>}/>

<Route path="/quiz" element={<Quiz/>}/>

<Route path="/start"element={<Start/>}
/>
</Routes>

</BrowserRouter>

)

}


export default App;