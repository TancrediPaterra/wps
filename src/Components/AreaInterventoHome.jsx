
function AreaInterventoHome({id, name, setFloor, isBoxVisible, text}){

    return <div className={`area-intervento ${!isBoxVisible ? "opacity-titolo-area" : ""}`}>
        <button className={`button-titolo-area-intervento`} onClick={()=>{setFloor(id)}}>
            <img src={"/Assets/BulletCube.png"} alt={"bullet-cube"}/>
            <div className={`titolo`}>{name}</div>
        </button>
        {isBoxVisible && <div className={"box-testo-comparsa"}>
            {text}
            {id>1 && <button className={"gallery-button"}>Vai alla galleria</button>}
        </div>}
    </div>
}

export default AreaInterventoHome;