/// <reference path='../modules/image.d.tsx'/>

import React from 'react';
import { Link } from 'react-router-dom';

import loadingSpinner from '../../assets/img/spinner-loading.gif';
import successIcon from '../../assets/img/success-icon.png';
import failIcon from '../../assets/img/fail-icon.png';
import './scoring-status.css';

export const ScoringStatus:React.SFC<any> =
(props) => {
  const { loading, data } = props;
  let icon = null;
  let text = '';
  if (!loading && data && data.approved) {
    icon = successIcon;
    text = 'CALIFICA para crédito!';
  } else if (!loading && data && !data.approved) {
    icon = failIcon;
    text = 'No apto para crédito.';
  } else if (loading) {
    icon = loadingSpinner;
    text = 'Espere un momento...';
  }

  return (
    <section className="scoring-status__container">
      <img src={icon} alt="Status icon" />
      <h2>{text}</h2>
      <Link to="/scoring">Volver</Link>
    </section>
  );
};
