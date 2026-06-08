import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, ArrowLeft, BookOpen, Database, BarChart3, TrendingUp, Briefcase, Award } from 'lucide-react';
import Quiz from '../components/Quiz';

interface QuizData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  questions: Array<{
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>;
}

const QuizModule: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizData | null>(null);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);

  const quizzes: QuizData[] = [
    {
      id: 'python-basics',
      title: 'Python 基础测验',
      description: '测试 Python 语法、数据类型、函数等基础知识',
      icon: <BookOpen size={32} />,
      color: 'blue',
      questions: [
        {
          id: 1,
          question: '以下哪个是 Python 中正确的变量命名？',
          options: ['1variable', 'my-variable', 'my_variable', 'my variable'],
          correctAnswer: 2,
          explanation: 'Python变量名只能包含字母、数字和下划线，且不能以数字开头。'
        },
        {
          id: 2,
          question: 'Python 中如何创建一个空列表？',
          options: ['list()', '[]', '{}', 'both list() and []'],
          correctAnswer: 3,
          explanation: 'list() 和 [] 都可以创建空列表，两者效果相同。'
        },
        {
          id: 3,
          question: '以下代码的输出是什么？\nprint(type(3.14))',
          options: ['int', 'float', 'str', 'decimal'],
          correctAnswer: 1,
          explanation: '3.14 是浮点数，所以 type() 返回 float。'
        },
        {
          id: 4,
          question: 'Python 中如何定义一个函数？',
          options: ['function myFunc():', 'def myFunc():', 'func myFunc():', 'define myFunc():'],
          correctAnswer: 1,
          explanation: 'Python 使用 def 关键字来定义函数。'
        },
        {
          id: 5,
          question: '以下哪个不是 Python 的数据类型？',
          options: ['list', 'tuple', 'array', 'dict'],
          correctAnswer: 2,
          explanation: 'Python内置类型包括list、tuple、dict等，array需要导入array模块。'
        }
      ]
    },
    {
      id: 'pandas-basics',
      title: 'Pandas 基础测验',
      description: '测试 Pandas DataFrame、数据操作等基础知识',
      icon: <Database size={32} />,
      color: 'green',
      questions: [
        {
          id: 1,
          question: '如何读取 CSV 文件到 Pandas DataFrame？',
          options: ['pd.read_csv()', 'pd.load_csv()', 'pd.import_csv()', 'pd.open_csv()'],
          correctAnswer: 0,
          explanation: 'Pandas 使用 pd.read_csv() 函数读取CSV文件。'
        },
        {
          id: 2,
          question: '如何查看 DataFrame 的前5行？',
          options: ['df.head()', 'df.top()', 'df.first()', 'df.start()'],
          correctAnswer: 0,
          explanation: 'df.head() 默认显示前5行，可以传入参数指定行数。'
        },
        {
          id: 3,
          question: '如何获取 DataFrame 的行数和列数？',
          options: ['df.count()', 'df.size', 'df.shape', 'df.dimensions'],
          correctAnswer: 2,
          explanation: 'df.shape 返回一个元组 (行数, 列数)。'
        },
        {
          id: 4,
          question: '如何按某列对 DataFrame 进行分组？',
          options: ['df.sort()', 'df.group()', 'df.groupby()', 'df.partition()'],
          correctAnswer: 2,
          explanation: 'df.groupby() 用于按列值分组数据。'
        },
        {
          id: 5,
          question: '如何删除 DataFrame 中的缺失值？',
          options: ['df.remove_na()', 'df.dropna()', 'df.delete_na()', 'df.clean_na()'],
          correctAnswer: 1,
          explanation: 'df.dropna() 用于删除包含缺失值的行或列。'
        }
      ]
    },
    {
      id: 'data-cleaning',
      title: '数据清洗测验',
      description: '测试缺失值、异常值、重复值处理知识',
      icon: <Database size={32} />,
      color: 'teal',
      questions: [
        {
          id: 1,
          question: '检测 DataFrame 中缺失值的正确方法是？',
          options: ['df.missing()', 'df.isnull()', 'df.na()', 'df.empty()'],
          correctAnswer: 1,
          explanation: 'df.isnull() 或 df.isna() 返回布尔值表示是否缺失。'
        },
        {
          id: 2,
          question: '用均值填充缺失值的正确方法是？',
          options: ['df.fill(df.mean())', 'df.fillna(df.mean())', 'df.replace(df.mean())', 'df.update(df.mean())'],
          correctAnswer: 1,
          explanation: 'fillna() 方法用于填充缺失值，可以传入均值。'
        },
        {
          id: 3,
          question: '检测重复行的正确方法是？',
          options: ['df.duplicates()', 'df.duplicated()', 'df.repeat()', 'df.copy()'],
          correctAnswer: 1,
          explanation: 'df.duplicated() 返回布尔值表示每行是否是重复行。'
        },
        {
          id: 4,
          question: 'IQR 方法中，异常值的判断范围是？',
          options: ['Q1 - IQR 到 Q3 + IQR', 'Q1 - 1.5*IQR 到 Q3 + 1.5*IQR', '均值 ± 标准差', '中位数 ± IQR'],
          correctAnswer: 1,
          explanation: 'IQR方法使用 Q1-1.5*IQR 和 Q3+1.5*IQR 作为正常范围边界。'
        },
        {
          id: 5,
          question: '删除重复行的正确方法是？',
          options: ['df.remove_duplicates()', 'df.drop_duplicates()', 'df.delete_duplicates()', 'df.unique()'],
          correctAnswer: 1,
          explanation: 'df.drop_duplicates() 用于删除重复行。'
        }
      ]
    },
    {
      id: 'data-visualization',
      title: '数据可视化测验',
      description: '测试 Matplotlib、Seaborn 图表知识',
      icon: <BarChart3 size={32} />,
      color: 'purple',
      questions: [
        {
          id: 1,
          question: 'Matplotlib 中创建图形的函数是？',
          options: ['plt.graph()', 'plt.figure()', 'plt.plot()', 'plt.create()'],
          correctAnswer: 1,
          explanation: 'plt.figure() 用于创建一个新的图形窗口。'
        },
        {
          id: 2,
          question: '绘制折线图的 Matplotlib 函数是？',
          options: ['plt.line()', 'plt.plot()', 'plt.curve()', 'plt.connect()'],
          correctAnswer: 1,
          explanation: 'plt.plot() 用于绘制折线图和散点图。'
        },
        {
          id: 3,
          question: '绘制柱状图的 Matplotlib 函数是？',
          options: ['plt.column()', 'plt.bar()', 'plt.histogram()', 'plt.rect()'],
          correctAnswer: 1,
          explanation: 'plt.bar() 用于绘制垂直柱状图。'
        },
        {
          id: 4,
          question: 'Seaborn 中绘制热力图的函数是？',
          options: ['sns.heatmap()', 'sns.hot()', 'sns.matrix()', 'sns.color()'],
          correctAnswer: 0,
          explanation: 'sns.heatmap() 用于绘制热力图，常用于显示相关性矩阵。'
        },
        {
          id: 5,
          question: '如何在 Matplotlib 中添加标题？',
          options: ['plt.name()', 'plt.title()', 'plt.label()', 'plt.text()'],
          correctAnswer: 1,
          explanation: 'plt.title() 用于设置图形标题。'
        }
      ]
    },
    {
      id: 'business-metrics',
      title: '商务指标测验',
      description: '测试 GMV、转化率、RFM 等指标知识',
      icon: <TrendingUp size={32} />,
      color: 'amber',
      questions: [
        {
          id: 1,
          question: 'GMV 的全称是什么？',
          options: ['Gross Market Value', 'Gross Merchandise Volume', 'General Market Volume', 'Global Merchandise Value'],
          correctAnswer: 1,
          explanation: 'GMV = Gross Merchandise Volume，商品交易总额。'
        },
        {
          id: 2,
          question: '转化率的计算公式是？',
          options: ['订单量 / 销售额', '订单量 / 访问量', '销售额 / 订单量', '访问量 / 订单量'],
          correctAnswer: 1,
          explanation: '转化率 = 订单量 / 访问量，表示访客转化为购买者的比例。'
        },
        {
          id: 3,
          question: '客单价的计算公式是？',
          options: ['销售额 / 订单量', '销售额 / 访问量', '订单量 / 销售额', '访问量 / 销售额'],
          correctAnswer: 0,
          explanation: '客单价 = 销售额 / 订单量，表示平均每笔订单的金额。'
        },
        {
          id: 4,
          question: 'RFM 模型中 R 代表什么？',
          options: ['Recency（最近购买时间）', 'Revenue（收入）', 'Rate（比率）', 'Return（回报）'],
          correctAnswer: 0,
          explanation: 'RFM中R=Recency，表示客户最近一次购买距今的时间。'
        },
        {
          id: 5,
          question: '复购率的定义是？',
          options: ['重复购买的用户占比', '重复购买的订单占比', '重复购买的产品占比', '重复购买的金额占比'],
          correctAnswer: 0,
          explanation: '复购率 = 有多次购买行为的用户数 / 总用户数。'
        }
      ]
    },
    {
      id: 'numpy-basics',
      title: 'NumPy 基础测验',
      description: '测试 NumPy 数组操作和计算知识',
      icon: <Database size={32} />,
      color: 'indigo',
      questions: [
        {
          id: 1,
          question: '创建 NumPy 数组的函数是？',
          options: ['np.array()', 'np.create()', 'np.make()', 'np.list()'],
          correctAnswer: 0,
          explanation: 'np.array() 用于从列表或其他序列创建NumPy数组。'
        },
        {
          id: 2,
          question: '创建全0数组的函数是？',
          options: ['np.empty()', 'np.zeros()', 'np.null()', 'np.blank()'],
          correctAnswer: 1,
          explanation: 'np.zeros() 创建指定形状的全0数组。'
        },
        {
          id: 3,
          question: '获取数组形状的属性是？',
          options: ['array.size', 'array.shape', 'array.dim', 'array.length'],
          correctAnswer: 1,
          explanation: 'array.shape 返回表示数组各维度大小的元组。'
        },
        {
          id: 4,
          question: '计算数组均值的函数是？',
          options: ['array.avg()', 'array.mean()', 'array.average()', 'array.center()'],
          correctAnswer: 1,
          explanation: 'array.mean() 或 np.mean(array) 计算数组均值。'
        },
        {
          id: 5,
          question: '生成随机数组的函数是？',
          options: ['np.random()', 'np.rand()', 'np.random.rand()', 'np.random_array()'],
          correctAnswer: 2,
          explanation: 'np.random.rand() 用于生成均匀分布的随机数组。'
        }
      ]
    },
    {
      id: 'statistics-basics',
      title: '统计学基础测验',
      description: '测试均值、中位数、标准差等统计知识',
      icon: <BarChart3 size={32} />,
      color: 'pink',
      questions: [
        {
          id: 1,
          question: '中位数是什么？',
          options: ['数据的平均值', '数据排序后的中间值', '数据的最常见值', '数据的最大值'],
          correctAnswer: 1,
          explanation: '中位数是将数据排序后位于中间位置的值。'
        },
        {
          id: 2,
          question: '标准差衡量的是什么？',
          options: ['数据的集中趋势', '数据的离散程度', '数据的分布形状', '数据的范围'],
          correctAnswer: 1,
          explanation: '标准差衡量数据偏离均值的程度，反映数据的离散程度。'
        },
        {
          id: 3,
          question: '众数是什么？',
          options: ['数据的平均值', '数据排序后的中间值', '数据中出现次数最多的值', '数据的最大值'],
          correctAnswer: 2,
          explanation: '众数是数据集中出现频率最高的值。'
        },
        {
          id: 4,
          question: '四分位数 Q1 表示什么？',
          options: ['数据的25%分位点', '数据的50%分位点', '数据的75%分位点', '数据的100%分位点'],
          correctAnswer: 0,
          explanation: 'Q1是第一四分位数，表示有25%的数据小于此值。'
        },
        {
          id: 5,
          question: 'IQR（四分位距）的计算公式是？',
          options: ['Q3 - Q1', 'Q3 + Q1', 'Q3 * Q1', 'Q3 / Q1'],
          correctAnswer: 0,
          explanation: 'IQR = Q3 - Q1，表示中间50%数据的范围。'
        }
      ]
    },
    {
      id: 'python-advanced',
      title: 'Python 进阶测验',
      description: '测试列表推导式、lambda、装饰器等进阶知识',
      icon: <BookOpen size={32} />,
      color: 'cyan',
      questions: [
        {
          id: 1,
          question: '列表推导式的正确语法是？',
          options: ['[x for x in list]', '{x for x in list}', '(x for x in list)', '<x for x in list>'],
          correctAnswer: 0,
          explanation: '列表推导式使用方括号 [x for x in iterable]。'
        },
        {
          id: 2,
          question: 'lambda 函数的特点是？',
          options: ['只能有一个表达式', '可以有多个表达式', '必须有返回值', '必须命名'],
          correctAnswer: 0,
          explanation: 'lambda是匿名函数，只能包含一个表达式。'
        },
        {
          id: 3,
          question: '以下哪个是字典推导式？',
          options: ['[k:v for k,v in items]', '{k:v for k,v in items}', '(k:v for k,v in items)', 'dict(k:v for k,v in items)'],
          correctAnswer: 1,
          explanation: '字典推导式使用花括号 {key: value for ...}。'
        },
        {
          id: 4,
          question: 'map() 函数的作用是？',
          options: ['遍历序列', '对序列每个元素应用函数', '过滤序列', '排序序列'],
          correctAnswer: 1,
          explanation: 'map(func, iterable) 对序列中每个元素应用指定函数。'
        },
        {
          id: 5,
          question: 'filter() 函数的作用是？',
          options: ['遍历序列', '对序列每个元素应用函数', '过滤满足条件的元素', '排序序列'],
          correctAnswer: 2,
          explanation: 'filter(func, iterable) 过滤出满足条件的元素。'
        }
      ]
    },
    {
      id: 'pandas-advanced',
      title: 'Pandas 进阶测验',
      description: '测试 merge、pivot_table、时间序列等进阶知识',
      icon: <Database size={32} />,
      color: 'emerald',
      questions: [
        {
          id: 1,
          question: '合并两个 DataFrame 的函数是？',
          options: ['df.join()', 'df.merge()', 'df.combine()', 'df.concat()'],
          correctAnswer: 1,
          explanation: 'pd.merge() 用于根据列值合并两个DataFrame。'
        },
        {
          id: 2,
          question: '创建透视表的函数是？',
          options: ['df.pivot()', 'df.pivot_table()', 'df.cross_table()', 'df.summary()'],
          correctAnswer: 1,
          explanation: 'df.pivot_table() 用于创建透视表，支持聚合计算。'
        },
        {
          id: 3,
          question: '将字符串转换为日期的函数是？',
          options: ['pd.to_date()', 'pd.to_datetime()', 'pd.date()', 'pd.datetime()'],
          correctAnswer: 1,
          explanation: 'pd.to_datetime() 将字符串转换为datetime对象。'
        },
        {
          id: 4,
          question: '按时间频率重采样的方法是？',
          options: ['df.resample()', 'df.groupby()', 'df.aggregate()', 'df.frequency()'],
          correctAnswer: 0,
          explanation: 'df.resample() 用于时间序列的重采样。'
        },
        {
          id: 5,
          question: 'apply() 函数的作用是？',
          options: ['应用内置函数', '应用自定义函数到每行/列', '应用统计函数', '应用聚合函数'],
          correctAnswer: 1,
          explanation: 'df.apply(func) 将函数应用到DataFrame的行或列。'
        }
      ]
    },
    {
      id: 'case-study',
      title: '实战案例测验',
      description: '测试数据分析实战应用知识',
      icon: <Briefcase size={32} />,
      color: 'red',
      questions: [
        {
          id: 1,
          question: '数据分析的第一步通常是？',
          options: ['数据可视化', '数据清洗', '数据收集和理解', '建模分析'],
          correctAnswer: 2,
          explanation: '数据分析首先需要收集数据并理解数据的结构和含义。'
        },
        {
          id: 2,
          question: '数据分析报告应该包含？',
          options: ['只有图表', '只有数据', '数据、图表和结论', '只有结论'],
          correctAnswer: 2,
          explanation: '完整的分析报告应包含数据展示、可视化图表和业务结论。'
        },
        {
          id: 3,
          question: '同比分析是指？',
          options: ['与上月对比', '与去年同期对比', '与上季度对比', '与上周对比'],
          correctAnswer: 1,
          explanation: '同比是与去年同期数据进行对比分析。'
        },
        {
          id: 4,
          question: '环比分析是指？',
          options: ['与上月对比', '与去年同期对比', '与上季度对比', '与上周对比'],
          correctAnswer: 0,
          explanation: '环比是与上一个周期（通常是上月）数据进行对比。'
        },
        {
          id: 5,
          question: '数据分析师最重要的能力是？',
          options: ['编程能力', '统计知识', '业务理解能力', '可视化能力'],
          correctAnswer: 2,
          explanation: '理解业务背景和需求是数据分析的核心，其他能力服务于业务分析。'
        }
      ]
    }
  ];

  const handleQuizComplete = (quizId: string) => {
    if (!completedQuizzes.includes(quizId)) {
      setCompletedQuizzes([...completedQuizzes, quizId]);
    }
  };

  const getProgressPercentage = () => {
    return (completedQuizzes.length / quizzes.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/modules" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-200">
            <ArrowLeft size={18} />
            <span>返回课程模块</span>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <ClipboardCheck size={48} className="mr-4" />
            <div>
              <h1 className="text-3xl font-bold">测验模块</h1>
              <p className="text-indigo-100">通过测验检验学习成果，巩固知识掌握</p>
            </div>
          </div>
          <div className="mt-6 bg-white/20 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">完成进度</span>
              <span className="text-sm font-bold">{completedQuizzes.length}/{quizzes.length}</span>
            </div>
            <div className="mt-2 h-2 bg-white/30 rounded-full">
              <div
                className="h-2 bg-green-400 rounded-full transition-all duration-500"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        </div>

        {selectedQuiz ? (
          <div>
            <button
              onClick={() => setSelectedQuiz(null)}
              className="mb-6 inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition duration-200"
            >
              <ArrowLeft size={18} />
              <span>返回测验列表</span>
            </button>
            <Quiz
              title={selectedQuiz.title}
              questions={selectedQuiz.questions}
              onComplete={() => handleQuizComplete(selectedQuiz.id)}
            />
          </div>
        ) : (
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">测验说明</h2>
              <p className="text-gray-600 mb-4">
                通过测验检验你对各个知识模块的理解程度。每个测验包含5道选择题，完成后会显示详细解析。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">📝 测验形式</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 每个测验5道选择题</li>
                    <li>• 即时反馈答案解析</li>
                    <li>• 可重复测验</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">🎯 评分标准</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 80%以上：优秀</li>
                    <li>• 60-80%：良好</li>
                    <li>• 60%以下：需加强</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-700 mb-2">💡 学习建议</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 先学习对应模块</li>
                    <li>• 再进行测验检验</li>
                    <li>• 查看解析巩固知识</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all ${
                    completedQuizzes.includes(quiz.id) ? 'border-2 border-green-500' : ''
                  }`}
                  onClick={() => setSelectedQuiz(quiz)}
                >
                  <div className={`bg-${quiz.color}-50 p-6`}>
                    <div className="flex items-center justify-between">
                      <div className={`text-${quiz.color}-600`}>
                        {quiz.icon}
                      </div>
                      {completedQuizzes.includes(quiz.id) && (
                        <div className="bg-green-500 text-white rounded-full p-2">
                          <Award size={20} />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mt-4 text-gray-800">{quiz.title}</h3>
                    <p className="text-gray-600 mt-2">{quiz.description}</p>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">5道题目</span>
                      <span className={`text-sm font-medium ${
                        completedQuizzes.includes(quiz.id) ? 'text-green-600' : 'text-indigo-600'
                      }`}>
                        {completedQuizzes.includes(quiz.id) ? '已完成' : '开始测验'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModule;