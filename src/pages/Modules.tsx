import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Database, BarChart3, TrendingUp, Briefcase, Wrench, ClipboardCheck, Calculator, Sigma, Clock } from 'lucide-react';

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
      id: 'numpy',
      title: 'NumPy 专项模块',
      description: '数组创建、索引切片、数值计算、矩阵运算',
      icon: <Calculator size={32} />,
      color: 'indigo',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      id: 'statistics',
      title: '统计学基础模块',
      description: '均值、中位数、标准差、分位数、分布形态分析',
      icon: <Sigma size={32} />,
      color: 'pink',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    },
    {
      id: 'time-series',
      title: '时间序列分析模块',
      description: '日期处理、重采样、移动平均、趋势分析、季节性分析',
      icon: <Clock size={32} />,
      color: 'cyan',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600'
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
      color: 'violet',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600'
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
        <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">课程模块</h1>
          <p className="text-blue-100">
            系统化的学习路径，从零基础到实战应用，全面掌握商务数据分析技能
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">📚 课程结构</h2>
          <p className="text-gray-600 mb-4">
            本课程包含 <strong className="text-indigo-600">10个核心模块</strong>，涵盖从Python基础到商务实战的完整学习路径。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">基础篇（4模块）</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Python 基础</li>
                <li>• NumPy 专项</li>
                <li>• 统计学基础</li>
                <li>• 时间序列分析</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">应用篇（4模块）</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 数据清洗</li>
                <li>• 数据可视化</li>
                <li>• 商务指标分析</li>
                <li>• 实战案例</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-700 mb-2">巩固篇（2模块）</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 测验模块</li>
                <li>• 学习资料</li>
              </ul>
            </div>
          </div>
        </div>

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
                <li>学习 NumPy 专项，掌握数值计算</li>
                <li>学习统计学基础，理解数据分析原理</li>
                <li>学习时间序列分析，掌握趋势分析</li>
                <li>学习数据清洗模块，掌握数据预处理</li>
                <li>学习数据可视化模块，学会展示数据</li>
                <li>学习商务指标分析模块，理解业务指标</li>
                <li>通过实战案例模块，融会贯通</li>
                <li>完成测验模块，检验学习成果</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">💡 学习方法</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>每个模块都有在线代码运行区，可以即时练习</li>
                <li>建议先理解概念，再动手运行代码</li>
                <li>遇到不懂的地方，多运行几次代码观察结果</li>
                <li>完成每个模块后，进行对应测验检验理解</li>
                <li>实战案例模块建议完整运行一遍代码</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;