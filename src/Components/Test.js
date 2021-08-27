import React from "react";

function test() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/sources/images/logo-1.png" alt="logo" />
        </div>
        <div className="links">
          <img src="/sources/images//hamburger.png" alt="menu" />
        </div>
      </nav>
      <section className="content">
        <div className="grid">
          <article className="hero-txt">
            <div className="txt">
              <h1>
                Conversations-based <br />
                knowledge Platform
                <b>
                  for <br />
                  Customer Facing Teams.
                </b>
              </h1>
              <p>
                Spool converts digital conversations into collaborative
                knowledge in real-time and helps your team to sync and scale
                faster.
              </p>
            </div>
            <div
              className="svg"
              style={{
                backgroundImage: "url('./sources/images/design svg.svg')",
              }}
            ></div>
          </article>
          <article>
            <img src="sources/images/top-img.jpg" alt="img" />
          </article>
        </div>
      </section>
      <section className="content">
        <section className="grid row">
          <div>
            <img src="sources/images/guy-1.jpg" alt="guy-1" />
            <h3>Make your calls more Actionable & increase Win Rates</h3>
          </div>
          <div>
            <img src="sources/images/guy-2.jpg" alt="guy-2" />
            <h3>
              Capture & Share information without any security or privacy
              concerns
            </h3>
          </div>
          <div>
            <img src="sources/images/clock&calender.jpg" alt="clock&calendar" />
            <h3>Save tones of time and spend more time ith your Customers</h3>
          </div>
        </section>
      </section>
      <section className="content">
        <h2 style={{ paddingBottom: "1rem" }}>
          Connect Spool with your favourite productivity & collaborations app
        </h2>
        <div className="grid images">
          <img src="./sources/images/logo/Layer 1.svg" alt="icons" />
          <img src="./sources/images/logo/Layer 2.svg" alt="icons" />
          <img src="./sources/images/logo/Layer 3.svg" alt="icons" />
          <img src="./sources/images/logo/Layer 4.svg" alt="icons" />
          <img src="./sources/images/logo/Layer 5.svg" alt="icons" />
          <img src="./sources/images/logo/Layer 6.svg" alt="icons" />
        </div>
      </section>
      <section className="btn">
        <a href="https://api.spoolapp.co/connect">Connect with Zoom</a>
      </section>
    </>
  );
}

export default test;
