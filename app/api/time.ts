import { TimeService } from "->services/time.service";

const timeService = new TimeService();

export const getTimesByUserId = async (userId: string) => {
    return await timeService.getTimesByUserId(userId);
};

export const createTime = async (time: {
    userId: string;
    date: string;
    hours_worked: string;
}) => {
    return await timeService.createTime(time);
};
