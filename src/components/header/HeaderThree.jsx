"use client";

import React from "react";
import Link from "next/link";
import { useMobileMenu, useSearch } from "../../lib/hooks/useHeader";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { HeaderNav } from "./HeaderNav";

const wLogo = "/logo/w_logo.png";

export const HeaderThree = () => {
  const { showSearch, toggleSearch } = useSearch();
  useMobileMenu();

  return (
    <>
      <header>
        <div id="header-fixed-height"></div>

        <div
          id="sticky-header"
          className="tg-header__area tg-header__area-three"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tgmenu__wrap">
                  <div className="row align-items-center">
                    <div className="col-xl-5">
                      <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                        <HeaderNav />
                      </div>
                    </div>

                    <div className="col-xl-2 col-md-4">
                      <div className="logo text-center">
                        <Link href="/">
                          <img src={wLogo} alt="Logo" />
                        </Link>
                      </div>
                    </div>
                    
                  </div>
                  <div className="mobile-nav-toggler">
                    <i className="flaticon-layout"></i>
                  </div>
                </div>

                {/*  Mobile Menu   */}
                <HeaderMobileMenu />
              </div>
            </div>
          </div>
        </div>

        {/*  header-search  */}
        
      </header>
    </>
  );
};
