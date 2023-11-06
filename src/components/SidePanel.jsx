import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import play from '../assets/play-solid.svg'

const SideContainer = styled.div`
	position: fixed;
	width : 20vw;
    background-color: #EEEFEF;
    height: 100vh;
    padding: 10vh 5vw;
	text-align: center;
	& div {
		margin: auto;
		width: fit-content;
	}
	& a {
		display: block;
		margin-bottom: 3vh;
		text-align: left;
		& img {
			opacity: 0;
			height: 12px;
			padding-right: 12px;
		}
		&.active {
			font-weight: bold;
			img {
				opacity: 100%;
			}
		}
	}
`

const StyledImg = styled.img`
	display: block;
	margin: 5vh auto;
	width : 50%;
`

const StyledP = styled.p`
	font-size: 1.5vw;
	margin-bottom: 10vh
`

function SidePanel() {
	return (
		<SideContainer>
            <StyledImg src={logo} alt="Logo de HRnet" />
			<StyledP>HRnet</StyledP>
			<div>
				<NavLink to="/new">
					<img src={play} alt="icon"/>
					Create employee
				</NavLink>
				<NavLink to="/list">
					<img src={play} alt="icon"/>
					Current employees
				</NavLink>
			</div>
		</SideContainer>
	)
}

export default SidePanel