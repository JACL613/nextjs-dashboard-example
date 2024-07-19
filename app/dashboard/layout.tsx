import React from 'react'
import { lusitana } from '../ui/fonts'
import SideNav from '../ui/dashboard/sidenav';

export default function layout({children}:{
    children: React.ReactNode
}) {
    return (
        <body className={`flex h-screen flex-col md:flex-row md:overflow-hidden
        ${lusitana.className}`}>
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </body>
      );
}
