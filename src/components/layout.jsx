// Importing necessary dependencies
import { Fragment } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

import { Inter } from "next/font/google";
import Sidebar from "./sidebar";
import { sidebarSection } from "@/data/data";
import Landing from "./landing";

// Inter is imported with subsets as 'latin' for language support
const inter = Inter({ subsets: ["latin"] });

// Default export for the Layout component
export default function Layout({ children, isHome }) {
    // Inter className is added to the parent div
    return (
        <div className={`${inter.className}`}>
            {/* Navbar component is added */}
            <Navbar />

            {/* Main content container is added */}
            <div className="bg-slate-50 dark:bg-[#070d18]">
                {/* Landing component is conditionally added based on isHome prop */}
                {isHome && <Landing />}

                {/* Main section is added, consisting of Sidebar and children components */}
                <div className={`main-section bg-slate-50 dark:bg-[#070d18] w-full flex p-2 sm:pl-6 overflow-x-hidden overflow-y-auto flex-col-reverse md:flex-row ${!isHome && "mt-14"}`} id='main'>
                    <Sidebar sidebarSection={sidebarSection} />
                    {children}
                </div>
            </div>

            {/* Footer component is added */}
            <Footer />
        </div>
    )
}