import React, { useEffect, useState } from "react";
import hccli01 from "../assets/resume/hc-cli-01.jpeg";
import treemind01 from "../assets/resume/tree-mind-01.jpeg";
import oauth01 from "../assets/resume/oauth-01.png";
import tool01 from "../assets/resume/tool-01.jpg";
import blocks01 from "../assets/resume/blocks-01.jpg";
import tasks01 from "../assets/resume/tasks-01.gif";
import JSEmbed01 from "../assets/resume/JS-embed-01.mp4";
import { FaTwitter, FaGithub, FaWeixin, FaPhone } from "react-icons/fa";
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
      <div
        id="save_to_pdf_id_en"
        className="relative w-full py-12 px-6 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pb-28 dark:bg-gray-900 dark:text-white"
      >
        <div className="prose mx-auto lg:prose-lg  dark:text-white prose-ul:dark:text-white prose-headings:dark:text-white prose-a:dark:text-white prose-blockquote:dark:text-white dark:marker:text-white prose-h3:dark:bg-gradient-to-r prose-h3:dark:from-gray-100 prose-h3:dark:to-slate-700 prose-h3:dark:text-black prose-h3:mt-1 prose-h4:mt-1">
          <div id="save_to_pdf_content_en">
            <h2 id="en_name">Liunian</h2>
            <p
              className="flex gap-6 items-center"
              data-html2canvas-ignore="true"
            >
              <a
                data-pdf-link
                href="https://github.com/LiuN1an"
                target="_blank"
                className="tooltip"
                data-tip="Github"
              >
                <FaGithub className="dark:text-white" />
              </a>
              <div
                className="tooltip hover:cursor-pointer"
                data-tip="Wechat"
                onClick={() => {
                  copyToClipboard("liun12n");
                  setTip(true);
                  setTimeout(() => setTip(false), 1000);
                }}
              >
                <FaWeixin className="text-green-500" />
              </div>
              <div
                className="tooltip hover:cursor-pointer text-red-800"
                data-tip="Email"
                onClick={() => {
                  copyToClipboard("liun1an2019hkw@gmail.com");
                  setTip(true);
                  setTimeout(() => setTip(false), 1000);
                }}
              >
                <AiOutlineMail />
              </div>
              <div
                className="tooltip hover:cursor-pointer text-red-800"
                data-tip="Phone"
                onClick={() => {
                  copyToClipboard("17764593120");
                  setTip(true);
                  setTimeout(() => setTip(false), 1000);
                }}
              >
                <FaPhone />
              </div>
            </p>
            <p className="hidden gap-6 " id="person_contact_en">
              <span className="flex gap-2 items-center">
                <FaGithub className="dark:text-white" />
                <span>https://github.com/LiuN1an</span>
              </span>
              <span className="flex gap-2 items-center">
                <FaWeixin className="text-green-500" />
                <span>liun12n</span>
              </span>
              <span className="flex gap-2 items-center">
                <FaPhone />
                <span>+86 17764593120</span>
              </span>
            </p>
            <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
              Education🏫
            </h3>
            <p className="flex justify-between items-center max-sm:flex-col max-sm:gap-2">
              <a
                data-pdf-link
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
              Have an academic background in deep learning and neural networks,
              and my research focuses on the combination of tensors and
              recurrent neural networks. Published a paper in a SCI Q2 journal.
            </p>
            <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
              Jobs💡
            </h3>
            <div className="text-sm">
              <div className="flex gap-2 items-center">
                <h4 className="dark:text-white italic">
                  # Oriental Securities Department: 05/2023 ~ now
                </h4>
              </div>
              <div className="border-dashed border-2 border-slate-300 rounded-md p-2 text-sm mb-2">
                <span className="font-bold">
                  Stack: Nextjs, Mobx, Tailwind, Highchart, Lightchart, Python
                </span>
              </div>
              <div className="text-sm">
                <h5 className="font-bold">Quantization platform leader</h5>
                <ul>
                  <li>
                    Responsible for refactoring and upgrading the internal
                    backtest system, optimizing the overall backtest speed by
                    more than 10 times and expanding the multi-dimensional
                    factor architecture.
                  </li>
                  <li>
                    The backtest, analog disk and real disk environment is
                    unified, truly achieve a multi-purpose code, reducing 90% of
                    the vulnerabilities caused by policy migration.
                  </li>
                  <li>
                    Build a data visualization analysis platform, customize data
                    protocols and charting capabilities to help strategy
                    research and development perform complex analysis
                  </li>
                  <li>
                    <a
                      data-pdf-link
                      href="https://github.com/LiuN1an/SH-Quant"
                      target="__blank"
                    >
                      Open Source with Python Simple Core
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-sm">
              <div className="flex gap-2 items-center">
                <h4 className="dark:text-white italic">
                  # ByteDance: 06/2021 ~ 05/2023
                </h4>
              </div>
              <div className="border-dashed border-2 border-slate-300 rounded-md p-2 text-sm mb-2">
                <span className="font-bold">
                  Stack: React, Mobx, Webpack, H5
                </span>
              </div>
              <div className="text-sm">
                <h5 className="font-bold">Zero Code Platform</h5>
                <ul>
                  <li>
                    As the mobile H5 lead, I am responsible for all the mobile
                    interactions of the components as well as the integration
                    with the open platform.
                  </li>
                </ul>
                <h5 className="font-bold">Low Code Platform</h5>
                <ul>
                  <li>
                    Have experience leading a team and have led a team of five
                    employees in a platform-level form style redesign project.
                  </li>
                  <li>
                    As the architecture lead for the event engine, I am
                    responsible for supporting the configuration of event data
                    and runtime data flow within the platform.
                  </li>
                  <li>
                    As the architecture lead for the design tool, I am
                    responsible for the interconnection of data across multiple
                    panels within the tool.
                  </li>
                  <li>
                    <a
                      target="__blank"
                      href="https://github.com/LiuN1an/Util-Tools/tree/main/src/Form"
                    >
                      The Core of Form Engine
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
              Projects❤️
            </h3>
            <div className="text-sm border-b-slate-100 border-b-2">
              <h4>
                <a
                  data-pdf-link
                  href="https://app.crossspace.io/"
                  target="_blank"
                  className="dark:text-white"
                >
                  Crossspace
                </a>
                <h5 className="font-bold dark:text-white">Experience</h5>
              </h4>
              <div className="border-dashed border-2 border-slate-300 rounded-md p-2">
                <span className="font-bold">
                  Stack: Nextjs, Rxjs, Ant-Design
                </span>
              </div>
              <ul>
                <li>
                  Responsible for code refactoring and feature expansion of the
                  feed stream, integrating Google reCAPTCHA , and developing new
                  features in conjunction with Epic data flow management. .
                </li>
              </ul>
            </div>
            <div className="text-sm border-b-slate-100 border-b-2">
              <h4>
                <a
                  data-pdf-link
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
                      Through the configuration, it ensures the frequent access
                      of 30+ new users per minute and 10000+ new users per day
                      during the peak period
                    </li>
                  </ul>
                </blockquote>
                <li>
                  Backend
                  <ul>
                    <li>API Develop, connected with Prisma and MongoDB</li>
                    <li>Screenshot for URL based on AWS Queue</li>
                  </ul>
                </li>
                <li>
                  Frontend
                  <ul>
                    <li>Infra like modal, dropdown, global state manager.</li>
                    <li>
                      <a
                        target="_blank"
                        href="https://github.com/LiuN1an/oauth"
                        className="dark:text-white"
                      >
                        Oauth Integration
                      </a>
                      (wrapped in lib)
                    </li>
                    <li>Twitter & Discord auth</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="text-sm">
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
          </div>

          <div data-html2canvas-ignore="true">
            <h3
              data-html2canvas-ignore="true"
              className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl"
            >
              Plays🔥
            </h3>

            <div
              data-html2canvas-ignore="true"
              className="border-dashed border-2 border-slate-300 rounded-md p-2 text-xs overflow-hidden whitespace-nowrap text-ellipsis"
            >
              <span className="w-full font-bold">
                Includes: Typescript,React,Webpack,ESP32,Python,Rust,Web3,Taro
              </span>
            </div>

            <div
              data-html2canvas-ignore="true"
              className="grid gap-8 grid-cols-2 pt-8 max-sm:grid-cols-1"
            >
              <div className="card card-compact shadow-xl hover:shadow-2xl duration-150 dark:shadow-white">
                <figure style={{ marginBottom: 0, marginTop: 0 }}>
                  <img
                    src={hccli01}
                    alt="Prompt"
                    className="w-full h-auto max-h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <a target="_blank" href="https://github.com/LiuN1an/hc-cli">
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
                    This is a toolkit that encapsulates my past programming
                    experience. Any components or patterns that require
                    thoughtful design will be documented here for future
                    reference.
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
                    data-pdf-link
                    target="_blank"
                    href="https://glidkz06tv.feishu.cn/docs/doccnDHmn13Jg9Si6hG8IseVrkg"
                  >
                    JS Embedded Development
                  </a>
                  <p>An ancient original article</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="hidden justify-center items-center flex-col mt-3 text-xs text-gray-600 gap-2 dark:text-white"
            id="move_please_en"
          >
            <div>More Details, Please visit</div>
            <div>https://liun1an.github.io</div>
          </div>
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
