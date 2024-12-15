type ValidateAndFormatTime = {
    start: string;
    end: string;
    dataIsInvalid: boolean;
};

export function validateAndFormatTime(
    start: string,
    end: string
): ValidateAndFormatTime {
    const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/;

    try {
        if (!timeRegex.test(start)) {
            throw new Error(
                `Invalid time format for start: ${start}. Expected format: HH:mm`
            );
        }

        if (!timeRegex.test(end)) {
            throw new Error(
                `Invalid time format for end: ${end}. Expected format: HH:mm`
            );
        }

        return { start, end, dataIsInvalid: false };
    } catch (error) {
        return { start, end, dataIsInvalid: true };
    }
}
