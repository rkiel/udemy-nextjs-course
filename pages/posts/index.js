import All from "../../components/posts/all";
import { getAll } from "../../lib/posts";

function Page(props) {
  return <All posts={props.posts} />;
}

// dev - called for each request
// prod - called once during build
export function getStaticProps() {
  const posts = getAll();

  return {
    props: {
      posts,
    },
  };
}

export default Page;
