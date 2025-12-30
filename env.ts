import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        SERVER_URL: z.url(),
        SERVER_ASSETS_URL: z.url(),
        SECRET: z.string().min(1),
    },
    client: {
    },
    runtimeEnv: {
        SERVER_URL: process.env.SERVER_URL,
        SERVER_ASSETS_URL: process.env.SERVER_ASSETS_URL,
        SECRET: process.env.SECRET,
    }
});