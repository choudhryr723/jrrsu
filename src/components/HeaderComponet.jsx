import "../style/style";
import logo from "../assets/img/logo.png";
import gif from '../assets/img/new.gif'

const HeaderComponet = () => {
  return (
    <>
      <header>
        <div className="toplinks">
          <div className="container-fluid">
          <div className="row">
	<ul>
		<li><a target="_blank" href="http://www.jrrsanskrituniversity.ac.in/">Main Website</a></li>	
		<li><a target="_blank" href="http://admission.jrrsu.in/">Admission Portal 2024-25</a></li>
		<li><a target="_blank" href="https://result.jrrsu.in/">Result Portal</a></li>
    <li><a target="_blank" href="https://psst2024.jrrsu.in/">PSST/PSSST/PSAT 2024</a></li>
		<li><a target="_blank" href="https://research.jrrsu.in/"> Pre PhD Entrance Exam 2024</a></li>
		</ul>	
	</div>
  </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              <div className="logo">
                <a
                  className="navbar-brand"
                  href="index.html"
                  title="जगद्गुरु रामानन्दाचार्य राजस्थान संस्कृत विश्वविद्यालय"
                >
                  <img src={logo} alt="JRRSU" className="img-fluid" />{" "}
                  <span className="logo-eng">
                    Jagadguru Ramanandacharya <br />
                    Rajasthan Sanskrit University
                  </span>
                  <span className="logo-hindi">
                    जगद्गुरु रामानन्दाचार्य <br />
                    राजस्थान संस्कृत विश्वविद्यालय
                  </span>
                  <span className="logo-sans">
                    जगद्गुरुरमानन्दाचार्यराजस्थानसंस्कृतविश्वविद्यालयः
                    राजस्थानम्
                  </span>
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="affi-heading">
                <h2>Affiliation Portal 2025-26</h2>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="helpdesk">
                <span>
                  <i className="fa fa-phone" aria-hidden="true"></i> Helpdesk:{" "}
                  <a href="tel:91-7073704054">+91-7073704054</a>
                </span>
                <br />
                <span>
                  <i className="fa fa-envelope" aria-hidden="true"></i> Email
                  ID:{" "}
                  <a href="mailto:helpdeskexam.jrrsu@gmail.com">
                    helpdeskexam.jrrsu@gmail.com{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="menu-wrapper">
        <nav className="navbar navbar-expand-lg navbar-dark static-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse mainnav" id="navbarResponsive">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    College
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a
                      className="dropdown-item"
                      href="http://jrrsu.in/College/login.aspx"
                    >
                      College Login
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://jrrsu.in/CollegeReg.aspx"
                    >
                      College Registration
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://jrrsu.in/ExamCenterLogin.aspx"
                    >
                      Exam Center Login
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    title="How to Apply"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Examiner
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a
                      className="dropdown-item"
                      href="http://jrrsu.in/Jrrsuexaminersnew/ApplyAsExaminer.aspx"
                    >
                      Examiner Registration
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://jrrsu.in/Jrrsuexaminersnew/Login.aspx"
                    >
                      Examiner Login
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    title="How to Apply"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Student
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a
                      className="dropdown-item"
                      href="http://jrrsu.in/studentnew/login.aspx"
                    >
                      Student Login
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://jrrsu.in/studentnew/enrollmentregistration.aspx"
                    >
                      Student's Enrollment
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://jrrsu.in/studentnew/enrollmentregistration.aspx"
                    >
                      Fill Exam Form
                    </a>
                    <a className="dropdown-item" href="http://admission.jrrsu.in/">
                      Admission
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    title="How to Apply"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Affiliation
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a
                      className="dropdown-item"
                      href="https://affiliation.jrrsu.in"
                    >
                      Affiliation Login
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://jrrsu.in/CollegeReg.aspx"
                    >
                      New College Registration
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    title="How to Apply"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Online Services
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="http://online.jrrsu.in">
                      Duplicate Marksheet
                    </a>
                    <a className="dropdown-item" href="http://online.jrrsu.in">
                      Provisional Degree Certificate
                    </a>
                    <a className="dropdown-item" href="http://online.jrrsu.in">
                      Correction in Marksheet
                    </a>
                    <a className="dropdown-item" href="http://online.jrrsu.in">
                      Migration
                    </a>
                    <a className="dropdown-item" href="http://online.jrrsu.in">
                      Degree Correction
                    </a>
                  </div>
                </li>
              </ul>

              <ul className="navbar-nav navbar-right">
                {/* <!--<li className="nav-item"><a className="nav-link" href="index.html">Admission Portal 2024-25 <img src="img/new.gif" alt=""/></a></li>--> */}
                <li className="nav-item">
                  <a
                    className="nav-link  active"
                    href="https://result.jrrsu.in/"
                    target="_blank"
                  >
                    Result Portal <img src={gif} alt="" />
                  </a>
                </li>
                <li className="nav-item  active">
                  <a
                    className="nav-link"
                    href="https://psst2024.jrrsu.in/"
                    target="_blank"
                  >
                    PSST/PSSST/PSAT 2024 <img src={gif} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="marquee">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <p>
                यदि आपका भुगतान विफल हो गया है या बैंक से राशि कट गई है लेकिन
                फॉर्म पर लेन-देन आईडी प्रिंट नहीं हुई है, तो कृपया 4 घंटे बाद
                फिर से लॉगिन करें और लेन-देन के मिलान के लिए 24 कार्य घंटों
                तक प्रतीक्षा करें , In case of helpdesk number-7073704054 is
                busy then please drop a whatsapp message with your name, college
                name, email Address and Issue. Or write to
                helpdeskexam.jrrsu@gmail.com , We will reply you shortly.
              </p>
            </div>
          </div>
        </div>
  </div>
  <p style={{ color: 'red', fontSize: '18px' }}>
        {/* <strong> */}
          नोट : छात्र अपनी केटेगरी भुकतान होने से पूर्व केटेगरी रेगुलर से नॉन कॉलेजिएट या नॉन कॉलेजिएट से रेगुलर फीस भुकतान होने से पहले स्टूडेंट पैनल से फॉर्म एडिट करके की जा सकती है
        {/* </strong> */}
        <br />
        एक बार भुकतान होने के उपरांत हेल्प डेस्क पे व्हाट्सप्प मैसेज भेजे, (Difference Fees) डिफ्रेंस फीस भुकतान होने के बाद अपने आप अपडेट केटेगरी अपडेट हो जाएगी
      </p>
    </>
  );
};

export default HeaderComponet;
