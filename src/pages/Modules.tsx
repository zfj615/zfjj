import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Database, BarChart3, TrendingUp, Briefcase, Wrench, ClipboardCheck } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  textColor: string;
}

const Modules: React.FC = () => {
  const modules: Module[] = [
    {
      id: 'python-basics',
      title: 'Python 基础模块',
      description: 'Python 语法、数据类型、函数、Pandas 和 NumPy 入门',
      icon: <BookOpen size={32} />,
      color: 'blue',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'data-cleaning',
      title: '数据清洗模块',
      description: '缺失值、异常值、重复值处理，数据清洗实战案例',
      icon: <Database size={32} />,
      color: 'green',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 'data-visualization',
      title: '数据可视化模块',
      description: 'Matplotlib、Seaborn、Plotly 图表制作，商务图表实战',
      icon: <BarChart3 size={32} />,
      color: 'purple',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 'business-metrics',
      title: '商务指标分析模块',
      description: 'GMV、转化率、复购率、留存率等核心指标计算与分析',
      icon: <TrendingUp size={32} />,
      color: 'amber',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600'
    },
    {
      id: 'case-studies',
      title: '实战案例模块',
      description: '电商数据分析、销售报表分析等完整实战案例',
      icon: <Briefcase size={32} />,
      color: 'red',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      id: 'quiz',
      title: '测验模块',
      description: '10个知识测验，检验学习成果，巩固知识掌握',
      icon: <ClipboardCheck size={32} />,
      color: 'indigo',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      id: 'resources',
      title: '学习资料/工具推荐',
      description: '学习资料、常用工具、开发环境配置指南',
      icon: <Wrench size={32} />,
      color: 'gray',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">课程模块</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          从 Python 基础到实战案例，系统学习商务数据分析，让数据成为您的职场竞争力
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <Link
              key={module.id}
              to={module.id === 'resources' ? `/resources` : `/modules/${module.id}`}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-gray-100 hover:border-gray-200"
            >
              <div className={`${module.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300`}>
                <div className={module.textColor}>
                  {module.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{module.title}</h3>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <div className={`flex items-center ${module.textColor} font-medium`}>
                <span>{module.id === 'quiz' ? '开始测验' : '开始学习'}</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">学习建议</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">📚 学习顺序</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-1">
                <li>先学习 Python 基础模块，打好编程基础</li>
                <li>然后学习数据清洗模块，掌握数据预处理</li>
                <li>接着学习数据可视化模块，学会展示数据</li>
                <li>再学习商务指标分析模块，理解业务指标</li>
                <li>通过实战案例模块，融会贯通</li>
                <li>完成测验模块，检验学习成果</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">💡 学习方法</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>每个模块的代码都要自己动手运行一遍</li>
                <li>尝试修改代码，观察结果变化</li>
                <li>结合自己的业务场景思考应用方法</li>
                <li>定期回顾，温故知新</li>
                <li>遇到问题时，查看学习资料和工具推荐</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
