import { QuantConnectResponse } from "./core";


export type ReadUserResponse = QuantConnectResponse & {
    user: {
        profile: string;
        badge: string;
        name: string;
        email: string;
        type: string;
        email_verified: number;
        channel: string;
        etheme: string;
        language: string;
        public_id: string;
        preferred_language: string;
        id?: number;
        token?: string;
    };
};

export type ReadUser = () => Promise<ReadUserResponse>;