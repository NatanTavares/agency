import React from 'react'
import Head from 'next/head'

import { FaGithub, FaPhoneAlt, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

import {
  About,
  Connected,
  Contact,
  Container,
  Landing,
  Portfolio
} from '../styles/pages/Home'

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

        <About>
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
        </About>

        <Portfolio>
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
        </Portfolio>

        <Connected>
          <div className="contacts">
            <h2>
              GET <strong>CONNECTED</strong>
            </h2>

            <ul>
              <li>
                <FiMail />
                <a href="/">nattantavares.s15@gmail.com</a>
              </li>
              <li>
                <FaPhoneAlt />
                <span>+55 (71) 99931-0778</span>
              </li>
              <li>
                <FaLinkedinIn />
                <a href="/">Linkedin</a>
              </li>
              <li>
                <FaGithub />
                <a href="/">Github</a>
              </li>
            </ul>
          </div>

          <div className="last-commits">
            <h2>
              LAST <strong>COMMITS</strong>
            </h2>
            <ul>
              <li>
                <p>
                  refactor(component): Implements the interface of the component
                  expecting the priceId parameter
                </p>
              </li>
              <li>
                <p>feat(stripe): Consumes Stripe API via SSG</p>
              </li>
            </ul>
          </div>
        </Connected>

        <Contact>
          <h2>WANT MORE DETAILS,</h2>
          <h3>PRICING INFOS OR A TEST DRIVE?</h3>

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
              <span>HOW CAN I HELP?</span>
              <textarea name="message" id="message" cols={30} rows={10} />
            </label>

            <button>
              <strong>SEND</strong>
            </button>
          </form>
        </Contact>
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
