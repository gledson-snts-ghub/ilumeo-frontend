import { useLoaderData, useNavigate } from "@remix-run/react";
import { FiArrowLeftCircle, FiEdit, FiKey } from "react-icons/fi";
import { colors } from "~/theme/colors";
import { User } from "~/types/user";
import { Button } from "./button";
import { TimeList } from "./time-list";

export function TimeTracking() {
    const { user } = useLoaderData<{ user: User }>();
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col gap-6">
            <header className="flex justify-center">
                <h1 className="text-gray text-6xl font-extrabold">ilumeo</h1>
            </header>
            <main className="flex flex-col gap-8 p-8 w-full max-w-xl mx-auto bg-gradient-to-b from-blueDark to-dark text-white rounded-lg shadow-custom">
                <header className="flex justify-between items-center">
                    <FiArrowLeftCircle
                        color={colors.dark}
                        cursor="pointer"
                        size="60"
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
                    <h2 className="font-bold text-2xl">0h 00m</h2>
                    <span className="font-bold">Tempo total de hoje</span>
                </section>
                <Button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange text-dark font-bold text-2xl rounded-md hover:bg-opacity-80 btn-hover-effect">
                    Registrar Horário
                    <FiEdit />
                </Button>
                <main>
                    <TimeList />
                </main>
            </main>
        </div>
    );
}
