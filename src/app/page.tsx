import Container from "@/components/Container";
import Posts from "@/components/posts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { inter, poppins } from "@/lib/font";
import { getPosts } from "@/lib/request";
import { PostMetadata } from "@/lib/type";
import { cn } from "@/lib/utils";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (lastPage: { node: PostMetadata; cursor: string }[]) => lastPage.length < 6 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  })




  return (
    <Container className="px-0">

      <div className="flex justify-center items-center mb-14">
        <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-yellow-500/10 dark:bg-blue-300/0  blur-3xl filter" />
        <Link href="https://twitter.com/akatrinetra" target="_blank">
          <span className="relative group inline-block w-fit mx-auto overflow-hidden rounded-full p-[1px]">
            <span
              className={cn(
                "absolute inset-[-1000%] bg-[conic-gradient(from_-90deg_at_50%_50%,#71717a_0%,#27272a_50%,#71717a_100%)]",
                "",
              )}
            />
            <div
              className={cn(
                "flex gap-1 h-full group w-full items-center justify-center rounded-full  dark:bg-zinc-900 bg-rose-100 px-2 md:py-[2px] py-[2px] text-sm dark:text-[#CBC5C5] text-slate-700 backdrop-blur-3xl",
                "hover:backdrop-blur-2xl hover:shadow-lg transition-all duration-200 ease-in-out", poppins.className
              )}
            >
              <Sparkles className="mr-1 h-3 w-3" />
              <p className=" font-medium">Follow along on Twitter</p>
            </div>
          </span>
        </Link>
      </div>

      <div className="hero-container px-7">

        <h1 className={cn("text-4xl dark:text-slate-300 text-gray-800 font-semibold", poppins.className)}>Pawan</h1>
        <p className="dark:text-white/45 py-2 text-sm text-gray-600/70 ">Developer & Designer</p>
        <h2 className={cn("text-md dark:text-slate-300 text-slate-500", inter.className)}>Welcome to my online space, where I discuss shipping great products, improving as a developer, and advancing in the tech industry.</h2>

        <div className="flex gap-4 mt-6">
          <Link href="https://twitter.com/akatrinetra" target="_blank">
            <Button className="text-lg font-medium" variant="default">
              Twitter
            </Button>
          </Link>
          <Link href="https://github.com/Pawank06/web" target="_blank">
            <Button className="text-lg font-medium" variant="outline">
              GitHub
            </Button>
          </Link>
        </div>


      </div>


      <div className="">

        <div className="px-7">
          <Separator className="my-10" />
        </div>
        <div className="px-7">
          <h1 className={cn("text-3xl font-semibold", poppins.className)}>Blogs</h1>
          <p className="mt-3 dark:text-white/45 text-slate-500 text-sm mb-10">
            These are my featured Blogs
          </p>
        </div>

        <div className="">
          <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/15 dark:bg-blue-500/15  blur-3xl filter" />
          <div className="px-7">
            <HydrationBoundary state={dehydrate(queryClient)}>
              <Posts />
            </HydrationBoundary>
          </div>


        </div>
      </div>

      <div className=" mt-20">
        <div className="px-7">
          <Separator className="my-10" />
          <h1 className={cn("text-3xl  font-semibold", poppins.className)}>Projects</h1>
          <p className="mt-3 text-sm px-1 dark:text-white/45 text-slate-500 ">
            These are my featured project
          </p>
        </div>
        <div className="px-7">


        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

          {/* <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/15 blur-3xl filter" /> */}


        </div>
      </div>



    </Container>
  );
}
