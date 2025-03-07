import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './pages/Root'
import Home from "./componets/Home"
import Profile from "./componets/Profile"
import AdminLogin from './pages/admin'



const route = createBrowserRouter([{
    path: '',
    element: <Root/>,
    children: [
        {path: '', index: true, element:<Home />,},
        {path: 'realestate', element: <Profile />},
        {path: 'admin', element: <AdminLogin />},
        
    ]
}])

function App(){
    return <RouterProvider router={route} />
}




export default App