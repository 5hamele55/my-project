import style from './style.css';
import { useState, useEffect } from 'preact/hooks';
import Logo from '../logo'
import { phone, mail } from '../../vars'
const Footer = ({ scroll, addClassOnScroll, headerSocialLink }) => {
  const [list1] = useState([
    {
      title: 'About',
      link: "#",
    },
    {
      title: 'Meet our team',
      link: "#",
    },
    {
      title: 'Case stories',
      link: "#",
    },
    {
      title: 'Latest news',
      link: "#",
    },
    {
      title: 'Contact',
      link: "#",
    }
  ])
  const [list2] = useState([
    {
      title: 'Support',
      link: "#",
    },
    {
      title: 'Terms of use',
      link: "#",
    },
    {
      title: 'Privacy policy',
      link: "#",
    },
    {
      title: 'Help',
      link: "#",
    }
  ])
  const [footerScroll, setFooterScroll] = useState(false)

  useEffect(() => {
    addClassOnScroll(6250, setFooterScroll)
  }, [scroll])
  return (
    <footer class={style.footer}>
      <div class={style.footerShape}></div>
      <div class={style.footerContainer}>
        <div class={style.footerTop}>
          <div class={style.footerTopRow}>
            <div class={style.footerTopCol1}>
              <div class={style.footerTopAbout}>
                <div class={style.footerTopLogo}>
                  <Logo />
                </div>
                <p>Welcome to our consultancy agency. Lore ipsum simply text amet cing elit.</p>
              </div>
              <ul>
                <li>
                  <div class={style.footerTopIcon}><span>1</span></div>
                  <div class={style.footerTopText}><p><a href={`tel:${phone.trim()}`}>{phone}</a></p></div>
                </li>
                <li>
                  <div class={style.footerTopIcon}><span>2</span></div>
                  <div class={style.footerTopText}><p><a href={`mailto:${mail}`}>{mail}</a></p></div>
                </li>
                <li>
                  <div class={style.footerTopIcon}><span>3</span></div>
                  <div class={style.footerTopText}><p>66 Broklyn Street New York, USA</p></div>
                </li>
              </ul>
            </div>
            <div class={style.footerTopCol2}>
              <div class={style.footerTopExplore}>
                <h3>Explore</h3>
                <ul class={style.footerTopExploreList1}>
                  {list1.map(link => (
                    <li><a href={link.link}>{link.title}</a></li>
                  ))}
                </ul>
                <ul class={style.footerTopExploreList2}>
                  {list2.map(link => (
                    <li><a href={link.link}>{link.title}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div class={style.footerTopCol3}>
              <div class={style.footerTopNews}>
                <h3>Newsletter</h3>
                <form>
                  <p>Subsrcibe for latest articles and resources</p>
                  <div class={style.footerTopNewsInput}>
                    <input type="email" placeholder="Email address" name="email" />
                    <button type="submit" class={style.footerTopNewsInputBtn}>Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
        <div class={style.footerBottom}>
          <div class={style.footerBottomRow}>
            <div class={style.footerBottomCol}>
              <div class={style.footerBottomInner}>
                <div class={style.footerBottomLeft}>
                  <p>© Copyright 2021 by <a href="#">Layerdrops.com</a></p>
                </div>
                <div class={style.footerBottomRight}>
                  <div class={style.footerBottomLinks}>
                    {headerSocialLink.map(link => (
                      <a key={link.body} href={link.href} class={style.footerSocialLink}>{link.body}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </footer >
  )
}

export default Footer;