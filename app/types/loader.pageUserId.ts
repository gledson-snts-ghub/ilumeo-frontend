import { Time } from "./time";
import { User } from "./user";

export type LoaderPageUserId = {
    user: User;
    times: Time[];
    device: string;
};
