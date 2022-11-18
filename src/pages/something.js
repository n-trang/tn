import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Center from "../components/center";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = ({ data }) => {
  return (
    <Layout pageTitle="trang | hello world">
      <h2>Hi there, my name is Trang.</h2>
      <ul>
        <li>
          I'm a product manager{" "}
          <a href="https://youtu.be/fw-QRyQcFH8?t=4" target="__blank">
            wannabe
          </a>
          .
        </li>
        <li>I love humor,</li>
        <li>and photography.</li>
      </ul>

      <h2>Projects</h2>
      <p>I try to learn the fundamentals and apply them in projects.</p>
      <h3>Product management</h3>
      <h3></h3>
    </Layout>
  );
};

export default HomePage;
