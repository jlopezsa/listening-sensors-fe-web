/* eslint-disable */
import React from 'react';
import { useTable } from 'react-table';
import { Table, TH } from '../atomns/TableComponent';

function DevicesList() {
  const lastActivityData = new Date();
  const createData = new Date();
  const data = React.useMemo(
    () => [
      {
        col1: 'Conjunto sensores A1',
        col2: [
          `Latitude_${4.456467854} `,
          `Longitude_${-74.456467854}`,
        ],
        col3: createData.toString(),
        col4: lastActivityData.toString(),
        col5: [
          'Accelerometer ',
          'Gyroscope ',
          'Magnetometro ',
        ],
        col6: 'Eliminar',
      },
      {
        col1: 'Conjunto sensores A2',
        col2: [
          `Latitude_${3.456467854} `,
          `Longitude_${-70.456467854}`,
        ],
        col3: createData.toString(),
        col4: lastActivityData.toString(),
        col5: [
          'Accelerometer ',
          'Gyroscope ',
        ],
        col6: 'Eliminar',
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Uicación',
        accessor: 'col2', // accessor is the "key" in the data
      },
      {
        Header: 'Última actividad',
        accessor: 'col3',
      },
      {
        Header: 'Fecha de creación',
        accessor: 'col4',
      },
      {
        Header: 'Sensores',
        accessor: 'col5',
      },
      {
        Header: 'Acciones',
        accessor: 'col6',
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Table {...getTableProps()} >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TH
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </TH>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '20px',
                    border: 'solid 1px gray',
                    background: 'white',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default DevicesList;
