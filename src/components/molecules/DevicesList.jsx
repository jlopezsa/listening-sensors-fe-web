/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTable } from 'react-table';
import { useSelector } from 'react-redux';
import { Table, TH, TD } from '../atomns/TableComponent';
import { NavLinkStyledDark } from '../atomns/NavLinkStyledDark';
import {
  ROUTE_SIGNUP,
} from '../../routes/routes';

function DevicesList() {
  const collectionsData = useSelector((state) => (state.collectionsData));
  const data = [];
  const lastActivityData = new Date();

  const keysCollection = Object.keys(collectionsData);

  keysCollection.map((item, indx) => {
    const copyCollection = { ...collectionsData[item] };
    delete copyCollection.name;
    delete copyCollection.location;
    delete copyCollection.createTime;
    const keysCopyCollecton = Object.keys(copyCollection);
    const createData = new Date(collectionsData[item].createTime.seconds * 1000);
    const dataCollection = {
      col1: collectionsData[item].name,
      col2: [
        `Latitude:${collectionsData[item].location.latitude} `,
        `Longitude:${collectionsData[item].location.longitude}`,
      ],
      col3: lastActivityData.toString(),
      col4: createData.toString(),
      col5: [
        keysCopyCollecton.map((itemKey) => `${itemKey} `),
      ],
      col6: 'Eliminar',
    };
    data[indx] = dataCollection;
    return data;
  });

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'col1',
      },
      {
        Header: 'Uicación',
        accessor: 'col2',
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
