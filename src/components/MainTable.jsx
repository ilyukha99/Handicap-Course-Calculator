import React, {useState} from 'react';
import TableRow from "./TableRow";

const MainTable = () => {
    const arr = [
        {id: 1, state: useState("15"), name: "Individual Handicap Index"},
        {id: 2, state: useState("123"), name: "Slope of the Course"},
        {id: 3, state: useState( "70"), name: "Course rating"},
        {id: 4, state: useState("68"), name: "Par score"}
    ]

    let [firstView, setFirstView] = useState(true)
    const [allFine, setAllFine] = useState(false)
    const standardSlope = 113
    const [info, setInfo] = useState("")
    function evaluate() {
        setFirstView(false)

        for (let it = 0; it < arr.length; ++it) {
            let obj = arr[it]
            if (!isNumeric(obj.state[0]) || Number(obj.state[0]) < 0) {
                setInfo("Please, provide a valid \"" + obj.name + "\"")
                setAllFine(false)
                return
            }
        }

        setAllFine(true)
        const res = Math.round(arr[0].state[0] * arr[1].state[0] / standardSlope) + (arr[2].state[0] - arr[3].state[0])
        setInfo("Handicap course score: " + res)
    }

    function isNumeric(str) {
        if (typeof str != "string") return false
        return !isNaN(str) && !isNaN(parseFloat(str))
    }

    function clearValues() {
        for (let it = 0; it < arr.length; ++it) {
            arr[it].state[1]("")
        }
    }

    return (<div>
            <table className="mainPanel">
                <tbody>
                {arr.map(row =>
                    <TableRow
                        name={row.name}
                        val={row.state[0]}
                        setVal={row.state[1]}
                        id={row.id}
                    />
                )}
                <tr className="buttons">
                    <td>
                        <button className="evaluate" onClick={evaluate}>Evaluate</button>
                    </td>
                    <td>
                        <button onClick={clearValues}>Clear values</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div>
                <p className={firstView ? "none" : (allFine ? "info" : "alert")}>{info}</p>
            </div>
        </div>
    );
};

export default MainTable;