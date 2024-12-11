import { useLoaderData } from "@remix-run/react";
import { FiArrowLeftCircle, FiKey } from "react-icons/fi";
import { colors } from "~/theme/colors";
import { User } from "~/types/user";

export function TimeTracking() {
    const { user } = useLoaderData<{ user: User }>();

    return (
        <div className="flex flex-col gap-6">
            <header className="flex justify-center">
                <h1 className="text-gray text-6xl font-extrabold">ilumeo</h1>
            </header>
            <main className="flex flex-col gap-8 p-8 w-full max-w-xl mx-auto bg-gradient-to-b from-blueDark to-dark text-white rounded-lg">
                <header className="flex justify-between items-center">
                    <FiArrowLeftCircle
                        color={colors.dark}
                        size="50"
                        cursor="pointer"
                    />
                    <section className="flex flex-col end gap-3">
                        <p className="font-bold italic text-lg">
                            Código de Acesso
                        </p>
                        <div className="flex items-center justify-end gap-3">
                            <FiKey size="20" />
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
            </main>
        </div>
    );
}
