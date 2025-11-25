import { supabase } from "../../../lib/supabaseClient";

type Post = {
  id: string;
  title: string;
  content: string;
  featured_image?: string;
  created_at: string;
};

type Props = {
  params: { slug: string };
};

export default async function BlogPost({ params }: Props) {
  const { slug } = params;

  const { data: posts } = await supabase
    .from<Post>("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!posts) {
    return <p>Post not found.</p>;
  }

  const post = posts;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-slate-400 mb-6">
        {new Date(post.created_at).toDateString()}
      </p>
      {post.featured_image && (
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full h-72 object-cover rounded-md mb-6"
        />
      )}
      <div
        className="prose prose-slate"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
