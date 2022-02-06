import classes from "./grid.module.css";
import Item from "./item";

function Grid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <Item key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default Grid;
