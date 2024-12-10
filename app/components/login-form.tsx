import { FiKey, FiLogIn, FiUserPlus } from "react-icons/fi";

export function LoginForm() {
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
            type="text"
            id="userCode"
            placeholder="Digite aqui"
            className="w-full px-10 py-2 bg-dark text-white text-lg font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>
      </main>
      <footer className="flex flex-col gap-6 md:flex-row gap-10">
        <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange text-dark font-bold text-sm rounded-md hover:bg-opacity-80 btn-hover-effect">
          <FiLogIn className="text-lg" />
          Entrar
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange text-dark font-bold text-sm rounded-md hover:bg-opacity-80 btn-hover-effect">
          <FiUserPlus className="text-lg" />
          Criar conta
        </button>
      </footer>
    </div>
  );
}
