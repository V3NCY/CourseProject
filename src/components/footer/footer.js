import React from "react";

import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="pt-3 footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="title">Община Копривщица</h5>
            <div className="footer-images-container d-flex align-items-center">
              <Image
                src="https://koprivshtitsa-bg.com/images/gerb11.png"
                className="footer-images"
              />
              <Image
                src="https://koprivshtitsa-bg.com/images/eu.jpg"
                className="footer-images ml-4"
              />
              <Image
                src="https://koprivshtitsa-bg.com/images/bg.jpg"
                className="footer-images ml-4"
              />
            </div>
          </div>
          <div className="col-md-3">
            <h5 className="title">Партньори:</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://reactstrap.github.io/">Reactstrap</a>
              </li>
              <li className="list-unstyled">
                <a href="https://react-bootstrap.github.io/">React-Bootstrap</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.svgrepo.com/">SVGRepo</a>
              </li>
              <li className="list-unstyled">
                <a href="https://mdbootstrap.com/">MDBootstrap</a>
              </li>
              <li className="list-unstyled">
                <a href="https://material-ui.com/">Material-UI</a>
              </li>
              <li className="list-unstyled">
                <a href="https://fsymbols.com/signs/stars/">FSymbols Stars</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 col-12">
          &copy; {new Date().getFullYear()} Copyright: По идея на официалния
          сайт на{" "}
          <a href="https://koprivshtitsa-bg.com/bg/">Община Копривщица </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
