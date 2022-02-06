import Image from "next/image";
import classes from "./hero.module.css"; // scoped

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>
        I block about web development - especially frontend frameworks like
        React or Svelte.
      </p>
    </section>
  );
}

export default Hero;
