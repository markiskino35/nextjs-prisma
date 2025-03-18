import { prisma } from "@/lib/prisma";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
