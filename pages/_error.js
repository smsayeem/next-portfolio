import Layout from "../components/Layout";

export default ({ statusCode }) => (
  <Layout title="Error">
    {statusCode
      ? `Unable to fetch your data, status code ${statusCode}`
      : `Couldn't get that page, sorry!`}
  </Layout>
);
