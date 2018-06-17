import React from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';
import 'antd/lib/layout/style/css';
const { Content } = Layout;

import { IStore } from '../interfaces/store';
import { ScoringStatus as ScoringStatusComponent } from '../components/scoring-status';
import './scoring-status.css';

class ScoringStatus extends React.Component<any, {}> {
  render() {
    return (
      <Content className="scoring-status__container">
        <ScoringStatusComponent loading={this.props.loadingScoring}
          data={this.props.scoringData}/>
      </Content>
    );
  }
}

const mapStateToProps = (state:IStore) => ({
  loadingScoring: state.loadingScoring,
  scoringData: state.scoringData,
});

export default connect(mapStateToProps)(ScoringStatus);
