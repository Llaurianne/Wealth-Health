
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
    @media (max-width: 768px) {
      margin-top: 20vh;
      width: 80vw;
    }
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
      { header: 'Start Date', accessorKey: 'start', sortingFn: 'dateFn' },
      { header: 'Department', accessorKey: 'department' },
      { header: 'Date of Birth', accessorKey: 'birth', sortingFn: 'dateFn' },
      { header: 'Street', accessorKey: 'street' },
      { header: 'City', accessorKey: 'city' },
      { header: 'State', accessorKey: 'state' },
      { header: 'Zip Code', accessorKey: 'zip' },
      
    ],
    [],
  );
  
  function formatDate(string) {
    return Date.parse(string.substr(6,4)+'-'+string.substr(0,2)+'-'+string.substr(3,2))
  }

  const table = useMaterialReactTable({ 
    columns, 
    data,
    sortingFns: { dateFn: (rowA, rowB, columnId) => (formatDate(rowB.original[columnId])-formatDate(rowA.original[columnId]))},
    enableColumnActions: false,
    enableColumnFilters: false,
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableHiding: false
  });

  return (
      <TableContainer>
          <h1>Current Employees</h1>
          <StyledDiv>
          <MaterialReactTable table={table} />
          </StyledDiv>
      </TableContainer>
  )
}