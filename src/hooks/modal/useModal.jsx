import './modal.less'
import { Modal, Form, Input, Button } from 'antd'
import React, { useState, useRef } from 'react'
import {createPortal} from 'react-dom'
import ReactDOM from 'react-dom/client'


export const useModal = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const { formArr, handleOkCb, formObj={} } = props
    const {zoneValue='', modelTitle='新增'} = formObj
    // console.log(`props: `,props);
    
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

    const content = () => {
        return (
            <>
                <Modal title={modelTitle} visible={modalVisible} footer={
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
                        initialValues={{ remember: true, name: zoneValue}}
                        onFinish={(value) =>{
                            handleOkCb(value)
                            setTimeout(closeModal,200)
                        }}
                        onFinishFailed={() => {}}
                        autoComplete="off"
                        form={form}
                        >
                        {
                            formArr.map((item,index) => (
                                <div key={index}>
                                    <Form.Item
                                        label={item.title}
                                        name={item.name}
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>
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
