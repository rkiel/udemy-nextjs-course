import FeaturedPosts from "../components/home/featuredPosts";
import Hero from "../components/home/hero";
import { getFeatured } from "../lib/posts";

// const posts = [
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     except:
//       "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     except:
//       "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs2",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     except:
//       "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs3",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     except:
//       "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs4",
//   },
// ];

function Page(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

// dev - called for each request
// prod - called once during build
export function getStaticProps() {
  const posts = getFeatured();

  return {
    props: {
      posts,
    },
  };
}

export default Page;
