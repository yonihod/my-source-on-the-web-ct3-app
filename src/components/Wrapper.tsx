import * as React from "react";

const Wrapper: React.FC<{ children?: React.ReactNode}> = ({ children }) => {

    return (
        <div className="min-h-screen flex items-center justify-center container mx-auto">
            {children}
        </div>
    );
}

export default Wrapper;