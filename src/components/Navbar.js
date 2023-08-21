


const Navbar = ({onButtonClick,textColor})=>{
    return(
        <div className="ContNav">
            <div>
            <span className="kariem">Kariem</span> <span className="NameGrad">Atef</span>

            </div>
            <button style={{background:textColor}} className="btnChangeColor" onClick={onButtonClick}>Change color</button>
            
        </div>
    )
}

export default Navbar;