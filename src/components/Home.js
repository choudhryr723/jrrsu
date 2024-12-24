import '../style/style'
import FormsTable from './FormsTable';


export default function Home() {
    return (
      <div>
        <div className="content-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="imp-links">
                  <h2>Login/Register</h2>
                  <ul>
                    <li>
                      <a href="https://jrrsu.in/studentnew/login.aspx">
                        <svg
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.9656 11.7981C14.2191 11.8022 16.8727 9.14556 16.8559 5.89906C16.8559 4.73257 16.5109 3.59226 15.8645 2.62228C15.2181 1.6523 14.2993 0.896198 13.2243 0.449555C12.1492 0.00291131 10.9662 -0.114223 9.8248 0.11296C8.68337 0.340142 7.63475 0.901441 6.81151 1.7259C5.98826 2.55037 5.42735 3.60098 5.19967 4.74493C4.97199 5.88888 5.08777 7.07482 5.53237 8.15283C5.97698 9.23083 6.73044 10.1525 7.69752 10.8014C8.6646 11.4502 9.80188 11.7971 10.9656 11.7981ZM10.9796 1.64101C12.1093 1.64312 13.1924 2.09284 13.9926 2.89212C14.7929 3.6914 15.2454 4.7754 15.2516 5.90778C15.2596 8.26539 13.3363 10.1913 10.9716 10.1926C10.4069 10.1992 9.84661 10.0934 9.32307 9.88121C8.79954 9.66905 8.32324 9.35481 7.9218 8.95671C7.52035 8.55862 7.20175 8.08459 6.98447 7.56212C6.76719 7.03965 6.65556 6.47914 6.65605 5.9131C6.65654 5.34705 6.76913 4.78673 6.98731 4.26464C7.20549 3.74255 7.5249 3.26907 7.92703 2.87167C8.32916 2.47427 8.806 2.16086 9.3299 1.9496C9.85379 1.73834 10.4143 1.63345 10.979 1.64101H10.9796Z"
                            fill="#161616"
                          />
                          <path
                            d="M17.7095 11.9249C16.7082 12.1697 15.8289 12.7693 15.2339 13.6129C14.6389 14.4566 14.3683 15.4875 14.4721 16.5154C14.4828 16.5837 14.4761 16.6536 14.4527 16.7186C14.4293 16.7836 14.39 16.8417 14.3384 16.8875C13.5833 17.6322 12.8383 18.3877 12.0833 19.1331C11.9825 19.2271 11.9026 19.3414 11.8489 19.4684C11.7952 19.5955 11.7689 19.7325 11.7717 19.8705C11.7764 20.6307 11.7717 21.3909 11.7717 22.1497C11.7717 22.7141 12.0934 23.0305 12.6605 23.0326C13.4041 23.0359 14.1471 23.0245 14.8907 23.0372C15.0443 23.0444 15.1976 23.0179 15.3399 22.9595C15.4822 22.9012 15.6101 22.8124 15.7146 22.6994C16.4576 21.9419 17.2126 21.1965 17.9616 20.445C18.0406 20.3659 18.1094 20.315 18.2398 20.331C20.7644 20.6414 22.996 18.6505 23 16.0898C23.004 13.3092 20.4146 11.276 17.7095 11.9249ZM18.1108 18.6867C17.7403 18.6029 17.4474 18.6867 17.1805 18.9548C16.4249 19.723 15.6558 20.4779 14.9008 21.2467C14.8439 21.3114 14.7727 21.3618 14.693 21.3939C14.6132 21.426 14.527 21.439 14.4413 21.4318C14.1663 21.4147 13.8905 21.4147 13.6154 21.4318C13.4054 21.4472 13.356 21.3647 13.3747 21.1784C13.3887 21.0376 13.3747 20.8941 13.3747 20.752C13.251 20.2727 13.4937 19.9617 13.8234 19.65C14.5035 19.0078 15.1462 18.326 15.8163 17.6738C16.1146 17.3835 16.2095 17.0705 16.1212 16.6589C15.8016 15.1566 16.7372 13.7415 18.2211 13.4506C19.6803 13.1644 21.076 14.1323 21.3602 15.6286C21.7153 17.4948 19.9946 19.1164 18.1094 18.6867H18.1108Z"
                            fill="#161616"
                          />
                          <path
                            d="M4.42169 15.6063C6.33699 14.7348 8.36731 14.3996 10.4525 14.3407C11.154 14.3205 11.8568 14.3534 12.5564 14.3882C12.6609 14.3936 12.7655 14.3777 12.8638 14.3416C12.9622 14.3055 13.0522 14.2499 13.1286 14.1781C13.205 14.1064 13.2662 14.0199 13.3085 13.9239C13.3509 13.8279 13.3734 13.7243 13.3749 13.6194C13.3795 13.5147 13.3634 13.4101 13.3275 13.3117C13.2917 13.2133 13.2368 13.1229 13.166 13.0458C13.0953 12.9687 13.01 12.9064 12.9151 12.8624C12.8203 12.8184 12.7177 12.7936 12.6132 12.7895C10.3301 12.6239 8.0744 12.7781 5.85883 13.3928C4.35213 13.8097 2.92435 14.3983 1.71258 15.4145C0.869285 16.1244 0.225278 16.9744 0.0554157 18.0993C-0.0422218 18.7455 0.0193032 19.4011 0.017297 20.0527C0.017297 21.2231 0.771647 21.9746 1.94397 21.9766C3.23064 21.9766 4.51799 21.9766 5.80466 21.9766C7.16624 21.9766 8.52848 21.9766 9.89005 21.9766C9.99445 21.9794 10.0984 21.9616 10.1959 21.9242C10.2934 21.8867 10.3826 21.8304 10.4584 21.7584C10.5342 21.6863 10.5951 21.6 10.6375 21.5044C10.68 21.4087 10.7032 21.3056 10.7059 21.201C10.7166 20.7646 10.3876 20.4127 9.93218 20.3765C9.84859 20.3698 9.765 20.3765 9.6814 20.3765H2.01084C1.63233 20.3765 1.61962 20.3637 1.61962 19.9743C1.61962 19.5848 1.63567 19.204 1.61962 18.8206C1.58284 18.1134 1.85502 17.5362 2.32783 17.0368C2.919 16.4047 3.64259 15.9602 4.42169 15.6063Z"
                            fill="#161616"
                          />
                          <path
                            d="M18.7518 14.9294C18.5982 14.9242 18.4451 14.9497 18.3015 15.0046C18.1578 15.0594 18.0265 15.1424 17.9152 15.2487C17.8039 15.355 17.7149 15.4825 17.6534 15.6237C17.5918 15.7648 17.559 15.9169 17.5568 16.071C17.5545 16.225 17.583 16.378 17.6404 16.5209C17.6979 16.6638 17.7832 16.7938 17.8913 16.9033C17.9995 17.0128 18.1284 17.0996 18.2704 17.1585C18.4124 17.2175 18.5647 17.2475 18.7184 17.2468C18.8709 17.2476 19.022 17.2182 19.1631 17.1605C19.3043 17.1027 19.4327 17.0177 19.5411 16.9102C19.6495 16.8027 19.7356 16.6748 19.7947 16.534C19.8538 16.3931 19.8846 16.2419 19.8854 16.0891C19.8877 15.7848 19.7698 15.4921 19.5574 15.2747C19.3449 15.0574 19.0553 14.9333 18.7518 14.9294Z"
                            fill="#161616"
                          />
                        </svg>
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width="54"
                          height="55"
                          viewBox="0 0 54 55"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M52.3754 23.9023C51.8066 23.3248 51.2359 22.7494 50.6468 22.1901C48.6206 20.2712 45.7546 20.2732 43.7345 22.1901C43.3023 22.5954 42.9008 23.0472 42.3789 23.5882C42.3443 23.3268 42.332 23.2782 42.332 23.2276C42.332 17.2378 42.332 11.2514 42.332 5.26842C42.332 2.04051 40.2936 2.40109e-05 37.0627 2.40109e-05C26.4629 2.40109e-05 15.863 2.40109e-05 5.26322 2.40109e-05C2.07308 -0.00808121 0 2.03646 0 5.19344C0 20.0733 0 34.9551 0 49.839C0 52.9595 2.07308 55 5.21226 55.0021H37.0851C40.2712 55.0021 42.3178 52.9757 42.328 49.7904C42.328 47.2879 42.3687 44.7874 42.3076 42.2931C42.2852 41.9129 42.3505 41.5328 42.4985 41.1816C42.6466 40.8304 42.8734 40.5175 43.1617 40.2668C46.2642 37.2435 49.3402 34.1926 52.3896 31.1139C54.5504 28.9195 54.528 26.0765 52.3754 23.9023ZM39.0277 50.2443C39.0155 51.0285 38.5161 51.5634 37.7435 51.7154C37.4181 51.7671 37.0884 51.7875 36.759 51.7762H5.57102C3.73644 51.7762 3.27779 51.3121 3.27779 49.4864V5.52373C3.27779 5.34744 3.27779 5.16913 3.27779 4.99284C3.31245 3.86014 3.88932 3.26643 5.0288 3.25832C7.74807 3.24414 10.4694 3.25832 13.1825 3.25832H36.9057C38.5569 3.25832 39.0481 3.74261 39.0481 5.36771C39.0481 12.2896 39.0522 19.2114 39.0604 26.1333C39.0695 26.3671 39.0265 26.6001 38.9346 26.8155C38.8426 27.031 38.7039 27.2235 38.5283 27.3795C34.9387 30.9154 31.3918 34.4877 27.7838 38.0257C26.5913 39.1948 25.9777 40.5423 26.0389 42.2161C26.0776 43.2495 26.0389 44.287 26.0511 45.3224C26.0488 46.153 26.3753 46.9511 26.96 47.5444C27.5446 48.1377 28.3406 48.4787 29.176 48.4936C30.3991 48.5321 31.6221 48.5077 32.8452 48.5077C33.5075 48.5122 34.1637 48.3815 34.7731 48.1235C35.3826 47.8656 35.9322 47.486 36.388 47.0083C37.2258 46.1694 38.0452 45.3143 38.8749 44.4673L39.0481 44.5686C39.0379 46.4551 39.0563 48.3477 39.0277 50.2443ZM46.1357 32.7431C42.1662 36.6863 38.1981 40.6335 34.2313 44.5848C34.0098 44.8266 33.7372 45.0167 33.433 45.1414C33.1289 45.2661 32.8008 45.3224 32.4722 45.3062C31.5834 45.2697 30.6926 45.2819 29.8039 45.3062C29.4247 45.3062 29.2637 45.2292 29.2779 44.8077C29.3085 43.8513 29.2779 42.8908 29.2902 41.9324C29.2888 41.6669 29.3423 41.404 29.4475 41.16C29.5528 40.9159 29.7073 40.6961 29.9017 40.514C33.9283 36.5181 37.9494 32.5175 41.9651 28.5122C42.2485 28.2265 42.3973 28.2467 42.6663 28.5122C43.9322 29.7908 45.2164 31.0471 46.5108 32.3257C46.3722 32.4736 46.2601 32.6154 46.1357 32.735V32.7431ZM50.3696 28.502C49.0874 30.2082 48.9712 30.2143 47.4811 28.7411C46.6657 27.9306 45.8932 27.1201 45.0533 26.346C44.6457 25.9712 44.6762 25.7382 45.0778 25.42C45.4284 25.1343 45.724 24.7817 46.0522 24.4656C46.2227 24.304 46.4261 24.1808 46.6488 24.1042C46.8714 24.0276 47.108 23.9996 47.3425 24.0219C47.4793 24.0154 47.6156 24.0418 47.74 24.0989C48.8876 24.8912 49.9252 25.803 50.6203 27.0228C50.9118 27.5213 50.7039 28.0481 50.3696 28.4939V28.502Z"
                            fill="#161616"
                          />
                          <path
                            d="M8.02119 19.3859C8.27395 19.4082 8.52875 19.4 8.78152 19.4H28.061C30.1177 19.4 32.1766 19.4142 34.2333 19.3818C34.4436 19.3816 34.6518 19.3395 34.8455 19.258C35.0391 19.1765 35.2144 19.0572 35.3609 18.9073C35.5074 18.7573 35.6222 18.5796 35.6985 18.3848C35.7747 18.19 35.811 17.9819 35.805 17.7729C35.7969 17.365 35.6345 16.975 35.3499 16.6809C35.0654 16.3868 34.6798 16.2102 34.27 16.1863C34.0662 16.1681 33.8623 16.1863 33.6585 16.1863H8.66737C8.43898 16.1778 8.21029 16.1826 7.98246 16.2005C7.57495 16.2432 7.19853 16.4367 6.92809 16.7428C6.65765 17.0488 6.51301 17.4447 6.52294 17.852C6.53542 18.2473 6.69597 18.6237 6.97312 18.9074C7.25028 19.1912 7.62405 19.3618 8.02119 19.3859Z"
                            fill="#161616"
                          />
                          <path
                            d="M33.5607 22.6581C25.2806 22.6581 17.0005 22.6581 8.72043 22.6581C8.44147 22.6479 8.16213 22.6581 7.88467 22.6885C7.64649 22.7241 7.41963 22.8133 7.22139 22.9493C7.02316 23.0853 6.85879 23.2645 6.74082 23.4733C6.62284 23.682 6.55438 23.9148 6.54066 24.1538C6.52693 24.3929 6.5683 24.6319 6.66161 24.8526C6.98776 25.6307 7.62171 25.884 8.43301 25.884C12.675 25.8718 16.9169 25.884 21.1589 25.884H33.5791C35.0223 25.884 35.7887 25.341 35.8213 24.3015C35.8539 23.262 35.061 22.6622 33.5607 22.6581Z"
                            fill="#161616"
                          />
                          <path
                            d="M8.02372 32.3418C8.22685 32.3626 8.43113 32.37 8.63525 32.3641H27.2339C27.4382 32.3704 27.6427 32.3602 27.8454 32.3337C28.7199 32.2 29.2723 31.5799 29.2723 30.7471C29.2723 29.8819 28.7015 29.2436 27.7883 29.1261C27.5608 29.1031 27.3319 29.0963 27.1034 29.1058H8.73717C8.50876 29.096 8.27994 29.1014 8.05225 29.122C7.14515 29.2314 6.53363 29.8778 6.52547 30.7188C6.51732 31.5597 7.12273 32.2202 8.02372 32.3418Z"
                            fill="#161616"
                          />
                          <path
                            d="M14.7947 9.69421C16.9045 9.7084 19.0122 9.69421 21.1139 9.69421C23.2155 9.69421 25.3334 9.69421 27.433 9.69421C28.0445 9.69421 28.5949 9.5544 28.9639 9.02351C29.1411 8.79022 29.2478 8.51162 29.2716 8.22026C29.2955 7.9289 29.2354 7.63682 29.0984 7.37815C28.7743 6.71554 28.2015 6.46631 27.4676 6.46631C23.2787 6.47644 19.0591 6.47644 14.8396 6.47644C13.7449 6.47644 13.0437 7.13296 13.0498 8.09748C13.056 9.06201 13.7184 9.68611 14.7947 9.69421Z"
                            fill="#161616"
                          />
                          <path
                            d="M20.9792 35.5902C16.8085 35.578 12.6393 35.578 8.47137 35.5902C7.26055 35.5902 6.50837 36.2305 6.52467 37.2295C6.54098 38.2284 7.25851 38.8039 8.44895 38.8079C10.5078 38.8079 12.5666 38.8079 14.6254 38.8079C16.7352 38.8079 18.8449 38.8079 20.9567 38.8079C21.6743 38.8079 22.2552 38.5932 22.5875 37.9326C23.1929 36.7938 22.3755 35.5902 20.9792 35.5902Z"
                            fill="#161616"
                          />
                        </svg>
                        Registration
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="imp-notify ">
                  <h2>Latest Forms</h2>
                  <FormsTable/>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="latest-news">
                  <h2>Circular/Notifications/News</h2>
                  <span>
                    <a href="circular-2025-26.pdf" target="_blank">
                      <img src="img/new.gif" alt="" />
                      Affiliation Circular and Notification 2025-26
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  