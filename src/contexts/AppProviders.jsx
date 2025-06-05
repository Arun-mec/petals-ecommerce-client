import { CartDrawerProvider } from "./CartDrawerContext";
import LoaderProvider from "./LoaderContext";

const AppProviders = ({children}) => {
    return (
        <LoaderProvider>
            <CartDrawerProvider>
                {children}
            </CartDrawerProvider>
        </LoaderProvider>
    )
}

export default AppProviders;