import { useLoaderData } from "@remix-run/react";
import { FiArrowLeftCircle, FiKey } from "react-icons/fi";
import { User } from "../types/user";

export function TimeTracking() {
    const { user } = useLoaderData<{ user: User }>();

    return (
        <div className="flex flex-col gap-6">
            <header className="flex justify-center">
                <h1 className="text-gray text-6xl font-extrabold">ilumeo</h1>
            </header>
            <main className="flex flex-col gap-8 p-8 w-full max-w-xl mx-auto bg-gradient-to-b from-blueDark to-dark text-white rounded-lg">
                <header className="flex justify-between">
                    <FiArrowLeftCircle />
                    <section className="flex flex-col end">
                        <p className="font-bold italic">Código de Acesso</p>
                        <div className="flex justify-between">
                            <FiKey />
                            {user.user_code}
                        </div>
                    </section>
                </header>
            </main>
        </div>
    );
}
