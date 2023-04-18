import Modal from 'react-modal'
import React from 'react'
import { Props } from 'shared/ui/TransparentModal/TransparentModal.typings'

Modal.setAppElement('#root')

const styles: Modal.Styles = {
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: 0,
    },
}

export const TransparentModal: React.FC<Props> = ({ children }) => {
    return (
        <Modal isOpen style={styles}>
            {children}
        </Modal>
    )
}
