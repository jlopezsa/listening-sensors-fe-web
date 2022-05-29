/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useTable } from 'react-table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Table, TH, TD } from '../atomns/TableComponent';
import { NavLinkStyledDark } from '../atomns/NavLinkStyledDark';
import { saveSensorChoosed, saveCollectionName } from '../../store/actions';
import {
  ROUTE_SINGLE_DASHBOARD,
} from '../../routes/routes';

function DevicesList() {
  const collectionsData = useSelector((state) => (state.collectionsData));
  const dispatch = useDispatch();
  const data = [];
  const lastActivityData = new Date();
  const navigate = useNavigate();

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

  function collecionToStore(idx) {
    dispatch(saveCollectionName(keysCollection[idx]));
    dispatch(saveSensorChoosed(collectionsData[keysCollection[idx]]));
    navigate('/singlesetsensor');
  }

  useEffect(() => {
  }, []);

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
        {rows.map((row, idxRow) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, idxCell) => (
                <TD {...cell.getCellProps()}>
                  {idxCell === 0 ? <NavLinkStyledDark to={ROUTE_SINGLE_DASHBOARD} onClick={() => collecionToStore(idxRow)}>{cell.render('Cell')}</NavLinkStyledDark> : cell.render('Cell')}
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
