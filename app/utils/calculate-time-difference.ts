export const calculateTimeDifference = (start: string, end: string): string => {
    const [startHours, startMinutes] = start.split(":").map(Number);
    const [endHours, endMinutes] = end.split(":").map(Number);

    const totalStartMinutes = startHours * 60 + startMinutes;
    const totalEndMinutes = endHours * 60 + endMinutes;

    if (totalStartMinutes >= totalEndMinutes) {
        throw new Error(
            "O horário de 'start' não pode ser maior ou igual ao de 'end'."
        );
    }

    const diffMinutes = totalEndMinutes - totalStartMinutes;
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    return `${hours}h:${minutes}m`;
};
