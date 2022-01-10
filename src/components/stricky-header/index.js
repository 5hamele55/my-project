import style from './style.css';
import HeaderWrapper from '../header-container';
import { useState, useEffect } from 'preact/hooks';

const StrickyHeader = ({ headerLink, headerSocialLink }) => {
  const [scroll, setScroll] = useState(0)
  const [visible, setVisible] = useState(false)
  const handleScroll = () => {
    setScroll(window.scrollY)
    scroll > 120 ? setVisible(true) : setVisible(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { once: true })
  })
  return (
    <div id="headerVisible" class={`${style.strickyHeader} ${visible && style.strickyFixed}`}>
      <HeaderWrapper headerLink={headerLink} headerSocialLink={headerSocialLink} />
    </div>
  );
}
export default StrickyHeader;
