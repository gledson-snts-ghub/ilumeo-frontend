import { FiAlertOctagon } from "react-icons/fi";

export const EmptyListWarning = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-5">
            <FiAlertOctagon className="text-orange" size="45" />
            <span className="italic text-2xl">Não há registros</span>
        </div>
    );
};
