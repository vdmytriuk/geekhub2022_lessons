import React from "react";

export const HeaderContext = React.createContext({
    menuVisible: false,
    handleMenuToggle: () => null,
    pages: []
});