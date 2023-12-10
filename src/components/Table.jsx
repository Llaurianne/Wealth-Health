
import { useSelector} from 'react-redux'
import { useMemo } from 'react';
import { employeesList } from '../features/employeesSlice'
import styled from 'styled-components'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'

const TableContainer = styled.div`
    width: 70vw;
    height: fit-content;
    margin: 3vh auto;
    background: white;
    border-radius: 0.3vw;
    box-shadow: 0 0 5px grey;
`
const StyledH1 = styled.h1`
	margin: 0 auto;
    padding: 2vw 4vw;
    text-align: center;
    color: #93AD18;
`
const StyledDiv = styled.div`
    height: fit-content;	
    margin: 2vw; 
`

export default function Table() {
  const data = useSelector(employeesList)
  const columns = useMemo(
    () => [
      { header: 'Firstname', accessorKey: 'firstname' },
      { header: 'Lastname', accessorKey: 'lastname' },
      { header: 'Start Date', accessorKey: 'start' },
      { header: 'Department', accessorKey: 'department' },
      { header: 'Date of Birth', accessorKey: 'birth' },
      { header: 'Street', accessorKey: 'street' },
      { header: 'City', accessorKey: 'city' },
      { header: 'State', accessorKey: 'state' },
      { header: 'Zip Code', accessorKey: 'zip' },
      
    ],
    [],
  );

  const table = useMaterialReactTable({ 
    columns, 
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableHiding: false
  });

  return (
      <TableContainer>
          <StyledH1>Current Employees</StyledH1>
          <StyledDiv>
          <MaterialReactTable table={table} />
          </StyledDiv>
      </TableContainer>
  )
}