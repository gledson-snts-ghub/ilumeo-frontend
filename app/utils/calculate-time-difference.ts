export const calculateTimeDifference = (start: string, end: string) => {
    const timeRegex = /^([0-9]{2})h:([0-9]{2})m$/;
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

    const startMatch = start.match(timeRegex);
    const endMatch = end.match(timeRegex);

    if (!startMatch || !endMatch) {
        return {
            error: "Erro ao extrair horas e minutos. Verifique os valores informados.",
        };
    }

    const startHours = parseInt(startMatch[1], 10);
    const startMinutes = parseInt(startMatch[2], 10);
    const endHours = parseInt(endMatch[1], 10);
    const endMinutes = parseInt(endMatch[2], 10);

    const startInMinutes = startHours * 60 + startMinutes;
    const endInMinutes = endHours * 60 + endMinutes;

    if (endInMinutes <= startInMinutes) {
        return {
            error: "O horário de fim não pode ser menor ou igual ao horário de início.",
        };
    }

    const differenceInMinutes = endInMinutes - startInMinutes;
    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = differenceInMinutes % 60;

    return {
        difference: `${String(hours).padStart(2, "0")}h:${String(
            minutes
        ).padStart(2, "0")}m`,
    };
};
