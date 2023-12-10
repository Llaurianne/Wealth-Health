import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { create, employeesList } from '../features/employeesSlice'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from 'react-select'
import styled from 'styled-components'
import {states, departments} from '../utils/lists'

const FormContainer = styled.form`
	width: 60vw;
    margin: 10vh auto;
    padding-bottom: 4vh;
    border-radius: 0.3vw;
    box-shadow: 0 0 5px grey;
    & > div {
        margin: 0 4vw;
    }
    @media (max-width: 768px) {
        margin-top: 20vh;
        width: 80vw;
    }
`

const StyledH1 = styled.h1`
	margin: 0 auto 2vw auto;
    padding: 2vw 4vw;
    text-align: center;
    color: #93AD18;
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

const statesList = states.map(s => ({value: s.name, label: s.name}))
const departmentsList = departments.map(d => ({value: d, label: d}))

function Form({setOpenModal}) {
    const dispatch = useDispatch()
    const list = useSelector(employeesList)

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [start, setStart] = useState(null);
    const [birth, setBirth] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState(null);
    const [zip, setZip] = useState('');
    const [department, setDepartment] = useState(null);

    function initializeEmployee() {
        setFirstname('')
        setLastname('')
        setStart(null)
        setBirth(null)
        setStreet('')
        setCity('')
        setState(null)
        setZip('')
        setDepartment(null)
    }

    function submit(e) {
        e.preventDefault()
        let newState
        let newDpt
        let newStart
        let newBirth
        if (!state) {
            newState = ''
        } else {
            newState = state.value
        }
        if (!department) {
            newDpt = ''
        } else {
            newDpt = department.value
        }
        if (!start) {
            newStart = ''
        } else {
            newStart = start
        }
        if (!birth) {
            newBirth = ''
        } else {
            newBirth = birth
        }
        let newEmployee = 
            { 
                id: list.length.toString(),
                firstname, 
                lastname ,
                start: newStart, 
                department: newDpt ,
                birth: newBirth, 
                street ,
                city, 
                state: newState,
                zip
            }
        dispatch(create(newEmployee))
        setOpenModal(true)
        initializeEmployee()
    }

	return (
		<FormContainer onSubmit={submit}>
            <StyledH1>Create Employee</StyledH1>
            <div>
                <StyledLabel>First Name
                    <input 
                        type="text" 
                        name="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </StyledLabel>
                <StyledLabel>Last Name
                    <input 
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </StyledLabel>
                <StyledLabel>Date of birth
                    <DatePicker 
                        value={birth}
                        onChange={(newValue) => setBirth(newValue.format('MM/DD/YYYY'))}
                    />
                </StyledLabel>
                <StyledLabel>Start Date
                    <DatePicker 
                        value={start} 
                        onChange={(newValue) => setStart(newValue.format('MM/DD/YYYY'))}
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
                        onChange={setState}
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
                        onChange={setDepartment}
                    />
                </StyledLabel> 
            </div>
            <input type="submit" value="Save"/>
		</FormContainer>
	)
}

export default Form
