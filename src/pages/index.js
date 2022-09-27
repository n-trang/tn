import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Center from "../components/center";
import { StaticImage } from "gatsby-plugin-image";

const Width = 150;
const HomePage = ({ data }) => {
  return (
    <Layout pageTitle="trang | hello world">
      <Center>
        <h2>Hi there, my name is Trang 👻</h2>
      </Center>
      <div className="row">
        <div className="column">
          <ul>
            <li>
              I'm a product manager{" "}
              <a href="https://youtu.be/fw-QRyQcFH8?t=4" target="__blank">
                wannabe
              </a>
              .
            </li>
            <li>I love humour,</li>
            <li>
              and <Link to="/blog">photography</Link>.
            </li>
          </ul>
        </div>
        <div>
          <Center>
            <StaticImage
              alt="it's me!"
              src="..\images\wow.jpg"
              placeholder="blurred"
              width={Width}
            />
            <p>
              <a href="mailto:n-trang@outlook.com">email</a>,{" "}
              <a href="https://github.com/n-trang" target="__blank">
                github
              </a>
              {/* ,{" "} */}
              {/* <a href="https://instagram.com/nguyentrangstudio" target="__blank">
            instagram
          </a> */}
            </p>
          </Center>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
