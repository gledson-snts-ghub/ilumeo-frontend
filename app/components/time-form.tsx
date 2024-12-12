import { FiXCircle } from "react-icons/fi";
import { Button } from "./button";

export const TimeForm = () => {
    return (
        <main className="bg-blueDark bg-opacity-70 flex p-8 rounded-lg">
            <section className="flex flex-col justify-between items-center gap-12">
                <div className="w-full">
                    <h1 className="font-bold text-white text-5xl">
                        Preencha seu Horário
                    </h1>
                </div>
                <section className="flex justify-between w-full flex-wrap gap-10">
                    <div className="flex flex-col">
                        <label
                            htmlFor="start"
                            className="font-bold text-white text-lg"
                        >
                            Saída
                        </label>
                        <input
                            id="start"
                            type="time"
                            className="w-full px-10 py-2 bg-dark text-white text-lg font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:bg-dark"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="end"
                            className="font-bold text-white text-lg"
                        >
                            Entrada
                        </label>
                        <input
                            id="end"
                            type="time"
                            className="w-full px-10 py-2 bg-dark text-white text-lg font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:bg-dark"
                        />
                    </div>
                    <div className="flex items-end">
                        <Button>
                            <p className="font-bold text-dark text-lg">
                                Confirmar
                            </p>
                        </Button>
                    </div>
                </section>
            </section>
            <section className="flex items-start pl-6">
                <FiXCircle className="text-dark text-4xl" />
            </section>
        </main>
    );
};
