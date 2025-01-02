import '../style/style'


export default function Home() {
    return (
      <div class="content-wrap">
      <div class="container-fluid">
      <div class="row">
      <div class="col-lg-3">
        <div class="imp-links">
        <h2>Important Links</h2>
      <ul>
        <li>
          <a href="https://jrrsu.in/studentnew/login.aspx">
            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9656 11.7981C14.2191 11.8022 16.8727 9.14556 16.8559 5.89906C16.8559 4.73257 16.5109 3.59226 15.8645 2.62228C15.2181 1.6523 14.2993 0.896198 13.2243 0.449555C12.1492 0.00291131 10.9662 -0.114223 9.8248 0.11296C8.68337 0.340142 7.63475 0.901441 6.81151 1.7259C5.98826 2.55037 5.42735 3.60098 5.19967 4.74493C4.97199 5.88888 5.08777 7.07482 5.53237 8.15283C5.97698 9.23083 6.73044 10.1525 7.69752 10.8014C8.6646 11.4502 9.80188 11.7971 10.9656 11.7981ZM10.9796 1.64101C12.1093 1.64312 13.1924 2.09284 13.9926 2.89212C14.7929 3.6914 15.2454 4.7754 15.2516 5.90778C15.2596 8.26539 13.3363 10.1913 10.9716 10.1926C10.4069 10.1992 9.84661 10.0934 9.32307 9.88121C8.79954 9.66905 8.32324 9.35481 7.9218 8.95671C7.52035 8.55862 7.20175 8.08459 6.98447 7.56212C6.76719 7.03965 6.65556 6.47914 6.65605 5.9131C6.65654 5.34705 6.76913 4.78673 6.98731 4.26464C7.20549 3.74255 7.5249 3.26907 7.92703 2.87167C8.32916 2.47427 8.806 2.16086 9.3299 1.9496C9.85379 1.73834 10.4143 1.63345 10.979 1.64101H10.9796Z" fill="#161616"></path>
              <path d="M17.7095 11.9249C16.7082 12.1697 15.8289 12.7693 15.2339 13.6129C14.6389 14.4566 14.3683 15.4875 14.4721 16.5154C14.4828 16.5837 14.4761 16.6536 14.4527 16.7186C14.4293 16.7836 14.39 16.8417 14.3384 16.8875C13.5833 17.6322 12.8383 18.3877 12.0833 19.1331C11.9825 19.2271 11.9026 19.3414 11.8489 19.4684C11.7952 19.5955 11.7689 19.7325 11.7717 19.8705C11.7764 20.6307 11.7717 21.3909 11.7717 22.1497C11.7717 22.7141 12.0934 23.0305 12.6605 23.0326C13.4041 23.0359 14.1471 23.0245 14.8907 23.0372C15.0443 23.0444 15.1976 23.0179 15.3399 22.9595C15.4822 22.9012 15.6101 22.8124 15.7146 22.6994C16.4576 21.9419 17.2126 21.1965 17.9616 20.445C18.0406 20.3659 18.1094 20.315 18.2398 20.331C20.7644 20.6414 22.996 18.6505 23 16.0898C23.004 13.3092 20.4146 11.276 17.7095 11.9249ZM18.1108 18.6867C17.7403 18.6029 17.4474 18.6867 17.1805 18.9548C16.4249 19.723 15.6558 20.4779 14.9008 21.2467C14.8439 21.3114 14.7727 21.3618 14.693 21.3939C14.6132 21.426 14.527 21.439 14.4413 21.4318C14.1663 21.4147 13.8905 21.4147 13.6154 21.4318C13.4054 21.4472 13.356 21.3647 13.3747 21.1784C13.3887 21.0376 13.3747 20.8941 13.3747 20.752C13.251 20.2727 13.4937 19.9617 13.8234 19.65C14.5035 19.0078 15.1462 18.326 15.8163 17.6738C16.1146 17.3835 16.2095 17.0705 16.1212 16.6589C15.8016 15.1566 16.7372 13.7415 18.2211 13.4506C19.6803 13.1644 21.076 14.1323 21.3602 15.6286C21.7153 17.4948 19.9946 19.1164 18.1094 18.6867H18.1108Z" fill="#161616"></path>
              <path d="M4.42169 15.6063C6.33699 14.7348 8.36731 14.3996 10.4525 14.3407C11.154 14.3205 11.8568 14.3534 12.5564 14.3882C12.6609 14.3936 12.7655 14.3777 12.8638 14.3416C12.9622 14.3055 13.0522 14.2499 13.1286 14.1781C13.205 14.1064 13.2662 14.0199 13.3085 13.9239C13.3509 13.8279 13.3734 13.7243 13.3749 13.6194C13.3795 13.5147 13.3634 13.4101 13.3275 13.3117C13.2917 13.2133 13.2368 13.1229 13.166 13.0458C13.0953 12.9687 13.01 12.9064 12.9151 12.8624C12.8203 12.8184 12.7177 12.7936 12.6132 12.7895C10.3301 12.6239 8.0744 12.7781 5.85883 13.3928C4.35213 13.8097 2.92435 14.3983 1.71258 15.4145C0.869285 16.1244 0.225278 16.9744 0.0554157 18.0993C-0.0422218 18.7455 0.0193032 19.4011 0.017297 20.0527C0.017297 21.2231 0.771647 21.9746 1.94397 21.9766C3.23064 21.9766 4.51799 21.9766 5.80466 21.9766C7.16624 21.9766 8.52848 21.9766 9.89005 21.9766C9.99445 21.9794 10.0984 21.9616 10.1959 21.9242C10.2934 21.8867 10.3826 21.8304 10.4584 21.7584C10.5342 21.6863 10.5951 21.6 10.6375 21.5044C10.68 21.4087 10.7032 21.3056 10.7059 21.201C10.7166 20.7646 10.3876 20.4127 9.93218 20.3765C9.84859 20.3698 9.765 20.3765 9.6814 20.3765H2.01084C1.63233 20.3765 1.61962 20.3637 1.61962 19.9743C1.61962 19.5848 1.63567 19.204 1.61962 18.8206C1.58284 18.1134 1.85502 17.5362 2.32783 17.0368C2.919 16.4047 3.64259 15.9602 4.42169 15.6063Z" fill="#161616"></path>
              <path d="M18.7518 14.9294C18.5982 14.9242 18.4451 14.9497 18.3015 15.0046C18.1578 15.0594 18.0265 15.1424 17.9152 15.2487C17.8039 15.355 17.7149 15.4825 17.6534 15.6237C17.5918 15.7648 17.559 15.9169 17.5568 16.071C17.5545 16.225 17.583 16.378 17.6404 16.5209C17.6979 16.6638 17.7832 16.7938 17.8913 16.9033C17.9995 17.0128 18.1284 17.0996 18.2704 17.1585C18.4124 17.2175 18.5647 17.2475 18.7184 17.2468C18.8709 17.2476 19.022 17.2182 19.1631 17.1605C19.3043 17.1027 19.4327 17.0177 19.5411 16.9102C19.6495 16.8027 19.7356 16.6748 19.7947 16.534C19.8538 16.3931 19.8846 16.2419 19.8854 16.0891C19.8877 15.7848 19.7698 15.4921 19.5574 15.2747C19.3449 15.0574 19.0553 14.9333 18.7518 14.9294Z" fill="#161616"></path>
            </svg>
            Student Login
          </a>
        </li>
  
  
  
        <li>
          <a href="https://jrrsu.in/College/login.aspx">
            <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0007 12.6035C19.0007 10.9601 18.0561 9.75401 16.4615 9.36632C16.3026 9.32769 16.2694 9.26647 16.2708 9.11489C16.2788 8.34314 16.2766 7.57065 16.2708 6.79817C16.2752 6.0981 16.1761 5.40129 15.9769 4.73068C14.9824 1.46585 11.7976 -0.486497 8.43147 0.105254C5.4936 0.622673 3.23171 3.14418 3.01505 6.14593C2.94283 7.12611 2.99338 8.10775 2.98833 9.08866C2.98833 9.26647 2.94283 9.33279 2.77167 9.3736C1.23413 9.73361 0.258453 10.9674 0.254842 12.5495C0.25099 15.6103 0.25099 18.6726 0.254842 21.7363C0.250817 21.9005 0.259994 22.0647 0.282285 22.2274C0.55455 23.9036 1.82416 24.9931 3.51191 24.9967C5.55041 25.0011 7.58939 25.0011 9.62886 24.9967C11.6409 24.9967 13.6529 24.9967 15.6649 24.9967C15.8822 25.0034 16.0997 24.9912 16.3149 24.9603C17.9268 24.6812 19.0007 23.3956 19.0029 21.7392C19.0048 18.693 19.0041 15.6477 19.0007 12.6035ZM4.7093 9.03692C4.73891 8.0837 4.67392 7.12903 4.74975 6.17581C4.92235 4.01504 6.69099 2.11881 8.82434 1.80326C11.5932 1.39443 14.019 3.16167 14.482 5.94042C14.5939 6.61525 14.5354 7.30101 14.5419 7.98095C14.5455 8.33512 14.5311 8.69076 14.547 9.0442C14.5556 9.2366 14.4971 9.28469 14.3086 9.28396C12.7473 9.27668 11.1859 9.27959 9.62524 9.27959C8.06459 9.27959 6.51983 9.27959 4.96929 9.28396C4.77575 9.28542 4.7028 9.25554 4.7093 9.03692ZM17.2638 21.8288C17.2638 22.653 16.629 23.2462 15.7689 23.2484C13.7128 23.2535 11.656 23.2484 9.59925 23.2484C7.59662 23.2484 5.59399 23.2244 3.59208 23.2586C2.61134 23.2754 1.96787 22.5423 1.97654 21.6328C2.00687 18.6351 2.00687 15.6373 1.97654 12.6392C1.96932 11.804 2.53407 10.9463 3.6903 11.0359C3.83473 11.0468 3.97917 11.0519 4.12361 11.0519C7.81303 11.0519 11.5025 11.0519 15.1919 11.0519C15.4808 11.0519 15.7653 11.006 16.0585 11.057C16.754 11.1787 17.2667 11.7406 17.2682 12.449C17.2725 15.5778 17.2711 18.7044 17.2638 21.8288Z" fill="#161616"></path>
              <path d="M9.08211 13.139C8.54656 13.2553 8.06109 13.5393 7.69497 13.9505C7.32885 14.3617 7.10081 14.8791 7.04337 15.4288C6.91915 16.5066 7.52651 17.5888 8.54191 18.0567C8.72029 18.1391 8.77879 18.228 8.7694 18.416C8.75495 18.7242 8.7694 19.0332 8.7694 19.3422C8.7694 19.6512 8.7694 19.9595 8.7694 20.2685C8.7694 20.8216 9.13049 21.2159 9.63097 21.2159C10.1314 21.2159 10.4976 20.826 10.5012 20.275C10.5012 19.6665 10.5106 19.058 10.4969 18.4531C10.4925 18.2469 10.5445 18.1427 10.7439 18.0501C11.319 17.7769 11.7742 17.2994 12.0226 16.7089C12.271 16.1185 12.2952 15.4564 12.0905 14.8491C11.8859 14.2417 11.4668 13.7318 10.9132 13.4165C10.3596 13.1012 9.71032 13.0027 9.08933 13.1398L9.08211 13.139ZM9.63675 16.5511C9.52421 16.5548 9.41208 16.5358 9.30692 16.4952C9.20175 16.4546 9.10567 16.3933 9.02429 16.3147C8.94291 16.2362 8.87788 16.1421 8.83299 16.0379C8.78811 15.9337 8.76428 15.8215 8.7629 15.7079C8.7606 15.476 8.8497 15.2526 9.0106 15.087C9.1715 14.9213 9.39102 14.827 9.62086 14.8247C9.8507 14.8223 10.072 14.9123 10.2362 15.0746C10.4003 15.237 10.4939 15.4585 10.4962 15.6904C10.4973 15.8043 10.4759 15.9173 10.433 16.0227C10.3901 16.1281 10.3268 16.2237 10.2467 16.304C10.1665 16.3842 10.0713 16.4474 9.96651 16.4899C9.86175 16.5323 9.74962 16.5531 9.63675 16.5511Z" fill="#161616"></path>
            </svg>
            College Login
          </a>
        </li>
        <li>
          <a href="https://jrrsu.in/ExamCenterLogin.aspx">
            <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0007 12.6035C19.0007 10.9601 18.0561 9.75401 16.4615 9.36632C16.3026 9.32769 16.2694 9.26647 16.2708 9.11489C16.2788 8.34314 16.2766 7.57065 16.2708 6.79817C16.2752 6.0981 16.1761 5.40129 15.9769 4.73068C14.9824 1.46585 11.7976 -0.486497 8.43147 0.105254C5.4936 0.622673 3.23171 3.14418 3.01505 6.14593C2.94283 7.12611 2.99338 8.10775 2.98833 9.08866C2.98833 9.26647 2.94283 9.33279 2.77167 9.3736C1.23413 9.73361 0.258453 10.9674 0.254842 12.5495C0.25099 15.6103 0.25099 18.6726 0.254842 21.7363C0.250817 21.9005 0.259994 22.0647 0.282285 22.2274C0.55455 23.9036 1.82416 24.9931 3.51191 24.9967C5.55041 25.0011 7.58939 25.0011 9.62886 24.9967C11.6409 24.9967 13.6529 24.9967 15.6649 24.9967C15.8822 25.0034 16.0997 24.9912 16.3149 24.9603C17.9268 24.6812 19.0007 23.3956 19.0029 21.7392C19.0048 18.693 19.0041 15.6477 19.0007 12.6035ZM4.7093 9.03692C4.73891 8.0837 4.67392 7.12903 4.74975 6.17581C4.92235 4.01504 6.69099 2.11881 8.82434 1.80326C11.5932 1.39443 14.019 3.16167 14.482 5.94042C14.5939 6.61525 14.5354 7.30101 14.5419 7.98095C14.5455 8.33512 14.5311 8.69076 14.547 9.0442C14.5556 9.2366 14.4971 9.28469 14.3086 9.28396C12.7473 9.27668 11.1859 9.27959 9.62524 9.27959C8.06459 9.27959 6.51983 9.27959 4.96929 9.28396C4.77575 9.28542 4.7028 9.25554 4.7093 9.03692ZM17.2638 21.8288C17.2638 22.653 16.629 23.2462 15.7689 23.2484C13.7128 23.2535 11.656 23.2484 9.59925 23.2484C7.59662 23.2484 5.59399 23.2244 3.59208 23.2586C2.61134 23.2754 1.96787 22.5423 1.97654 21.6328C2.00687 18.6351 2.00687 15.6373 1.97654 12.6392C1.96932 11.804 2.53407 10.9463 3.6903 11.0359C3.83473 11.0468 3.97917 11.0519 4.12361 11.0519C7.81303 11.0519 11.5025 11.0519 15.1919 11.0519C15.4808 11.0519 15.7653 11.006 16.0585 11.057C16.754 11.1787 17.2667 11.7406 17.2682 12.449C17.2725 15.5778 17.2711 18.7044 17.2638 21.8288Z" fill="#161616"></path>
              <path d="M9.08211 13.139C8.54656 13.2553 8.06109 13.5393 7.69497 13.9505C7.32885 14.3617 7.10081 14.8791 7.04337 15.4288C6.91915 16.5066 7.52651 17.5888 8.54191 18.0567C8.72029 18.1391 8.77879 18.228 8.7694 18.416C8.75495 18.7242 8.7694 19.0332 8.7694 19.3422C8.7694 19.6512 8.7694 19.9595 8.7694 20.2685C8.7694 20.8216 9.13049 21.2159 9.63097 21.2159C10.1314 21.2159 10.4976 20.826 10.5012 20.275C10.5012 19.6665 10.5106 19.058 10.4969 18.4531C10.4925 18.2469 10.5445 18.1427 10.7439 18.0501C11.319 17.7769 11.7742 17.2994 12.0226 16.7089C12.271 16.1185 12.2952 15.4564 12.0905 14.8491C11.8859 14.2417 11.4668 13.7318 10.9132 13.4165C10.3596 13.1012 9.71032 13.0027 9.08933 13.1398L9.08211 13.139ZM9.63675 16.5511C9.52421 16.5548 9.41208 16.5358 9.30692 16.4952C9.20175 16.4546 9.10567 16.3933 9.02429 16.3147C8.94291 16.2362 8.87788 16.1421 8.83299 16.0379C8.78811 15.9337 8.76428 15.8215 8.7629 15.7079C8.7606 15.476 8.8497 15.2526 9.0106 15.087C9.1715 14.9213 9.39102 14.827 9.62086 14.8247C9.8507 14.8223 10.072 14.9123 10.2362 15.0746C10.4003 15.237 10.4939 15.4585 10.4962 15.6904C10.4973 15.8043 10.4759 15.9173 10.433 16.0227C10.3901 16.1281 10.3268 16.2237 10.2467 16.304C10.1665 16.3842 10.0713 16.4474 9.96651 16.4899C9.86175 16.5323 9.74962 16.5531 9.63675 16.5511Z" fill="#161616"></path>
            </svg>
            Exam Center Login
          </a>
        </li>
        <li>
          <a href="https://jrrsu.in/Jrrsuexaminersnew/Login.aspx">
            <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0007 12.6035C19.0007 10.9601 18.0561 9.75401 16.4615 9.36632C16.3026 9.32769 16.2694 9.26647 16.2708 9.11489C16.2788 8.34314 16.2766 7.57065 16.2708 6.79817C16.2752 6.0981 16.1761 5.40129 15.9769 4.73068C14.9824 1.46585 11.7976 -0.486497 8.43147 0.105254C5.4936 0.622673 3.23171 3.14418 3.01505 6.14593C2.94283 7.12611 2.99338 8.10775 2.98833 9.08866C2.98833 9.26647 2.94283 9.33279 2.77167 9.3736C1.23413 9.73361 0.258453 10.9674 0.254842 12.5495C0.25099 15.6103 0.25099 18.6726 0.254842 21.7363C0.250817 21.9005 0.259994 22.0647 0.282285 22.2274C0.55455 23.9036 1.82416 24.9931 3.51191 24.9967C5.55041 25.0011 7.58939 25.0011 9.62886 24.9967C11.6409 24.9967 13.6529 24.9967 15.6649 24.9967C15.8822 25.0034 16.0997 24.9912 16.3149 24.9603C17.9268 24.6812 19.0007 23.3956 19.0029 21.7392C19.0048 18.693 19.0041 15.6477 19.0007 12.6035ZM4.7093 9.03692C4.73891 8.0837 4.67392 7.12903 4.74975 6.17581C4.92235 4.01504 6.69099 2.11881 8.82434 1.80326C11.5932 1.39443 14.019 3.16167 14.482 5.94042C14.5939 6.61525 14.5354 7.30101 14.5419 7.98095C14.5455 8.33512 14.5311 8.69076 14.547 9.0442C14.5556 9.2366 14.4971 9.28469 14.3086 9.28396C12.7473 9.27668 11.1859 9.27959 9.62524 9.27959C8.06459 9.27959 6.51983 9.27959 4.96929 9.28396C4.77575 9.28542 4.7028 9.25554 4.7093 9.03692ZM17.2638 21.8288C17.2638 22.653 16.629 23.2462 15.7689 23.2484C13.7128 23.2535 11.656 23.2484 9.59925 23.2484C7.59662 23.2484 5.59399 23.2244 3.59208 23.2586C2.61134 23.2754 1.96787 22.5423 1.97654 21.6328C2.00687 18.6351 2.00687 15.6373 1.97654 12.6392C1.96932 11.804 2.53407 10.9463 3.6903 11.0359C3.83473 11.0468 3.97917 11.0519 4.12361 11.0519C7.81303 11.0519 11.5025 11.0519 15.1919 11.0519C15.4808 11.0519 15.7653 11.006 16.0585 11.057C16.754 11.1787 17.2667 11.7406 17.2682 12.449C17.2725 15.5778 17.2711 18.7044 17.2638 21.8288Z" fill="#161616"></path>
              <path d="M9.08211 13.139C8.54656 13.2553 8.06109 13.5393 7.69497 13.9505C7.32885 14.3617 7.10081 14.8791 7.04337 15.4288C6.91915 16.5066 7.52651 17.5888 8.54191 18.0567C8.72029 18.1391 8.77879 18.228 8.7694 18.416C8.75495 18.7242 8.7694 19.0332 8.7694 19.3422C8.7694 19.6512 8.7694 19.9595 8.7694 20.2685C8.7694 20.8216 9.13049 21.2159 9.63097 21.2159C10.1314 21.2159 10.4976 20.826 10.5012 20.275C10.5012 19.6665 10.5106 19.058 10.4969 18.4531C10.4925 18.2469 10.5445 18.1427 10.7439 18.0501C11.319 17.7769 11.7742 17.2994 12.0226 16.7089C12.271 16.1185 12.2952 15.4564 12.0905 14.8491C11.8859 14.2417 11.4668 13.7318 10.9132 13.4165C10.3596 13.1012 9.71032 13.0027 9.08933 13.1398L9.08211 13.139ZM9.63675 16.5511C9.52421 16.5548 9.41208 16.5358 9.30692 16.4952C9.20175 16.4546 9.10567 16.3933 9.02429 16.3147C8.94291 16.2362 8.87788 16.1421 8.83299 16.0379C8.78811 15.9337 8.76428 15.8215 8.7629 15.7079C8.7606 15.476 8.8497 15.2526 9.0106 15.087C9.1715 14.9213 9.39102 14.827 9.62086 14.8247C9.8507 14.8223 10.072 14.9123 10.2362 15.0746C10.4003 15.237 10.4939 15.4585 10.4962 15.6904C10.4973 15.8043 10.4759 15.9173 10.433 16.0227C10.3901 16.1281 10.3268 16.2237 10.2467 16.304C10.1665 16.3842 10.0713 16.4474 9.96651 16.4899C9.86175 16.5323 9.74962 16.5531 9.63675 16.5511Z" fill="#161616"></path>
            </svg> Examiner Login
          </a>
        </li>
        <li>
          <a href="https://jrrsu.in/loginAff.aspx">
            <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0007 12.6035C19.0007 10.9601 18.0561 9.75401 16.4615 9.36632C16.3026 9.32769 16.2694 9.26647 16.2708 9.11489C16.2788 8.34314 16.2766 7.57065 16.2708 6.79817C16.2752 6.0981 16.1761 5.40129 15.9769 4.73068C14.9824 1.46585 11.7976 -0.486497 8.43147 0.105254C5.4936 0.622673 3.23171 3.14418 3.01505 6.14593C2.94283 7.12611 2.99338 8.10775 2.98833 9.08866C2.98833 9.26647 2.94283 9.33279 2.77167 9.3736C1.23413 9.73361 0.258453 10.9674 0.254842 12.5495C0.25099 15.6103 0.25099 18.6726 0.254842 21.7363C0.250817 21.9005 0.259994 22.0647 0.282285 22.2274C0.55455 23.9036 1.82416 24.9931 3.51191 24.9967C5.55041 25.0011 7.58939 25.0011 9.62886 24.9967C11.6409 24.9967 13.6529 24.9967 15.6649 24.9967C15.8822 25.0034 16.0997 24.9912 16.3149 24.9603C17.9268 24.6812 19.0007 23.3956 19.0029 21.7392C19.0048 18.693 19.0041 15.6477 19.0007 12.6035ZM4.7093 9.03692C4.73891 8.0837 4.67392 7.12903 4.74975 6.17581C4.92235 4.01504 6.69099 2.11881 8.82434 1.80326C11.5932 1.39443 14.019 3.16167 14.482 5.94042C14.5939 6.61525 14.5354 7.30101 14.5419 7.98095C14.5455 8.33512 14.5311 8.69076 14.547 9.0442C14.5556 9.2366 14.4971 9.28469 14.3086 9.28396C12.7473 9.27668 11.1859 9.27959 9.62524 9.27959C8.06459 9.27959 6.51983 9.27959 4.96929 9.28396C4.77575 9.28542 4.7028 9.25554 4.7093 9.03692ZM17.2638 21.8288C17.2638 22.653 16.629 23.2462 15.7689 23.2484C13.7128 23.2535 11.656 23.2484 9.59925 23.2484C7.59662 23.2484 5.59399 23.2244 3.59208 23.2586C2.61134 23.2754 1.96787 22.5423 1.97654 21.6328C2.00687 18.6351 2.00687 15.6373 1.97654 12.6392C1.96932 11.804 2.53407 10.9463 3.6903 11.0359C3.83473 11.0468 3.97917 11.0519 4.12361 11.0519C7.81303 11.0519 11.5025 11.0519 15.1919 11.0519C15.4808 11.0519 15.7653 11.006 16.0585 11.057C16.754 11.1787 17.2667 11.7406 17.2682 12.449C17.2725 15.5778 17.2711 18.7044 17.2638 21.8288Z" fill="#161616"></path>
              <path d="M9.08211 13.139C8.54656 13.2553 8.06109 13.5393 7.69497 13.9505C7.32885 14.3617 7.10081 14.8791 7.04337 15.4288C6.91915 16.5066 7.52651 17.5888 8.54191 18.0567C8.72029 18.1391 8.77879 18.228 8.7694 18.416C8.75495 18.7242 8.7694 19.0332 8.7694 19.3422C8.7694 19.6512 8.7694 19.9595 8.7694 20.2685C8.7694 20.8216 9.13049 21.2159 9.63097 21.2159C10.1314 21.2159 10.4976 20.826 10.5012 20.275C10.5012 19.6665 10.5106 19.058 10.4969 18.4531C10.4925 18.2469 10.5445 18.1427 10.7439 18.0501C11.319 17.7769 11.7742 17.2994 12.0226 16.7089C12.271 16.1185 12.2952 15.4564 12.0905 14.8491C11.8859 14.2417 11.4668 13.7318 10.9132 13.4165C10.3596 13.1012 9.71032 13.0027 9.08933 13.1398L9.08211 13.139ZM9.63675 16.5511C9.52421 16.5548 9.41208 16.5358 9.30692 16.4952C9.20175 16.4546 9.10567 16.3933 9.02429 16.3147C8.94291 16.2362 8.87788 16.1421 8.83299 16.0379C8.78811 15.9337 8.76428 15.8215 8.7629 15.7079C8.7606 15.476 8.8497 15.2526 9.0106 15.087C9.1715 14.9213 9.39102 14.827 9.62086 14.8247C9.8507 14.8223 10.072 14.9123 10.2362 15.0746C10.4003 15.237 10.4939 15.4585 10.4962 15.6904C10.4973 15.8043 10.4759 15.9173 10.433 16.0227C10.3901 16.1281 10.3268 16.2237 10.2467 16.304C10.1665 16.3842 10.0713 16.4474 9.96651 16.4899C9.86175 16.5323 9.74962 16.5531 9.63675 16.5511Z" fill="#161616"></path>
            </svg> Affiliation Login
          </a>
        </li>
        {/* <!--<li><a href="#">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7501 20.4392H2.37715C2.25838 20.4394 2.14113 20.4125 2.03423 20.3607C1.92732 20.3088 1.83355 20.2333 1.75999 20.1398C1.68642 20.0464 1.63498 19.9374 1.60953 19.8211C1.58409 19.7048 1.58531 19.5842 1.61309 19.4685C1.65159 19.2933 1.69305 19.1182 1.74044 18.946C2.09527 17.6701 2.73728 16.4927 3.61711 15.5044C4.49693 14.5161 5.59113 13.7432 6.81557 13.2452C8.04001 12.7472 9.36208 12.5373 10.6801 12.6316C11.9981 12.726 13.277 13.1221 14.4185 13.7894C14.5466 13.8725 14.6966 13.9151 14.8491 13.912C15.0017 13.9088 15.1497 13.8599 15.2743 13.7716C15.4002 13.6929 15.4994 13.578 15.5591 13.4419C15.6188 13.3058 15.6362 13.1548 15.609 13.0087C15.5874 12.881 15.5355 12.7604 15.4577 12.6571C15.3798 12.5538 15.2784 12.4707 15.1618 12.4149C14.6229 12.1004 14.0593 11.8304 13.4767 11.6075C14.6178 10.8686 15.4898 9.77942 15.9623 8.5027C16.4348 7.22598 16.4825 5.83027 16.0983 4.52412C15.7141 3.21797 14.9185 2.07152 13.8306 1.25608C12.7426 0.440642 11.4206 0 10.0622 0C8.7037 0 7.38172 0.440642 6.29375 1.25608C5.20578 2.07152 4.41024 3.21797 4.02601 4.52412C3.64178 5.83027 3.68949 7.22598 4.16201 8.5027C4.63453 9.77942 5.50648 10.8686 6.64758 11.6075L6.50543 11.6609C5.20737 12.1434 4.02107 12.8861 3.01899 13.8436C2.01692 14.8012 1.22012 15.9535 0.67727 17.2301C0.340331 17.932 0.114527 18.6821 0.00797877 19.4536C-0.0191733 19.7828 0.0231546 20.114 0.132205 20.4256C0.241256 20.7373 0.414582 21.0224 0.640892 21.2624C0.867203 21.5025 1.14142 21.692 1.44568 21.8187C1.74994 21.9454 2.07741 22.0064 2.40677 21.9978H14.7442C14.8014 22.0007 14.8588 22.0007 14.916 21.9978C15.0187 21.9869 15.1182 21.9558 15.2089 21.9063C15.2996 21.8569 15.3796 21.79 15.4445 21.7095C15.5094 21.629 15.5579 21.5365 15.5871 21.4372C15.6163 21.3379 15.6258 21.2339 15.6149 21.1309C15.604 21.028 15.573 20.9283 15.5237 20.8374C15.4743 20.7464 15.4076 20.6662 15.3273 20.6011C15.247 20.5361 15.1547 20.4875 15.0557 20.4582C14.9566 20.4289 14.8528 20.4194 14.7501 20.4303V20.4392ZM5.33861 6.26387C5.34623 5.33019 5.62956 4.41968 6.15287 3.64726C6.67619 2.87483 7.41602 2.2751 8.27901 1.92375C9.142 1.57239 10.0895 1.48516 11.0019 1.67306C11.9143 1.86096 12.7507 2.31557 13.4056 2.97952C14.0605 3.64347 14.5046 4.48701 14.6817 5.40369C14.8589 6.32036 14.7612 7.2691 14.4009 8.13017C14.0407 8.99124 13.4342 9.72606 12.6577 10.2419C11.8813 10.7577 10.9699 11.0315 10.0385 11.0286C9.41698 11.0278 8.80181 10.9037 8.22845 10.6633C7.6551 10.4229 7.13492 10.0711 6.69795 9.62808C6.26099 9.18509 5.91588 8.65971 5.68257 8.08229C5.44926 7.50486 5.33236 6.88683 5.33861 6.26387Z" fill="#161616"/>
    <path d="M21.1272 16.5117C20.4313 16.5117 19.7383 16.5117 19.0542 16.5117C18.8913 16.5117 18.8558 16.4672 18.8558 16.3099C18.8558 15.6152 18.8558 14.9205 18.8558 14.2318C18.8675 14.1217 18.856 14.0103 18.8219 13.9049C18.7879 13.7995 18.7321 13.7025 18.6583 13.6201C18.5844 13.5378 18.4941 13.4719 18.3931 13.4268C18.2922 13.3817 18.183 13.3584 18.0725 13.3584C17.962 13.3584 17.8527 13.3817 17.7518 13.4268C17.6509 13.4719 17.5605 13.5378 17.4866 13.6201C17.4128 13.7025 17.357 13.7995 17.323 13.9049C17.289 14.0103 17.2774 14.1217 17.2892 14.2318C17.2892 14.9116 17.2892 15.5885 17.2892 16.2683C17.2892 16.4494 17.2595 16.5147 17.0552 16.5117C16.38 16.5117 15.7018 16.5117 15.0236 16.5117C14.9138 16.5 14.8027 16.5115 14.6975 16.5457C14.5924 16.5798 14.4956 16.6357 14.4134 16.7097C14.3313 16.7838 14.2656 16.8743 14.2206 16.9755C14.1756 17.0767 14.1523 17.1862 14.1523 17.297C14.1523 17.4077 14.1756 17.5172 14.2206 17.6184C14.2656 17.7196 14.3313 17.8101 14.4134 17.8842C14.4956 17.9582 14.5924 18.0141 14.6975 18.0482C14.8027 18.0824 14.9138 18.0939 15.0236 18.0822C15.7196 18.0822 16.4126 18.0822 17.0967 18.0822C17.2507 18.0822 17.2921 18.1178 17.2862 18.2692C17.2862 18.6284 17.2862 18.9876 17.2862 19.3498C17.2862 19.712 17.2862 20.0355 17.2862 20.3769C17.2796 20.4841 17.295 20.5915 17.3314 20.6925C17.3678 20.7935 17.4244 20.8859 17.4978 20.9642C17.5712 21.0424 17.6597 21.1047 17.7581 21.1473C17.8564 21.19 17.9624 21.2119 18.0695 21.2119C18.1766 21.2119 18.2826 21.19 18.3809 21.1473C18.4792 21.1047 18.5678 21.0424 18.6412 20.9642C18.7146 20.8859 18.7712 20.7935 18.8076 20.6925C18.844 20.5915 18.8594 20.4841 18.8528 20.3769C18.8528 19.6971 18.8528 19.0203 18.8528 18.3404C18.8528 18.1475 18.8854 18.0792 19.0986 18.0851C19.7768 18.1 20.455 18.0851 21.1331 18.0851C21.243 18.0969 21.3541 18.0853 21.4592 18.0512C21.5644 18.0171 21.6612 17.9612 21.7433 17.8872C21.8255 17.8131 21.8912 17.7226 21.9362 17.6214C21.9812 17.5202 22.0044 17.4107 22.0044 17.2999C22.0044 17.1892 21.9812 17.0796 21.9362 16.9785C21.8912 16.8773 21.8255 16.7867 21.7433 16.7127C21.6612 16.6386 21.5644 16.5827 21.4592 16.5486C21.3541 16.5145 21.243 16.503 21.1331 16.5147L21.1272 16.5117Z" fill="#161616"/>
    </svg> Admission 2024-25 <img src="img/new.gif" alt=""/></a></li>
          <li><a href="#">
            <svg width="22" height="22" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.9656 11.7981C14.2191 11.8022 16.8727 9.14556 16.8559 5.89906C16.8559 4.73257 16.5109 3.59226 15.8645 2.62228C15.2181 1.6523 14.2993 0.896198 13.2243 0.449555C12.1492 0.00291131 10.9662 -0.114223 9.8248 0.11296C8.68337 0.340142 7.63475 0.901441 6.81151 1.7259C5.98826 2.55037 5.42735 3.60098 5.19967 4.74493C4.97199 5.88888 5.08777 7.07482 5.53237 8.15283C5.97698 9.23083 6.73044 10.1525 7.69752 10.8014C8.6646 11.4502 9.80188 11.7971 10.9656 11.7981ZM10.9796 1.64101C12.1093 1.64312 13.1924 2.09284 13.9926 2.89212C14.7929 3.6914 15.2454 4.7754 15.2516 5.90778C15.2596 8.26539 13.3363 10.1913 10.9716 10.1926C10.4069 10.1992 9.84661 10.0934 9.32307 9.88121C8.79954 9.66905 8.32324 9.35481 7.9218 8.95671C7.52035 8.55862 7.20175 8.08459 6.98447 7.56212C6.76719 7.03965 6.65556 6.47914 6.65605 5.9131C6.65654 5.34705 6.76913 4.78673 6.98731 4.26464C7.20549 3.74255 7.5249 3.26907 7.92703 2.87167C8.32916 2.47427 8.806 2.16086 9.3299 1.9496C9.85379 1.73834 10.4143 1.63345 10.979 1.64101H10.9796Z" fill="#161616"/>
    <path d="M17.7095 11.9249C16.7082 12.1697 15.8289 12.7693 15.2339 13.6129C14.6389 14.4566 14.3683 15.4875 14.4721 16.5154C14.4828 16.5837 14.4761 16.6536 14.4527 16.7186C14.4293 16.7836 14.39 16.8417 14.3384 16.8875C13.5833 17.6322 12.8383 18.3877 12.0833 19.1331C11.9825 19.2271 11.9026 19.3414 11.8489 19.4684C11.7952 19.5955 11.7689 19.7325 11.7717 19.8705C11.7764 20.6307 11.7717 21.3909 11.7717 22.1497C11.7717 22.7141 12.0934 23.0305 12.6605 23.0326C13.4041 23.0359 14.1471 23.0245 14.8907 23.0372C15.0443 23.0444 15.1976 23.0179 15.3399 22.9595C15.4822 22.9012 15.6101 22.8124 15.7146 22.6994C16.4576 21.9419 17.2126 21.1965 17.9616 20.445C18.0406 20.3659 18.1094 20.315 18.2398 20.331C20.7644 20.6414 22.996 18.6505 23 16.0898C23.004 13.3092 20.4146 11.276 17.7095 11.9249ZM18.1108 18.6867C17.7403 18.6029 17.4474 18.6867 17.1805 18.9548C16.4249 19.723 15.6558 20.4779 14.9008 21.2467C14.8439 21.3114 14.7727 21.3618 14.693 21.3939C14.6132 21.426 14.527 21.439 14.4413 21.4318C14.1663 21.4147 13.8905 21.4147 13.6154 21.4318C13.4054 21.4472 13.356 21.3647 13.3747 21.1784C13.3887 21.0376 13.3747 20.8941 13.3747 20.752C13.251 20.2727 13.4937 19.9617 13.8234 19.65C14.5035 19.0078 15.1462 18.326 15.8163 17.6738C16.1146 17.3835 16.2095 17.0705 16.1212 16.6589C15.8016 15.1566 16.7372 13.7415 18.2211 13.4506C19.6803 13.1644 21.076 14.1323 21.3602 15.6286C21.7153 17.4948 19.9946 19.1164 18.1094 18.6867H18.1108Z" fill="#161616"/>
    <path d="M4.42169 15.6063C6.33699 14.7348 8.36731 14.3996 10.4525 14.3407C11.154 14.3205 11.8568 14.3534 12.5564 14.3882C12.6609 14.3936 12.7655 14.3777 12.8638 14.3416C12.9622 14.3055 13.0522 14.2499 13.1286 14.1781C13.205 14.1064 13.2662 14.0199 13.3085 13.9239C13.3509 13.8279 13.3734 13.7243 13.3749 13.6194C13.3795 13.5147 13.3634 13.4101 13.3275 13.3117C13.2917 13.2133 13.2368 13.1229 13.166 13.0458C13.0953 12.9687 13.01 12.9064 12.9151 12.8624C12.8203 12.8184 12.7177 12.7936 12.6132 12.7895C10.3301 12.6239 8.0744 12.7781 5.85883 13.3928C4.35213 13.8097 2.92435 14.3983 1.71258 15.4145C0.869285 16.1244 0.225278 16.9744 0.0554157 18.0993C-0.0422218 18.7455 0.0193032 19.4011 0.017297 20.0527C0.017297 21.2231 0.771647 21.9746 1.94397 21.9766C3.23064 21.9766 4.51799 21.9766 5.80466 21.9766C7.16624 21.9766 8.52848 21.9766 9.89005 21.9766C9.99445 21.9794 10.0984 21.9616 10.1959 21.9242C10.2934 21.8867 10.3826 21.8304 10.4584 21.7584C10.5342 21.6863 10.5951 21.6 10.6375 21.5044C10.68 21.4087 10.7032 21.3056 10.7059 21.201C10.7166 20.7646 10.3876 20.4127 9.93218 20.3765C9.84859 20.3698 9.765 20.3765 9.6814 20.3765H2.01084C1.63233 20.3765 1.61962 20.3637 1.61962 19.9743C1.61962 19.5848 1.63567 19.204 1.61962 18.8206C1.58284 18.1134 1.85502 17.5362 2.32783 17.0368C2.919 16.4047 3.64259 15.9602 4.42169 15.6063Z" fill="#161616"/>
    <path d="M18.7518 14.9294C18.5982 14.9242 18.4451 14.9497 18.3015 15.0046C18.1578 15.0594 18.0265 15.1424 17.9152 15.2487C17.8039 15.355 17.7149 15.4825 17.6534 15.6237C17.5918 15.7648 17.559 15.9169 17.5568 16.071C17.5545 16.225 17.583 16.378 17.6404 16.5209C17.6979 16.6638 17.7832 16.7938 17.8913 16.9033C17.9995 17.0128 18.1284 17.0996 18.2704 17.1585C18.4124 17.2175 18.5647 17.2475 18.7184 17.2468C18.8709 17.2476 19.022 17.2182 19.1631 17.1605C19.3043 17.1027 19.4327 17.0177 19.5411 16.9102C19.6495 16.8027 19.7356 16.6748 19.7947 16.534C19.8538 16.3931 19.8846 16.2419 19.8854 16.0891C19.8877 15.7848 19.7698 15.4921 19.5574 15.2747C19.3449 15.0574 19.0553 14.9333 18.7518 14.9294Z" fill="#161616"/>
    </svg> Student's Enrollment</a></li>
  
          <li><a href="#">
            <svg width="22" height="22" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.0007 12.6035C19.0007 10.9601 18.0561 9.75401 16.4615 9.36632C16.3026 9.32769 16.2694 9.26647 16.2708 9.11489C16.2788 8.34314 16.2766 7.57065 16.2708 6.79817C16.2752 6.0981 16.1761 5.40129 15.9769 4.73068C14.9824 1.46585 11.7976 -0.486497 8.43147 0.105254C5.4936 0.622673 3.23171 3.14418 3.01505 6.14593C2.94283 7.12611 2.99338 8.10775 2.98833 9.08866C2.98833 9.26647 2.94283 9.33279 2.77167 9.3736C1.23413 9.73361 0.258453 10.9674 0.254842 12.5495C0.25099 15.6103 0.25099 18.6726 0.254842 21.7363C0.250817 21.9005 0.259994 22.0647 0.282285 22.2274C0.55455 23.9036 1.82416 24.9931 3.51191 24.9967C5.55041 25.0011 7.58939 25.0011 9.62886 24.9967C11.6409 24.9967 13.6529 24.9967 15.6649 24.9967C15.8822 25.0034 16.0997 24.9912 16.3149 24.9603C17.9268 24.6812 19.0007 23.3956 19.0029 21.7392C19.0048 18.693 19.0041 15.6477 19.0007 12.6035ZM4.7093 9.03692C4.73891 8.0837 4.67392 7.12903 4.74975 6.17581C4.92235 4.01504 6.69099 2.11881 8.82434 1.80326C11.5932 1.39443 14.019 3.16167 14.482 5.94042C14.5939 6.61525 14.5354 7.30101 14.5419 7.98095C14.5455 8.33512 14.5311 8.69076 14.547 9.0442C14.5556 9.2366 14.4971 9.28469 14.3086 9.28396C12.7473 9.27668 11.1859 9.27959 9.62524 9.27959C8.06459 9.27959 6.51983 9.27959 4.96929 9.28396C4.77575 9.28542 4.7028 9.25554 4.7093 9.03692ZM17.2638 21.8288C17.2638 22.653 16.629 23.2462 15.7689 23.2484C13.7128 23.2535 11.656 23.2484 9.59925 23.2484C7.59662 23.2484 5.59399 23.2244 3.59208 23.2586C2.61134 23.2754 1.96787 22.5423 1.97654 21.6328C2.00687 18.6351 2.00687 15.6373 1.97654 12.6392C1.96932 11.804 2.53407 10.9463 3.6903 11.0359C3.83473 11.0468 3.97917 11.0519 4.12361 11.0519C7.81303 11.0519 11.5025 11.0519 15.1919 11.0519C15.4808 11.0519 15.7653 11.006 16.0585 11.057C16.754 11.1787 17.2667 11.7406 17.2682 12.449C17.2725 15.5778 17.2711 18.7044 17.2638 21.8288Z" fill="#161616"/>
    <path d="M9.08211 13.139C8.54656 13.2553 8.06109 13.5393 7.69497 13.9505C7.32885 14.3617 7.10081 14.8791 7.04337 15.4288C6.91915 16.5066 7.52651 17.5888 8.54191 18.0567C8.72029 18.1391 8.77879 18.228 8.7694 18.416C8.75495 18.7242 8.7694 19.0332 8.7694 19.3422C8.7694 19.6512 8.7694 19.9595 8.7694 20.2685C8.7694 20.8216 9.13049 21.2159 9.63097 21.2159C10.1314 21.2159 10.4976 20.826 10.5012 20.275C10.5012 19.6665 10.5106 19.058 10.4969 18.4531C10.4925 18.2469 10.5445 18.1427 10.7439 18.0501C11.319 17.7769 11.7742 17.2994 12.0226 16.7089C12.271 16.1185 12.2952 15.4564 12.0905 14.8491C11.8859 14.2417 11.4668 13.7318 10.9132 13.4165C10.3596 13.1012 9.71032 13.0027 9.08933 13.1398L9.08211 13.139ZM9.63675 16.5511C9.52421 16.5548 9.41208 16.5358 9.30692 16.4952C9.20175 16.4546 9.10567 16.3933 9.02429 16.3147C8.94291 16.2362 8.87788 16.1421 8.83299 16.0379C8.78811 15.9337 8.76428 15.8215 8.7629 15.7079C8.7606 15.476 8.8497 15.2526 9.0106 15.087C9.1715 14.9213 9.39102 14.827 9.62086 14.8247C9.8507 14.8223 10.072 14.9123 10.2362 15.0746C10.4003 15.237 10.4939 15.4585 10.4962 15.6904C10.4973 15.8043 10.4759 15.9173 10.433 16.0227C10.3901 16.1281 10.3268 16.2237 10.2467 16.304C10.1665 16.3842 10.0713 16.4474 9.96651 16.4899C9.86175 16.5323 9.74962 16.5531 9.63675 16.5511Z" fill="#161616"/>
    </svg> Fill Exam Form</a></li>
          <li><a href="#">
            <svg width="22" height="22" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.0007 12.6035C19.0007 10.9601 18.0561 9.75401 16.4615 9.36632C16.3026 9.32769 16.2694 9.26647 16.2708 9.11489C16.2788 8.34314 16.2766 7.57065 16.2708 6.79817C16.2752 6.0981 16.1761 5.40129 15.9769 4.73068C14.9824 1.46585 11.7976 -0.486497 8.43147 0.105254C5.4936 0.622673 3.23171 3.14418 3.01505 6.14593C2.94283 7.12611 2.99338 8.10775 2.98833 9.08866C2.98833 9.26647 2.94283 9.33279 2.77167 9.3736C1.23413 9.73361 0.258453 10.9674 0.254842 12.5495C0.25099 15.6103 0.25099 18.6726 0.254842 21.7363C0.250817 21.9005 0.259994 22.0647 0.282285 22.2274C0.55455 23.9036 1.82416 24.9931 3.51191 24.9967C5.55041 25.0011 7.58939 25.0011 9.62886 24.9967C11.6409 24.9967 13.6529 24.9967 15.6649 24.9967C15.8822 25.0034 16.0997 24.9912 16.3149 24.9603C17.9268 24.6812 19.0007 23.3956 19.0029 21.7392C19.0048 18.693 19.0041 15.6477 19.0007 12.6035ZM4.7093 9.03692C4.73891 8.0837 4.67392 7.12903 4.74975 6.17581C4.92235 4.01504 6.69099 2.11881 8.82434 1.80326C11.5932 1.39443 14.019 3.16167 14.482 5.94042C14.5939 6.61525 14.5354 7.30101 14.5419 7.98095C14.5455 8.33512 14.5311 8.69076 14.547 9.0442C14.5556 9.2366 14.4971 9.28469 14.3086 9.28396C12.7473 9.27668 11.1859 9.27959 9.62524 9.27959C8.06459 9.27959 6.51983 9.27959 4.96929 9.28396C4.77575 9.28542 4.7028 9.25554 4.7093 9.03692ZM17.2638 21.8288C17.2638 22.653 16.629 23.2462 15.7689 23.2484C13.7128 23.2535 11.656 23.2484 9.59925 23.2484C7.59662 23.2484 5.59399 23.2244 3.59208 23.2586C2.61134 23.2754 1.96787 22.5423 1.97654 21.6328C2.00687 18.6351 2.00687 15.6373 1.97654 12.6392C1.96932 11.804 2.53407 10.9463 3.6903 11.0359C3.83473 11.0468 3.97917 11.0519 4.12361 11.0519C7.81303 11.0519 11.5025 11.0519 15.1919 11.0519C15.4808 11.0519 15.7653 11.006 16.0585 11.057C16.754 11.1787 17.2667 11.7406 17.2682 12.449C17.2725 15.5778 17.2711 18.7044 17.2638 21.8288Z" fill="#161616"/>
    <path d="M9.08211 13.139C8.54656 13.2553 8.06109 13.5393 7.69497 13.9505C7.32885 14.3617 7.10081 14.8791 7.04337 15.4288C6.91915 16.5066 7.52651 17.5888 8.54191 18.0567C8.72029 18.1391 8.77879 18.228 8.7694 18.416C8.75495 18.7242 8.7694 19.0332 8.7694 19.3422C8.7694 19.6512 8.7694 19.9595 8.7694 20.2685C8.7694 20.8216 9.13049 21.2159 9.63097 21.2159C10.1314 21.2159 10.4976 20.826 10.5012 20.275C10.5012 19.6665 10.5106 19.058 10.4969 18.4531C10.4925 18.2469 10.5445 18.1427 10.7439 18.0501C11.319 17.7769 11.7742 17.2994 12.0226 16.7089C12.271 16.1185 12.2952 15.4564 12.0905 14.8491C11.8859 14.2417 11.4668 13.7318 10.9132 13.4165C10.3596 13.1012 9.71032 13.0027 9.08933 13.1398L9.08211 13.139ZM9.63675 16.5511C9.52421 16.5548 9.41208 16.5358 9.30692 16.4952C9.20175 16.4546 9.10567 16.3933 9.02429 16.3147C8.94291 16.2362 8.87788 16.1421 8.83299 16.0379C8.78811 15.9337 8.76428 15.8215 8.7629 15.7079C8.7606 15.476 8.8497 15.2526 9.0106 15.087C9.1715 14.9213 9.39102 14.827 9.62086 14.8247C9.8507 14.8223 10.072 14.9123 10.2362 15.0746C10.4003 15.237 10.4939 15.4585 10.4962 15.6904C10.4973 15.8043 10.4759 15.9173 10.433 16.0227C10.3901 16.1281 10.3268 16.2237 10.2467 16.304C10.1665 16.3842 10.0713 16.4474 9.96651 16.4899C9.86175 16.5323 9.74962 16.5531 9.63675 16.5511Z" fill="#161616"/>
    </svg> College Registration</a></li>
  
            <li><a href="#">Temp. College Login</a></li>
  
            <li><a href="#">Exam Center Login</a></li>
            <li><a href="#">Int/Ext Examiner Reg.</a></li>
  
            <li><a href="#">New Affiliation Reg.</a></li>--> */}
  
      </ul>
          </div>
        
        
        <div class="imp-links">
        <h2>Online Services</h2>
        <ul>
          <li><a href="#">Duplicate Marksheet</a></li>
          <li><a href="#">Provisional Degree Certificate</a></li>
          <li><a href="#">Correction in Marksheet</a></li>
          <li><a href="#">Migration</a></li>
          <li><a href="#">Degree Correction</a></li>
                          
        </ul>
          </div>
        
        </div>	  
      <div class="col-lg-6">		  
        <div class="imp-notify">			  
        <h2>Latest Form</h2>
          <iframe src="https://apaarerp.digitalries.com/studentnew/ExamFormPrei" frameborder="0" id='0'></iframe>  
        </div>
        </div>	  
      <div class="col-lg-3">
        <div class="latest-news">
        <h2>Circular/Notifications/News</h2>
        <iframe src="https://apaarerp.digitalries.com/studentnew/Newsdisplay" frameborder="0" id='2'></iframe>	  
        </div>
        </div>	  
        
      </div>  
      </div></div>
    );
  }
  