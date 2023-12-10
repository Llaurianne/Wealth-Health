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
		@media (max-width: 768px) {
			margin:0;
			display: flex;
			flex: 1;
			justify-content: space-evenly;
		}
	}
	& a {
		display: block;
		margin-bottom: 3vh;
		text-align: center;
		&.active {
			font-weight: bold;
		}
	}
	@media (max-width: 768px) {
		width: 100vw;
		height: 10vh;
		display: flex;
		flex-wrap: wrap;
		padding-top: 5vh;
	}
`

const StyledP = styled.p`
	margin-bottom: 10vh;
	font: bold;
	font-size: 1.5em;
	@media (max-width: 768px) {
		margin-bottom: 2vh;
		width: 100vw;
	}
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