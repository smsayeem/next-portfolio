import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ slug, title }) => {
  return (
    <>
      <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
          <a>{title}</a>
        </Link>
      </li>
      <style jsx>
        {`
          text-decoration: none;
        `}
      </style>
    </>
  );
};

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="angular-post" title="Angular Post" />
      <PostLink slug="vue-post" title="Vue Post" />
    </ul>
  </Layout>
);

//we use slug value for the cleaner url

export default Blog;
