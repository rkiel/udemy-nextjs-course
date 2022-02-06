import Link from "next/link";

//<!-- since children is not a text -->
function MainNavigation() {
  return (
    <header>
      <Link src="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
