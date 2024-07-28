import React, { useEffect, useState } from "react";
import hh from "../assets/resume/hh_main.jpg";
import hh_assistant from "../assets/resume/hh_assistant.jpg";
import { FaGithub, FaWeixin, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

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
        className="relative w-full py-12 px-6 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pb-28 dark:bg-gray-900 dark:text-white"
        id="save_to_pdf_id_zh"
      >
        <div className="prose mx-auto lg:prose-lg  dark:text-white prose-ul:dark:text-white prose-headings:dark:text-white prose-a:dark:text-white prose-blockquote:dark:text-white dark:marker:text-white prose-h3:dark:bg-gradient-to-r prose-h3:dark:from-gray-100 prose-h3:dark:to-slate-700 prose-h3:dark:text-black prose-h3:mt-1 prose-h4:mt-1">
          <div id="save_to_pdf_content_zh">
            <h2 id="zh_name">刘年</h2>
            <p
              className="flex gap-6 items-center"
              data-html2canvas-ignore="true"
            >
              <a
                href="https://github.com/LiuN1an"
                target="_blank"
                className="tooltip"
                data-tip="Github"
              >
                <FaGithub className="dark:text-white" />
              </a>
              <div
                className="tooltip hover:cursor-pointer"
                data-tip="微信"
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
                data-tip="邮箱"
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
                data-tip="电话"
                onClick={() => {
                  copyToClipboard("17764593120");
                  setTip(true);
                  setTimeout(() => setTip(false), 1000);
                }}
              >
                <FaPhone />
              </div>
            </p>
            <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
              教育经历🏫
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
              工作经历💡
            </h3>
            <div className="text-sm mb-4">
              <div className="flex gap-2 items-center">
                <h4 className="dark:text-white italic"># AI截流工具(创业)</h4>
              </div>
              <div className="text-sm">
                <h5 className="font-bold">创始人</h5>
                <ul>
                  运营工作
                  <ul>
                    <li>前期稳定进线10+人</li>
                    <li>
                      链接了一个比较大的IP,准备尝试高频截流,但是由于成本问题后续没有进行
                    </li>
                  </ul>
                </ul>
                <ul>
                  开发工作
                  <ul>
                    <li>全套脚本开发</li>
                  </ul>
                </ul>
                <ul>
                  学习到的经验
                  <ul>
                    <li>了解了多平台的私域引流打法</li>
                    <li>对于小红书的自热和截流有很深的体会</li>
                    <li>摸通了技术上前端引流闭环的细节</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="text-sm mb-4">
              <div className="flex gap-2 items-center">
                <h4 className="dark:text-white italic"># 火花AIGC平台(创业)</h4>
              </div>
              <div className="flex gap-1">
                <img src={hh} className="w-1/2" />
                <img src={hh_assistant} className="w-1/2" />
              </div>
              <div className="text-sm">
                <h5 className="font-bold">创始人</h5>
                <ul>
                  运营工作
                  <ul>
                    <li>尝试多渠道发布包括知乎,qq群等</li>
                    <li>抖音IP打造, 最爆视频播放量达到六百万+</li>
                  </ul>
                </ul>
                <blockquote className="font-bold">
                  成就
                  <ul>
                    <li>前期每日稳定进线20+人</li>
                  </ul>
                </blockquote>
                <ul>
                  开发工作
                  <ul>
                    <li>开发平台图片列表</li>
                    <li>开发提示词助手</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="text-sm">
              <div className="flex gap-2 items-center">
                <h4 className="dark:text-white italic"># 字节跳动(技术)</h4>
              </div>
              <div className="text-sm">
                <h5 className="font-bold">开发工程师</h5>
                <ul>
                  零代码平台
                  <li>
                    作为移动端h5负责人，负责所有组件的移动交互以及与开放平台的集成。
                  </li>
                </ul>
                <ul>
                  低代码平台
                  <li>
                    有带领团队的经验，曾带领五人团队完成平台级表单样式底层重构项目。
                  </li>
                  <li>部分模块负责人,事件引擎和表单引擎的开发者</li>
                </ul>
              </div>
            </div>
            <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
              其他项目经历❤️
            </h3>
            <div className="text-sm border-b-slate-100 border-b-2">
              <h4>
                <a
                  href="https://app.crossspace.io/"
                  target="_blank"
                  className="dark:text-white"
                >
                  Crossspace
                </a>
                <h5 className="font-bold dark:text-white">经历</h5>
              </h4>
              {/* <div className="border-dashed border-2 border-slate-300 rounded-md p-2">
                <span className="font-bold">
                  技术栈: Nextjs, Rxjs, Ant-Design
                </span>
              </div> */}
              <ul>
                <li>
                  运营工作
                  <ul>
                    <li>跟随团队运营跟踪推特数据</li>
                    <li>对接Discord的社区流程,完善客户进线后的步骤</li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  开发工作
                  <ul>
                    <li>
                      Feed流的代码重构和功能扩展，集成Google
                      reCAPTCHA，并结合Epic数据流管理开发新功能。
                    </li>
                  </ul>
                </li>
              </ul>
              <blockquote className="font-bold">
                成就
                <ul>
                  <li>日活在一万用户左右</li>
                </ul>
              </blockquote>
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

              <ul className="">
                <li>
                  公关工作
                  <ul>
                    <li>代表参加推特AMA</li>
                    <li>代表参加线下圆桌论坛并出席发言</li>
                  </ul>
                </li>
                <li>
                  开发工作
                  <ul>
                    <li>前端开发</li>
                    <li>部分后端接口开发</li>
                  </ul>
                </li>
              </ul>
              <blockquote className="font-bold">
                成就
                <ul>
                  <li>上线三个月,全球10W+的用户</li>
                </ul>
              </blockquote>
            </div>
            <div className="text-sm">
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
          </div>

          <p className="hidden gap-3 flex-col" id="person_contact_zh">
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

          <div
            className="hidden justify-center items-center flex-col mt-3 text-xs text-gray-600 gap-2 dark:text-white"
            id="move_please_zh"
          ></div>
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
          <span className="text-xs">已经复制到您的粘贴板上</span>
        </div>
      </div>
    </div>
  );
};
