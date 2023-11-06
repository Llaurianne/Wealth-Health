import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from 'react-select'
import styled from 'styled-components'
import mock from '../utils/mock'

const FormContainer = styled.div`
	width: 40vw;
    margin: 10vh auto;
    padding-bottom: 4vh;
    background: white;
    border-radius: 0.3vw;
    box-shadow: 0 0 5px grey;
`

const StyledH1 = styled.h1`
	margin: 0 auto 2vw auto;
    padding: 4vw;
    text-align: center;
    background-image: linear-gradient(135deg, #5FB8DC 0%, #2D86AA 100%);
    color: white;
`

const StyledFieldset = styled.fieldset`
	margin: 0 4vw;
    padding: 2vw;
    border-radius: 0.3vw;
    border: 1px solid grey;
`

const StyledDiv = styled.div`
    padding: 2vw 4vw;
`

const StyledInput = styled.input`
    display: block;
	border: none;
    border-bottom: 1px solid grey;
    padding: 0.5vw;
    width: 100%;
`

const StyledLabel = styled.label`
    display: block; 	
    color: grey;
    font-size: 13px;
    margin: 2vh 0 1vh 0;
    width: 100%;
`

const StyledLegend = styled.legend`
	color: grey;
    font-weight: bold;
    font-size: 13px;
    padding: 0 2vw;
`

const statesList = mock.states.map(s => ({value: s.name, label: s.name}))
const departmentsList = mock.departments.map(d => ({value: d, label: d}))

function Form() {
    const [startDate, setStartDate] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    
	return (
		<FormContainer>
            <StyledH1>Create Employee</StyledH1>
            
            <StyledDiv>
                <StyledLabel for="firstName">First Name</StyledLabel>
                <StyledInput type="text" name="firstName" id="firstName"/>
                <StyledLabel for="lastName">Last Name</StyledLabel>
                <StyledInput type="text" name="lastName" id="lastName"/>
                <StyledLabel for="birth">Date of birth</StyledLabel>
                <DatePicker 
                    value={birthDate}
                    onChange={(newBirthDate) => setBirthDate(newBirthDate)}
                />
                <StyledLabel for="start">Start Date</StyledLabel>
                <DatePicker value={startDate} onChange={(newStartDate) => setStartDate(newStartDate)} />
            </StyledDiv>
            <StyledFieldset>
                <StyledLegend>Adress</StyledLegend>
                <StyledLabel for="street">Street</StyledLabel>
                <StyledInput type="text" name="street" id="street"/>
                <StyledLabel for="city">City</StyledLabel>
                <StyledInput type="text" name="city" id="city"/>
                <StyledLabel for="state">State</StyledLabel>
                <Select options={statesList} />
                <StyledLabel for="zip">Zip Code</StyledLabel>
                <StyledInput type="text" name="zip" id="zip"/>
            </StyledFieldset>
            <StyledDiv>
                <StyledLabel for="department">Department</StyledLabel>
                <Select options={departmentsList} />
            </StyledDiv>
            <input type="submit" value="Save" />
		</FormContainer>
	)
}

export default Form
