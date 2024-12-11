import { LoaderFunctionArgs } from "@remix-run/node";
import Dashboard from "~/pages/dashboard";
import { getTimesByUserId } from "../api/time";
import { getUserById } from "../api/user";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { id } = params;

    const [user, times] = await Promise.all([
        await getUserById(id || ""),
        await getTimesByUserId(id || ""),
    ]);

    if (user && times) {
        console.log({ user, times });
        return {
            user,
            times,
        };
    }
    return {
        error: true,
    };
};

export default function Index() {
    return <Dashboard />;
}
