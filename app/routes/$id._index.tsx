import { getTimesByUserId } from "->api/time";
import { getUserById } from "->api/user";
import Dashboard from "->pages/dashboard";
import {
    filterTimesByCurrentDate,
    sumHoursWorkedForCurrentDate,
} from "->utils/filter-time-by-date";
import { getDeviceType } from "->utils/get-device-type";
import { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
    const { id } = params;

    const [user, times] = await Promise.all([
        await getUserById(id || ""),
        (await getTimesByUserId(id || "")) || [],
    ]);

    const device = getDeviceType(request.headers.get("user-agent") || "");

    if (user && times) {
        const newList = filterTimesByCurrentDate(times);
        const hours_today = sumHoursWorkedForCurrentDate(newList);
        console.log({ user, times, device, hours_today });
        return {
            user,
            times,
            device,
            hours_today,
        };
    }
    return {
        error: true,
    };
};

export default function Index() {
    return <Dashboard />;
}
