import { useLoaderData, useNavigate } from "@remix-run/react";
import { FiArrowLeftCircle, FiEdit, FiKey } from "react-icons/fi";
import { colors } from "->theme/colors";
import { User } from "->types/user";
import { Button } from "./button";
import { TimeList } from "./time-list";

export function TimeTracking() {
    const { user, hours_today } = useLoaderData<{
        user: User;
        hours_today: string;
    }>();
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    const goRegister = () => {
        navigate(`/${user.id}/time-register`);
    };

    return (
        <div className="flex flex-col w-full lg:max-w-lg gap-10 pt-10 pb-10 lg:pt-20 lg:pb-20">
            <header className="flex justify-center">
                <h1 className="text-gray text-6xl font-extrabold">ilumeo</h1>
            </header>
            <main className="flex flex-col gap-8 p-8 bg-gradient-to-b from-blueDark to-dark text-white rounded-lg shadow-custom h-full">
                <header className="flex justify-between items-center flex-wrap">
                    <FiArrowLeftCircle
                        color={colors.dark}
                        cursor="pointer"
                        className="text-5xl xl:6xl"
                        onClick={goHome}
                    />
                    <section className="flex flex-col end gap-3">
                        <p className="font-bold italic text-lg">
                            Código de Acesso
                        </p>
                        <div className="flex items-center justify-end gap-3">
                            <FiKey />
                            <p className="font-bold text-lg">
                                {user.user_code}
                            </p>
                        </div>
                    </section>
                </header>
                <section>
                    <h2 className="font-bold text-2xl">{hours_today}</h2>
                    <span className="font-bold">Tempo total de hoje</span>
                </section>
                <section>
                    <Button
                        onClick={goRegister}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-orange text-dark font-bold text-2xl rounded-md hover:bg-opacity-80 btn-hover-effect w-full"
                    >
                        <p className="xl:text-xl lg:text-lg sm:text-sm text-sm">
                            Registrar Horário
                        </p>
                        <FiEdit />
                    </Button>
                </section>
                <TimeList />
            </main>
        </div>
    );
}
