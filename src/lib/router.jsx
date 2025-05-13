import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import LoginPage from '../pages/login/LoginPage'
import ProductsPage from '../pages/products/ProductsPage'

export const router = createBrowserRouter([
    {
        path : "",
        element : <HomePage />
    },
    {
        path : "/login",
        element : <LoginPage />
    },
    {
        path : "/products",
        element : <ProductsPage />
    },
    {
        path : "/newarrivals",
        element : <ProductsPage />
    },
    {
        path : "/newarrivals",
        element : <ProductsPage />
    }
])