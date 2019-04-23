import { Component } from "react";
import Layout from "../components/Layout";
import Error from "./_error";
import fetch from "isomorphic-unfetch"; //Isomorphic Unfetch: Switches between unfetch & node-fetch for client & server.
// install: npm i isomorphic-unfetch then
// As a ponyfill:
// import fetch from 'isomorphic-unfetch';
// fetch('/foo.json')
//   .then( r => r.json() )
//   .then( data => {
//     console.log(data);
//   });

class About extends Component {
  //   state = {
  //     user: null
  //   };
  //   // fetch data from external sources (api/server). older react stryle- cient render react app
  //   componentDidMount() {
  //     fetch("https://api.github.com/users/smsayeem")
  //       .then(res => res.json())
  //       .then(data => {
  //         this.setState({ user: data });
  //       });
  //   }

  //server rendered next-react app
  // getInitialProps can be used for stateless and statefull component
  // As it is a static method, it can be executed within the class or from the outside of the class.
  // i.e. About.getInitialProps = () =>{...}
  // in this case we might get error as fetch is not defined
  // Also fetch is trying to fetch data immidiately the component is rendered.
  // we usually install axios that would be able to run on the sever or client
  //we need to install a package called isomorphic-unfetch
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/smsayeem");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    return { user: data, statusCode };
  }
  render() {
    console.log("props=", this.props);
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <div>
        <Layout title="About">
          <p>Github user: {user.name}</p>
          {/* <img src="this.props.user.avatar_url" /> */}
          {/* {JSON.stringify(this.state.user)}     /*to show data as client rendered react style */}
          <p>A javascript Programmer</p>
          {/* <img src="static/js-logo.jpg" alt="js logo" height="200px" /> */}
          {/* data coming from github account as external api */}
          <img src={user.avatar_url} alt="My git pic" height="200px" />
        </Layout>
      </div>
    );
  }
}

export default About;
