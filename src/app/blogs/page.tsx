import Posts from "@/components/posts";
import { getPosts } from "@/lib/request";
import { PostMetadata } from "@/lib/type";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Image from "next/image";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (lastPage: {node: PostMetadata; cursor: string}[]) => lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
})

  return (
    <div className="max-w-4xl  px-5 xl:p-0 mx-auto">
      
      <div className=" gap-5 mt-5">
        
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Posts/>
      </HydrationBoundary>
      </div>
    </div>
  );
}
