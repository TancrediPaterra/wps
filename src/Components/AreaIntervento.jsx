
function AreaIntervento({name, setFloor, isBoxVisible, text}){

    return <div className={"area-intervento"}>
        <div className={`titolo-area-intervento ${!isBoxVisible ? "opacity-titolo-area" : ""}`} onClick={setFloor}>
            <img src={"/Assets/BulletCube.png"} alt={"bullet-cube"}/>
            <div >{name}</div>
        </div>
        {isBoxVisible && <div className={"box-testo-comparsa"}>
            {text}
        </div>}
    </div>
}

export default AreaIntervento;