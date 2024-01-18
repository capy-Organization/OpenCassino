import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Slots } from "./pages/slots";

 document.title= "Open Cassino";
const routes = createBrowserRouter(
  [
    {
      path:"/games/slots", 
      element: <Slots/>
    }
  ]
);

 
function App() {
  return (
      <RouterProvider router ={routes}/>
  )
}

export default App
