import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import React, { Component } from 'react';

export default class ModalAddLesson extends Component {
  render() {
    return (
      <>
        <Modal title="Thêm bài học" visible={this.props.isModalVisible} onOk={this.props.handleOk} onCancel={this.props.handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}
