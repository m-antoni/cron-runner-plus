export type AppFormProps = {
  // From DB optional
  id?: string | undefined;
  createdAt?: Date | string | undefined;
  updatedAt?: Date | string | undefined;
  // Job
  appName: string;
  url: string;
  isEnabled: boolean;
  scheduleType: ScheduleType;
  intervalMinutes: number;
  dailyTime: string;
  monthlyDay: number;
  monthlyTime: string;
  // Notification
  notifyOnFailure: boolean;
  notifyOnRecovery: boolean;
  notificationEmail: string;
  // ENV
  env: EnvItem[];
};

export type EnvItem = {
  id?: string;
  appId?: string;
  envKey: string;
  envValue: string;
};

export enum ScheduleType {
  MINUTES = 'MINUTES',
  DAILY = 'DAILY',
  MONTHLY = 'MONTHLY',
}

// use in JobForm
export type JobFormTypes = {
  appName: string;
  url: string;
  isEnabled: boolean;
  scheduleType: ScheduleType;
  intervalMinutes: number;
  dailyTime: string;
  monthlyDay: number;
  monthlyTime: string;
};
