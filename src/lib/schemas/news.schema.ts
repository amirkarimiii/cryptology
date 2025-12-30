import {z} from "zod";

export const NewsSchema = z.array(
    z.object({
        id: z.string(),
        title: z.string(),
        summary: z.string(),
        original_url: z.string(),
        main_image_url: z.string(),
        author: z.string(),
        source: z.string(),
        published_at: z.string()
    })
);

export type News = z.infer<typeof NewsSchema>;