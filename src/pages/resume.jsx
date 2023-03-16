import React, { useEffect, useState } from "react";
import hccli01 from "../assets/resume/hc-cli-01.jpeg";
import treemind01 from "../assets/resume/tree-mind-01.jpeg";
import oauth01 from "../assets/resume/oauth-01.png";
import tool01 from "../assets/resume/tool-01.jpg";
import blocks01 from "../assets/resume/blocks-01.jpg";
import tasks01 from "../assets/resume/tasks-01.gif";
import JSEmbed01 from "../assets/resume/JS-embed-01.mp4";

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
    <div className="min-h-screen bg-gray-50 py-8 flex flex-col  relative overflow-hidden dark:bg-gray-600 dark:text-white transition-colors duration-300">
      <div className="relative w-full py-12 px-6 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pb-28 dark:bg-gray-900 dark:text-white">
        <div className="prose mx-auto lg:prose-lg">
          <h2>Liunian</h2>
          <p className="flex gap-6">
            <a
              href="https://github.com/LiuN1an"
              target="_blank"
              className="tooltip"
              data-tip="github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/PeterLiuN1an"
              target="_blank"
              className="tooltip text-blue-400"
              data-tip="twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
                />
              </svg>
            </a>
            <div
              className="tooltip hover:cursor-pointer"
              data-tip="email"
              onClick={() => {
                copyToClipboard("liun1an2019hkw@gmail.com");
                setTip(true);
                setTimeout(() => setTip(false), 1000);
              }}
            >
              <svg
                t="1678825732956"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3443"
                width="24"
                height="24"
              >
                <path
                  d="M874.666667 181.333333H149.333333c-40.533333 0-74.666667 34.133333-74.666666 74.666667v512c0 40.533333 34.133333 74.666667 74.666666 74.666667h725.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V256c0-40.533333-34.133333-74.666667-74.666666-74.666667z m-725.333334 64h725.333334c6.4 0 10.666667 4.266667 10.666666 10.666667v25.6L512 516.266667l-373.333333-234.666667V256c0-6.4 4.266667-10.666667 10.666666-10.666667z m725.333334 533.333334H149.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667V356.266667l356.266666 224c4.266667 4.266667 10.666667 4.266667 17.066667 4.266666s12.8-2.133333 17.066667-4.266666l356.266666-224V768c0 6.4-4.266667 10.666667-10.666666 10.666667z"
                  fill="#d81e06"
                  p-id="3444"
                ></path>
              </svg>
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
              <h4>ByteDance</h4>
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
              <a href="https://nextme.one" target="_blank">
                Nextme
              </a>
              <h5 className="font-bold">Experience</h5>
            </h4>

            <div className="border-dashed border-2 border-slate-300 rounded-md p-2">
              <span className="font-bold">
                Stack: Nextjs,Prisma,Upstash,Lambda,SNS
              </span>
            </div>

            <ul>
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
                      className="border-2 border-slate-300 rounded-xl"
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
                      className="border-2 border-slate-300 rounded-xl"
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
            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl duration-150">
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

            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl duration-150">
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

            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl duration-150">
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

            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl duration-150">
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

            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl duration-150">
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
