import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const SideContainer = styled.div`
	position: fixed;
	width : 20vw;
    background-color: #EEEFEF;
    height: 100vh;
    padding: 10vh 1vw;
	text-align: center;
	& div {
		margin: auto;
		width: fit-content;
	}
	& a {
		display: block;
		margin-bottom: 3vh;
		text-align: center;
		&.active {
			font-weight: bold;
		}
	}
`

const StyledP = styled.p`
	font-size: 1.5vw;
	margin-bottom: 10vh
`

function SidePanel() {
	return (
		<SideContainer>
			<StyledP>HRnet</StyledP>
			<div>
				<NavLink to="/">
					Create employee
				</NavLink>
				<NavLink to="/list">
					Current employees
				</NavLink>
			</div>
		</SideContainer>
	)
}

export default SidePanel