import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { BlogCard } from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest articles and technical resources about industrial flanges and applications.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-wide">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg mt-2">Technical insights and industry news</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}