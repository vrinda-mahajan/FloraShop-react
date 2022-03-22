import { createContext, useContext } from "react/cjs/react.production.min";

const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    return (
        <WishlistContext>
            {children}
        </WishlistContext>
    )
}

const useWishlist = () => useContext(WishlistContext)