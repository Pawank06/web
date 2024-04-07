import Container from "@/components/Container";
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


      <Container className="px-0">
        {/* <div className="dark:bg-[#161618] rounded-md border px-5 mx-5"></div> */}
      <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="glow absolute  -z-10 aspect-square w-full max-w-xl rounded-full bg-yellow-400/10 dark:bg-blue-300/0  blur-3xl filter" /> 
      <div className="px-7">
        <Post slug={params.slug} />
      </div>
        
         
      </HydrationBoundary>
    </Container> 


    
  );
}