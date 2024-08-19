import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Layout metadata'
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