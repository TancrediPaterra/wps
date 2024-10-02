
function AreaIntervento({id, name, setFloor, isBoxVisible, text}){

    return <div className={`area-intervento ${!isBoxVisible ? "opacity-titolo-area" : ""}`}>
        <div className={`box-titolo-area-intervento`} onClick={setFloor}>
            <img src={"/Assets/BulletCube.png"} alt={"bullet-cube"}/>
            <div className={`titolo-area-intervento`}>{name}</div>
        </div>
        {isBoxVisible && <div className={"box-testo-comparsa"}>
            {text}
            {id>1 && <button className={"gallery-button"}>Vai alla galleria</button>}
        </div>}
    </div>
}

export default AreaIntervento;