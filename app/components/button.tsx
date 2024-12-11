type ButtonAttr = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...attr }: ButtonAttr) => {
    return (
        <button
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange text-dark font-bold text-sm hover:bg-opacity-80 btn-hover-effect rounded-lg"
            {...attr}
        >
            {children}
        </button>
    );
};
