import { useFetcher } from "@remix-run/react";
import { FiKey, FiLogIn, FiUserPlus } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setLoginCode } from "../redux/slices/loginSlice";

export function LoginForm() {
    const dispatch = useAppDispatch();
    const fetcher = useFetcher();
    const user_code = useAppSelector((state) => state.login.code);

    const handleOnClickCreateUser = () => {
        fetcher.submit(
            { type: "createUser" },
            {
                method: "POST",
                encType: "application/json",
            }
        );
    };

    const handleOnInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(setLoginCode(event.target.value));
    };

    const handleLogin = (user_code: string) => {
        fetcher.submit(
            { type: "login", user_code },
            {
                method: "POST",
                encType: "application/json",
            }
        );
    };

    return (
        <div className="flex flex-col gap-8 p-6 w-full max-w-md mx-auto">
            <header className="text-center">
                <h1 className="text-gray text-4xl md:text-5xl tracking-wide">
                    <span className="font-regular">Ponto</span>{" "}
                    <span className="font-extrabold">Ilumeo</span>
                </h1>
            </header>
            <main>
                <label
                    htmlFor="userCode"
                    className="block mb-1 text-sm font-light text-gray"
                >
                    Código do usuário
                </label>
                <div className="relative">
                    <FiKey className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl" />
                    <input
                        onChange={(e) => handleOnInputChange(e)}
                        type="text"
                        id="userCode"
                        placeholder="Digite aqui"
                        className="w-full px-10 py-2 bg-dark text-white text-lg font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                    />
                </div>
            </main>
            <footer className="flex flex-col md:flex-row gap-10">
                <button
                    onClick={() => handleLogin(user_code)}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange text-dark font-bold text-sm rounded-md hover:bg-opacity-80 btn-hover-effect"
                >
                    <FiLogIn className="text-lg" />
                    Entrar
                </button>
                <button
                    onClick={handleOnClickCreateUser}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange text-dark font-bold text-sm rounded-md hover:bg-opacity-80 btn-hover-effect"
                >
                    <FiUserPlus className="text-lg" />
                    Criar conta
                </button>
            </footer>
        </div>
    );
}
