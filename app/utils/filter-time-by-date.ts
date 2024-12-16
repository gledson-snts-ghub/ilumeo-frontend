import { Time } from "../types/time";

export const filterTimesByCurrentDate = (times: Time[]): Time[] => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}/${String(
        today.getMonth() + 1
    ).padStart(2, "0")}/${String(today.getDate()).padStart(2, "0")}`;

    return times.filter((time) => time.date === formattedDate);
};

export const sumHoursWorkedForCurrentDate = (times: Time[]): string => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}/${String(
        today.getMonth() + 1
    ).padStart(2, "0")}/${String(today.getDate()).padStart(2, "0")}`;

    const todayTimes = times.filter((time) => time.date === formattedDate);

    let totalMinutes = 0;

    todayTimes.forEach((time) => {
        const match = time.hours_worked.match(/(\d+)h:(\d+)m/);

        if (match) {
            const hours = parseInt(match[1], 10);
            const minutes = parseInt(match[2], 10);
            totalMinutes += hours * 60 + minutes;
        }
    });

    if (totalMinutes === 0) {
        return "0h:0m";
    }

    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;

    return `${totalHours}h:${remainingMinutes}m`;
};
