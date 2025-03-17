import Image from "next/image";
export function AboutMe() {
  return (
    <>
      <div id="about-me">
        <h1>About me</h1>
        <p>I am a software engineer with a dream to become a dog trainer!</p>
        <p>I am walking dogs for free for the following reasons:</p>
        <ul>
          <li>exercise;</li>
          <li>company;</li>
          <li>helping out families with dogs;</li>
          <li>get experience training dogs.</li>
        </ul>
        <Image
          className="dark:invert center circle-picture"
          src="/oryn.jpeg"
          alt="Oryn"
          width={300}
          height={300}
          priority
        />
        <h2>LinkedIn</h2>
        <p>
          <a href="https://www.linkedin.com/in/rob-rendell-a1a37126a/">
            https://www.linkedin.com/in/rob-rendell-a1a37126a/
          </a>
        </p>
      </div>
    </>
  );
}
