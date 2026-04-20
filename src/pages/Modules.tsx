import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, BookOpen, BarChart3, Users, Award } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  keySkills: string[];
}

interface Module {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  projects: Project[];
}

const Modules: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const modules: Module[] = [
    {
      id: 1,
      title: '第一部分',
      subtitle: '结构化拆解与数据清洗（筑基篇）',
      icon: <BookOpen size={24} />,
      color: 'blue',
      projects: [
        {
          id: 1,
          title: '项目一：AI 训练日志的清洗与异常监控',
          description: '清洗 AI 模型训练产生的原始日志，处理警告信息、空行、格式断裂等问题。',
          keySkills: ['pd.read_csv', 'fillna', 'pd.to_datetime', 'dt 访问器']
        },
        {
          id: 2,
          title: '项目二：电商评论情感词典构建与预处理',
          description: '清洗人工标注的文本数据并提取高频特征词，为微调大模型做准备。',
          keySkills: ['str.replace', 'str.split', 'explode', 'value_counts']
        },
        {
          id: 3,
          title: '项目三：多源传感器数据融合与时间序列对齐',
          description: '处理不同采样频率的传感器数据，实现时间序列对齐。',
          keySkills: ['pd.merge_asof', 'resample', 'rolling']
        }
      ]
    },
    {
      id: 2,
      title: '第二部分',
      subtitle: '流程诊断与业务洞察（进阶篇）',
      icon: <BarChart3 size={24} />,
      color: 'green',
      projects: [
        {
          id: 4,
          title: '项目四：AI 数字产品订阅流失分析',
          description: '分析类似 ChatGPT Plus 订阅服务的用户续费率，诊断流失环节。',
          keySkills: ['日期差值计算', '多维分组聚合', '热力图']
        },
        {
          id: 5,
          title: '项目五：LLM 大模型 API 调用成本归因与优化',
          description: '找出成本消耗的源头，验证二八定律。',
          keySkills: ['数据透视表', 'nlargest', '帕累托分析']
        }
      ]
    },
    {
      id: 3,
      title: '第三部分',
      subtitle: '核心算法与用户分层（必修篇）',
      icon: <Users size={24} />,
      color: 'amber',
      projects: [
        {
          id: 6,
          title: '项目六：零售购物篮关联规则挖掘',
          description: '分析超市 POS 机流水数据，发现商品之间的隐含购买关联。',
          keySkills: ['groupby', 'unstack', 'apriori', 'association_rules']
        },
        {
          id: 7,
          title: '项目七：AI 门禁系统的无监督聚类分群',
          description: '识别园区内的异常逗留人员。',
          keySkills: ['StandardScaler', 'KMeans', 'groupby.agg']
        },
        {
          id: 8,
          title: '项目八：客户终身价值（CLV）RFM 分层与聚类精分',
          description: '从传统 RFM 规则分层升级为 AI 驱动的无监督聚类分层。',
          keySkills: ['groupby.agg', 'KMeans', '雷达图']
        }
      ]
    },
    {
      id: 4,
      title: '第四部分',
      subtitle: '综合实战与 AI 伦理审计（高阶篇）',
      icon: <Award size={24} />,
      color: 'red',
      projects: [
        {
          id: 9,
          title: '项目九：AI 大模型微调数据集的偏见（Bias）审计',
          description: '审计训练数据是否存在性别、地域等偏见。',
          keySkills: ['pd.crosstab', '数据重采样', '交叉分析']
        },
        {
          id: 10,
          title: '项目十：构建端到端 AI 销售预测看板',
          description: '模拟从脏数据接收、清洗、建模到输出报告的完整工作流。',
          keySkills: ['pd.merge', 'pd.get_dummies', '线性回归']
        }
      ]
    }
  ];

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">课程模块</h1>

        {/* Learning Path */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">学习路径</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline Items */}
            {modules.map((module, index) => (
              <div key={module.id} className={`relative mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2"></div>
                <div className={`z-10 flex items-center justify-center w-10 h-10 rounded-full bg-${module.color}-600 text-white`}>
                  {module.icon}
                </div>
                <div className="md:w-1/2 pl-6 md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.subtitle}</p>
                  <p className="text-sm text-gray-500">
                    包含 {module.projects.length} 个项目
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modules and Projects */}
        <div className="space-y-6">
          {modules.map((module) => (
            <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleModule(module.id)}
                className={`w-full flex justify-between items-center p-6 text-left bg-${module.color}-50 hover:bg-${module.color}-100 transition duration-200`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full bg-${module.color}-600 flex items-center justify-center text-white`}>
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{module.title}</h3>
                    <p className="text-gray-600">{module.subtitle}</p>
                  </div>
                </div>
                {expandedModule === module.id ? (
                  <ChevronUp size={24} className={`text-${module.color}-600`} />
                ) : (
                  <ChevronDown size={24} className={`text-${module.color}-600`} />
                )}
              </button>
              
              {expandedModule === module.id && (
                <div className="p-6 border-t border-gray-200">
                  <div className="space-y-4">
                    {module.projects.map((project) => (
                      <Link
                        key={project.id}
                        to={`/project/${project.id}`}
                        className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200"
                      >
                        <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                        <p className="text-gray-600 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.keySkills.map((skill, index) => (
                            <span
                              key={index}
                              className={`px-2 py-1 text-xs rounded-full bg-${module.color}-100 text-${module.color}-800`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modules;