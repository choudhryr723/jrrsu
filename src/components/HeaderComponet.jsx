import '../style/style'
import logo from '../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';

const HeaderComponet = () => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/shastri');
  };

  const acharyaNavigate=()=>{
    navigate('/acharya');
  }

  const sikshaShastriBed=()=>{
    navigate('/siksha_shastri_bed')
  }
  const shastriSikshaShastri=()=>{
    navigate('/shastri_siksha_shastri')
  }

  const pgyt=()=>{
    navigate('/pgyt')
  }

  const karmKand=()=>{
    navigate('/karm_kand')
  }

  const research=()=>{
    navigate('/research')
  }

  const vastu=()=>{
    navigate('/vastu')
  }

  const jyotish=()=>{
    navigate('/jyotish')
  }

  const pgdca=()=>{
    navigate('/pgdca')
  }

  const importantDate=()=>{
    navigate('/important_date')
  }

  const helpDesk=()=>{
    navigate('/helpDesk')
  }
  return (
        <>
        <header>
          <div className="toplinks">
            <div className="container-fluid">
              <div className="row">
                <ul>
                  <li>
                    <a
                      href="http://www.jrrsanskrituniversity.ac.in/"
                      target="_blank"
                    >
                      Main Website
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
                    <i className="fa fa-envelope" aria-hidden="true"></i> Email ID:{" "}
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
                      <div className="row">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarResponsive"
                          aria-controls="navbarResponsive"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                          className="collapse navbar-collapse mainnav"
                          id="navbarResponsive"
                        >
                          <ul className="navbar-nav">
                            <li className="nav-item active">
                              <a className="nav-link"
                              onClick={()=>navigate('/')}
                              >
                                Home
                              </a>
                            </li>
                            {/* <!--<li className="nav-item"><a className="nav-link" href="prospectus.html">Prospectus</a></li>--> */}
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
                                Courses
                              </a>
                              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div onClick={()=>handleNavigate()} className="dropdown-item" href="shastri-ba.html">
                                  SHASTRI (B.A.) (शास्त्री)
                                </div>
                                <a className="dropdown-item"  onClick={()=>acharyaNavigate()}>
                                  ACHARYA (M.A.) (आचार्य)
                                </a>
                                <a className="dropdown-item" onClick={()=>sikshaShastriBed()} >
                                  SIKSHA SHASTRI (B.ED.) (शिक्षाशास्त्री)
                                </a>
                                <a
                                  className="dropdown-item"
                                  onClick={()=>shastriSikshaShastri()}
                                  // href="shastri-siksha-shastri.html"
                                >
                                  SHASTRI SHIKSHA SHASTRI (4 YRS INT. COURSE)
                                  (शास्त्री-शिक्षाशास्त्री)
                                </a>
                                <a className="dropdown-item" 
                                // href="pgdca.html"
                                onClick={()=>pgdca()}
                                >
                                  POST GRADUATE DIPLOMA IN COMPUTER APPLICATION (PGDCA)
                                </a>
                                <a className="dropdown-item" 
                                // href="pgdyt.html"
                                onClick={()=>pgyt()}
                                >
                                  POST GRADUATE DIPLOMA IN YOGA THERAPHY (PGDYT)
                                </a>
                                <a
                                  className="dropdown-item"
                                  // href="diploma-in-karmkand-and-paurohitya.html"
                                  onClick={()=>karmKand()}
                                >
                                  DIPLOMA IN KARM KAND AND PAUROHITYA (कर्मकाण्ड-पौरोहित्य
                                  डिप्लोमा)
                                </a>
                                <a className="dropdown-item"
                                //  href="diploma-in-jyotish.html"
                                onClick={()=>jyotish()}
                                 >
                                  DIPLOMA IN JYOTISH (ज्योतिष डिप्लोमा)
                                </a>
                                <a className="dropdown-item"
                                //  href="diploma-in-vastu.html"
                                onClick={()=>vastu()}
                                 >
                                  DIPLOMA IN VASTU (वास्तु डिप्लोमा)
                                </a>
                                <a className="dropdown-item"
                                //  href="research.html"
                                onClick={()=>research()}
                                 >
                                  RESEARCH (शोध संस्थान)
                                </a>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link"
                              onClick={()=>importantDate()} 
                              // href="important-dates.html"
                              >
                                Important Dates
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" 
                              // href="downloads.html"
                              onClick={()=>navigate('/download')}
                              >
                                Downloads
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link"onClick={()=>navigate('/feeInfo')}>
                                Fees Info
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" onClick={()=>helpDesk()}>
                                Helpdesk
                              </a>
                            </li>
                          </ul>
                        </div>
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
                          तक प्रतीक्षा करें , In case of helpdesk number-7073704054 is
                          busy then please drop a whatsapp message with your name, college
                          name, email Address and Issue. Or write to
                          helpdeskexam.jrrsu@gmail.com , We will reply you shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          
  </>
    );

};

export default HeaderComponet;