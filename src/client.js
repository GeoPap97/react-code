import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "egc9th7j",
  dataset: "production",
  apiVersion: "2022-01-18",
  token: process.env.REACT_APP_API_KEY,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});
