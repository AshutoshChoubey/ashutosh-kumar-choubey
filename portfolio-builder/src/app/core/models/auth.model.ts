export interface UserSession {
  email: string;
  name: string;
  role: 'admin';
  token: string;
  loginTime: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

