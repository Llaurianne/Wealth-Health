import '../utils/main.css'
import { Outlet } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import SidePanel from '../components/SidePanel'

function Root() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<SidePanel />
			<Outlet />
		</LocalizationProvider>
	)
}

export default Root
