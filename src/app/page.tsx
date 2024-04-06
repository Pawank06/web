import Posts from "@/components/posts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { inter, poppins } from "@/lib/font";
import { getPosts } from "@/lib/request";
import { PostMetadata } from "@/lib/type";
import { cn } from "@/lib/utils";
import { HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
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
    <main className="max-w-4xl md:max-w-[800px] px-3 xl:p-0 mx-auto">
      <div className="flex justify-center items-center mb-20">
        <Link href="/blogs">
            <span className="relative group inline-block w-fit mx-auto overflow-hidden rounded-full p-[1px]">
              <span
                className={cn(
                  "absolute inset-[-1000%] bg-[conic-gradient(from_-90deg_at_50%_50%,#71717a_0%,#27272a_50%,#71717a_100%)]",
                  "",
                )}
              />
              <div
                className={cn(
                  "flex gap-1 h-full group w-full items-center justify-center rounded-full dark:bg-zinc-900 bg-zinc-100 px-3 py-1 text-md dark:text-[#CBC5C5] text-slate-700 backdrop-blur-3xl",
                  "hover:backdrop-blur-2xl hover:shadow-lg transition-all duration-200 ease-in-out", poppins.className
                )}
              >
                <Sparkles className="mr-1 h-3 w-3" />
                <p className=" font-medium">Follow along on Twitter</p>
              </div>
            </span>
          </Link>
        </div>

      <div className="hero-container">
        
        <h1 className={cn("text-7xl dark:text-slate-300 text-gray-800 font-semibold", poppins.className)}>Pawan</h1>
        <p className="dark:text-white/45 px-1 text-gray-500 font-medium">Fullstack Developer</p>
        <h2 className={cn("mt-3 mb-3 px-1 text-xl dark:text-slate-300 text-slate-500", inter.className)}>Welcome to my digital garden where I share what I&apos;m learning about  shipping great products, becoming a better developer and growing a  career in tech.</h2>

        <div className="flex gap-4 mt-6">
           <Link href="twitter">
        <Button  className="text-lg font-medium" variant="default">
                  Twitter   
        </Button>
        </Link>
        <Link href="github">
        <Button  className="text-lg font-medium" variant="outline">
                GitHub   
        </Button>
        </Link>
        </div>
        
       
      </div>
      
      <div className=" mt-20">
        <h1 className={cn("text-5xl font-semibold", poppins.className)}>Blogs</h1>
        <p className="mt-3 px-1 dark:text-white/45 text-slate-500 ">
        These are my featured Blogs 
        </p>
        <Separator className="my-10" />
         <div className="">

        <HydrationBoundary state={dehydrate(queryClient)}>
        <Posts/>
      </HydrationBoundary>
      </div>
      </div>

      <div className=" mt-20">
        <h1 className={cn("text-5xl font-semibold", poppins.className)}>Projects</h1>
        <p className="mt-3 px-1 dark:text-white/45 text-slate-500 ">
        These are my featured project 
        </p>
        <Separator className="my-14" />
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

        
      </div>
      </div>


     
    </main>
  );
}
