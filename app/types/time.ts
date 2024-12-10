export interface Time {
  id: string;
  userId: string;
  date: string; // Data no formato "YYYY-MM-DD"
  hours_worked: string; // Horas trabalhadas no formato "HH:mm:ss"
}

export interface CreateTimeDto {
  userId: string;
  date: string;
  hours_worked: string;
}
