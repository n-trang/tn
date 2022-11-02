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
        <li>I love humour,</li>
        <li>and photography.</li>
      </ul>

      {/* <h2>My working/ learning process</h2>
      <ul>
        <li>Learn the fundamentals/ how things work.</li>
        <li>Doing projects. I find doing is the best way to learn.</li>
        <li>
          Write things down along the way.
          <p>
            I'm always hopeful that I understand more as I write, sometimes that happens. Sometimes though, it's the realization that I don't
            understand <i>that</i> much. 
          </p>
          <p>
            Yeah I find it's hard. Still that's a good way to move further. 
          </p>
        </li>
      </ul> */}

      <h2>Projects</h2>
      <p>I try to learn the fundamentals and apply them in projects.</p>
      <h3>Product management</h3>
      <h3></h3>
    </Layout>
  );
};

export default HomePage;
