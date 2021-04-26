import React, { Component } from 'react';
import { Table, Tag, Space } from 'antd';
import './style.scss';

export default class ManageLesson extends Component {
  render() {
    const columns = [
      {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Tên bài giảng',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Từ vựng',
        dataIndex: 'words',
        key: 'words',
      },
      {
        title: 'Cấu trúc NP',
        key: 'grammar',
        dataIndex: 'grammar',
        // render: tags => (
        //   <>
        //     {tags.map(tag => {
        //       let color = tag.length > 5 ? 'geekblue' : 'green';
        //       if (tag === 'loser') {
        //         color = 'volcano';
        //       }
        //       return (
        //         <Tag color={color} key={tag}>
        //           {tag.toUpperCase()}
        //         </Tag>
        //       );
        //     })}
        //   </>
        // ),
      },
      {
        title: 'Bài tập',
        key: 'exercise',
        render: (text, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        avatar: 'avatar1',
        name: 'John Brown',
        words: "hioho",
        grammar: 'New York No. 1 Lake Park',
        exercise: "BT1",
      },
      {
        key: '2',
        avatar: 'avatar2',
        name: 'Jim Green',
        words: "hihi",
        grammar: 'London No. 1 Lake Park',
        exercise: "BT2",
      },
      {
        key: '3',
        avatar: 'avatar3',
        name: 'Joe Black',
        words: "haha",
        grammar: 'Sidney No. 1 Lake Park',
        exercise: "BT3",
      },
    ];

    return (
      <div className="wrap-manage-lesson"> 
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
