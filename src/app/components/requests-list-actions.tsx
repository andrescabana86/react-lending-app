import React from 'react';
import { Link } from 'react-router-dom';

import { Divider } from 'antd';
import 'antd/lib/divider/style/css';
import { IRequestsListActions } from '../interfaces/requests-list';

export const RequestsListActions:React.SFC<IRequestsListActions> =
(props) => {
  const { record, handleDelete } = props;
  return (
    <span>
      <Link to={{
        pathname: `/edit/${
          record.key}/${
          record.nombre}/${
          record.apellido}/${record.documento}`,
      }}>
        Editar
      </Link>
      <Divider type="vertical" />
      <a onClick={() => handleDelete(record)}>
        Eliminar
      </a>
    </span>
  );
};
