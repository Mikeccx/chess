import './modal.less'
import { Modal, Form, Input, Button } from 'antd'
import React, { useState, useRef } from 'react'
import {createPortal} from 'react-dom'
import ReactDOM from 'react-dom/client'


export const useModal = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const { formArr, handleOkCb } = props
    const [form] = Form.useForm();
    const closeModal = () => {
        form.resetFields()
        setModalVisible(false)
    }
    const showModal = () => {
        setModalVisible(true)
    }
    const handleCancel = () => {
        closeModal()
    }
    // const handleOk = () => {
    //     handleOkCb()
    // }
    const content = () => {
        return (
            <>
                <Modal title="新增" visible={modalVisible} footer={
                    [
                        <Button key="back" onClick={handleCancel}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" onClick={form.submit} htmlType="submit">
                            确认
                        </Button>
                    ]
                }>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={(value) =>{
                            handleOkCb(value)
                        }}
                        onFinishFailed={() => {}}
                        autoComplete="off"
                        form={form}
                        >
                        {
                            formArr.map((item) => (
                                <>
                                    <Form.Item
                                        label={item.title}
                                        name={item.name}
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </>
                            ))
                        }
                    </Form>
                </Modal>
            </>
        )
    }
    return {
        closeModal,
        showModal,
        content
    }
}
