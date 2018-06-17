import React from 'react';
import { connect } from 'react-redux';

import { Layout, Table } from 'antd';
import 'antd/lib/layout/style/css';
import 'antd/lib/table/style/css';
import 'antd/lib/divider/style/css';
const { Content } = Layout;

import { IStore } from '../interfaces/store';
import { getRequestsList, deleteRequest } from '../actions';
import { ColumnProps } from 'antd/lib/table';
import { TABLE_COLUMNS } from '../constants/requests-list';
import { RequestsListActions } from '../components/requests-list-actions';
import './requests-list.css';

class RequestsList extends React.Component<any, {}> {

  componentDidMount() {
    this.props.getRequestsList();
  }

  handleDelete(record:any) {
    if (record.key) {
      this.props.deleteRequest(record.key);
    } else {
      console.error('There is no record id');
    }
  }

  render() {
    const { requestsList } = this.props;

    const columns:ColumnProps<{}>[] = [
      ...TABLE_COLUMNS,
      {
        title: 'Accion',
        key: 'action',
        render: (text:any, record:any) =>
          <RequestsListActions record={record}
            handleDelete={(rec:any) => this.handleDelete(rec)} />,
      },
    ];

    return (
      <Content className="requests-list__container">
        <Table columns={columns}
          dataSource={requestsList}
          pagination={false} />
      </Content>
    );
  }
}

const mapStateToProps = (state:IStore) => ({
  requestsList: state.requestsList,
});

const mapDispatchToProps = (dispatch:Function) => ({
  getRequestsList: () => dispatch(getRequestsList()),
  deleteRequest: (id:string) => dispatch(deleteRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestsList);
