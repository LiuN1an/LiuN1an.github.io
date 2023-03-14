import React, { useEffect, useState } from "react";
import hccli01 from "../assets/resume/hc-cli-01.jpeg";
import treemind01 from "../assets/resume/tree-mind-01.jpeg";
import oauth01 from "../assets/resume/oauth-01.png";
import tool01 from "../assets/resume/tool-01.jpg";

// https://emojipedia.org/party-popper/
// https://github.com/Hubery-Lee/Notes/blob/master/%E5%A6%82%E4%BD%95%E5%9C%A8github%E4%B8%8A%E5%86%99%E5%87%BA%E6%BC%82%E4%BA%AE%E7%9A%84readme.md.md

export const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 flex flex-col  relative overflow-hidden">
      <div className="relative w-full py-12 px-6 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pb-28">
        <div className="prose mx-auto lg:prose-lg">
          <h2>Liunian</h2>
          <p className="flex gap-4">
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
          </p>
          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            Education
          </h3>
          <p className="flex justify-between items-center">
            <a
              href="https://www.163.com/dy/article/HKOS8HOG0552TYXN.html"
              target="_blank"
              className="tooltip"
              data-tip="下沙小清华,落寞的世界名校"
            >
              杭电
            </a>
            <span>本硕, 于2021年正式毕业</span>
          </p>
          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            Jobs
          </h3>
          <p></p>

          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            Projects
          </h3>
          <div>
            <h4>NextMe</h4>
          </div>

          <h3 className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pl-3 rounded-tl-xl rounded-tr-xl">
            Plays
          </h3>
          <div className="grid gap-8 grid-cols-2 pt-8">
            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl duration-150">
              <figure style={{ marginBottom: 0, marginTop: 0 }}>
                <img src={hccli01} alt="Prompt" className="w-full h-auto max-h-48 object-cover" />
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

            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl duration-150">
              <figure style={{ marginBottom: 0, marginTop: 0 }}>
                <img src={treemind01} alt="Prompt" className="w-full h-auto max-h-48 object-cover" />
              </figure>
              <div className="card-body">
                <a target="_blank" href="https://github.com/LiuN1an/tree-mind">
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
                <img src={oauth01} alt="Prompt" className="w-full h-auto max-h-48 object-cover" />
              </figure>
              <div className="card-body">
                <a target="_blank" href="https://github.com/LiuN1an/oauth">
                  oauth
                </a>
                <p>
                  oauth is based on nextAuth, it provide a way to customize the
                  content of state during the process of oauth.
                </p>
              </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl duration-150">
              <figure style={{ marginBottom: 0, marginTop: 0 }}>
                <img src={tool01} alt="Prompt" className="w-full h-auto max-h-48 object-cover" />
              </figure>
              <div className="card-body">
                <a target="_blank" href="https://github.com/LiuN1an/Util-Tools">
                  Util-Tools
                </a>
                <p>
                  Util-Tools is a private library which is used in common
                  projects, it contains many small tools or examples to
                  accelerate developing
                </p>
              </div>
            </div>
          </div>

          <h3></h3>
        </div>
      </div>
    </div>
  );
};
