import Cubo from "./Cubo";

function DiagonaleCubi({floors, actualFloor}) {
    return <div className={"diagonale-cubi"}>
        {floors.filter(f => f.floor !== 0).map(({floor, cubeColor, imgCubeSrc}) =>
            (<Cubo
                key={floor}
                color={cubeColor}
                id={floor}
                imgSrc={imgCubeSrc}
                actualFloor={actualFloor}
            />)
        )}
        <div className={"last-cube"}></div>
    </div>

}
export default DiagonaleCubi