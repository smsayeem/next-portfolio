import { Component } from "react";
import Link from "next/link";
import Head from "next/head";

class Layout extends Component {
  render() {
    return (
      <div className="root">
        <Head>
          <title>Profolio</title>
        </Head>
        <header>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="/hireme">
            <a>Hire me</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </header>

        <h1>{this.props.title}</h1>
        {this.props.children}
        <footer>&copy; {new Date().getFullYear()} | Sam Sadot</footer>

        <style jsx>{`
          .root {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          header {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 1em;
            font-size: 1.2rem;
            background-color: indigo;
          }
          header a {
            text-decoration: none;
            color: darkgrey;
          }
          header a:hover {
            color: #fff;
          }
          footer {
            padding: 1em;
            width: 100%;
            background-color: #555;
            color: #999;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2em;
          }
        `}</style>
        <style global jsx>{`
          body {
            margin: 0 auto;
            font-size: 110%;
            background: #f0f0f0;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
