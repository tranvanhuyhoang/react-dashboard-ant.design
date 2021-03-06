import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';
import moment from 'moment';

import { createStudent } from '../../services/students';

const { Option } = Select;;

export default function ModalAddStudent(props){
  const [form] = Form.useForm();
  const [loadingAddStudent, setLoadingAddStudent] = useState(false) 

  const successAlert = (content) => {
    Modal.success({
      content,
    });
  }

  const errorAlert = (content) => {
    Modal.error({
      content,
    });
  }

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const onFinish = (values) => {   
    console.log("vo 2 ", values);
    console.log("loadingAddStudent ", loadingAddStudent);
    if(loadingAddStudent) return;   
    actionCreateStudent({
      name: values.name,
      phone: values.phone,
      course: values.course,
      fee: values.fee,
      time: moment(values.dateStartStudy).format('DD/MM/YYYY'),
      class: '',
      avatar: '',
    });
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onClassChange = (value) => {
    
  };

  const actionCreateStudent = async(data) => {
    if(loadingAddStudent) return;
    setLoadingAddStudent(true);
    const response = await createStudent(data);
    if(response.data.status){
      setLoadingAddStudent(false);
      successAlert(response.data.message);
      form.resetFields();
      props.handleCancel();
      props.getListStudent();
    }else{
      errorAlert(response.data.message);
      setLoadingAddStudent(false);
    }
  }

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const tailLayout = {
    wrapperCol: { offset: 4, span:20 },
  };

  return (
    <>
      <Modal 
      title="Th??m h???c vi??n" 
      visible={props.isModalVisible} 
      onOk={props.handleOk} 
      onCancel={props.handleCancel}
      footer={null}
      >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="H??? T??n"
          name="name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
        >
          <Input />
        </Form.Item>

        {/* <Form.Item name="class" label="L???p h???c">
          <Select
            placeholder="Ch???n l???p h???c"
            onChange={onClassChange}
            allowClear
          >
            <Option value="2T">1</Option>
            <Option value="6T">2</Option>
          </Select>
        </Form.Item> */}

        <Form.Item name="course" label="Kh??a h???c">
          <Select
            placeholder="Ch???n kh??a h???c"
            allowClear
          >
            <Option value="2M">2T</Option>
            <Option value="6M">6T</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="H???c Ph??"
          name="fee"
        >
          <Input />
        </Form.Item>

        <Form.Item name="dateStartStudy" label="Ng??y h???c">
          <DatePicker 
          format={'DD/MM/YYYY'} 
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              + Th??m h???c vi??n
            </Button>
        </Form.Item>

      </Form>
      </Modal>
    </>
  );
}
