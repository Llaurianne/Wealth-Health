import { useState } from 'react'
import styled from 'styled-components'
import Form from '../components/Form'
import { Modal } from 'react-modal-wh'
import 'react-modal-wh/dist/index.css'

const CreateContainer = styled.div`
    display: flex;
    margin-left: 20vw;
	@media (max-width: 768px) {
        margin-left: 0;
    }
`

function CreateEmployee() {
	const [openModal, setOpenModal] = useState(false)
	const text ='Employee created'

	return (
		<CreateContainer>
            <Form setOpenModal={setOpenModal}/>
			<Modal openModal={openModal} setOpenModal={setOpenModal} text={text}/>
		</CreateContainer>
	)
}

export default CreateEmployee
