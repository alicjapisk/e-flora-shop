"use client"
import React from "react";
import NavbarLink from "./NavbarLink";
import useLinks from "@/hooks/useLinks";

function NavbarWeb() {
    const { navigateToRegister, navigateToLogin, navigateToHome, navigateToDashboards, navigateToProfile } = useLinks();


    const links =
        [
            {
                onPressCallback: () => navigateToLogin(),
                text: "Login",
                styleText: "text-[#F9F02D] text-lg font-semibold",
                stylediv: "py-2"
            },
            {
                onPressCallback: () => navigateToRegister(),
                text: "Register",
                styleText: "text-[#F9F02D] text-lg font-semibold",
                stylediv: "rounded-xl border border-[#F9F02D] px-10 py-2"
            },
        ];

    return (
        <div className="w-full shadow-md border-b border-[#2C273A] pr-8 pl-5 py-4 bg-[#0E1217]">
            <div className="justify-between flex flex-row">
                <div className="justify-center">
                    <button onClick={navigateToHome} className="bg-[#F9F02D] py-2 px-20 rounded-xl">
                        <p className="text-center">Logo</p>
                    </button>
                </div>
                <div className="flex flex-row justify-center">
                    {links.map((link, index) => (
                        <NavbarLink key={index} onPressCallback={link.onPressCallback} text={link.text} styleText={link.styleText} styleView={link.stylediv}
                        />)
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavbarWeb;
