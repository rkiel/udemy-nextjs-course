import PostContent from "../../components/posts/detail/content";
import { getData, getFiles, getSlug } from "../../lib/posts";

function Page(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const data = getData(slug);

  return {
    props: { post: data },
  };
}

export function getStaticPaths() {
  const fileNames = getFiles();

  const slugs = fileNames.map((fileName) => getSlug(fileName));

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export default Page;
