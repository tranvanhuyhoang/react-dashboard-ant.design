import React, { Component } from 'react';
import { Table, Tag, Space } from 'antd';
import ModalAddStudent from './addStudent';
import './style.scss';

export default class ManageStudents extends Component {
  render() {

    const columns = [
      {
        title: 'avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Họ tên',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'class',
        key: 'class',
        dataIndex: 'class',
        render: () => <a>abc</a>,
      },
      {
        title: 'course',
        key: 'course',
        render: () => (
          <Space size="middle">
            <a>Invite</a>
            <a>Delete</a>
          </Space>
        ),
      },
      {
        title: 'time',
        key: 'time',
        dataIndex: 'time',
        render: () => <a>abc</a>,
      },
      {
        title: 'fee',
        key: 'fee',
        dataIndex: 'fee',
        render: () => <a>hoc phi</a>,
      },
      
    ];

    const data = [
      {
        key: 'avatar',
        avatar: 'Hình ảnh',
        name: "Trần Văn Huy Hoàng",
        phone: "0327375733",
        class: 'kick-off',
        course: '2T',
        time: 'thoi gian',
        fee: "Đã hoàn thành",
      },
      {
        key: 'avatar',
        avatar: 'Hình ảnh',
        name: "Trần Văn Huy Hoàng",
        phone: "0327375733",
        class: 'kick-off',
        course: '2T',
        time: 'thoi gian',
        fee: "Đã hoàn thành",
      },
      {
        key: 'avatar',
        avatar: 'Hình ảnh',
        name: "Trần Văn Huy Hoàng",
        phone: "0327375733",
        class: 'kick-off',
        course: '2T',
        time: 'thoi gian',
        fee: "Đã hoàn thành",
      },
    ];

    return (
      <div className="wrap-manage-student"> 
        <ModalAddStudent/>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
