import styled from 'styled-components'
import Table2 from '../components/Table'

const StyledContainer = styled.div`
    display: flex;
    margin-left: 20vw;
	@media (max-width: 768px) {
		margin-left: 0;
	}
`
 
function CurrentEmployees() {
	return (
		<StyledContainer>
            <Table2/>
		</StyledContainer>
	)
}

export default CurrentEmployees
