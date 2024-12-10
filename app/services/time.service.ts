import { Time } from "~/types/time";
import { ApiService } from "./api.service";

export class TimeService {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async getTimesByUserId(userId: string): Promise<Time[] | undefined> {
    return this.apiService.get<Time[]>(`/times/user/${userId}`);
  }

  async createTime(time: {
    userId: string;
    date: string;
    hours_worked: string;
  }): Promise<Time | undefined> {
    return this.apiService.post<Time, typeof time>("/times", time);
  }
}
