import '../style/style'

const FooterComponet = () => {
    return (
        <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              Copyright &copy; 2024 Maintained for Jagadguru Ramanandacharya
              Rajasthan Sanskrit University. All Rights Reserved.
            </div>
            <div className="col-lg-12">
              <div className="helpdesk-mobile">
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
      </footer>
    );
  };
  
  export default FooterComponet;