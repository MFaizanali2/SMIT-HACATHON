import ForgotPassword from "../components/ForgotForm";
import ResetPassword from "../components/ResetPasswordForm";
import Dashboard from "../pages/Dashboard/dashboard";
import DashboardAdmin from "../pages/Dashboard/dashboardAdmin";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = [
    {
        path: '/',
        component: <Login/>,
    },
    {
        path: '/login',
        component: <Login/>,
    },
    {
        path: '/register',
        component: <Register/>,
    },
    {
        path: '/forgot-password',
        component: <ForgotPassword/>,
    },
    {
        path: '/reset-password/:token',
        component: <ResetPassword/>,
    },
    {
        path: '/dashboard',
        component: <Dashboard/>,
    },
    {
        path: '/dashboardAdmin',
        component: <DashboardAdmin/>,
    }
]