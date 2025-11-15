

interface User {
  id?: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    password: string;
    profilePhoto?: string;
    shortBio?: string; 
    IsVerified?: boolean;
    createdAt?: string | number | Date;

  // add other user fields here
}

export interface ProfileResponse {
    data: {
      data: User;
    };
}