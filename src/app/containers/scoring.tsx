import React from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';
import 'antd/lib/layout/style/css';
const { Content } = Layout;

import ScoringForm from '../components/scoring-form';
import { IScoringRequest } from '../interfaces/scoring';
import { getScoring } from '../actions';
import './scoring.css';

class Scoring extends React.Component<any, {}> {
  scoringForm = React.createRef<any>();

  handleSubmit = (values:IScoringRequest) => {
    this.props.getScoring(values);
    this.props.history.push('/scoring/status');
  }

  render() {
    return (
      <Content className="scoring__container">
        <ScoringForm ref={this.scoringForm}
          handleSubmit={this.handleSubmit}
          goBack={this.props.history.goBack} />
      </Content>
    );
  }
}

const mapDispatchToProps = (dispatch:Function) => ({
  getScoring: (values:IScoringRequest) => dispatch(getScoring(values)),
});

export default connect(null, mapDispatchToProps)(Scoring);
