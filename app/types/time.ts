export interface Time {
    id: string;
    userId: string;
    date: string;
    hours_worked: string;
}

export interface CreateTimeDto {
    userId: string;
    date: string;
    hours_worked: string;
}
