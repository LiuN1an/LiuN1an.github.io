import React, { useEffect, useState } from "react";
import hccli01 from "../assets/resume/hc-cli-01.jpeg";
import treemind01 from "../assets/resume/tree-mind-01.jpeg";
import oauth01 from "../assets/resume/oauth-01.png";
import tool01 from "../assets/resume/tool-01.jpg";
import blocks01 from "../assets/resume/blocks-01.jpg";
import tasks01 from "../assets/resume/tasks-01.gif";
import JSEmbed01 from "../assets/resume/JS-embed-01.mp4";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useColorMode } from "@chakra-ui/react";

// https://emojipedia.org/party-popper/
// https://github.com/Hubery-Lee/Notes/blob/master/%E5%A6%82%E4%BD%95%E5%9C%A8github%E4%B8%8A%E5%86%99%E5%87%BA%E6%BC%82%E4%BA%AE%E7%9A%84readme.md.md

function copyToClipboard(text) {
  // 创建一个临时的 textarea 元素
  const tempTextArea = document.createElement("textarea");

  // 设置文本内容
  tempTextArea.value = text;

  // 将 textarea 元素添加到文档中
  document.body.appendChild(tempTextArea);

  // 选中文本
  tempTextArea.select();

  // 将文本复制到剪贴板
  document.execCommand("copy");

  // 删除 textarea 元素
  document.body.removeChild(tempTextArea);
}

