import { useParams } from "wouter";
import { getBlogBySlug } from "@/data/blog-data";
import BlogPost from "@/pages/blog-post";
import ServicePage from "@/pages/service-page";
import NotFound from "@/pages/not-found";
import { getServiceBySlug } from "@/data/services-data";

export default function SlugResolver() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <NotFound />;

  const blogPost = getBlogBySlug(slug);
  if (blogPost) return <BlogPost />;

  const service = getServiceBySlug(slug);
  if (service) return <ServicePage />;

  return <NotFound />;
}
