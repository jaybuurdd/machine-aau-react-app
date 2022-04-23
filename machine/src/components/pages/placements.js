import React from 'react';
import { useTable } from 'react-table';
//import '../../App.css';
import {MACHINEH1, MACHINEH2_CTR} from '../AppElements';
import axios from "axios";
import { useEffect, useState } from 'react';


const center = {
    textalign: 'center',
};


function Placements() {
    const [listOfChampions, setlistOfChampions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/championships").then((response) => {
            setlistOfChampions(response.data);
        });
    }, []);

    const data = React.useMemo(() =>
        listOfChampions, [listOfChampions]
    )

    const columns = React.useMemo(
        () => [
        {
        Header: 'National & Regional Competition',
        columns: [
        {
        Header: 'Year',
        accessor: 'Year',
        style: { width: '30%', textAlign: 'left' },
        },
        {
        Header: 'Competition Event',
        accessor: 'Event',
        style: { width: '45%', textAlign: 'center' },
        },
        {
        Header: 'Certification',
        accessor: 'Certification',
        style: { width: '25%', textAlign: 'center' },
        },
        ],
        },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })


    return (
        <>
            <div id="placements">
            <MACHINEH1 style={center}><strong>MACHINE TOP PLACEMENTS</strong></MACHINEH1>
            <div id="pagetable"
                        style={{
                            //overflowX: 'auto',
                            //overflowY: 'auto',
                            //justifyContent: 'center',
                            //alignItems: 'center',
                            zIndex: '0',                                        
                            }}>
            <table {...getTableProps()}
                                    style={{
                                        tableLayout: 'auto',
                                        width: '90%',
                                        border: '1px solid green',
                                        borderCollapse: 'collapse',
                                      }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}
                        style={{
                            //borderBottom: 'solid 3px blue',
                            border: '1px solid #0404d4',
                            borderCollapse: 'collapse',
                            background: '#0404d4',
                            color: 'white',
                            fontWeight: 'bold',
                            padding: '1em',
                          }}>{column.render('Header')}</th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}
                            style={{
                                //borderBottom: 'solid 3px blue',
                                border: '2px solid #0404d4',
                                borderCollapse: 'collapse',
                                background: 'white',
                                color: '#0404d4',
                                fontWeight: 'normal',
                                padding: '0 0.75em',
                              }}>{cell.render('Cell')}</td>
                        })}
                        </tr>
                    )
                    })}
                </tbody>
            </table>
            </div>
            <MACHINEH1>MACHINE</MACHINEH1>
            <MACHINEH2_CTR>All In - Built to Win</MACHINEH2_CTR>
            </div>
        </>

    );
}

export default Placements;