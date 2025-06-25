import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Top Footer Links */}
      <footer className="footer flex flex-col sm:flex-row flex-wrap justify-between bg-base-200 text-base-content px-6 sm:px-10 lg:px-20 py-10 gap-8 sm:gap-16">
        <nav className="flex flex-col space-y-2 min-w-[150px]">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col space-y-2 min-w-[150px]">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col space-y-2 min-w-[150px]">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      {/* Bottom Footer */}
      <footer className="footer flex flex-col md:flex-row justify-between items-center bg-base-200 text-base-content border-t border-base-300 px-6 sm:px-10 lg:px-20 py-6 gap-4 sm:gap-8">
        <aside className="flex items-center gap-4 text-center md:text-left">
          <img
            className="lg:w-67 md:w-55 w-40"
            src="https://i.ibb.co/BKs4WFdG/logo.png"
            alt="Logo"
          />
          {/* <p className="text-sm sm:text-base">
            <strong>App Store Ltd.</strong>
            <br />
            Providing reliable tech since 1992
          </p> */}
        </aside>

        <nav className="flex justify-center md:justify-end">
          <div className="flex gap-4">
            <a href="https://twitter.com/" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-...z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@saybalroy3975" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-...z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/saybal.roy/" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5...z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;