
import { useSelector} from 'react-redux'
import { employeesList } from '../features/employeesSlice'
import styled from 'styled-components'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const TableContainer = styled.div`
    width: 70vw;
    margin: 3vh auto;
    background: white;
    border-radius: 0.3vw;
    box-shadow: 0 0 5px grey;
    overflow: hidden;
`
const StyledH1 = styled.h1`
	margin: 0 auto;
    padding: 4vw;
    text-align: center;
    background-image: linear-gradient(135deg, #93AD18 0%, #5A6F07 100%);
    color: white;
`

const StyledDiv = styled.div`
	margin: 2vw;
`

export default function Table() {
    const rows = useSelector(employeesList)
  
    const columns = [
        { field: 'col1', headerName: 'First Name', headerClassName: 'tableHeader', flex: 1 },
        { field: 'col2', headerName: 'Last Name', headerClassName: 'tableHeader', flex: 1},
        { field: 'col3', headerName: 'Start Date', headerClassName: 'tableHeader', flex: 1},
        { field: 'col4', headerName: 'Department', headerClassName: 'tableHeader', flex: 1},
        { field: 'col5', headerName: 'Date of Birth', headerClassName: 'tableHeader', flex: 1},
        { field: 'col6', headerName: 'Street', headerClassName: 'tableHeader', flex: 1},
        { field: 'col7', headerName: 'City', headerClassName: 'tableHeader', flex: 1},
        { field: 'col8', headerName: 'State', headerClassName: 'tableHeader', flex: 1},
        { field: 'col9', headerName: 'Zip Code', headerClassName: 'tableHeader', flex: 1},
    ];

    return (
        <TableContainer>
            <StyledH1>Current Employees</StyledH1>
            <StyledDiv>
                <DataGrid 
                    sx = {{
                        border: 0,
                    }}
                    autoHeight 
                    disableColumnMenu
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    rows = {rows} 
                    columns = {columns}
                    slots = {{ toolbar: GridToolbar }}
                    slotProps = { 
                        {
                            pagination: {labelRowsPerPage: "Show"},
                            toolbar: { 
                                showQuickFilter: true,
                                printOptions : {disableToolbarButton: true},
                                csvOptions: { disableToolbarButton: true },
                          }
                        }
                    }
                />
            </StyledDiv>
        </TableContainer>
        
    )
}