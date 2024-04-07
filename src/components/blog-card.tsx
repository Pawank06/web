import { PostMetadata } from "@/lib/type";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: PostMetadata;
};

export default function BlogCard({ post }: Props) {
  return (

      
      <Card className="flex dark:bg-[#161618] flex-col">
      <CardHeader>
        <Image
          className="h-full rounded-md w-full object-cover"
          src={post.coverImage.url}
          width={800}
          height={400}
          alt={post.title}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl lg:text-sm font-bold">
          <Link href={`/blogs/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <div className="mt-3 lg:text-sm flex gap-3 items-center">
          {post?.author.profilePicture && (
            <Image
              src={post.author.profilePicture}
              className="w-7 h-7 rounded-full"
              width={25}
              height={25}
              alt="Profile Picture"
            />
          )}{" "}
          {post.author.name}
        </div>
        <p className="text-gray-500 line-clamp-3 lg:text-sm mt-3">
          {post.subtitle || post.content.text}
        </p>
      </CardContent>
    </Card>
      

    
  );
}