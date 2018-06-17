import axios from 'axios';
import { IScoringRequest, IScoringUpdate } from '../interfaces/scoring';
const EDIT_API = 'https://wired-torus-98413.firebaseio.com/users';
const LIST_API = 'https://wired-torus-98413.firebaseio.com/users.json';
const SCORING_API = 'http://scoringservice.moni.com.ar:7001/api/v1/scoring';

export const getRequestsList = () => axios.get(LIST_API);

export const getScoring = ({ documento, genero, email }: IScoringRequest) => {
  const endpoint = `${SCORING_API}/?document_number=
    ${documento}&gender=${genero}&email=${email}`;
  return axios.get(endpoint);
};

export const saveScoring = (scoring:any) => {
  return axios.post(LIST_API, scoring);
};

export const updateRequest = (data:IScoringUpdate) => {
  const endpoint = `${EDIT_API}/${data.id}/.json`;
  return axios.patch(endpoint, {
    nombre: data.nombre,
    apellido: data.apellido,
    documento: data.documento,
  });
};

export const deleteRequest = (requestId:string) => {
  const endpoint = `${EDIT_API}/${requestId}/.json`;
  return axios.delete(endpoint);
};
