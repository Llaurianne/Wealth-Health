
import styled from 'styled-components'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';

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
    background-image: linear-gradient(135deg, #5FB8DC 0%, #2D86AA 100%);
    color: white;
`

const StyledDiv = styled.div`
	margin: 2vw;
`


const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 4, col1: 'Hello', col2: 'World' },
    { id: 5, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 6, col1: 'MUI', col2: 'is Amazing' },
    { id: 7, col1: 'Hello', col2: 'World' },
    { id: 8, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 9, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', headerClassName: 'tableHeader', flex: 1 },
    { field: 'col2', headerName: 'Column 2', headerClassName: 'tableHeader', flex: 1},
  ];

export default function Table() {
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