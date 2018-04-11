import React from 'react'
import Modal from 'react-modal'

const OptionModal = props => (
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearModal}
        contentLabel='Seleceted Option'
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button
            onClick={props.handleClearModal}>Okay</button>
        </Modal>
    )


export default OptionModal