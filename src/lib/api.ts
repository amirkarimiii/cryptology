import { z } from 'zod';
import {env} from "@env";

const SERVER_URL = env.SERVER_URL;
const API_KEY = env.SECRET;

export async function fetchApi<T>(
    endpoint: string,
    schema: z.ZodSchema<T>
): Promise<T> {
    const response = await fetch(`${SERVER_URL}${endpoint}`, {
        headers: {
            'x-api-key': API_KEY,
        },
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const rawData = await response.json();

    const parsed = schema.safeParse(rawData);

    if (!parsed.success) {
        console.error('Validation failed:', parsed.error.format());
        throw new Error('Invalid data received from API');
    }

    return parsed.data;
}