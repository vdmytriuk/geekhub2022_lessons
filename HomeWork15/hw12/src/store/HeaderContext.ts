import React from "react";

export interface IHeaderContext {
    menuVisible: boolean,
    handleMenuToggle: () => void;
    pages: string[]
}

export const HeaderContext = React.createContext<IHeaderContext>({
    menuVisible: false,
    handleMenuToggle: () => null,
    pages: []
});