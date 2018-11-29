export interface ApiResponse {
    IdError: number;
    PayLoad: string;
    MessageError: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}
