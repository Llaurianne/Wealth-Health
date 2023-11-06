import styled from 'styled-components'
import Form from '../components/Form'

const CreateContainer = styled.div`
    display: flex;
    margin-left: 20vw;
`


function CreateEmployee() {
	return (
		<CreateContainer>
            <Form></Form>
		</CreateContainer>
	)
}

export default CreateEmployee
