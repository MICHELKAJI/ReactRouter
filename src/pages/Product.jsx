import { Outlet } from "react-router-dom"; 
function Products(){
    return(
        
        <>
          <h1>Product</h1>
          <Outlet/>
        </>
    )
}
export default Products;