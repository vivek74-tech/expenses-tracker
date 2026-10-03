import Body from "./components/Body";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import View from "./components/View";
import Update from "./components/Update";


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>
  },
    {
    path:"/view/:id",
    element: <View/>
  },
   {
    path:"/update/:id",
    element:<Update/>
  }

])

function App() {
 

  return (
   <div >
    <RouterProvider router = {appRouter} />
   </div>
  )
}

export default App
