export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginState {
  loading: boolean;
  token: null;
  error: string | null;
}

export interface HomeState {
  loading: boolean;
  data: any;
  searchedData: any | null;
  total_pages: number;
  error: string | null;
}
