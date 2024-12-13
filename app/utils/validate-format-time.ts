export const validateAndFormatTime = (start: string, end: string) => {
    const timeRegex = /^([0-9]{2}):([0-9]{2})$/;
    const validateTimeFormat = (time: string) => timeRegex.test(time);

    if (!validateTimeFormat(start)) {
        return {
            error: "Formato de horário de início inválido. Use o formato hh:mm.",
        };
    }

    if (!validateTimeFormat(end)) {
        return {
            error: "Formato de horário de fim inválido. Use o formato hh:mm.",
        };
    }

    const [startHours, startMinutes] = start.split(":").map(Number);
    const [endHours, endMinutes] = end.split(":").map(Number);

    const startInMinutes = startHours * 60 + startMinutes;
    const endInMinutes = endHours * 60 + endMinutes;

    if (endInMinutes < startInMinutes) {
        return {
            error: "O horário de fim não pode ser menor que o horário de início.",
        };
    }

    const formatTime = (time: string) => {
        const [hours, minutes] = time.split(":");
        return `${hours}h:${minutes}m`;
    };

    const formattedStart = formatTime(start);
    const formattedEnd = formatTime(end);

    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return {
        start: formattedStart,
        end: formattedEnd,
        date: formattedDate,
    };
};
