"use client";

import { getPostBySlug } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  slug: string;
};

export default function Post({ slug }: Props) {
  const { data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
  });

  if (!data) return notFound();

  return (
    <div>
      <Image src={data?.coverImage.url} alt={data?.title} className="w-full" width={800} height={500}/>
      <div>
      
      </div>
      <h1 className=" text-xl md:text-3xl text-center leading-relaxed font-bold mt-5">
        {data?.title}
      </h1>
      <p className="my-5 text-center text-sm md:text-xl text-gray-400">{data?.subtitle}</p>
      <div className="my-2 flex items-center justify-center text-lg">
        {data?.author.profilePicture && (
          <Image
            src={data?.author.profilePicture}
            alt={data?.author.name}
            className="rounded-full h-10 w-10 mr-3"
            width={40}
            height={40}
          />
        )}
        {data?.author.name}
      </div>
      <div
        className="blog-content  leading-loose flex flex-col gap-5 mt-5"
        dangerouslySetInnerHTML={{ __html: data!.content.html }}
      ></div>
    </div>
  );
}