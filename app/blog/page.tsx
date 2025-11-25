import { supabase } from "../../lib/supabaseClient";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image?: string;
  created_at: string;
};

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from<Post>("posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6">
        {posts?.map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block p-6 border rounded-lg shadow hover:shadow-md transition"
          >
            {post.featured_image && (
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
            <p className="mt-2 text-sm text-slate-400">
              {new Date(post.created_at).toDateString()}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
