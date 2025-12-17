import clsx from "clsx";
import style from "styled-jsx/style";

interface Props {
    children: React.ReactNode;
    className?: string;
    padding_x?: string;
    padding_y?: string;
    bg?: string;
    style?: React.CSSProperties;
}

export const Box = ({
    children,
    className,
    padding_x = "px-9",
    padding_y = "py-9",
    bg = "bg-white",
}:Props) => {
    return (
        <div className={clsx(className,
            "w-full border bg-white rounded skeleton", 
            padding_x, padding_y, bg, style
        )}>
            {children}
        </div>
    )
}