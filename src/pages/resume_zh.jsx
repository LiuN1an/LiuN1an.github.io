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
      <div className="relative w-full py-12 px-6 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pb-28 dark:bg-gray-900 dark:text-white">
        <div className="prose mx-auto lg:prose-lg  dark:text-white prose-ul:dark:text-white prose-headings:dark:text-white prose-a:dark:text-white prose-blockquote:dark:text-white dark:marker:text-white prose-h3:dark:bg-gradient-to-r prose-h3:dark:from-gray-100 prose-h3:dark:to-slate-700 prose-h3:dark:text-black">
          <h2>刘年</h2>
          <p className="flex gap-6 items-center">
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
            {/* <div className="flex justify-start items-center gap-4">
              <section className="flex justify-center items-center gap-2">
                <FaWeixin className="dark:text-white" />
                <span>liun12n</span>
              </section>
              <section className="flex justify-center items-center gap-2">
                <FaPhone className="dark:text-white" />
                <span>17764593120</span>
              </section>
            </div> */}
          </p>
          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            教育经历
          </h3>
          <p className="flex justify-between items-center max-sm:flex-col max-sm:gap-2">
            <a
              href="https://www.163.com/dy/article/HKOS8HOG0552TYXN.html"
              target="_blank"
              className="tooltip"
              data-tip="下沙小清华,落寞的世界名校"
            >
              杭州电子科技大学
            </a>
            <span className="text-sm">毕业于2021年，硕士学历</span>
          </p>
          <p className="text-xs">
            有深度学习和神经网络的学术背景，主要研究方向是张量与递归神经网络的结合。在SCI
            Q2期刊发表一篇论文。
          </p>
          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            自我优势👌
          </h3>
          <div className="text-sm">
            <ul>
              <li>自我学习能力和自我驱动力很强</li>
              <li>
                具备技术优势，可以在熟悉工作流的前提下极大加快工作效率
              </li>
            </ul>
          </div>
          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            工作经历💡
          </h3>
          <div className="text-sm">
            <div className="flex gap-2 items-center">
              <h4 className="dark:text-white italic"># Crossspace</h4>
            </div>
            <div className="text-sm">
              <h5 className="font-bold">Feed流前端开发负责人</h5>
              <ul>
                <li>
                  负责feed流的代码重构和功能扩展，集成Google
                  reCAPTCHA，并结合Epic数据流管理开发新功能。
                </li>
                <li>构建关于公共模态和一些组件的基础架构。</li>
              </ul>
            </div>
          </div>
          <div className="text-sm">
            <div className="flex gap-2 items-center">
              <h4 className="dark:text-white italic"># 字节跳动</h4>
            </div>
            <div className="text-sm">
              <h5 className="font-bold">零代码平台</h5>
              <ul>
                <li>
                  作为移动端负责人，我负责所有组件的移动交互以及与开放平台的集成。
                </li>
              </ul>
              <h5 className="font-bold">低代码平台</h5>
              <ul>
                <li>
                  有带领团队的经验，曾带领五人团队完成平台级表单样式底层重构项目。
                </li>
                <li>
                  作为事件引擎的架构负责人，我负责支持平台内事件数据和运行时数据流的配置。
                </li>
                <li>
                  作为设计器多个插件工具的负责人，我负责工具内多个面板之间的数据互连。
                </li>
              </ul>
            </div>
          </div>
          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            项目经历
          </h3>
          <div className="text-sm border-b-slate-100 border-b-2">
            <h4>
              <a target="_blank" className="dark:text-white">
                量化回测因子实验系统
              </a>
              <h5 className="font-bold dark:text-white">经历</h5>
            </h4>
            <div className="border-dashed border-2 border-slate-300 rounded-md p-2">
              <span className="font-bold">
                技术栈: Python, Nextjs, FastAPI, Shell
              </span>
            </div>
            <ul>
              <li>
                使用asyncio和threads构建了一个支持批量策略执行，多维度参数调参，数据流流速控制以及内存增长控制的系统
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
              <h5 className="font-bold dark:text-white">经历</h5>
            </h4>

            <div className="border-dashed border-2 border-slate-300 rounded-md p-2">
              <span className="font-bold">
                技术栈: Nextjs,Prisma,Upstash,Lambda,SNS
              </span>
            </div>

            <ul className="">
              <li>
                Serverless 基建
                <ul>
                  <li>Vercel 配置</li>
                  <li>Data Proxy</li>
                  <li>AWS Queue</li>
                </ul>
              </li>
              <blockquote className="font-bold">
                成就
                <ul>
                  <li>在高峰期，每分钟30+新用户，每天10000+新用户</li>
                  <li>池的最大数据库连接数是300+</li>
                </ul>
              </blockquote>
              <li>
                前端
                <ul>
                  <li>基础设施，如模态，下拉，全局状态管理器。</li>
                  <li>Oauth鉴权集成</li>
                  <li>
                    前端开发基础功能
                    <ul>
                      <li>Card模块的URL自动截屏</li>
                      <li>可复用的公共模态框</li>
                      <li>Twitter&Discord的验证</li>
                      <li>进度条记录组件</li>
                    </ul>
                    <img
                      src={tasks01}
                      alt="task"
                      className="border-2 border-slate-300 rounded-xl border-solid dark:border-slate-600"
                    />
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
              <h5 className="font-bold">经历</h5>
            </h4>
            <ul>
              <li>Builder组织成员</li>
              <li>
                <a href="https://github.com/Dapp-Learning-DAO/Dapp-Learning/tree/main/basic">
                  翻译: basic06~11
                </a>
              </li>
            </ul>
          </div>

          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            玩具🔥
          </h3>

          <div className="border-dashed border-2 border-slate-300 rounded-md p-2 text-xs overflow-hidden whitespace-nowrap text-ellipsis">
            <span className="w-full font-bold">
              技术栈涵盖: Typescript,React,Webpack,ESP32,Python,Rust,Web3
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
                  hc-cli是一个命令行工具，它可以快速的创建一个前端项目，内部集成了包括浏览器插件，electron，普通web程序等启动模板
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
                <p>tree-mind是一个浏览器插件，可以用记录解决问题的步骤</p>
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
                  oauth基于nextAuth开发，它提供了渠道可以在鉴权期间自定义服务器需要维持的一些状态
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
                  Util-Tools是一个可以被用在其他项目的工具库，它包含了很多可以帮助快速开发的钩子函数以及一些设计模式
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
                <p>基于嵌入式与JS进行的集成实验，这是总结文章</p>
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
