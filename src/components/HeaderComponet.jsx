import "../style/style";
import logo from "../assets/img/logo.png";
import gif from "../assets/img/new.gif";

const HeaderComponet = () => {
  return (
    <>
      <header>
        <div className="toplinks">
          <div className="container-fluid">
            <div className="row">
              <ul>
                <li>
                  <a href="http://www.jrrsanskrituniversity.ac.in/">
                    Main Website
                  </a>
                </li>
                <li>
                  <a href="http://admission.jrrsu.in/">
                    Admission Portal 2024-25
                  </a>
                </li>
                <li>
                  <a href="https://result.jrrsu.in/">Result Portal</a>
                </li>
                <li>
                  <a href="https://psst2024.jrrsu.in/">PSST/PSSST/PSAT 2024</a>
                </li>
                <li>
                  <a href="https://research.jrrsu.in/">
                    {" "}
                    Pre PhD Entrance Exam 2024
                  </a>
                </li>
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

      <div class="menu-wrapper">
	<nav class="navbar navbar-expand-lg navbar-dark static-top">
      <div class="container-fluid">
		<div class="row">
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button><div class="collapse navbar-collapse mainnav" id="navbarResponsive">
          <ul class="navbar-nav">
			  <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
			  {/* <!--<li class="nav-item"><a class="nav-link" href="#">Help Desk</a></li>--> */}
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">College</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
         		<a class="dropdown-item" href="http://jrrsu.in/College/login.aspx">College Login</a>
         		       		<a class="dropdown-item" href="http://jrrsu.in/CollegeReg.aspx">College Registration</a> 	
					<a class="dropdown-item" href="https://jrrsu.in/ExamCenterLogin.aspx">Exam Center Login</a>
        		</div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" title="How to Apply" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Examiner</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
         		<a class="dropdown-item" href="http://jrrsu.in/Jrrsuexaminersnew/ApplyAsExaminer.aspx">Examiner Registration</a>
         		<a class="dropdown-item" href="http://jrrsu.in/Jrrsuexaminersnew/Login.aspx">Examiner Login</a>
        		</div>
            </li>
			  <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" title="How to Apply" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Student</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
         		<a class="dropdown-item" href="http://jrrsu.in/studentnew/login.aspx">Student Login</a>
         		<a class="dropdown-item" href="http://jrrsu.in/studentnew/enrollmentregistration.aspx">Student's Enrollment</a>
         		<a class="dropdown-item" href="http://jrrsu.in/studentnew/enrollmentregistration.aspx">Fill Exam Form</a>
         		<a class="dropdown-item" href="http://admission.jrrsu.in/">Admission</a>
        		</div>
            </li>
			  <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" title="How to Apply" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Affiliation</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
         		<a class="dropdown-item" href="https://affiliation.jrrsu.in">Affiliation Login</a>
         		<a class="dropdown-item" href="https://jrrsu.in/CollegeReg.aspx">New College Registration</a>
        		</div>
            </li>
			  <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" title="How to Apply" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Online Services</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
         		<a class="dropdown-item" href="#">Duplicate Marksheet</a>
         		<a class="dropdown-item" href="#">Provisional Degree Certificate</a>
         		<a class="dropdown-item" href="#">Correction in Marksheet</a>
         		<a class="dropdown-item" href="#">Migration</a>
         		<a class="dropdown-item" href="#">Degree Correction</a>
        		</div>
            </li>
          </ul>
			
			<ul class="navbar-nav navbar-right">
			  {/* <!--<li class="nav-item"><a class="nav-link" href="index.html">Admission Portal 2024-25 <img src="img/new.gif" alt=""/></a></li>--> */}
			  <li class="nav-item"><a class="nav-link" href="https://result.jrrsu.in/" target="_blank">Result Portal <img src={gif} alt=""/></a></li>
			  <li class="nav-item"><a class="nav-link" href="https://psst2024.jrrsu.in/" target="_blank">PSST/PSSST/PSAT 2024 <img src={gif} alt=""/></a></li>
            
          </ul>
			
        </div>
			  
      </div></div>
    </nav>
		  </div>
      <div className="marquee">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <p>
                यदि आपका भुगतान विफल हो गया है या बैंक से राशि कट गई है लेकिन
                फॉर्म पर लेन-देन आईडी प्रिंट नहीं हुई है, तो कृपया 4 घंटे बाद
                फिर से लॉगिन करें और लेन-देन के मिलान के लिए 24 कार्य घंटों तक
                प्रतीक्षा करें , In case of helpdesk number-7073704054 is busy
                then please drop a whatsapp message with your name, college
                name, email Address and Issue. Or write to
                helpdeskexam.jrrsu@gmail.com , We will reply you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p style={{ color: "red", fontSize: "18px" }}>
          नोट : छात्र अपनी केटेगरी भुकतान होने से पूर्व केटेगरी रेगुलर से नॉन
          कॉलेजिएट या नॉन कॉलेजिएट से रेगुलर फीस भुकतान होने से पहले स्टूडेंट
          पैनल से फॉर्म एडिट करके की जा सकती है
          <br />
          एक बार भुकतान होने के उपरांत हेल्प डेस्क पे व्हाट्सप्प मैसेज भेजे,
          (Difference Fees) डिफ्रेंस फीस भुकतान होने के बाद अपने आप अपडेट
          केटेगरी अपडेट हो जाएगी
        </p>
      </div>
    </>
  );
};

export default HeaderComponet;
