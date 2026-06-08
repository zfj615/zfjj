import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowLeft } from 'lucide-react';
import PythonRunner from '../components/PythonRunner';

const PythonBasics: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeSections = [
    {
      id: 'python-syntax',
      title: 'Python 基础语法',
      description: '学习 Python 的基本语法，包括变量、数据类型、循环和条件语句',
      code: `# Python 基础语法
# 1. 变量定义与基本数据类型
name = "张三"  # 字符串
age = 25  # 整数
height = 1.75  # 浮点数
is_student = True  # 布尔值

print(f"姓名: {name}, 年龄: {age}")

# 2. 列表 (List)
scores = [85, 90, 78, 92, 88]
scores.append(95)  # 添加元素
print(f"成绩列表: {scores}")
print(f"平均分: {sum(scores)/len(scores):.2f}")

# 3. 字典 (Dictionary)
student = {
    "name": "李四",
    "age": 22,
    "major": "数据分析",
    "scores": [85, 90, 88]
}
print(f"学生信息: {student}")

# 4. 条件语句
score = 85
if score >= 90:
    grade = "优秀"
elif score >= 80:
    grade = "良好"
elif score >= 60:
    grade = "及格"
else:
    grade = "不及格"
print(f"成绩等级: {grade}")

# 5. 循环语句
for i in range(5):
    print(f"第 {i+1} 次循环")

# 6. 列表推导式
squares = [x*x for x in range(1, 6)]
print(f"1-5的平方: {squares}")`
    },
    {
      id: 'python-functions',
      title: 'Python 函数',
      description: '学习如何定义和使用函数，提高代码的复用性',
      code: `# Python 函数定义
def calculate_gmv(sales):
    """计算GMV（总销售额）"""
    return sum(sales)

def calculate_average(scores):
    """计算平均分"""
    if not scores:
        return 0
    return sum(scores) / len(scores)

def classify_customer(amount):
    """客户价值分类"""
    if amount >= 10000:
        return "VIP客户"
    elif amount >= 5000:
        return "重要客户"
    elif amount >= 1000:
        return "普通客户"
    else:
        return "新客户"

# 使用示例
monthly_sales = [1500, 2300, 1800, 3200, 2800, 1900]
total_gmv = calculate_gmv(monthly_sales)
avg_sales = calculate_average(monthly_sales)

print(f"月度GMV: {total_gmv} 元")
print(f"平均销售额: {avg_sales:.2f} 元")

customer_spends = [500, 1200, 8000, 20000, 6000]
for spend in customer_spends:
    category = classify_customer(spend)
    print(f"消费 {spend} 元: {category}")

# 带默认参数的函数
def generate_report(title, data, date="2024-01-01"):
    """生成简单报告"""
    return {
        "title": title,
        "date": date,
        "data": data
    }

report = generate_report("销售报告", monthly_sales)
print(f"报告: {report}")`
    },
    {
      id: 'numpy-basics',
      title: 'NumPy 入门',
      description: '学习 NumPy 的基本操作，为数据处理打下基础',
      code: `import numpy as np

# 1. 创建数组
# 从列表创建
arr1 = np.array([1, 2, 3, 4, 5])
print(f"数组1: {arr1}")

# 创建特定数组
zeros = np.zeros(5)  # 全0数组
ones = np.ones(5)  # 全1数组
range_arr = np.arange(1, 11)  # 1到10的数组
random_arr = np.random.rand(5)  # 随机数组

print(f"range数组: {range_arr}")

# 2. 数组运算
arr2 = np.array([10, 20, 30, 40, 50])
print(f"数组2: {arr2}")

# 基础运算
print(f"相加: {arr1 + arr2}")
print(f"相乘: {arr1 * arr2}")
print(f"平方: {arr1 ** 2}")

# 3. 统计计算
sales_data = np.array([1500, 2300, 1800, 3200, 2800, 1900, 2100, 2500, 1700, 2200])

print(f"销售额总和: {sales_data.sum()}")
print(f"平均值: {sales_data.mean():.2f}")
print(f"中位数: {np.median(sales_data)}")
print(f"最大值: {sales_data.max()}")
print(f"最小值: {sales_data.min()}")
print(f"标准差: {sales_data.std():.2f}")

# 4. 布尔索引
high_sales = sales_data[sales_data > 2000]
print(f"超过2000的销售额: {high_sales}")

# 5. 二维数组
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(f"二维数组:\\n{matrix}")
print(f"第一行: {matrix[0]}")
print(f"第二列: {matrix[:, 1]}")`
    },
    {
      id: 'pandas-basics',
      title: 'Pandas 入门',
      description: '学习 Pandas 的核心操作，包括数据读取、查看和基本处理',
      code: `import pandas as pd
import numpy as np

# 1. 创建 DataFrame
# 方式1: 从字典创建
data = {
    "日期": ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05"],
    "产品": ["产品A", "产品B", "产品A", "产品C", "产品B"],
    "销量": [100, 150, 120, 80, 200],
    "单价": [10.5, 15.0, 10.5, 25.0, 15.0]
}
df = pd.DataFrame(data)
print("原始数据:")
print(df)

# 2. 查看数据
print(f"\\n数据形状: {df.shape}")
print(f"\\n前3行数据:")
print(df.head(3))
print(f"\\n数据信息:")
print(df.info())
print(f"\\n统计描述:")
print(df.describe())

# 3. 数据选择
# 选择列
product_names = df["产品"]
print(f"\\n产品列:")
print(product_names)

# 选择行
first_row = df.iloc[0]
print(f"\\n第一行:")
print(first_row)

# 条件选择
high_sales = df[df["销量"] > 100]
print(f"\\n销量超过100的记录:")
print(high_sales)

# 4. 数据处理
# 计算销售额
df["销售额"] = df["销量"] * df["单价"]
print(f"\\n添加销售额列后:")
print(df)

# 5. 分组聚合
product_sales = df.groupby("产品").agg({
    "销量": "sum",
    "销售额": "sum"
}).sort_values("销售额", ascending=False)
print(f"\\n按产品分组统计:")
print(product_sales)

# 6. 日期处理
df["日期"] = pd.to_datetime(df["日期"])
df["月份"] = df["日期"].dt.month
df["星期几"] = df["日期"].dt.dayofweek
print(f"\\n添加日期信息后:")
print(df)`
    }
  ];

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

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <BookOpen size={48} className="mr-4" />
            <div>
              <h1 className="text-3xl font-bold">Python 基础模块</h1>
              <p className="text-blue-100">Python 语法、数据类型、函数、Pandas 和 NumPy 入门</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">模块概述</h2>
          <p className="text-gray-600 mb-6">
            本模块将带领你从零开始学习 Python 编程和数据分析基础库，包括：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">✅ Python 基础语法</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 变量、数据类型、操作符</li>
                <li>• 列表、字典等数据结构</li>
                <li>• 条件语句和循环</li>
                <li>• 函数定义和调用</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">✅ 数据分析库</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• NumPy 数组计算</li>
                <li>• Pandas 数据处理</li>
                <li>• DataFrame 操作</li>
                <li>• 数据统计与聚合</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {codeSections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-50 p-6 border-b border-blue-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Python 代码</span>
                    <button
                      onClick={() => copyCode(section.code, section.id)}
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      {copied === section.id ? (
                        <>
                          <CheckCircle size={16} className="mr-1" />
                          已复制
                        </>
                      ) : (
                        '复制代码'
                      )}
                    </button>
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{section.code}</code>
                  </pre>
                </div>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">💡 学习建议</h4>
                  <p className="text-gray-600 text-sm">
                    1. 先理解代码逻辑，再动手运行<br />
                    2. 尝试修改参数，观察输出变化<br />
                    3. 结合自己的业务场景思考应用方法
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 模块练习</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">练习题目</h3>
            <p className="text-gray-600 mb-4">
              1. 定义一个函数，接收销售数据列表，返回总销售额、平均销售额和最高销售额<br />
              2. 使用 Pandas 创建一个包含日期、产品、销量、销售额的 DataFrame<br />
              3. 按照产品分组，统计每个产品的总销量和总销售额
            </p>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700 text-sm">
                完成练习后，可以进入下一个模块学习数据清洗技术
              </p>
            </div>
          </div>
        </div>

        {/* 交互式代码运行区 */}
        <div className="mt-8">
          <PythonRunner
            title="Python 基础语法练习"
            initialCode={`# 练习1: 计算销售额统计
sales_data = [1500, 2300, 1800, 3200, 2800]

total_sales = sum(sales_data)
avg_sales = total_sales / len(sales_data)
max_sales = max(sales_data)
min_sales = min(sales_data)

print("销售额统计:")
print(f"总销售额: {total_sales} 元")
print(f"平均销售额: {avg_sales:.2f} 元")
print(f"最高销售额: {max_sales} 元")
print(f"最低销售额: {min_sales} 元")`}
            showInputFields={false}
          />

          <div className="mt-6">
            <PythonRunner
              title="Pandas 数据处理练习"
              initialCode={`import pandas as pd

# 创建销售数据
data = {
    "日期": ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05"],
    "产品": ["产品A", "产品B", "产品A", "产品C", "产品B"],
    "销量": [100, 150, 120, 80, 200],
    "单价": [10.5, 15.0, 10.5, 25.0, 15.0]
}

df = pd.DataFrame(data)
df["销售额"] = df["销量"] * df["单价"]

print("销售数据:")
print(df)
print("\\n按产品分组统计:")
product_stats = df.groupby("产品").agg({
    "销量": "sum",
    "销售额": "sum"
})
print(product_stats)`}
              showInputFields={false}
            />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link
            to="/modules"
            className="bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200"
          >
            ← 课程模块
          </Link>
          <Link
            to="/modules/data-cleaning"
            className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            数据清洗模块 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PythonBasics;
