import { LoaderFunctionArgs } from "@remix-run/node";
import Dashboard from "~/pages/dashboard";
import { getTimesByUserId } from "../api/time";
import { getUserById } from "../api/user";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { id } = params;

    const user = await getUserById(id || "");
    const times = await getTimesByUserId(id || "");

    if (user) {
        return {
            user,
            times,
        };
    }
};

export default function Index() {
    return <Dashboard />;
}
