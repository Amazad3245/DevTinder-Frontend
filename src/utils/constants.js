//export const BASE_URL = import.meta.env.VITE_BACKEND_URL;
export const BASE_URL = "https://devtinde-backend-2.onrender.com"

import {io} from "socket.io-client";

export const createSocketConnection = () => {
    return io(BASE_URL, {
        transports: ["websocket", "polling"],
    });
};
