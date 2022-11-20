import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/*Home Sections*/}
      <section id="home" className="home">
        <div className="container">
          <div className="row">
            <div className="main_home">
              <div className="col-sm-6">
                <div className="home-shadow text-right">
                  <img src="assets/images/shadow-img.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="home_text text-left">
                  <h4>Hello fellas, I’m a freelance</h4>
                  <h1 className="text-black">#webdesigner</h1>
                </div>
                <div className="home_btns m-top-40 text-center">
                  <NavLink
                    to="https://bootstrapthemes.co"
                    className="btn btn-primary m-top-20"
                  >
                    about me
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/*End off row*/}
        </div>
        {/*End off container */}
      </section>
      {/*End off Home Sections*/}
      {/*About Section*/}
      <section id="about" className="about bg-light roomy-150">
        <div className="container">
          <div className="row">
            <div className="main_about">
              <div className="col-md-5 col-md-offset-1">
                <div className="about_content">
                  <div className="head_right">
                    <h2>About me</h2>
                  </div>
                  <div className="about_content_text">
                    <p>
                      Li Europan lingues es membres del sam familie. Lor separat
                      existentie es un myth. Por scientie, musica, sport etc,
                      litot Europa usa li sam vocabular. Li lingues differe
                      solmen in li grammatic.
                    </p>
                    <div className="divider1 m-top-10" />
                    <div className="about_content_item m-top-30">
                      <h6>
                        <i className="fa fa-graduation-cap" /> Education History
                      </h6>
                      <ul>
                        <li>
                          <NavLink to="">
                            <i className="fa fa-chevron-right" />
                            School of Design
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="about_content_item m-top-20">
                      <h6>
                        <i className="fa fa-briefcase" /> Work Experiences
                      </h6>
                      <ul>
                        <li>
                          <i className="fa fa-chevron-right" />
                          London Studio | 2012
                        </li>
                        <li>
                          <i className="fa fa-chevron-right" />
                          Envato Designer | 2013
                        </li>
                        <li>
                          <i className="fa fa-chevron-right" />
                          Dribbble | 2015
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End off col-md-6 */}
              <div className="col-md-5 col-md-offset-1 sm-m-top-50">
                <div className="head_title text-right">
                  <h5>
                    <span className="divider" /> my name is john doe
                  </h5>
                </div>
                <div className="about_left_item m-top-50">
                  <img src="assets/images/about-img.png" alt="" />
                </div>
                <div className="about_socail m-top-50">
                  <ul className="list-inline">
                    <li>
                      <span className="divider" />
                    </li>
                    <li>
                      <NavLink to="">
                        <i className="fa fa-facebook" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        <i className="fa fa-twitter" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        <i className="fa fa-dribbble" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        <i className="fa fa-behance" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End off col-md-6 */}
            </div>
            {/* End off Main About */}
          </div>
          {/* End off row */}
        </div>
        {/* End off container */}
      </section>
      {/* End off About us Section */}
      {/*Portfolio Section*/}
      <section id="portfolio" className="portfolio bg-white roomy-150">
        <div className="container">
          <div className="row">
            <div className="main_portfolio">
              <div className="col-md-5">
                <div className="portfolio_item">
                  <div className="head_title">
                    <h5>
                      <span className="divider" /> my latest works
                    </h5>
                  </div>
                  <div className="row m-top-60">
                    <div className="col-sm-6">
                      <div className="portf_item_text photography">
                        <NavLink
                          to="assets/images/portfolio-1.jpg"
                          className="popup-img"
                        >
                          <img src="assets/images/portfolio.jpg" alt="" />
                        </NavLink>
                        <h5 className="m-top-30">Photography</h5>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="portf_item_text branding xs-m-top-40">
                        <NavLink
                          to="assets/images/portfolio-1.jpg"
                          className="popup-img"
                        >
                          <img src="assets/images/portfolio-2.jpg" alt="" />
                        </NavLink>
                        <h5 className="m-top-30">Branding</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End off col-md-6  */}
              <div className="col-md-6 col-md-offset-1 sm-m-top-50">
                <div className="portfolio_content">
                  <div className="head_right">
                    <h2>portfolio</h2>
                  </div>
                  <div className="portfolio_content_text">
                    <p>
                      Li Europan lingues es membres del sam familie. Lor separat
                      existentie es un myth. Por scientie, musica, sport etc,
                      litot Europa usa li sam vocabular. Li lingues differe
                      solmen in li grammatica, li pronunciation e li plu commun
                      vocabules.
                    </p>
                    <p>
                      Omnicos directe al desirabilite de un nov lingua franca:
                      On refusa continuar payar custosi traductores.
                    </p>
                  </div>
                </div>
                <div className="may_client m-top-50">
                  <div className="head_title text-right">
                    <h5>
                      <span className="divider" /> my projects
                    </h5>
                  </div>
                  <div className="client_brand m-top-60 text-right">
                    <ul className="list-inline">
                      <li>
                        <img src="assets/images/p-logo.png" alt="" />
                      </li>
                      <li>
                        <img src="assets/images/clogo2.png" alt="" />
                      </li>
                      <li>
                        <img src="assets/images/clogo3.png" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End off col-md-6  */}
              <div className="portfolio_btn text-center fix m-top-100">
                <NavLink to="" className="btn btn-primary">
                  View All
                </NavLink>
              </div>
            </div>
          </div>
          {/* End off row */}
        </div>
        {/* End off container */}
      </section>
      {/* End off portfolio Section */}
      {/*Choose Section*/}
      <section id="choose" className="choose bg-light roomy-150">
        <div className="container">
          <div className="row">
            <div className="main_choose">
              <div className="col-md-5">
                <div className="choose_item">
                  <div className="head_right">
                    <h2>what I do</h2>
                  </div>
                  <div className="choose_item_text">
                    <p>
                      Li Europan lingues es membres del sam familie. Lor separat
                      existentie es un myth. Por scientie, musica, sport etc,
                      litot Europa usa li sam vocabular. Li lingues differe
                      solmen in li grammatica, li pronunciation e li plu commun
                      vocabules.
                    </p>
                    <p>
                      Omnicos directe al desirabilite de un nov lingua franca:
                      On refusa continuar payar custosi traductores.
                    </p>
                  </div>
                  <div className="choose_btn text-center m-top-100">
                    <NavLink to="" className="btn btn-primary">
                      hire me
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* End off col-md-6 */}
              <div className="col-md-6 col-md-offset-1 sm-m-top-50">
                <div className="choose_list fix">
                  <div className="choose_list_item fix">
                    <div className="choose_icon">
                      <i className="fa fa-diamond" />
                    </div>
                    <div className="list_item_text">
                      <h5>Branding Identity</h5>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque
                      </p>
                    </div>
                  </div>
                  <div className="choose_list_item fix m-top-40">
                    <div className="choose_icon">
                      <i className="fa fa-tablet" />
                    </div>
                    <div className="list_item_text">
                      <h5>UI/UX Design</h5>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque
                      </p>
                    </div>
                  </div>
                  <div className="choose_list_item fix m-top-40">
                    <div className="choose_icon">
                      <i className="fa fa-send-o" />
                    </div>
                    <div className="list_item_text">
                      <h5>Logo Design</h5>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque
                      </p>
                    </div>
                  </div>
                  <div className="choose_list_item fix m-top-40">
                    <div className="choose_icon">
                      <i className="fa  fa-pencil" />
                    </div>
                    <div className="list_item_text">
                      <h5>Illustration</h5>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End off row */}
        </div>
        {/* End off container */}
      </section>
      {/* End off Choose Section*/}
      {/*Contact Section*/}
      <section id="contact" className="contact bg-white roomy-150">
        <div className="container">
          <div className="row">
            <div className="main_contact">
              <div className="head_title">
                <h5>
                  <span className="divider" /> Get enquiries now
                </h5>
              </div>
              <div className="col-md-5">
                <form className="m-top-50">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your e-mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your budget"
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option>type of proroject</option>
                      <option>type</option>
                      <option>proroject</option>
                      <option>of</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="you message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form_btn text-right m-top-50">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-md-offset-1 sm-m-top-50">
                <div className="contact_content">
                  <div className="head_right">
                    <h2>contact me</h2>
                  </div>
                  <div className="contact_content_text">
                    <p>
                      Li Europan lingues es membres del sam familie. Lor separat
                      existentie es un myth. Por scientie, musica, sport etc,
                      litot Europa usa li sam vocabular.
                    </p>
                    <ul className="m-top-50">
                      <li>
                        Dehri-on-sone, Rohtas <br />
                        Bihar (821307).
                      </li>
                      <li className="phone">+91 7079228678</li>
                      <li className="info">info@sofyad.com</li>
                    </ul>
                    <div className="author_text text-right">
                      <h5>Regards!</h5>
                      <h1>Vikash Kumar</h1>
                      <h6>Full Stack Developer</h6>
                    </div>
                    <div className="copyright text-right m-top-80">
                      <p className="wow fadeInRight">
                        Made by
                        <NavLink href="http://sofyad.com/" target={"_blank"}>SofyAd</NavLink>2022. All Rights
                        Reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
