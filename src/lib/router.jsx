import { createBrowserRouter } from 'react-router-dom'
import HomePage from '/src/pages/home/Homepage'
import LoginPage from '/src/pages/login/Loginpage'
import ProductsPage from '/src/pages/products/ProductsPage'

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