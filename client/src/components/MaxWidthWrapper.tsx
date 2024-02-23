import { ReactNode } from "react";

const MaxWidthWrapper = (
    { children, className }:
        {
            children: ReactNode
            className?: string
        }
) => {
    return (
        <div className={"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20" + (className ? ` ${className}` : "")}>
            {children}
        </div>
    );
}
export default MaxWidthWrapper