import { LoginForm } from "~/components/login-form";

export default function Index() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blueDark to-dark">
            <div className="w-full max-w-md px-4 py-6">
                <LoginForm />
            </div>
        </div>
    );
}
