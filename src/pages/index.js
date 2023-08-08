import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="heroBanner">
      <div className="container">
        <center>
          <img className="logonho" src="./img/logo.png"></img>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--ifm-color-primary-light"
              to="/docs/intro"
            >
              Start Learning NOW 😉
            </Link>
          </div>
          <br></br>
          <p>Im better </p>
        </center>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Bãi rác"
    >
      <div className="kk">
        <main>
          <iframe
            className="concak"
            width="100%"
            src="https://necakco.github.io/accelerator/frendda/#cheatcloud"
            title=""
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowfullscreen
          ></iframe>
        </main>
      </div>
    </Layout>
  );
}
