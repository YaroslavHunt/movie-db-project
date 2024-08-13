import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Movies page'
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