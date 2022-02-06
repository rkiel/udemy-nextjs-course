import classes from "./all.module.css";
import Grid from "./grid";

function All(props) {
  const { posts } = props;

  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <Grid posts={posts} />
    </section>
  );
}

export default All;