export const Resume = () => {
  const [tip, setTip] = useState(false);

  return (
    <div className="transition-all duration-300 min-h-screen bg-gray-50 py-8 flex flex-col relative overflow-hidden dark:bg-[#231815] dark:text-white">
      <div className="relative w-full py-12 px-6 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pb-28 dark:bg-gray-900 dark:text-white">
        <div className="prose mx-auto lg:prose-lg  dark:text-white prose-ul:dark:text-white prose-headings:dark:text-white prose-a:dark:text-white prose-blockquote:dark:text-white dark:marker:text-white prose-h3:dark:bg-gradient-to-r prose-h3:dark:from-gray-100 prose-h3:dark:to-slate-700 prose-h3:dark:text-black">
          <h2>Liunian</h2>
          <p className="flex gap-6">
            <a
              href="https://github.com/LiuN1an"
              target="_blank"
              className="tooltip"
              data-tip="github"
            >
              <FaGithub className="dark:text-white" />
            </a>
            <a
              href="https://twitter.com/PeterLiuN1an"
              target="_blank"
              className="tooltip"
              data-tip="twitter"
            >
              <FaTwitter className="text-blue-400" />
            </a>
            <div
              className="tooltip hover:cursor-pointer text-red-800"
              data-tip="email"
              onClick={() => {
                copyToClipboard("liun1an2019hkw@gmail.com");
                setTip(true);
                setTimeout(() => setTip(false), 1000);
              }}
            >
              <AiOutlineMail />
            </div>
          </p>
          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            Education🏫
          </h3>
          <p className="flex justify-between items-center max-sm:flex-col max-sm:gap-2">
            <a
              href="https://www.163.com/dy/article/HKOS8HOG0552TYXN.html"
              target="_blank"
              className="tooltip"
              data-tip="下沙小清华,落寞的世界名校"
            >
              HangZhouDianZi
            </a>
            <span className="text-sm">
              Master's degree, graduated in 2021
            </span>
          </p>
          <p className="text-xs">
            Have an academic background in deep learning and neural
            networks, and my research focuses on the combination of tensors
            and recurrent neural networks. Published a paper in a SCI Q2
            journal.
          </p>
          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            Jobs💡
          </h3>
          <div className="text-sm">
            <div className="flex gap-2 items-center">
              <h4 className="dark:text-white italic">
                # Crossspace(remote): 05/2023 ~ 09/2023
              </h4>
            </div>
            <div className="text-sm">
              <h5 className="font-bold">Feed Development</h5>
              <ul>
                <li>
                  Responsible for code refactoring and feature expansion of
                  the feed stream, integrating Google reCAPTCHA , and
                  developing new features in conjunction with Epic data
                  flow management.
                </li>
                <li>
                  Build infra about common modal and some components.
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm">
            <div className="flex gap-2 items-center">
              <h4 className="dark:text-white italic"># ByteDance: 06/2021 ~ 05/2023</h4>
            </div>
            <div className="text-sm">
              <h5 className="font-bold">Zero Code Platform</h5>
              <ul>
                <li>
                  As the mobile lead, I am responsible for all the mobile
                  interactions of the components as well as the integration
                  with the open platform.
                </li>
              </ul>
              <h5 className="font-bold">Low Code Platform</h5>
              <ul>
                <li>
                  Have experience leading a team and have led a team of
                  five employees in a platform-level form style redesign
                  project.
                </li>
                <li>
                  As the architecture lead for the event engine, I am
                  responsible for supporting the configuration of event
                  data and runtime data flow within the platform.
                </li>
                <li>
                  As the architecture lead for the design tool, I am
                  responsible for the interconnection of data across
                  multiple panels within the tool.
                </li>
              </ul>
            </div>
          </div>
          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            Projects❤️
          </h3>
          <div className="text-sm border-b-slate-100 border-b-2">
            <h4>
              <a target="_blank" className="dark:text-white">
                Quantitative back testing factor analysis system
              </a>
              <h5 className="font-bold dark:text-white">Experience</h5>
            </h4>
            <div className="border-dashed border-2 border-slate-300 rounded-md p-2">
              <span className="font-bold">
                Stack: Python, Nextjs, FastAPI, Shell
              </span>
            </div>
            <ul>
              <li>
                Using asyncio and threads to build a system with batch
                execution of strategies, compatibility with
                multidimensional parameters, control of data flow rate, and
                control of memory consumption rate.
              </li>
            </ul>
          </div>
          <div className="text-sm border-b-slate-100 border-b-2">
            <h4>
              <a
                href="https://nextme.one"
                target="_blank"
                className="dark:text-white"
              >
                Nextme
              </a>
              <h5 className="font-bold dark:text-white">Experience</h5>
            </h4>

            <div className="border-dashed border-2 border-slate-300 rounded-md p-2">
              <span className="font-bold">
                Stack: Nextjs,Prisma,Upstash,Lambda,SNS
              </span>
            </div>

            <ul className="">
              <li>
                Serverless Infra
                <ul>
                  <li>Vercel Config</li>
                  <li>Data Proxy</li>
                  <li>AWS Queue</li>
                </ul>
              </li>
              <blockquote className="font-bold">
                Achieve
                <ul>
                  <li>
                    At peak, 30+ new users per minute, 10000+ new users per
                    day
                  </li>
                  <li>
                    The maximum database connection is 300+ with pool
                  </li>
                </ul>
              </blockquote>
              <li>
                Frontend
                <ul>
                  <li>
                    Infra like modal, dropdown, global state manager.
                  </li>
                  <li>All oauth ways</li>
                  <li>
                    Blocks
                    <img
                      src={blocks01}
                      alt={"blocks"}
                      className="border-2 border-slate-300 rounded-xl border-solid dark:border-slate-600"
                    />
                    <ul>
                      <li>Screenshot for URL in card</li>
                      <li>Common form models that can be reused</li>
                    </ul>
                  </li>
                  <li>
                    Tasks
                    <img
                      src={tasks01}
                      alt="task"
                      className="border-2 border-slate-300 rounded-xl border-solid dark:border-slate-600"
                    />
                    <ul>
                      <li>Twitter & Discord auth</li>
                      <li>Progress Recorder</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="text-sm border-b-slate-100 border-b-2">
            <h4>
              <a href="https://github.com/Dapp-Learning-DAO/Dapp-Learning">
                Dapp Learning
              </a>
              <h5 className="font-bold">Experience</h5>
            </h4>
            <ul>
              <li>One of the builder group</li>
              <li>
                <a href="https://github.com/Dapp-Learning-DAO/Dapp-Learning/tree/main/basic">
                  Translation: basic06~11
                </a>
              </li>
            </ul>
          </div>

          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            Plays🔥
          </h3>

          <div className="border-dashed border-2 border-slate-300 rounded-md p-2 text-xs overflow-hidden whitespace-nowrap text-ellipsis">
            <span className="w-full font-bold">
              Includes: Typescript,React,Webpack,ESP32,Python,Rust,Web3
            </span>
          </div>

          <div className="grid gap-8 grid-cols-2 pt-8 max-sm:grid-cols-1">
            <div className="card card-compact shadow-xl hover:shadow-2xl duration-150 dark:shadow-white">
              <figure style={{ marginBottom: 0, marginTop: 0 }}>
                <img
                  src={hccli01}
                  alt="Prompt"
                  className="w-full h-auto max-h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <a
                  target="_blank"
                  href="https://github.com/LiuN1an/hc-cli"
                >
                  hc-cli
                </a>
                <p>
                  hc-cli is a small command tool to quickly build a react
                  project. It provides some templates.
                </p>
              </div>
            </div>

            <div className="card card-compact shadow-xl hover:shadow-2xl duration-150 dark:shadow-white">
              <figure style={{ marginBottom: 0, marginTop: 0 }}>
                <img
                  src={treemind01}
                  alt="Prompt"
                  className="w-full h-auto max-h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <a
                  target="_blank"
                  href="https://github.com/LiuN1an/tree-mind"
                >
                  tree-mind
                </a>
                <p>
                  tree-mind is a chrome extensions, which is used to record
                  steps of solving a problem.
                </p>
              </div>
            </div>

            <div className="card card-compact shadow-xl hover:shadow-2xl duration-150 dark:shadow-white">
              <figure style={{ marginBottom: 0, marginTop: 0 }}>
                <img
                  src={oauth01}
                  alt="Prompt"
                  className="w-full h-auto max-h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <a target="_blank" href="https://github.com/LiuN1an/oauth">
                  oauth
                </a>
                <p>
                  oauth is based on nextAuth, it provide a way to customize
                  the content of state during the process of oauth.
                </p>
              </div>
            </div>

            <div className="card card-compact shadow-xl hover:shadow-2xl duration-150 dark:shadow-white">
              <figure style={{ marginBottom: 0, marginTop: 0 }}>
                <img
                  src={tool01}
                  alt="Prompt"
                  className="w-full h-auto max-h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <a
                  target="_blank"
                  href="https://github.com/LiuN1an/Util-Tools"
                >
                  Util-Tools
                </a>
                <p>
                  Util-Tools is a private library which is used in common
                  projects, it contains many small tools or examples to
                  accelerate developing
                </p>
              </div>
            </div>

            <div className="card card-compact shadow-xl hover:shadow-2xl duration-150 dark:shadow-white">
              <figure style={{ marginBottom: 0, marginTop: 0 }}>
                <video autoplay>
                  <source src={JSEmbed01} type="video/mp4" />
                </video>
              </figure>
              <div className="card-body">
                <a
                  target="_blank"
                  href="https://glidkz06tv.feishu.cn/docs/doccnDHmn13Jg9Si6hG8IseVrkg"
                >
                  JS Embedded Development
                </a>
                <p>An ancient original article</p>
              </div>
            </div>
          </div>

          <h3></h3>
        </div>
      </div>

      <div
        className={`alert alert-success shadow-lg w-1/2 translate-x-1/2 opacity-0 duration-300 fixed bottom-0 ${
          tip ? "bottom-2 opacity-100 " : ""
        }`}
      >
        <div className="overflow-hidden whitespace-nowrap text-ellipsis flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs">Your have Copy it!</span>
        </div>
      </div>
    </div>
  );
};
