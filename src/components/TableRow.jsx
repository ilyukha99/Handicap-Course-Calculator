import React from 'react';

const TableRow = ({name, val, setVal}) => {
    function onValChange(event) {
        setVal(event.target.value)
    }

    return (
        <tr>
            <td>{name}</td>
            <td>
                <label>
                    <input
                        className="numericInput"
                        type="text"
                        value={val}
                        onChange={onValChange}
                    />
                </label>
            </td>
        </tr>
    );
};

export default TableRow;