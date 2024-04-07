import Post from "@/components/post";
import { getPostBySlug } from "@/lib/request";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPostBySlug(params.slug);
  return {
    title: data.title,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post", params.slug],
    queryFn: () => getPostBySlug(params.slug),
  });

  return (

     <div className="max-w-[120rem] dark:bg-[#161618] rounded-md border px-7 md:mx-auto">
      <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-yellow-400/10 dark:bg-blue-300/0  blur-3xl filter" /> 
        <Post slug={params.slug} />
         
      </HydrationBoundary>
    </div> 

    
  );
}