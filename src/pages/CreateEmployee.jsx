import { useState } from 'react'
import styled from 'styled-components'
import Form from '../components/Form'
import { Modal } from 'modal-hrnet-wh'
import 'modal-hrnet-wh/dist/index.css'

const CreateContainer = styled.div`
    display: flex;
    margin-left: 20vw;
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
