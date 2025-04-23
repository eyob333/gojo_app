import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './pages/Root'
import Home from "./componets/Home"
import Profile from "./componets/realEstate/Profile"
import Realestate from './pages/Realestate'
import AdminLogin from './pages/admin'
import Error from './componets/dynamics/Error'
import NotAvaliable from './componets/dynamics/NotAvaliable'
import Properties from './pages/Properties'
import PropertyProfile from './componets/properties/PropertyProfile'
import { realestateFetch } from './componets/realEstate/Profile'
import { sendRequest } from './componets/properties/PropertyProfile'
import HydrateFallback from './componets/dynamics/HydrateFallback'


const route = createBrowserRouter([{
    path: '',
    element: <Root/>,
    errorElement: <Error />,
    children: [
        {path: '', index: true, element:<Home />,},
        {path: 'realestate', children: [
            {path: '', index: true, element: <Realestate />},
            {path: ':name', id:'realestate', loader: realestateFetch ,element: <Profile />},
        ]},
        {path: 'properties', children: [
            {path: '', index: true,element: <Properties />},
            {path: ':id', id: 'id', loader: sendRequest, hydrateFallbackElement: <HydrateFallback />, element: <PropertyProfile />}
        ]},
        {path: 'admin', element: <AdminLogin />},
        {path: 'contact', element: <NotAvaliable />},
        {path: 'help', element: <NotAvaliable />},
        {path: 'about', element: <NotAvaliable />},
        {path: 'api', element: <NotAvaliable />}
    ]
}])

function App(){
    return <RouterProvider router={route} />
}




export default App