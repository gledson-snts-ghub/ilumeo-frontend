import { createTime } from "->api/time";
import { TimeRegisterPage } from "->pages/time-register";
import { calculateTimeDifference } from "->utils/calculate-time-difference";
import { validateAndFormatTime } from "->utils/validate-format-time";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { format } from "date-fns";

export const action = async ({ request, params }: ActionFunctionArgs) => {
    const data = await request.json();
    console.log({ start: data.time.start, end: data.time.end });

    const time = validateAndFormatTime(data.time.start, data.time.end);

    if (time.dataIsInvalid) {
        return {
            dataIsInvalid: time.dataIsInvalid,
        };
    }

    const timeDifference = calculateTimeDifference(time.start, time.end);

    const currentDate = format(new Date(), "yyyy/MM/dd");

    const req = {
        userId: params.id || "",
        date: currentDate,
        hours_worked: timeDifference,
    };

    console.log(req);

    await createTime(req);
    return redirect(`/${params.id}`);
};

export default function TimeRegister() {
    return <TimeRegisterPage />;
}
