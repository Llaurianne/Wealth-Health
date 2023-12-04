import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { create, employeesList } from '../features/employeesSlice'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from 'react-select'
import styled from 'styled-components'
import mock from '../utils/mock'

const FormContainer = styled.form`
	width: 40vw;
    margin: 10vh auto;
    padding-bottom: 4vh;
    border-radius: 0.3vw;
    box-shadow: 0 0 5px grey;
    & > div {
        margin: 0 4vw;
    }
`

const StyledH1 = styled.h1`
	margin: 0 auto 2vw auto;
    padding: 4vw;
    text-align: center;
    background-image: linear-gradient(135deg, #93AD18 0%, #5A6F07 100%);
    color: white;
`

const StyledFieldset = styled.fieldset`
	margin: 2vw 4vw;
    padding: 2vw;
    border-radius: 0.3vw;
    border: 1px solid grey;
`

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;	
    & > input {
        border: none;
        border-bottom: 1px solid grey;
        padding: 0.5vw;
        width: 100%;
        margin: 1vh 0 2vh 0;
    }
    & > div {
        margin: 1vh 0 2vh 0;
    } 
`

const StyledLegend = styled.legend`
	color: grey;
    font-weight: bold;
    font-size: 13px;
    padding: 0 2vw;
`

const statesList = mock.states.map(s => ({value: s.name, label: s.name}))
const departmentsList = mock.departments.map(d => ({value: d, label: d}))

function Form({setOpenModal}) {
    const dispatch = useDispatch()
    const list = useSelector(employeesList)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState(null);
    const [zip, setZip] = useState('');
    const [department, setDepartment] = useState(null);

    
    
    function initializeEmployee() {
        setFirstName('')
        setLastName('')
        setStartDate(null)
        setBirthDate(null)
        setStreet('')
        setCity('')
        setState(null)
        setZip('')
        setDepartment(null)
    }

    function submit(e) {
        e.preventDefault()
        let stateValue
        let dptValue
        if (!state) {
            stateValue = ''
        } else {
            stateValue = state.value
        }
        if (!department) {
            dptValue = ''
        } else {
            dptValue = department.value
        }
        let newEmployee = 
            { 
                id: list.length + 1, 
                col1: firstName, 
                col2: lastName ,
                col3: startDate, 
                col4: dptValue ,
                col5: birthDate, 
                col6: street ,
                col7: city, 
                col8: stateValue ,
                col9: zip
            }
        dispatch(create(newEmployee))
        setOpenModal(true)
        initializeEmployee()
        console.log(newEmployee)
    }

	return (
		<FormContainer onSubmit={submit}>
            <StyledH1>Create Employee</StyledH1>
            
            <div>
                <StyledLabel>First Name
                    <input 
                        type="text" 
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </StyledLabel>
                <StyledLabel>Last Name
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </StyledLabel>
                <StyledLabel>Date of birth
                    <DatePicker 
                        value={birthDate}
                        onChange={(newValue) => setBirthDate(newValue.format('MM/DD/YYYY'))}
                    />
                </StyledLabel>
                <StyledLabel>Start Date
                    <DatePicker 
                        value={startDate} 
                        onChange={(newValue) => setStartDate(newValue.format('MM/DD/YYYY'))}
                    />
                </StyledLabel>
            </div>
            <StyledFieldset>
                <StyledLegend>Adress</StyledLegend>
                <StyledLabel>Street
                    <input
                        type="text"
                        name="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </StyledLabel>
                <StyledLabel>City
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </StyledLabel>
                <StyledLabel>State
                    <Select
                        placeholder="Choose a state"
                        options={statesList}
                        value={state}
                        onChange={(newValue) => setState(newValue)}
                    />
                </StyledLabel>
                <StyledLabel>Zip Code
                    <input
                        type="number"
                        name="zip"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                </StyledLabel>
            </StyledFieldset>
            <div>
                <StyledLabel>Department
                    <Select
                        placeholder="Choose a department"
                        options={departmentsList}
                        value={department}
                        onChange={(newValue) => setDepartment(newValue)}
                    />
                </StyledLabel> 
            </div>
            <input type="submit" value="Save"/>
		</FormContainer>
	)
}

export default Form
