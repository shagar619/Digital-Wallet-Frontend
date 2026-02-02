


export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role: 'USER' | 'AGENT' | 'ADMIN';
  profilePhoto?: string;
  IsVerified?: boolean;
  IsActive?: "ACTIVE" | "INACTIVE" | "BLOCKED";
  createdAt?: string | number | Date;
  avatarUrl?: string;
  // ... other fields
}

// Matches the backend responseSender structure
export interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}