import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/shadcn/card";
import {Badge} from "@/components/ui/shadcn/badge";
import Image from "next/image";
import {env} from "@env";
import Link from "next/link";
import {fetchApi} from "@/lib/api";
import {News, NewsSchema} from "@/lib/schemas/news.schema";
import {cacheLife} from "next/cache";

export const NewsSection = async () => {

    "use cache"
    cacheLife("minutes");
    const ASSET_URL = env.SERVER_ASSETS_URL;
    const newsObject: News = await fetchApi("/news/get_top_news", NewsSchema);

    return (
        <section className="max-w-[1280px] mx-auto px-4 py-8 flex flex-col items-center">
            <div className="w-full flex flex-col items-center lg:max-w-230">
                <h3 className="font-bold text-4xl mt-20 mb-15 lg:mb-10">Latest News</h3>
                <div className="w-full flex flex-col items-center gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2">
                    {newsObject.map((item, index) => {

                        const image_url = item.main_image_url === "fallback" ?
                            "/fallback-image.png" : `${ASSET_URL}/news_images/${item.main_image_url}`;

                        const formattedDate = new Intl.DateTimeFormat('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }).format(new Date(item.published_at));

                        return (
                            <Card key={index} className="w-full max-w-sm md:max-w-md lg:max-w-full py-0">
                                <Link href={item.original_url} className="py-5" target="_blank">
                                    <CardHeader>
                                        <CardTitle>
                                            <div className="h-15 overflow-hidden">
                                                {item.title}
                                            </div>
                                        </CardTitle>
                                        <CardDescription className="h-20">
                                            {item.summary}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="mb-2">
                                        <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
                                            <Image
                                                fill
                                                src={image_url}
                                                alt={`${item.title}`}
                                            />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="inline-block">
                                        <div className="flex gap-2">
                                            <Badge className="h-max my-auto">Author</Badge>
                                            <span className="inline-block text-sm my-auto">
                                        {item.author}
                                    </span>
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <Badge className="h-max my-auto">source</Badge>
                                            <span className="inline-block text-sm my-auto">
                                        {item.source}
                                    </span>
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <Badge className="h-max my-auto">published at</Badge>
                                            <span className="inline-block text-sm my-auto">
                                        {formattedDate}
                                    </span>
                                        </div>
                                    </CardFooter>
                                </Link>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};