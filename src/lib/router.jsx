import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import ProductsPage from '../pages/products/ProductsPage'
import ProductPage from '../pages/products/ProductPage'
import LoginPage from '../pages/auth/LoginPage'
import SignupPage from '../pages/auth/SignupPage'
import ForgotPassword from '../pages/auth/ForgotPassword'
import CartPage from '../pages/cart/CartPage'
import ShippingPage from '../pages/cart/ShippingPage'
import ProfilePage from '../pages/auth/ProfilePage'
import PrivateRoute from '../components/ui/PrivateRoute'
import PaymentPage from '../pages/cart/PaymentPage'
import OrderSummaryPage from '../pages/orders/OrderSummaryPage'
import OrderPage from '../pages/orders/OrderPage'
import MyOrderPage from '../pages/orders/MyOrderPage'
import AdminRoute from '../components/ui/AdminRoute'
import AdminOrdersPage from '../pages/admin/AdminOrdersPage'
import AdminProductsPage from '../pages/admin/AdminProductsPage'
import AdminProductEditPage from '../pages/admin/AdminProductEditPage'
import AdminPage from '../pages/admin/AdminPage'
import AdminUsersPage from '../pages/admin/AdminUsersPage'
import AdminUserEditPage from '../pages/admin/AdminUserEditPage'

export const router = createBrowserRouter([
    {
        path: "",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/products/:id",
        element: <ProductPage />
    },
    {
        path: "/products",
        element: <ProductsPage />
    },
    {
        path: "/newarrivals",
        element: <ProductPage />
    },
    {
        path: "/signup",
        element: <SignupPage />
    },
    {
        path: "/password",
        element: <ForgotPassword />
    },
    {
        path: "/cart",
        element: <CartPage />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        element: <PrivateRoute />,
        children: [
            {
                path: "/shipping",
                element: <ShippingPage />
            },
            {
                path: "/ordersummary",
                element: <OrderSummaryPage />
            },
            {
                path: "/orders/:id",
                element: <OrderPage />
            },
            {
                path: "/payment/:id",
                element: <PaymentPage />
            },
            {
                path : "/profile",
                element : <ProfilePage />
            },
            {
                path : "/orders",
                element : <MyOrderPage />
            }
        ]
    },
    {
        element : <AdminRoute />,
        children : 
        [
            {
                path: '/admin',
                element : <AdminPage />
            },
            {
                path: '/admin/orders',
                element : <AdminOrdersPage />
            },
            {
                path : '/admin/products',
                element : <AdminProductsPage />
            },
            {
                path : '/admin/products/:id/edit',
                element : <AdminProductEditPage />
            },
            {
                path : '/admin/users',
                element : <AdminUsersPage />
            },
            {
                path : '/admin/user/:id',
                element : <AdminUserEditPage />
            }
        ]
    }
])