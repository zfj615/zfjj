import React from 'react';
import { Link } from 'react-router-dom';
import { Book, BarChart3, Users, Award, Code } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI 时代 Python 数据分析实战训练营
            </h1>
            <p className="text-xl mb-8">
              通过十个来自真实场景的阶梯式训练项目，系统掌握利用 Pandas 进行数据清洗、处理、分析与商业解读的全流程能力。
            </p>
            <Link
              to="/modules"
              className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              开始学习
            </Link>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">课程总览</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Book size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">第一部分</h3>
              <p className="text-gray-600">结构化拆解与数据清洗（筑基篇）</p>
              <p className="text-gray-500 text-sm mt-2">核心思维模型：MECE 原则</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">第二部分</h3>
              <p className="text-gray-600">流程诊断与业务洞察（进阶篇）</p>
              <p className="text-gray-500 text-sm mt-2">核心思维模型：漏斗分析 & 帕累托分析</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">第三部分</h3>
              <p className="text-gray-600">核心算法与用户分层（必修篇）</p>
              <p className="text-gray-500 text-sm mt-2">核心思维模型：假设驱动分析 & RFM 模型</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-red-500 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">第四部分</h3>
              <p className="text-gray-600">综合实战与 AI 伦理审计（高阶篇）</p>
              <p className="text-gray-500 text-sm mt-2">核心思维模型：MECE 原则 & 假设驱动的综合运用</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心特性</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Code size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">企业级高频技术</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>购物车关联分析</li>
                  <li>无监督聚类分群</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Book size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">五大分析思维模型</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>MECE 原则</li>
                  <li>漏斗分析模型</li>
                  <li>帕累托分析（二八法则）</li>
                  <li>RFM 客户价值模型</li>
                  <li>假设驱动分析</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">准备好开始您的数据分析之旅了吗？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            加入我们的训练营，掌握 AI 时代必备的数据分析技能，提升您的职场竞争力。
          </p>
          <Link
            to="/modules"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            立即开始
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;