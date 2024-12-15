import { differenceInMinutes, parse } from "date-fns";

type CalculateTimeDifference = {
    timeDifference: string;
    isInvalid: boolean;
};

export const calculateTimeDifference = (
    start: string,
    end: string
): CalculateTimeDifference => {
    try {
        const startDate = parse(start, "HH:mm", new Date());
        const endDate = parse(end, "HH:mm", new Date());

        if (startDate.getTime() >= endDate.getTime()) {
            throw new Error(
                "O horário de início não pode ser maior ou igual ao horário de término."
            );
        }

        const diffInMinutes = differenceInMinutes(endDate, startDate);

        const hours = Math.floor(diffInMinutes / 60);
        const minutes = diffInMinutes % 60;

        return { timeDifference: `${hours}h:${minutes}m`, isInvalid: false };
    } catch (error) {
        return { isInvalid: true, timeDifference: "" };
    }
};
