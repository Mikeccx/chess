import './modal.less'
import { Modal, Form, Input, Button } from 'antd'
import React, { useState } from 'react'
import { useEffect } from 'react'

export const useModal = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const { formArr, handleOkCb, tips, title = "新增" } = props
    const [form] = Form.useForm()
    // 设置初始值
    useEffect(() => {
        formArr.forEach((item) => {
            if (item.value) {
                form.setFieldValue('name', item.value)
            }
        })
    })
    const formReset = () => {
        form.resetFields()
    }
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
    console.log('formArr', formArr)
    const content = () => {
        return (
            <>
              <Modal title={title} visible={modalVisible} footer={
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
                        onFinish={(value) =>{
                            handleOkCb(value)
                        }}
                        onFinishFailed={() => {}}
                        autoComplete="off"
                        form={form}
                        >
                        {
                            formArr.map((item, index) => (
                                    <Form.Item
                                        label={item.title}
                                        name={item.name}
                                        key={index}
                                        rules={[{ required: true, message: 'Please input your departMendName!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                            ))
                        }
                        {
                            <span>{tips}</span>
                        }
                    </Form>
                </Modal>
            </>
        )
    }
    return {
        closeModal,
        showModal,
        content,
        formReset
    }
}
