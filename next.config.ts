import nextMDX from "@next/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // If you have other MDX options, make sure they are serializable
  },
});

const nextConfig = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});

export default nextConfig;
