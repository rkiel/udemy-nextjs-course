import classes from "./featuredPosts.module.css";
import Grid from "../posts/grid";

function FeaturedPosts(props) {
  const { posts } = props;

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <Grid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
