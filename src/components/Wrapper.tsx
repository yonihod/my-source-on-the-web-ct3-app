import * as React from "react";
import Navigation from "./Navigation/Navigation";

const Wrapper: React.FC<{ children?: React.ReactNode}> = ({ children }) => {

    return (
        <div>
            <Navigation />
            <div className="min-h-screen flex items-center justify-center container mx-auto">
                {children}
            </div>
        </div>
    );
}

export default Wrapper;