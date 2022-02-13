import ReactMarkdown from "react-markdown";
import Header from "./header";
import classes from "./content.module.css";

function Content(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <Header title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default Content;
