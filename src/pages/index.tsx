import React from 'react'
import Head from 'next/head'

import { About, Container, Landing } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Landing>
          <img src="#" alt="Natan Tavares" />
        </Landing>

        <About>
          <div>
            <h2>
              UI/UX <strong>DESIGNER</strong>
            </h2>
            <article>
              <p>
                My name is Natan Tavares, I'm a brazilian UI/UX designer living
                in Belo Horizonte, fascinated by technology innovations, product
                branding and typography. I offer my design skills to build
                awesome website and mobile application in line with the
                ambitions of their owners.
              </p>
              <p>
                What i love above all things is pushing the limits of ergonomics
                and conception without ever neglecting user experience. Let's
                work on great projects together.
              </p>
            </article>
          </div>

          <img src="#" alt="formas geométricas" />
        </About>

        <section className="about">
          <img src="#" alt="Bigodom" />

          <div>
            <h2>
              FRONT-END <strong>DEV</strong>
            </h2>
            <article>
              <p>
                To go along with my design skills, my toolbox is filled with
                acronyms you might be afraid of such as HTML5, CSS3, React, and
                SCSS. I love to see new standards appear and mature allowing the
                creation od new website, each one more advanced and amazing than
                the previous.
              </p>

              <p>
                Page loading speed, display performance, responsive layout and
                SEO optimization are part of my job, i take these issues at
                heart from the very beginning.
              </p>
            </article>
          </div>
        </section>

        <section className="portfolio">
          <div className="card">
            <h2>PORTFOLIO</h2>
            <p>
              Take a look at my Dribbble account to discover my latest web
              designs, logos designs and illustrations in addition to my past
              works
            </p>
            <button>
              CHECKOUT <strong>MY DRIBBBLE</strong>
            </button>
          </div>
        </section>

        <section className="connected">
          <div className="contacts">
            <ul>
              <li>
                <img src="#" alt="Phone" />
                <span>+55 (71) 99931-0778</span>
              </li>
              <li>
                <img src="#" alt="Dribbble" />
                <span>Dribbble</span>
              </li>
              <li>
                <img src="#" alt="Twitter" />
                <span>Twitter</span>
              </li>
              <li>
                <img src="#" alt="Instagram" />
                <span>Instagram</span>
              </li>
            </ul>

            <ul>
              <li>
                <img src="#" alt="Email" />
                <span>Email</span>
              </li>
              <li>
                <img src="#" alt="Behance" />
                <span>Behance</span>
              </li>
              <li>
                <img src="#" alt="Linkedin" />
                <span>Linkedin</span>
              </li>
              <li>
                <img src="#" alt="Vcard" />
                <span>Vcard</span>
              </li>
            </ul>
          </div>

          <div className="last-tweets">
            <ul>
              <li>
                <img src="#" alt="Twitter" />
                <p>
                  A new revision of my website is coming really soon.. with
                  english translation this time ;)
                </p>
              </li>
              <li>
                <img src="#" alt="Twitter" />
                <p>
                  Hearing this form you is so great =) Thanks a lot for your
                  support =)
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="contact">
          <h2>WANT MORE DETAILS,</h2>
          <h2>PRICING INFOS OR A TEST DRIVE?</h2>

          <form>
            <label htmlFor="name">
              <span>NAME</span>
              <input type="text" name="name" id="name" />
            </label>
            <div>
              <label htmlFor="phone">
                <span>PHONE</span>
                <input type="text" name="phone" id="phone" />
              </label>
              <label htmlFor="email">
                <span>E-MAIL</span>
                <input type="email" name="email" id="email" />
              </label>
            </div>
            <label htmlFor="message">
              <textarea name="message" id="message" cols={30} rows={10} />
            </label>
          </form>
        </section>
        <footer>
          <div>
            <p>NATAN TAVARES &copy; 2021. ALL RIGHTS RESERVED.</p>
            <p>NATTANTAVARES.S15@gmail.com</p>
          </div>
          <button>BACK TO TOP &uarr;</button>
        </footer>
      </main>
    </Container>
  )
}

export default Home
