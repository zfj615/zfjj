import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Project {
  id: number;
  title: string;
  module: string;
  background: string;
  meceApplication: string;
  pandasSkills: string[];
  output: string;
  code: string;
  questions: Question[];
  materials: {
    name: string;
    url: string;
  }[];
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Mock project data
  const projects: Project[] = [
    {
      id: 1,
      title: '项目一：AI 训练日志的清洗与异常监控',
      module: '第一部分：结构化拆解与数据清洗（筑基篇）',
      background: 'AI 模型训练产生的原始日志（loss, accuracy, lr）通常包含警告信息、空行、格式断裂，无法直接用于 TensorBoard 可视化。',
      meceApplication: '将日志异常类型进行 MECE 分类（WARNING 类、ERROR 类、数值缺失类、格式错乱类），针对每一类编写独立的清洗函数，确保无遗漏。',
      pandasSkills: [
        'pd.read_csv(..., comment=\"#\")',
        '.fillna(method=\"ffill\")',
        'pd.to_datetime 与 .dt 访问器'
      ],
      output: '结构规整的训练曲线宽表。',
      code: `import pandas as pd

# 读取日志文件，跳过注释行
df = pd.read_csv('training.log', comment='#')

# 填充缺失值（新版语法）
df = df.ffill()

# 转换时间戳
df['time'] = pd.to_datetime(df['time'])

# 提取小时信息
df['hour'] = df['time'].dt.hour

# 过滤警告信息
df = df[~df['msg'].str.contains('WARNING')]

# 保存清洗后的数据
df.to_csv('cleaned_training.log', index=False)`,
      questions: [
        {
          id: 1,
          question: '下列哪一项不是 MECE 原则在日志清洗中的体现？',
          options: [
            '将错误类型分为「WARNING」「ERROR」「INFO」三类',
            '将缺失值分为「NaN」「空字符串」「NULL」三种处理方式',
            '根据文件大小决定是否读取',
            '确保每一行日志都属于且只属于一个错误分类'
          ],
          correctAnswer: 2
        },
        {
          id: 2,
          question: '使用 pd.read_csv(..., comment=\"#\") 读取带注释的日志文件时，会如何处理以 # 开头的行？',
          options: [
            '保留为独立行',
            '跳过不读取',
            '读取但标记为注释列',
            '抛出错误'
          ],
          correctAnswer: 1
        }
      ],
      materials: [
        {
          name: 'training.log',
          url: '#'
        },
        {
          name: 'cleaning_template.ipynb',
          url: '#'
        }
      ]
    },
    {
      id: 2,
      title: '项目二：电商评论情感词典构建与预处理',
      module: '第一部分：结构化拆解与数据清洗（筑基篇）',
      background: '在微调大模型进行情感分析前，需清洗人工标注的文本数据并提取高频特征词。',
      meceApplication: '对文本噪音进行穷举分类：标点符号、数字、停用词、空字符串。确保清洗逻辑覆盖所有可能的无效字符类型。',
      pandasSkills: [
        "df['text'].str.replace('[^\\w\\s]', '', regex=True)",
        "df['words'].explode().value_counts()"
      ],
      output: '清洗后的短文本语料库及高频词云。',
      code: `import pandas as pd

# 读取评论数据
df = pd.read_csv('comments.csv')

# 清洗文本：移除标点符号
df['clean_text'] = df['text'].str.replace('[^\\w\\s]', '', regex=True)

# 转为小写
df['clean_text'] = df['clean_text'].str.lower()

# 分词
df['words'] = df['clean_text'].str.split()

# 展开单词并统计词频
word_counts = df['words'].explode().value_counts()

# 保存高频词
word_counts.head(100).to_csv('high_freq_words.csv')`,
      questions: [
        {
          id: 1,
          question: '使用正则 [^\\w\\s] 清洗文本时，下列哪个字符会被保留？',
          options: [
            '逗号 ,',
            '中文汉字',
            '问号 ?',
            '感叹号 !'
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: '某学员想统计评论中出现最多的负面词汇，以下哪段代码逻辑正确？',
          options: [
            'df[\'review\'].value_counts().head(10)',
            'df[\'review\'].str.split().explode().value_counts().head(10)',
            'df[\'review\'].explode().value_counts().head(10)',
            'df[\'review\'].str.split().value_counts().head(10)'
          ],
          correctAnswer: 1
        }
      ],
      materials: [
        {
          name: 'comments.csv',
          url: '#'
        },
        {
          name: 'sentiment_analysis_template.ipynb',
          url: '#'
        }
      ]
    },
    // 其他项目的详细信息可以根据需要添加
  ];

  useEffect(() => {
    if (id) {
      const projectData = projects.find(p => p.id === parseInt(id));
      setProject(projectData || null);
      setSelectedAnswers(new Array(projectData?.questions.length || 0).fill(-1));
      setShowResults(false);
      setScore(0);
    }
  }, [id]);

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    if (!project) return;
    
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === project.questions[index].correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setShowResults(true);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">项目不存在</h1>
          <Link
            to="/modules"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <ArrowLeft size={18} />
            <span>返回课程模块</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link
            to="/modules"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-200"
          >
            <ArrowLeft size={18} />
            <span>返回课程模块</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-600 mb-6">{project.module}</p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">背景描述</h2>
              <p className="text-gray-700">{project.background}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">MECE 思维应用</h2>
              <p className="text-gray-700">{project.meceApplication}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Pandas 核心技能</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {project.pandasSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">产出物</h2>
              <p className="text-gray-700">{project.output}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">关键代码实现</h2>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-800">{project.code}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">课后测验</h2>
          <div className="space-y-6">
            {project.questions.map((q, qIndex) => (
              <div key={q.id} className="border-b border-gray-200 pb-4">
                <p className="font-medium mb-3">{qIndex + 1}. {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((option, oIndex) => (
                    <div key={oIndex} className="flex items-center">
                      <input
                        type="radio"
                        id={`q${q.id}_o${oIndex}`}
                        name={`q${q.id}`}
                        checked={selectedAnswers[qIndex] === oIndex}
                        onChange={() => handleAnswerChange(qIndex, oIndex)}
                        className="mr-2"
                      />
                      <label htmlFor={`q${q.id}_o${oIndex}`} className="text-gray-700">
                        {String.fromCharCode(65 + oIndex)}. {option}
                      </label>
                    </div>
                  ))}
                </div>
                {showResults && (
                  <div className={`mt-2 text-sm ${selectedAnswers[qIndex] === q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedAnswers[qIndex] === q.correctAnswer
                      ? '✓ 回答正确'
                      : `✗ 回答错误，正确答案是 ${String.fromCharCode(65 + q.correctAnswer)}`}
                  </div>
                )}
              </div>
            ))}
          </div>
          {!showResults ? (
            <button
              onClick={handleSubmitQuiz}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              提交答案
            </button>
          ) : (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold">得分：{score} / {project.questions.length}</p>
              <p className="text-gray-600 mt-2">
                {score === project.questions.length
                  ? '恭喜你，全部答对！'
                  : '继续努力，再接再厉！'}
              </p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">下载材料</h2>
          <div className="space-y-3">
            {project.materials.map((material, index) => (
              <a
                key={index}
                href={material.url}
                className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200"
              >
                <Download size={18} className="text-blue-600" />
                <span className="text-gray-700">{material.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;