import styled from 'styled-components'
import Table from '../components/Table'


const StyledContainer = styled.div`
    display: flex;
    margin-left: 20vw;
`
 

function CurrentEmployees() {
	return (
		<StyledContainer>
            <Table/>
		</StyledContainer>
	)
}

export default CurrentEmployees
