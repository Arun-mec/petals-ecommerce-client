import { createBrowserRouter } from 'react-router-dom'
import Homepage from '../pages/Home/Homepage'
import Loginpage from '../pages/Home/Loginpage'

export const router = createBrowserRouter([
    {
        path : "",
        element : <Homepage />
    },
    {
        path : "/login",
        element : <Loginpage />
    }
])