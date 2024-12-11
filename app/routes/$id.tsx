import { LoaderFunctionArgs } from "@remix-run/node";
import Dashboard from "~/pages/dashboard";
import { getUserById } from "../api/user";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { id } = params;

    const user = await getUserById(id || "");

    if (user) {
        return {
            user,
        };
    }
};

export default function Index() {
    return <Dashboard />;
}
