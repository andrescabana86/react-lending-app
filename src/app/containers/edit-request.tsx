import React from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';
import 'antd/lib/layout/style/css';
const { Content } = Layout;

import { updateRequest } from '../actions';
import { EditRequestForm } from '../components/edit-request-form';
import { IScoringUpdate } from '../interfaces/scoring';
import './edit-request.css';

class EditRequest extends React.Component<any, {}> {
  editRequestForm = React.createRef<any>();

  componentDidMount() {
    this.editRequestForm.current.validateFields();
  }

  handleSubmit = (values:IScoringUpdate) => {
    const requestId = this.props.match.params.id;
    if (requestId) {
      this.props.updateRequest({ ...values, id: requestId });
      this.props.history.push('/list');
    } else {
      console.error('No valid id to the request.');
    }
  }

  render() {
    return (
      <Content className="edit-request__container">
        <EditRequestForm ref={this.editRequestForm}
          handleSubmit={this.handleSubmit}
          defaultValues={this.props.match.params}
          goBack={this.props.history.goBack} />
      </Content>
    );
  }
}

const mapDispatchToProps = (dispatch:Function) => ({
  updateRequest: (values:IScoringUpdate) => dispatch(updateRequest(values)),
});

export default connect(null, mapDispatchToProps)(EditRequest);
