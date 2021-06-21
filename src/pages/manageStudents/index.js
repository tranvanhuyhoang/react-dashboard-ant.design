import React, { Component } from 'react';
import { Table, Space, Button, DatePicker } from 'antd';
import ModalAddStudent from './addStudent';
import './style.scss';
import { getListStudents } from '../../services/students';

export default class ManageStudents extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalAddStudent: false,
      listStudents: '',
    }
  }

  componentDidMount = () => {
    this.getListStudent();
  }

  getListStudent = async() => {
    const response = await getListStudents();
    if(response.data.status){
      this.setState({
        listStudents: response.data.data
      })
    }
  }

  openModalAddStudent = () => {
    this.setState({
      modalAddStudent: true
    })
  }

  cancelModalAddStudent = () => {
    this.setState({
      modalAddStudent: false
    })
  }

  render() {

    const columns = [
      {
        title: 'avatar',
        // dataIndex: 'avatar',
        key: 'avatar',
        render: () => <span></span>,
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
      // {
      //   title: 'class',
      //   key: 'class',
      //   dataIndex: 'class',
      //   render: () => <a>abc</a>,
      // },
      {
        title: 'course',
        key: 'course',
        dataIndex: 'course',
        // render: () => (
        //   <Space size="middle">
        //     <a>Invite</a>
        //     <a>Delete</a>
        //   </Space>
        // ),
      },
      {
        title: 'time',
        key: 'time',
        dataIndex: 'time',
        // render: () => <a>abc</a>,
      },
      {
        title: 'fee',
        key: 'fee',
        dataIndex: 'fee',
        // render: () => <a>hoc phi</a>,
      },
      
    ];

    const data = [];

    if(this.state.listStudents){
      for(let student of this.state.listStudents){
        data.push({
          key: student._id,
          avatar: student.avatar,
          name: student.name,
          phone: student.phone,
          class: '',
          course: student.course,
          time: student.time,
          fee: student.fee,
        })
      }
    }

    return (
      <div className="wrap-manage-student"> 
        <ModalAddStudent
          isModalVisible={this.state.modalAddStudent}
          handleCancel={this.cancelModalAddStudent}
          getListStudent={this.getListStudent}
        />
        <div className="row m-0 mb-3">
          <Button type="primary" className="ml-auto" onClick={this.openModalAddStudent}>+ Thêm học viên</Button>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
