
function AreaIntervento({id, name, setFloor, isBoxVisible, text}){

    return <div className={`area-intervento ${!isBoxVisible ? "opacity-titolo-area" : ""}`}>
        <button className={`button-titolo-area-intervento`} onClick={()=>setFloor(id)}>
            <img src={"/Assets/BulletCube.png"} alt={"bullet-cube"}/>
            <div className={`titolo-area-intervento`}>{name}</div>
        </button>
        {isBoxVisible && <div className={"box-testo-comparsa"}>
            {text}
            {id>1 && <button className={"gallery-button"}>Vai alla galleria</button>}
        </div>}
    </div>
}

export default AreaIntervento;