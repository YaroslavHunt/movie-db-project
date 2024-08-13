import React from 'react';
import {Metadata} from "next";
import HeaderComponent from "@/components/header/HeaderComponent";

export const metadata: Metadata = {
    title: "Movie"
}

type Props = {children: React.ReactNode};

const Layout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;