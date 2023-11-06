import React from "react";

interface NavbarLinkProps {
    onPressCallback: () => void;
    text: string;
    styleText: string;
    styleView: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ onPressCallback, text, styleText, styleView }) => {

    const handlePress = () => {
        onPressCallback();
    };

    return (

        <div>
            <button onClick={handlePress} className={`px-6 ${styleView}`}>
                <p className={styleText}>{text}</p>
            </button>
        </div>
    );
};

export default NavbarLink;
