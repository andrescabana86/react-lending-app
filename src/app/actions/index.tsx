import React from 'react';
import { notification, Icon } from 'antd';
import 'antd/lib/notification/style/css';
import 'antd/lib/icon/style/css';

import * as Api from '../api';
import { GET_REQUESTS_LIST, GET_SCORING_PENDING, GET_SCORING_SUCCESS } from './types';
import { IScoringRequest, IScoringUpdate } from '../interfaces/scoring';

export const getScoring = (values:IScoringRequest) =>
(dispatch:Function) => {
  dispatch({ type: GET_SCORING_PENDING });
  Api.getScoring(values)
  .then(({ data }:any) => {
    dispatch({ type: GET_SCORING_SUCCESS, payload: data });
    Api.saveScoring({ ...values, scoring: data });
  });
};

export const getRequestsList = () => fetchRequestsList;

const fetchRequestsList = (dispatch:Function) => {
  Api.getRequestsList().then((data) => {
    const query = data.data;
    if (query) {
      const list = Object.keys(query).map((key:string) => ({ key, ...query[key] }));
      dispatch({ type: GET_REQUESTS_LIST, payload: list });
    } else {
      dispatch({ type: GET_REQUESTS_LIST, payload: [] });
      showNotification(
        `Mensaje`,
        `No existen datos para mostrar.`);
    }
  });
};

export const updateRequest = (values:IScoringUpdate) =>
(dispatch:Function) => {
  Api.updateRequest(values)
  .then(() => {
    fetchRequestsList(dispatch);
    showNotification(
      `Datos de ${values.nombre} ${values.apellido}`,
      `La informacion del pedido fue guardada correctamente.`);
  });
};

export const deleteRequest = (requestId:string) =>
(dispatch:Function) => {
  Api.deleteRequest(requestId)
  .then(() => {
    showNotification(
      `Pedido: ${requestId}`,
      `La informacion del pedido fue eliminada.`);
    fetchRequestsList(dispatch);
  });
};

export const showNotification = (title:string, message:string) =>
  notification.open({
    message: title,
    description: message,
    icon: <Icon type="exclamation-circle" style={{ color: '#108ee9' }} />,
  });
