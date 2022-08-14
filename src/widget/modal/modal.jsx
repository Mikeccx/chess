import './modal.less'
import { Modal, Form, Input } from 'antd'
import { useState } from 'react'
export default function Modal(props) {
    const modalVisible = useState(false)
    const { formArr } = props.form
    const [form] = Form.useForm();
    const onFinish = () => {}
    const handleOk = () => {}
    const handleCancel = () => {}
    return (
        <>
            <Modal title="Basic Modal" visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} name="control-hooks" onFinish={onFinish}>
                    {
                        formArr.map((item) => {
                            return <Form.Item
                                name="note"
                                label="Note"
                                rules={[
                                {
                                    required: true,
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        })
                    }
                </Form>
            </Modal>
        </>
    )
}