import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { TimeRegisterPage } from "~/pages/time-register";
import { validateAndFormatTime } from "~/utils/validate-format-time";
import { createTime } from "../api/time";
import { calculateTimeDifference } from "../utils/calculate-time-difference";

export const action = async ({ request, params }: ActionFunctionArgs) => {
    const data = await request.json();
    const time = validateAndFormatTime(data.time.start, data.time.end);
    const get_hours_worked = calculateTimeDifference(
        time.start || "",
        time.end || ""
    );

    console.log({
        userId: params.id || "",
        date: time.date || "",
        hours_worked: get_hours_worked.difference || "",
    });

    await createTime({
        userId: params.id || "",
        date: time.date || "",
        hours_worked: get_hours_worked.difference || "",
    });
    return redirect(`/${params.id}`);
};

export default function TimeRegister() {
    return <TimeRegisterPage />;
}
