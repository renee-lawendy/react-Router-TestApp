import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Layout from "./component/Layout/LayOut";
import InfoLayout from "./component/Layout/InfoLayout";
import Question from "./component/Question/Question";
import Contact from "./component/Contact/Contact";
import NotFound from "./component/NotFound";
import ProductsLAyout from "./component/Layout/ProductsLAyout";
import Products from "./component/Products";
import { productLoader } from "./component/Products";
import ProductDetails, { productDetailsLoader } from "./ProductDetails";
import ProductError from "./component/ProductError";
function App() {
  const router= createBrowserRouter([{path:"/",element:<Layout/>,children:[{index:true,element:<Home/>},
  {path:"about",element:<About/>},
{ path:"info",element:<InfoLayout/>,children:[{
  path:"question",element:<Question/>
},{
  path:"contact",element:<Contact/>
}
]},{path:"*",element:<NotFound/>},
{
  path:"products",element:<ProductsLAyout/>,errorElement:<ProductError/>,children:[
    {index:true,element:<Products/>,loader:productLoader},{path:":id",element:<ProductDetails/>,loader:productDetailsLoader,errorElement:<ProductError/>}
  ]
}
]}
])
  return (
  <RouterProvider router={router}/>
  );
}

export default App
