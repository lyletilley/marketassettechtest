import React, {useState} from 'react'
import Data from '../MOCK_DATA.json'

export default function Table() {
const [data, setData] = useState(Data)
const [order, setOrder] = useState("ASC")
const sorting = (col) => {
    if (order === "ASC") {
        const sorted = [...data].sort((a, b)=>
        a [col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
        setData(sorted);
        setOrder("DSC")
    }
    if (order === "DSC") {
        const sorted = [...data].sort((a, b)=>
        a [col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
        setData(sorted);
        setOrder("ASC")
    }

};

    return (
        <div className='container'>
<table className='table table-bordered'>
    <thead>
    <th onClick={()=> sorting('srtucture_type')}>Structure Type</th>
    <th onClick={()=> sorting('id')}>ID</th>
    <th onClick={()=> sorting('last_name')}>Name</th>
    <th onClick={()=> sorting('x_coordinate')}>X Coordinate</th>
    <th onClick={()=> sorting('y_coordinate')}>Y Coordinate</th>
    </thead>
        <tbody>
        {data.map((d) =>(
            <tr key={d.id}>
                <td>{d.structure_type}</td>
                <td>{d.id}</td>
                <td>{d.last_name}</td>
                <td>{d.x_coordinate}</td>
                <td>{d.y_coordinate}</td>

            </tr>
        ) )}
        </tbody>

</table>
        </div>
    )
}