import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from "./componets/Home";
import Profile from "./componets/realEstate/Profile";
import Realestate from './pages/Realestate';
import AdminLogin from './pages/Admin';
import Error from './componets/dynamics/Error';
import NotAvailable from './componets/dynamics/NotAvailable';
import Properties from './pages/Properties';
import PropertyProfile from './componets/properties/PropertyProfile';
import { realestateFetch } from './componets/realEstate/Profile';
import { sendRequest } from './componets/properties/PropertyProfile';
import HydrateFallback from './componets/dynamics/HydrateFallback';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ErrorBoundary from './componets/dynamics/ErrorBoundary';
import Feedback from './pages/Feedback';
import AdminProperties from './componets/admin/properties/Properties';
import AdminRealestate from './componets/admin/realestate/Realestate';
import UploadProperties from './componets/admin/Dmods/UploadProperties';
import FileUpload from './componets/admin/Dmods/Upload';

const route = createBrowserRouter([{
    path: '',
    element: <Root />,
    hydrateFallbackElement: <HydrateFallback />,
    errorElement: <Error />,
    children: [
        { path: '', index: true, element: <Home /> },
        { path: 'realestate', children: [
            { path: '', index: true, element: <Realestate /> },
            { path: ':name', id: 'realestate', loader: realestateFetch, element: <Profile /> }
        ]},
        { path: 'properties', children: [
            { path: '', index: true, element: <Properties /> },
            { path: ':id', id: 'id', loader: sendRequest, element: <PropertyProfile /> }
        ]},
        { path: 'contact', element: <Contact /> },
        { path: 'help', element: <NotAvailable /> },
        { path: 'about', element: <AboutUs /> },
        { path: 'api', element: <NotAvailable /> },
        { path: 'feedback', element: <Feedback />},
        { path: 'announcement', element: <HydrateFallback /> }
    ]}, { 
        path: 'admin',   
        hydrateFallbackElement: <HydrateFallback />,
        errorElement: <Error />,
        element: <AdminLogin />,
        children: [
            { path: 'dashboard', element: <Contact /> },
            { path: 'analyitics', element: <NotAvailable /> },
            { path: 'realestate', children: [
                {path: '', index: true, element: <AdminRealestate />},
                {path: 'create', element: <FileUpload />}
            ]},
            { path: 'database', element: <NotAvailable /> },
            { path: 'properties', children: [
                {path: '', index: true, element: <AdminProperties/>},
                {path: 'create', element: <UploadProperties />}
            ]},
            { path: 'users', element: <HydrateFallback /> },
            { path: 'issues', element: <NotAvailable /> },
            { path: 'clients', element: <HydrateFallback /> },
            { path: 'announcement', element: <HydrateFallback /> },
        ]
    }
]);

function App() {
    return <RouterProvider router={route} errorElement={<ErrorBoundary error={new Error('Something went wrong')} />} />;
}

export default App;
