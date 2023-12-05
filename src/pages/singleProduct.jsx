import { useParams } from "react-router-dom";
function SingleProduct (){
    const {id} = useParams()
    return (
        <h1>Product name {id}</h1>
    );
}
export default SingleProduct;