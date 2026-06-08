import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Database, BarChart3, TrendingUp, Briefcase, Wrench, ClipboardCheck, Calculator, Sigma, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              商务数据分析 Python 零基础学习
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              从 Python 基础到实战案例，系统学习商务数据分析，提升职场竞争力
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/modules"
                className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                开始学习
              </Link>
              <Link
                to="/resources"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300"
              >
                学习资源
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Website Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">网站介绍</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 mb-4">
                欢迎来到【商务数据分析 Python 自建网站】！这是一个专为商务数据分析初学者打造的学习平台。
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>目标人群：</strong>商务数据分析零基础学习者、职场人士、学生</li>
                <li><strong>学习内容：</strong>Python 基础、NumPy、统计学、时间序列、数据清洗、数据可视化、商务指标分析、实战案例</li>
                <li><strong>特色：</strong>所有代码均可复制运行，附带详细注释，零基础也能上手</li>
                <li><strong>实战导向：</strong>以电商数据分析、销售报表分析等真实业务场景为案例</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">学习路径</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-bold mr-2">第1步</span>
                        <span className="text-blue-600 font-bold">基础篇</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Python 基础 + NumPy + 统计学</h3>
                      <p className="text-gray-600">学习 Python 编程基础、NumPy 数值计算和统计学核心概念，打好数据分析基础。</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:block w-4 h-4 bg-cyan-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-500">
                      <div className="flex items-center mb-2">
                        <span className="bg-cyan-100 text-cyan-600 rounded-full px-3 py-1 text-sm font-bold mr-2">第2步</span>
                        <span className="text-cyan-600 font-bold">时间序列</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">时间序列分析</h3>
                      <p className="text-gray-600">掌握日期处理、重采样、移动平均、趋势分析等时间序列核心技能。</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                      <div className="flex items-center mb-2">
                        <span className="bg-green-100 text-green-600 rounded-full px-3 py-1 text-sm font-bold mr-2">第3步</span>
                        <span className="text-green-600 font-bold">数据清洗</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">数据清洗与预处理</h3>
                      <p className="text-gray-600">学习缺失值、异常值、重复值处理，掌握数据清洗的核心技能。</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-green-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:block w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                      <div className="flex items-center mb-2">
                        <span className="bg-purple-100 text-purple-600 rounded-full px-3 py-1 text-sm font-bold mr-2">第4步</span>
                        <span className="text-purple-600 font-bold">数据可视化</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">数据可视化</h3>
                      <p className="text-gray-600">使用 Matplotlib、Seaborn 制作专业商务图表，直观展示数据分析结果。</p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                      <div className="flex items-center mb-2">
                        <span className="bg-amber-100 text-amber-600 rounded-full px-3 py-1 text-sm font-bold mr-2">第5步</span>
                        <span className="text-amber-600 font-bold">商务指标</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">商务指标分析</h3>
                      <p className="text-gray-600">学习 GMV、转化率、复购率、留存率等核心商务指标的计算与分析方法。</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-amber-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 6 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:block w-4 h-4 bg-red-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                      <div className="flex items-center mb-2">
                        <span className="bg-red-100 text-red-600 rounded-full px-3 py-1 text-sm font-bold mr-2">第6步</span>
                        <span className="text-red-600 font-bold">实战案例</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">实战案例</h3>
                      <p className="text-gray-600">通过电商数据分析、销售报表分析等完整案例，将所学知识融会贯通。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">核心模块</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/modules/python-basics"
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-blue-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <BookOpen size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Python 基础模块</h3>
              <p className="text-gray-600 mb-4">Python 语法、数据类型、函数、Pandas 和 NumPy 入门</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>开始学习</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              to="/modules/numpy"
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-indigo-300"
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <Calculator size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">NumPy 专项模块</h3>
              <p className="text-gray-600 mb-4">数组创建、索引切片、数值计算、矩阵运算</p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>开始学习</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              to="/modules/statistics"
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-pink-300"
            >
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <Sigma size={32} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">统计学基础模块</h3>
              <p className="text-gray-600 mb-4">均值、中位数、标准差、分位数、分布形态分析</p>
              <div className="flex items-center text-pink-600 font-medium">
                <span>开始学习</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              to="/modules/time-series"
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-cyan-300"
            >
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <Clock size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">时间序列分析模块</h3>
              <p className="text-gray-600 mb-4">日期处理、重采样、移动平均、趋势分析、季节性分析</p>
              <div className="flex items-center text-cyan-600 font-medium">
                <span>开始学习</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              to="/modules/data-cleaning"
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-green-300"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <Database size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">数据清洗模块</h3>
              <p className="text-gray-600 mb-4">缺失值、异常值、重复值处理，数据清洗实战案例</p>
              <div className="flex items-center text-green-600 font-medium">
                <span>开始学习</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              to="/modules/data-visualization"
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-purple-300"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <BarChart3 size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">数据可视化模块</h3>
              <p className="text-gray-600 mb-4">Matplotlib、Seaborn、Plotly 图表制作，商务图表实战</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>开始学习</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              to="/modules/business-metrics"
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-amber-300"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <TrendingUp size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">商务指标分析模块</h3>
              <p className="text-gray-600 mb-4">GMV、转化率、复购率、留存率等核心指标计算与分析</p>
              <div className="flex items-center text-amber-600 font-medium">
                <span>开始学习</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              to="/modules/case-studies"
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-red-300"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <Briefcase size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">实战案例模块</h3>
              <p className="text-gray-600 mb-4">电商数据分析、销售报表分析等完整实战案例</p>
              <div className="flex items-center text-red-600 font-medium">
                <span>开始学习</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              to="/modules/quiz"
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-violet-300"
            >
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <ClipboardCheck size={32} className="text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">测验模块</h3>
              <p className="text-gray-600 mb-4">10个知识测验，检验学习成果，巩固知识掌握</p>
              <div className="flex items-center text-violet-600 font-medium">
                <span>开始测验</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              to="/resources"
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-gray-300"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <Wrench size={32} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">学习资料/工具推荐</h3>
              <p className="text-gray-600 mb-4">学习资料、常用工具、开发环境配置指南</p>
              <div className="flex items-center text-gray-600 font-medium">
                <span>查看资料</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">网站特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">在线代码运行</h3>
              <p className="text-gray-600">所有代码示例均可在线运行，无需安装任何软件</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">实战案例驱动</h3>
              <p className="text-gray-600">以真实商务场景为案例，学以致用</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">测验检验</h3>
              <p className="text-gray-600">每个模块配套测验，检验学习成果</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;