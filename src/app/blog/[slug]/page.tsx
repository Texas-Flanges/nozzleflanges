import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title + ' | Blog',
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container-wide py-16">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <article className="container-wide py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-4 text-gray-600">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-4xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </div>
  );
}