import Link from "next/link";

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/hireme">
            <a>Hire me</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        * {
          box-size: border-box;
          padding: 0;
          margin: 0;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
          background: #555;
          border: 2px solid #999;
        }
        li {
          padding: 15px;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        li:hover {
          background-color: limegreen;
        }
      `}</style>
    </>
  );
};

export default Layout;
