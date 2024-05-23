import React, { useEffect, useState } from "react";
import profilImage from "../assets/profileImage.jpg";
import ImageView from "./ImageView";

function MainContainer() {
  const [showTag, setShowTag] = useState(false);
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);
  const [profileIamgeVisibility, setprofileIamgeVisibility] = useState(false);

   useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/yogeshgosavii');
        const data = await response.json();
        setFollowers(data.followers);
        setFollowing(data.following);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGithubData();
  }, []);
  return (
    <div className="">
    <div className="flex-1 flex flex-col md:flex-row mt-10 justify-center outline-none md:mt-[39px] px-4 pb-10 text-gray-200 md:px-[32px] gap-[23px] ">
      <div className=" flex flex-col md:max-w-[298px] ml-0 sm:-ml-px">
        <div className="flex md:flex-col order-1 ">
          <div className="flex relative  items-center "
             >
            <img
                className="aspect-square cursor-pointer min-w-[58px] max-h-[100px] md:max-h-full sm:w-fit max-w-full   border-2 border-[#30363d] rounded-full"
                // src="https://avatars.githubusercontent.com/u/43775498?v=4"
                height={30}
                width={30}
                onClick={()=>{setprofileIamgeVisibility(true)}}
                src={profilImage}
              />
              <p className="md:flex items-center absolute  left-[260px] bottom-8 hidden bg-[#0d1117] border border-[#30363d] cursor-default rounded-full px-2 py-[7px]" onMouseEnter={() => setShowTag(true)} onMouseLeave={() => setShowTag(false)}>🎯<span className={`text-sm ml-1 cursor-text ${!showTag?"hidden":null}`}> Focusing</span></p>
          </div>
          <div className="ml-4 md:ml-0 flex-1 flex flex-col justify-center align-middle leading-3 -mt-[3px] ">
            <p className="text-2xl font-semibold md:mt-[15px]">Yogesh Gosavi</p>
            <p className="text-xl font-light sm:font-thin text-[#848d97] bg-transparent ">
              yogeshgosavii
            </p>
          </div>
        </div>
        <div className="w-full flex md:order-2 order-last justify-between gap-2 font-medium text-sm mt-3.5">
          <a href="https://github.com/yogeshgosavii" className="border text-center  bg-[#21262d]  hover:bg-[#292e36] py-[5px] w-full rounded-md border-[#30363d]">
            Go to github profile
          </a>
          <button className="border w-full hidden  bg-[#21262d] hover:bg-[#292e36] justify-center items-center gap-1.5 rounded-md border-[#30363d]">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-heart icon-sponsor mr-1 v-align-middle color-fg-sponsors anim-pulse-in"
            >
              <path
                fill="#db61a2"
                d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"
              ></path>
            </svg>
            <p>Sponsor</p>
          </button>
        </div>
        <div className="order-2">
          <p className="flex md:hidden mt-3 items-center bottom-8 w-fit bg-[#0d1117] border border-[#30363d] cursor-default rounded-lg px-2 py-[2px] ">🎯<span className={`text-sm ml-1 cursor-text `}> Focusing</span></p>

          <p className="mt-2 ">
            MCA Student 👨🏻‍💻 Texh Enthusiast ⚡️ Building cool things on the web
            🚀 Sharing experience
          </p>
        </div>
        <div className="flex items-end order-5 md:order-3 text-sm space-x-1 mt-3 font-bold">
          <svg
            text="muted"
            aria-hidden="true"
            height="18"
            fill="#848d97"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-people pb-0.5"
          >
            <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
          </svg>
          <p>
            {" "}
            {followers}<span className="text-[#848d97] font-normal"> followers</span> · {following}{" "}
            <span className="text-[#848d97] font-normal">following</span>
          </p>
        </div>
        <div className="mt-5 space-y-2 order-4 text-sm">
          <div className="flex items-center gap-2">
            <svg
              class="octicon octicon-location"
              fill="#848d97"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
            </svg>
            <p>Mumbai ,India</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              class="octicon octicon-mail"
              viewBox="0 0 16 16"
              version="1.1"
              fill="#848d97"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
            </svg>
            <p>yogeshgosavif8@gmail.com</p>
          </div>
          <div className="flex  gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#848d97"
              viewBox="0 0 16 16"
              role="img"
              aria-labelledby="anoxoivoozzyddzns0wsn7xrxnzqxmx5"
              class="octicon mt-[2px]"
            >
              <title id="anoxoivoozzyddzns0wsn7xrxnzqxmx5">LinkedIn</title>
              <g clip-path="url(#clip0_202_91845)">
                <path
                  d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <a href="https://www.linkedin.com/in/yogesh-gosavi-202704256">https://www.linkedin.com/in/yogesh-gosavi-202704256</a>
          </div>
          <div className=" items-center hidden gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#848d97"
              role="img"
              aria-labelledby="ajlvjjvzlnr8jondgp2202qf4kw53d17"
              class="octicon"
            >
              <title id="ajlvjjvzlnr8jondgp2202qf4kw53d17">X</title>
              <g clip-path="url(#clip0_1668_3024)">
                <path
                  d="M9.52217 6.77143L15.4785 0H14.0671L8.89516 5.87954L4.76437 0H0L6.24656 8.8909L0 15.9918H1.41155L6.87321 9.78279L11.2356 15.9918H16L9.52183 6.77143H9.52217ZM7.58887 8.96923L6.95596 8.0839L1.92015 1.03921H4.0882L8.15216 6.7245L8.78507 7.60983L14.0677 14.9998H11.8997L7.58887 8.96957V8.96923Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1668_3024">
                  <rect width="16" height="16" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <p>yogesh@twitterId</p>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-12   max-w-[850px] md:mt-px">
        <div className="border p-[24px] rounded-md border-[#30363d] text-gray-200  -mt-2 w-full">
          <p className="text-[12px] font-mono">
            yogeshgosavii
            <span className="text-gray-400 font-medium mx-px">/</span>
            README<span className="text-gray-400">.md</span>
          </p>
          <p className="text-[27px] font-semibold border-b border-[#30363db3] py-[6px] mt-[6px] text-center">
            Hello 👋, I'm Yogesh Gosavi
          </p>
          <p className="text-center mt-5 font-bold text-lg ">
            A pretty good Software Developer
          </p>
          <ul className="text-sm space-y-4 mt-8 list-disc mx-2 list-inside">
            <li>🌱 I’m currently working on Frontend Development</li>
            <li>👨‍💻 All of my projects are available here</li>
            <li>💬 Ask me about Javascript & Java</li>
            <li>
              📫 How to reach me{" "}
              <a className="text-blue-500 font-semibold cursor-pointer underline underline-offset-[3px]">
                yogeshgosavif8@gmail.com
              </a>
            </li>
          </ul>
          <div className="mt-8">
            <p className="text-xl font-medium">🛠 Languages and Tools</p>
            <div className="mt-4 space-y-1">
              <div className="flex flex-wrap gap-1">
                <img
                  src="https://camo.githubusercontent.com/f476465e45e884443c2332417256cfd84f520c061faaaa0eb607139df6c5e8da/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d2532334637444631433f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d303030303030266c6162656c436f6c6f723d25323346374446314326636f6c6f723d253233464643453541"
                  alt="JavaScript"
                  data-canonical-src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&amp;logo=javascript&amp;logoColor=000000&amp;labelColor=%23F7DF1C&amp;color=%23FFCE5A"
                />
                <img
                  src="https://camo.githubusercontent.com/1c1b141d32f5e01a0c794c685f1c38f7b857f1ecdf6e0772ad38ded52529c675/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f432532422532422d3030353939433f7374796c653d666f722d7468652d6261646765266c6f676f3d63253242253242266c6f676f436f6c6f723d7768697465"
                  alt="C++"
                  data-canonical-src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&amp;logo=c%2B%2B&amp;logoColor=white"
                />
                <span className="bg-red-600 flex text-[12px] font-bold items-center font-mono px-4 py-1 gap-2">
                  <svg
                    class=" fill-white h-4 w-4"
                    viewBox="0 0 384 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeWidth={"2px"}
                      d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"
                    ></path>
                  </svg>
                  <p className="tracking-[0.2em]">JAVA </p>
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                <img
                  src="https://camo.githubusercontent.com/a01e0faed26e233cce09b2dd2e123d53ba1bbc9577f9dda2af21807e1b2d6b34/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d48544d4c352d2532334534344432373f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d666666666666"
                  alt="HTML5"
                  data-canonical-src="https://img.shields.io/badge/-HTML5-%23E44D27?style=for-the-badge&amp;logo=html5&amp;logoColor=ffffff"
                />
                <img
                  src="https://camo.githubusercontent.com/53af3e7f3a72f9db3eff644f9ecce56088589f2656b2b349159d8020691905a3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d435353332d2532333135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333"
                  alt="CSS3"
                  data-canonical-src="https://img.shields.io/badge/-CSS3-%231572B6?style=for-the-badge&amp;logo=css3"
                />
                <img
                  src="https://camo.githubusercontent.com/86399f07eb1ad6a7962d16ad2b7b8a7ad6589b930787b6f61641f4bdbd5dc0c3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d52656163742d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d666666666666"
                  alt="React"
                  data-canonical-src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&amp;logo=react&amp;logoColor=ffffff"
                />
                <img
                  src="https://camo.githubusercontent.com/6c62369c4e99b8a15e8bc2252842ba29e6af1a870849ba36b78e534304113437/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5461696c77696e645f4353532d3338423241433f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465"
                  alt="Tailwind Css"
                  data-canonical-src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="font-mono bg-green-600 text-[12px] font-bold flex items-center px-3">
                  <p className="tracking-widest">SPRINGBOOT</p>
                </span>
                <span className="font-mono bg-blue-950 text-[12px] font-bold flex items-center px-3">
                  <p className="tracking-widest">SQL</p>
                </span>
                <img
                  src="https://camo.githubusercontent.com/4ae569342c64ecd9f0d7e7cbed78fffcca6a0f427e8efb4297c1d357dfb09074/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d3445413934423f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465"
                  alt="MongoDB"
                  data-canonical-src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                <img
                  src="https://camo.githubusercontent.com/619fd54a45f5cfaad63a1c76c6e7e2c1b9f297e782f0305711f84b58ab5fd8a0/687474703a2f2f696d672e736869656c64732e696f2f62616467652f2d5653253230436f64652d3030374143433f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d666666666666"
                  alt="VS Code"
                  data-canonical-src="http://img.shields.io/badge/-VS%20Code-007ACC?style=for-the-badge&amp;logo=visual-studio-code&amp;logoColor=ffffff"
                />
                <span className="text-[12px] font-bold px-3 flex items-center bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
                  <p className="tracking-widest">INTELLIJ</p>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 ">
            <p className="text-xl font-medium">⚙️ GitHub Analytics</p>
            <div className="bg-[#0a192c] px-5 py-4 border-[1px] max-w-80 border-gray-300 mt-5 rounded-md">
              <p className="text-[#3983f1] text-[15px] font-bold">
                My Programming Languages
              </p>
              <div class="flex h-1.5 mt-2 overflow-hidden rounded-full">
                <div class="bg-red-500 flex-grow w-[45%]"></div>
                <div class="bg-yellow-500 flex-grow w-[35%]"></div>
                <div class="bg-orange-500 flex-grow w-[10%]"></div>
                <div class="bg-purple-500 flex-grow w-[5%]"></div>
              </div>
              <div className="grid grid-cols-2 gap-1 mt-4 text-[11px] font-semibold">
                <div className="flex  items-center gap-1">
                  <p className="bg-amber-700 rounded-full h-2 w-2 "></p>
                  <p>Java</p>
                </div>
                <div className="flex  items-center gap-1">
                  <p className="bg-yellow-400 rounded-full h-2 w-2 "></p>
                  <p>Javascript</p>
                </div>
                <div className="flex  items-center gap-1">
                  <p className="bg-orange-500 rounded-full h-2 w-2 "></p>
                  <p>HTML</p>
                </div>
                <div className="flex  items-center gap-1">
                  <p className="bg-purple-500 rounded-full h-2 w-2 "></p>
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-xl font-medium">🤝🏻 Connect with Me</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="flex bg-blue-500 w-fit text-sm px-2 py-0.5 rounded-sm items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 16 16"
                  role="img"
                  aria-labelledby="anoxoivoozzyddzns0wsn7xrxnzqxmx5"
                  class="octicon"
                >
                  <title id="anoxoivoozzyddzns0wsn7xrxnzqxmx5">LinkedIn</title>
                  <g clip-path="url(#clip0_202_91845)">
                    <path
                      d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <a href="https://www.linkedin.com/in/yogesh-gosavi-202704256">https://www.linkedin.com/in/yogesh-gosavi-202704256</a>
              </div>
              <div className="flex bg-red-500 w-fit text-sm px-2 py-0.5 rounded-sm items-center gap-2">
                <svg
                    class="octicon octicon-mail"
                    viewBox="0 0 16 16"
                    version="1.1"
                    fill="#ffffff"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
                  </svg>
                <p>yogeshgosavif8@gmail.com</p>
              </div>
             
            </div>
          </div>
        </div>
        <div className=" w-full mt-6">
         <div className="flex justify-between items-center">
          <p>Pinned</p>
            <p className="text-[12px] hidden text-blue-500">
              Customize your pins
            </p>
          </div>
          <div className="grid md:grid-cols-2 text-[#848d97]  lg:grid-cols-2 mt-5 gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="border border-[#30363d] gap-3 p-4 flex flex-col space-y-2  rounded-md">
             <div className="flex-1  ">
                <div className="flex items-center gap-2 sm:justify-between ">
                    <div className="flex gap-2 items-center">
                      <svg aria-hidden="true" fill="#848d97" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                      </svg>
                      <p className="font-semibold text-sm text-blue-500 hover:underline cursor-pointer hover:underline-offset-2">Blogger</p>
                    </div>
                    <p className="border border-[#30363d] text-[12px]  px-2.5 text-gray-400 rounded-full">Public</p>
                  </div>
                <p className="text-[12px] mt-1.5  ">A blog posting website which make blogging esaier</p>
             </div>
              <div className="flex gap-4 flex-wrap">
                <div className="flex  items-center gap-1">
                  <p className="bg-yellow-400 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                  <p className="text-[12px]  -mt-[2px]">Javascript</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="bg-blue-500 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                    <p className="text-[12px] text-[#848d97] -mt-[2px]">React</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="bg-blue-400 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                    <p className="text-[12px]  -mt-[2px]">Tailwind</p>
                </div>
              </div>
            </div>
            <div className="border border-[#30363d] p-4 flex flex-col h-full space-y-2  rounded-md">
              <div className="flex-1 ">
                <div className="flex items-center gap-3 sm:justify-between ">
                  <div className="flex gap-2 items-center">
                    <svg aria-hidden="true" fill="#848d97" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <p className="font-semibold text-sm text-blue-500 hover:underline hover:underline-offset-2 cursor-pointer">GreenCircuit</p>
                  </div>
                  <p className="border border-[#30363d] text-[12px]  px-2.5 text-gray-400 rounded-full">Public</p>
                </div>
                <p className="text-[12px] mt-1.5 ">An Ewaste management website the manages the whole process from booking the appointment for the user to managing the appointments for the ewaste center to  an manages further till a good reward is added to the user's account </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="flex  items-center gap-1">
                  <p className="bg-red-600 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                  <p className="text-[12px] -mt-[2px]">Java</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="bg-yellow-400 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                    <p className="text-[12px] -mt-[2px]">Javascript</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="bg-green-600 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                    <p className="text-[12px]  -mt-[2px]">Springboot</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="bg-blue-500 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                    <p className="text-[12px]  -mt-[2px]">React</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="bg-blue-400 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                    <p className="text-[12px]  -mt-[2px]">Tailwind</p>
                </div>
              </div>
            </div>
            <div className="border border-[#30363d] flex flex-col p-4 space-y-2  rounded-md">
              <div className="flex-1">
                <div className="flex items-center gap-3 sm:justify-between ">
                  <div className="flex gap-2 items-center">
                    <svg aria-hidden="true" fill="#848d97" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <p className="font-semibold text-sm cursor-pointer text-blue-500 hover:underline hover:underline-offset-2">myLib</p>
                  </div>
                  <p className="border border-[#30363d] text-[12px]  px-2.5 text-gray-400 rounded-full">Public</p>
                </div>
                <p className="text-[12px]  mt-1.5">A library management system where you can create your own library system and assign ids to users/students and create different sections for admins and keep track of books and borrowed books</p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="flex  items-center gap-1">
                  <p className="bg-red-600 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                  <p className="text-[12px] -mt-[2px]">Java</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="bg-yellow-400 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                    <p className="text-[12px]  -mt-[2px]">Javascript</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="bg-green-600 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                    <p className="text-[12px] -mt-[2px]">Springboot</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="bg-green-400 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                    <p className="text-[12px]  -mt-[2px]">Thymeleaf</p>
                </div>
               
              </div>
            </div>
            <div className="border border-[#30363d] flex flex-col p-4 space-y-2  rounded-md">
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-1 sm:justify-between ">
                  <div className="flex gap-2 items-center">
                    <svg aria-hidden="true" fill="#848d97" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <p className="font-semibold text-sm text-blue-500 cursor-pointer hover:underline hover:underline-offset-2">ShopZ</p>
                  </div>
                  <p className="border border-[#30363d] text-[12px]  px-2.5 text-gray-400 rounded-full">Public</p>
                </div>
                <p className="text-[12px]   mt-1.5">A shopping application that makes shoppling in you locality easier and promotes local vendors , suggests you the nearest shops around you on the basis of your location. </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="flex  items-center gap-1">
                  <p className="bg-red-600 border border-[#30363d]  rounded-full h-3 w-3 "></p>
                  <p className="text-[12px]  -mt-[2px]">Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          <ImageView src={profilImage} visibility= {profileIamgeVisibility} setVisibility={setprofileIamgeVisibility}/>
    </div>

  );
}

export default MainContainer;
