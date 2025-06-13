import React from "react";
import Sidebar from "../sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}
