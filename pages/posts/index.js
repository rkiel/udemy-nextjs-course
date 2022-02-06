import All from "../../components/posts/all";

function Page() {
  const posts = [
    {
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      except:
        "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs",
    },
    {
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      except:
        "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs2",
    },
    {
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      except:
        "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs3",
    },
    {
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      except:
        "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs4",
    },
  ];

  return <All posts={posts} />;
}

export default Page;
