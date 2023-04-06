import Modal from 'react-modal'
import React from 'react'
import { Props } from 'shared/ui/BasicModal/BasicModal.typings'

Modal.setAppElement('#root')

export const BasicModal: React.FC<Props> = ({ children }) => {
    return <Modal isOpen>{children}</Modal>
}
