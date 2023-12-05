import { useNavigate } from "react-router-dom";

function Button ({valueLink, buttonValue }){

    const navigate = useNavigate(valueLink)
    const handleClick = () =>{
        navigate(valueLink)
    }

    return (
        <>
         <button onClick={handleClick}>{buttonValue}</button>
         </>
    )
       
       
}
export default Button;