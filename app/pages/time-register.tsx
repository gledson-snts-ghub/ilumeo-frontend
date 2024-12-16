import { TimeForm } from "->components/time-form";

export const TimeRegisterPage = () => {
    return (
        <div className="max-h-screen h-screen flex justify-center bg-gradient-to-b from-blueDark to-dark">
            <div className="w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
                <TimeForm />
            </div>
        </div>
    );
};
