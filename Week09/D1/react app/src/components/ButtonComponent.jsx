const ButtonComponent =({text, btn})=>{
const customStyle={
    border:" 2px solid grey",
    color:"purple",
    
}

    return(
        <button style={customStyle} onClick={btn}>{text}</button>
    )
}
export default ButtonComponent