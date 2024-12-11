type ButtonAttr = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...attr }: ButtonAttr) => {
    return (
        <button
            className={
                className ||
                "flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange text-dark font-bold text-sm rounded-md hover:bg-opacity-80 btn-hover-effect"
            }
            {...attr}
        >
            {children}
        </button>
    );
};
