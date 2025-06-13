import React from "react";
import Sidebar from '../sidebar/Sidebar'
export default function Layout({ children }) {
  return (
    <>
    <Sidebar/>
      <main>{children}</main>
    </>
  );
}