import { LoaderFunctionArgs } from "@remix-run/node";
import Dashboard from "~/pages/dashboard";
import { getTimesByUserId } from "~/api/time";
import { getUserById } from "~/api/user";
import { getDeviceType } from "~/utils/get-device-type";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
    const { id } = params;

    const [user, times] = await Promise.all([
        await getUserById(id || ""),
        (await getTimesByUserId(id || "")) || [],
    ]);

    const device = getDeviceType(request.headers.get("user-agent") || "");

    if (user && times) {
        console.log({ user, times, device });
        return {
            user,
            times,
            device,
        };
    }
    return {
        error: true,
    };
};

export default function Index() {
    return <Dashboard />;
}
