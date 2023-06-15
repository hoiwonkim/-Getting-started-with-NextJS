// ./components/NavBar.js
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();

  const handleHomeClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    router.push("/about");
  };

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <a
          href="/"
          className={router.pathname === "/" ? "active" : ""}
          onClick={handleHomeClick}
        >
          Home
        </a>
        <a
          href="/about"
          className={router.pathname === "/about" ? "active" : ""}
          onClick={handleAboutClick}
        >
          About
        </a>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
          text-decoration: none;
          cursor: pointer;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
