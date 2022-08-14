import './modal.less'
import { Modal, Form, Input, Button } from 'antd'
import React, { useState } from 'react'
import { useEffect } from 'react'

export const useModal = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const { formArr, handleOkCb } = props
    const [form] = Form.useForm()
    // useEffect(() => {
    //     formArr.forEach((item) => {
    //         if (item.value) {
    //             console.log('value: ', item.value)
    //             form.setFieldValue({
    //                 name: '12312'
    //             })
    //         }
    //     })
    // }, [])
    const closeModal = () => {
        setModalVisible(false)
        form.resetFields()
    }
    const showModal = () => {
        setModalVisible(true)
    }
    const handleCancel = () => {
        closeModal()
    }
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
                        initialValues={{ remember: true, name: formArr[0].value}}
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
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
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
