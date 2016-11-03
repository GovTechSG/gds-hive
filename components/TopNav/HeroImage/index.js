import React from 'react';
import styles from './styles.scss';
import LogoSVG from './SvgLogo';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const createLink = (l, currentPathname) => {
  // Matches subpaths too, need to slice to remove leading forward slash
  const isCurrentStyle =
    (currentPathname === l.href) || (currentPathname.includes(l.href.slice(1) || '*', 1))
      ? styles.current
      : '';

  if (l.external) {
    return (
      <a target="blank" href={l.href} key={l.href} className={`${styles.link} ${isCurrentStyle}`}>
        {l.title}
      </a>
    );
  }

  return (
    <Link to={prefixLink(l.href)} key={l.href} className={`${styles.link} ${isCurrentStyle}`}>
      {l.title}
    </Link>
  );
};

export const HeroImage = ({ pathname, links, fullsize }) => {
  const renderLinks = (
    <div className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <svg className={styles.logo} viewBox="0 0 300 340" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-574.000000, -166.000000)">
              <g transform="translate(577.000000, 170.000000)" fill="#fff" strokeWidth="2.1">
                <path className={styles.path} d="M203.870484,33.8134395 L203.858901,33.8134395 L203.858901,33.8126651 C203.858901,29.5386488 200.403848,26.0739 196.141021,26.0739 C191.877421,26.0739 188.423141,29.5386488 188.423141,33.8126651 L181.203364,298.272747 L181.21572,298.272747 C181.216492,304.544763 186.283233,309.625723 192.536924,309.625723 C198.791387,309.625723 203.858128,304.544763 203.858901,298.272747 L203.870484,298.272747 L203.870484,33.8134395"></path>
                <path className={styles.path} d="M4.10466454e-15,87.3422266 C0.52108421,81.5533745 5.37280538,77.0167047 11.2818194,77.0167047 C17.5385995,77.0167047 22.6107461,82.103086 22.6107461,88.3766512 L22.6107461,245.771812 C22.6107461,252.046926 17.5385995,257.132533 11.2818194,257.132533 C5.37280538,257.132533 0.52108421,252.596553 0,246.806473 L4.08323026e-15,87.3422266 L4.10466454e-15,87.3422266 Z"></path>
                <path className={styles.path} d="M67.9264529,62.1339279 C67.9264529,55.8603628 62.8543063,50.7747558 56.5975262,50.7747558 C50.3407461,50.7747558 45.2693717,55.8603628 45.2693717,62.1339279 L45.2693717,62.1347023 L45.2678272,62.1347023 L45.2678272,141.683756 L67.9249084,141.683756 L67.9249084,62.1649047 C67.9249084,62.1540628 67.9264529,62.1439953 67.9264529,62.1339279"></path>
                <path className={styles.path} d="M67.9249084,272.00834 L67.9249084,164.404423 L45.2678272,164.404423 L45.2678272,272.023053 L45.2685995,272.023053 L45.2685995,272.023828 C45.2685995,278.297393 50.3399738,283.384549 56.5975262,283.384549 C62.853534,283.384549 67.9264529,278.297393 67.9256806,272.023828 C67.9256806,272.018407 67.9249084,272.01376 67.9249084,272.00834"></path>
                <path className={styles.path} d="M101.909372,24.5537163 C95.6533639,24.5537163 90.5812173,29.6393233 90.5812173,35.9136628 L90.5812173,298.265777 C90.5819895,304.540891 95.6533639,309.625723 101.909372,309.625723 C108.166924,309.625723 113.237526,304.540891 113.238298,298.265777 L113.238298,35.9136628 C113.238298,29.6393233 108.166924,24.5537163 101.909372,24.5537163"></path>
                <path className={styles.path} d="M226.514437,62.1339279 C226.514437,55.8603628 231.585812,50.7747558 237.843364,50.7747558 C244.099372,50.7747558 249.171518,55.8603628 249.171518,62.1339279 L249.171518,62.1347023 L249.173063,62.1347023 L249.173063,141.683756 L226.515982,141.683756 L226.515982,62.1649047 C226.515982,62.1540628 226.514437,62.1439953 226.514437,62.1339279"></path>
                <path className={styles.path} d="M283.159071,77.0167047 C276.901518,77.0167047 271.830144,82.103086 271.830144,88.3766512 L271.830144,164.404423 L226.515982,164.404423 L226.515982,272.00834 C226.515982,272.01376 226.515209,272.018407 226.515209,272.023828 C226.514437,278.297393 231.586584,283.384549 237.843364,283.384549 C244.100144,283.384549 249.172291,278.297393 249.172291,272.023828 L249.172291,272.023053 L249.173063,272.023053 L249.173063,187.125091 L271.830144,187.125091 L271.830144,245.771812 C271.830144,252.046926 276.901518,257.132533 283.159071,257.132533 C289.415079,257.132533 294.487225,252.046926 294.487225,245.771812 L294.487225,88.3766512 C294.487225,82.103086 289.415079,77.0167047 283.159071,77.0167047"></path>
                <path className={styles.path} d="M166.803194,316.981926 L151.00216,6.87606279 L150.999071,6.87606279 C150.639202,3.01868372 147.405785,0 143.464987,0 C139.284791,0 135.89538,3.39892326 135.89538,7.59162558 L135.89538,317.318023 C135.89538,325.876123 142.813979,332.814914 151.348901,332.814914 C159.884594,332.814914 166.803194,325.876123 166.803194,317.318023 C166.803194,317.204958 166.788521,317.094991 166.786204,316.981926 L166.803194,316.981926"></path>
              </g>
            </g>
          </g>
        </svg>
      </Link>
      <span className={styles.alpha}>alpha</span>
      <div className={styles.links}>
        {links.map((l) => createLink(l, pathname))}
      </div>
    </div>
  );

  return (
    <div className={`${styles.gdsbackground} ${fullsize ? styles.fullsize : styles.halfsize}`}>
      {renderLinks}
      {fullsize ? <LogoSVG /> : ''}
      {fullsize ?
        ''
        :
        <span className={styles.blurb}>
          Dream big. Get things done. Have fun.<br />
          If you can do all these, we want to work with you.
        </span>
      }
      {fullsize ? <span className={styles.copyright}> Ⓒ Government Digital Services, Singapore</span> : ''}
      {fullsize ? <a className={styles['scroll-indicator']} href="#content-anchor"></a> : ''}
      <div className={`${styles.gradient} ${fullsize ? styles.fullsize : ''}`}></div>
      <a id="content-anchor"></a>
    </div>
  );
};

HeroImage.propTypes = {
  pathname: React.PropTypes.string,
  links: React.PropTypes.arrayOf(React.PropTypes.object),
  fullsize: React.PropTypes.bool
};

export default HeroImage;
