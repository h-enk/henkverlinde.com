import { AppContext } from '@/components/UseContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/config/menus.json';
import Search from '@/components/Search';
import siteConfig from '@/config/site.config.json';
import { IconMenu2, IconX } from '@tabler/icons';

export default function Header() {
  const { toggleSearch } = useContext(AppContext);
  const [searchOpen, setSearchOpen] = toggleSearch;
  const router = useRouter();

  useEffect(() => {
    // search close using Escape key
    document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setSearchOpen(false);
    });

    // sticky header
    let nav = document.querySelector('.header-nav');
    var lastKnownScrollY = 0;
    var currentScrollY = 0;
    const classes = {
      pinned: 'header-nav-pinned',
      unpinned: 'header-nav-unpinned',
    };
    let stickyNavigation = () => {
      if (window.scrollY >= 150) {
        nav.classList.add('header-sticky-top');
      } else {
        nav.classList.remove('header-sticky-top');
      }
    };
    let navbarPinUnpin = () => {
      currentScrollY = window.pageYOffset;
      if (currentScrollY < lastKnownScrollY) {
        pin();
      } else if (currentScrollY > lastKnownScrollY) {
        if (window.scrollY >= 400) {
          unpin();
        }
      }
      lastKnownScrollY = currentScrollY;
    };
    let pin = () => {
      if (nav.classList.contains(classes.unpinned)) {
        nav.classList.remove(classes.unpinned);
        nav.classList.add(classes.pinned);
      }
    };
    let unpin = () => {
      if (
        nav.classList.contains(classes.pinned) ||
        !nav.classList.contains(classes.unpinned)
      ) {
        nav.classList.remove(classes.pinned);
        nav.classList.add(classes.unpinned);
      }
    };
    // navbar interactions
    window.onscroll = () => {
      navbarPinUnpin();
      stickyNavigation();
    };
  }, []);

  return (
    <>
      <div className="header-height-fix"></div>
      <header className="header-nav">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <Link href="/">
                  <a className="navbar-brand font-weight-bold d-flex mb-0">
                    <svg width="97" height="30" viewBox="0 0 291 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.688 3v35.188h42.874V3H74.25v85H58.562V52.125H15.688V88H.062V3h15.626Zm102.925 18.813c3.375 0 6.437.375 9.187 1.125 2.75.75 5.25 1.75 7.5 3a29.504 29.504 0 0 1 6.063 4.437 49.457 49.457 0 0 1 4.937 5.313l-37.562 37.687c3.041 1.958 6.375 2.938 10 2.938 3.875 0 7.333-1.021 10.375-3.063 3.083-2.042 5.333-5 6.75-8.875h15.187c-.792 3.708-2.146 7.125-4.062 10.25a31.673 31.673 0 0 1-7.125 8.125c-2.792 2.25-6 4-9.625 5.25-3.584 1.292-7.459 1.938-11.625 1.938-4.834 0-9.292-.896-13.375-2.688-4.084-1.792-7.605-4.23-10.563-7.313-2.958-3.083-5.27-6.687-6.938-10.812-1.666-4.125-2.5-8.542-2.5-13.25 0-4.667.834-9.063 2.5-13.188 1.667-4.124 3.98-7.729 6.938-10.812 2.958-3.125 6.479-5.583 10.563-7.375 4.083-1.792 8.541-2.688 13.375-2.688ZM99.487 55.687c0 1.542.126 3.021.376 4.438a23.96 23.96 0 0 0 1.187 3.938l26-26.563c-1.083-.75-2.312-1.333-3.687-1.75-1.334-.458-3-.688-5-.688-2.542 0-4.959.5-7.25 1.5a18.58 18.58 0 0 0-6.063 4.25c-1.708 1.792-3.062 3.959-4.062 6.5-1 2.5-1.5 5.292-1.5 8.376ZM158.788 88V23.75h57.875V88H201.6V37.562h-27.75V88h-15.062Zm114.237 0L256.4 59.125l-10.125 11V88h-15.188V0h15.188v53.875l22.562-30.125h18.5l-19.875 25.375L290.087 88h-17.062Z" fill="#000"/></svg>
                    {/*
                    <Image
                      className="img-fluid"
                      width={110}
                      height={35}
                      src={siteConfig.logo}
                      alt={siteConfig.logoText}
                      layout="fixed"
                      placeholder="blur"
                      blurDataURL={siteConfig.logo}
                    />
                    */}
                  </a>
                </Link>

                <button
                  className="search-toggle d-inline-block d-lg-none ms-auto me-1 me-sm-3"
                  data-toggle="search"
                  aria-label="Search Toggle"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <span>Search</span>
                  <svg
                    width="22"
                    height="22"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 15.5L19 19"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navHeader"
                  aria-controls="navHeader"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="d-inline">
                    <IconMenu2 size={38} />
                  </i>
                  <i className="d-none">
                    <IconX size={38} />
                  </i>
                </button>

                <div className="collapse navbar-collapse" id="navHeader">
                  <ul className="navbar-nav mx-auto">
                    {Menu.mainMenu.map((n, i) =>
                      n.submenu ? (
                        <li
                          key={i}
                          className={`nav-item dropdown
                          ${n.submenu
                            .map((n) =>
                              router.pathname == `${n.link}` ? `active` : ''
                            )
                            .join('')}
                        `}
                        >
                          <a
                            className="nav-link dropdown-toggle"
                            href={n.link}
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {n.name}
                          </a>
                          <ul className="dropdown-menu">
                            {n.submenu.map((n, i) => (
                              <li key={i}>
                                <Link href={n.link}>
                                  <a
                                    className={`dropdown-item ${
                                      router.pathname == `${n.link}`
                                        ? `active`
                                        : ''
                                    }`}
                                  >
                                    {n.name}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li
                          key={i}
                          className={`nav-item ${
                            router.pathname == `${n.link}` ? `active` : ''
                          }`}
                        >
                          <Link href={n.link}>
                            <a className="nav-link">{n.name}</a>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="navbar-right d-none d-lg-inline-block">
                    <ul className="list-unstyled list-inline mb-0">
                      <li className="list-inline-item d-none d-lg-inline-block">
                        <button
                          className="search-toggle"
                          data-toggle="search"
                          aria-label="Search Toggle"
                          onClick={() => setSearchOpen(!searchOpen)}
                        >
                          <span>Search</span>
                          <svg
                            width="22"
                            height="22"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.5 15.5L19 19"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <Search />
    </>
  );
}
