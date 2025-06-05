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
import OrderPage from '../pages/orders/OrderPage'

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
                element: <OrderPage />
            },
            {
                path: "/payment",
                element: <PaymentPage />
            },

        ]
    }
])