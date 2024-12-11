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
        <div className="flex flex-col gap-6 w-full max-w-lg">
            <header className="flex justify-center">
                <h1 className="text-gray text-6xl font-extrabold">ilumeo</h1>
            </header>
            <main className="flex flex-col gap-8 p-8 bg-gradient-to-b from-blueDark to-dark text-white rounded-lg shadow-custom">
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
                    <h2 className="font-bold text-2xl">0h 00m</h2>
                    <span className="font-bold">Tempo total de hoje</span>
                </section>
                <section>
                    <Button className="flex-1 flex items-center justify-center gap-2 py-3 bg-orange text-dark font-bold text-2xl rounded-md hover:bg-opacity-80 btn-hover-effect w-full">
                        <p className="xl:text-xl lg:text-lg sm:text-sm text-sm">
                            Registrar Horário
                        </p>
                        <FiEdit />
                    </Button>
                </section>
                <main>
                    <TimeList />
                </main>
            </main>
        </div>
    );
}
