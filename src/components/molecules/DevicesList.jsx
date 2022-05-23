/* eslint-disable */
import React from 'react';
import { useTable } from 'react-table';
import { Table, TH, TD } from '../atomns/TableComponent';
import { NavLinkStyledDark } from '../atomns/NavLinkStyledDark';
import {
  ROUTE_SIGNUP,
} from '../../routes/routes';

function DevicesList() {
  const lastActivityData = new Date();
  const createData = new Date();

  const data = [
    {
      col1: 'Sensores A1',
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
      col1: 'Sensores A2',
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
  ];

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
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TH {...column.getHeaderProps()}>
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
              {row.cells.map((cell, idx) => (
                <TD {...cell.getCellProps()}>
                  {idx === 0 ? <NavLinkStyledDark to={ROUTE_SIGNUP}>{cell.render('Cell')}</NavLinkStyledDark> : cell.render('Cell')}
                </TD>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default DevicesList;
