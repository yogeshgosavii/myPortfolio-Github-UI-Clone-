import React from "react";
import githubLogoWhite from "../assets/github-mark-white.svg";

function Header() {
  return (
    <header className="w-full p-4 pb-0 min-w-96 bg-[#010409] border-b border-[#30363d]">
      <div className="flex justify-between">
        <div className="flex gap-4 text-gray-100 ">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-three-bars Button-visual h-8 w-8 text-[#848d97] px-[7px] border border-[#30363d] rounded-md"
          >
            <path
              d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"
              fill="#848d97"
            ></path>
          </svg>
          <img className="h-[31px] w-8" src={githubLogoWhite} />
          <p className="text-sm font-medium flex items-center">yogeshgosavii</p>
        </div>
        <div className="inline-flex text-[#848d97] gap-3">
          <div className="border border-[#30363d] rounded-md flex gap-2 items-center px-[7px]">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class=""
            >
              <path
                fill="#848d97"
                d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
              ></path>
            </svg>
            <input
              className="bg-transparent hidden lg:inline w-[279px] outline-none max-w-screen-sm text-white placeholder:text-[#848d97] text-sm"
              placeholder="Type to search"
            />
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              className="octicon hidden lg:inline octicon-command-palette border-l border-[#30363d] pl-[7px]"
            >
              <path
                fill="#848d97"
                d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"
              ></path>
            </svg>
          </div>
          <p className="border-l border-[#30363d] hidden sm:inline  m-[6px] mx-[4px]"></p>
          <div className="flex gap-[8px]">
            <span class="Button-content  border rounded-md px-[8px] gap-[9px] hidden sm:flex items-center border-[#30363d]">
              <span class="">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-plus"
                >
                  <path
                    fill="#848d97"
                    d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"
                  ></path>
                </svg>
              </span>
              <span class="Button-label">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-triangle-down"
                >
                  <path
                    fill="#848d97"
                    d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
                  ></path>
                </svg>
              </span>
            </span>
            <span className="border border-[#30363d] hidden sm:flex px-[7px] rounded-md  items-center ">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-issue-opened Button-visual"
              >
                <path
                  fill="#848d97"
                  d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                ></path>
                <path
                  fill="#848d97"
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
                ></path>
              </svg>
            </span>
            <span className="border  border-[#30363d] hidden sm:flex px-[7px] rounded-md  items-center ">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-git-pull-request Button-visual"
              >
                <path
                  fill="#848d97"
                  d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
                ></path>
              </svg>
            </span>
            <span className="border border-[#30363d] flex px-[7px] rounded-md  items-center ">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-inbox Button-visual"
              >
                <path
                  fill="#848d97"
                  d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"
                ></path>
              </svg>
            </span>
          </div>
          <span className="border  border-[#30363d] rounded-full overflow-hidden scale-110 ">
            <img
              className="inline rounded-md"
              src="https://avatars.githubusercontent.com/u/43775498?v=4"
              alt=""
              width="32"
              data-view-component="true"
              class=" h-[30px] w-[30px]"
            />
          </span>
        </div>
      </div>
      <div className="flex mt-[11px] -mb-[1px] justify-between">
      <ul className="text-white  flex gap-[8px] text-sm ">
        <li className="">
          <span className="px-[8px] font-medium py-[11px] flex items-center gap-2 ">
            <svg
              aria-hidden="true"
              fill="#848d97"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-book UnderlineNav-octicon"
            >
              <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
            </svg>
            <p>Overview</p>
          </span>
          <p className="bg-[#f78166] rounded-full w-full h-[2px] mt-px"></p>
        </li>
        <li className="">
          <span className="px-[8px]  py-[11px] flex items-center gap-2 ">
            <svg
              aria-hidden="true"
              fill="#848d97"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-repo UnderlineNav-octicon"
            >
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            <p>Repositories</p>
            <p className="bg-[#30363d]  justify-center rounded-full px-[4px] py-0.5 h-[20px] w-[20px] flex items-center text-clip text-[12px]">
              7
            </p>
          </span>
          <p className="bg-transparent rounded-full w-full h-[2px] mt-px"></p>
        </li>
        <li className="hidden sm:inline">
          <span className="px-[8px]  py-[11px] flex items-center gap-2 ">
            <svg
              aria-hidden="true"
              fill="#848d97"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-table UnderlineNav-octicon"
            >
              <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
            </svg>
            <p>Projects</p>
          </span>
          <p className="bg-transparent rounded-full w-full h-[2px] mt-px"></p>
        </li>
        <li className="hidden sm:inline">
          <span className="px-[8px]  py-[11px] flex items-center gap-2 ">
            <svg
              aria-hidden="true"
              fill="#848d97"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-package UnderlineNav-octicon"
            >
              <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
            </svg>
            <p>Packages</p>
          </span>
          <p className="bg-transparent rounded-full w-full h-[2px] mt-px"></p>
        </li>
        <li className="hidden sm:inline">
          <span className="px-[8px]  py-[11px] flex items-center gap-2 ">
            <svg
              aria-hidden="true"
              fill="#848d97"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-star UnderlineNav-octicon"
            >
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            <p>Stars</p>
          </span>
          <p className="bg-transparent rounded-full w-full h-[2px] mt-px"></p>
        </li>
      </ul>
        <div className="bg-[#21262d] mt-1 flex sm:hidden  items-center p-[7px] py-[6px] border border-[#30363d] rounded-md mb-2">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
            <path fill="#848d97" d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
