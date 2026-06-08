import React from 'react';
import { Link } from 'react-router-dom';
import { Sigma, CheckCircle, ArrowLeft } from 'lucide-react';
import PythonRunner from '../components/PythonRunner';

const StatisticsModule: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/modules" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-200">
            <ArrowLeft size={18} />
            <span>返回课程模块</span>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Sigma size={48} className="mr-4" />
            <div>
              <h1 className="text-3xl font-bold">统计学基础模块</h1>
              <p className="text-pink-100">掌握数据分析必备的统计学知识，理解数据背后的规律</p>
            </div>
          </div>
        </div>

        {/* 学习目标 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 学习目标</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">理解描述性统计的核心概念</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">掌握均值、中位数、众数的计算与应用</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">理解方差、标准差衡量数据离散程度</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">掌握分位数、箱线图的含义和应用</span>
            </div>
          </div>
        </div>

        {/* 第一部分：描述性统计概述 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">一、描述性统计概述</h2>
          <p className="text-gray-600 mb-4">
            描述性统计是对数据集基本特征的总结和描述，主要包括集中趋势和离散程度两个方面。
          </p>

          <div className="bg-pink-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-pink-700 mb-2">📊 统计分析的两个维度</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <h4 className="font-medium text-gray-800">集中趋势</h4>
                <p className="text-gray-600 text-sm">描述数据的"中心位置"</p>
                <ul className="text-gray-500 text-sm mt-1">
                  <li>• 均值（Mean）</li>
                  <li>• 中位数（Median）</li>
                  <li>• 众数（Mode）</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <h4 className="font-medium text-gray-800">离散程度</h4>
                <p className="text-gray-600 text-sm">描述数据的"分散程度"</p>
                <ul className="text-gray-500 text-sm mt-1">
                  <li>• 方差（Variance）</li>
                  <li>• 标准差（Std Dev）</li>
                  <li>• 极差（Range）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 第二部分：集中趋势 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">二、集中趋势指标</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. 均值（Mean）</h3>
          <p className="text-gray-600 mb-2">
            均值是所有数据的算术平均，是最常用的集中趋势指标。
          </p>
          <div className="bg-gray-100 p-3 rounded mb-3">
            <p className="text-sm text-gray-700">
              <strong>公式：</strong> μ = (x₁ + x₂ + ... + xₙ) / n = Σx / n
            </p>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import numpy as np

data = [10, 20, 30, 40, 50]

# 计算均值
mean = np.mean(data)
print(f"均值: {mean}")  # 30

# 手动计算
mean_manual = sum(data) / len(data)
print(f"手动计算均值: {mean_manual}")  # 30`}</code>
          </pre>

          <div className="bg-yellow-50 p-3 rounded mb-4">
            <p className="text-sm text-yellow-700">
              <strong>⚠️ 注意：</strong>均值容易受极端值影响，数据有异常值时可能不准确。
            </p>
          </div>

          <h3 className="font-semibold text-gray-700 mb-3">2. 中位数（Median）</h3>
          <p className="text-gray-600 mb-2">
            中位数是将数据排序后位于中间位置的值，不受极端值影响。
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import numpy as np

# 奇数个数据
data1 = [10, 20, 30, 40, 50]
median1 = np.median(data1)
print(f"中位数(奇数): {median1}")  # 30

# 偶数个数据（取中间两个的平均）
data2 = [10, 20, 30, 40]
median2 = np.median(data2)
print(f"中位数(偶数): {median2}")  # 25.0

# 有极端值的数据
data3 = [10, 20, 30, 40, 1000]
mean3 = np.mean(data3)
median3 = np.median(data3)
print(f"有极端值 - 均值: {mean3}, 中位数: {median3}")
# 均值220，中位数30 - 中位数更能反映真实情况`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">3. 众数（Mode）</h3>
          <p className="text-gray-600 mb-2">
            众数是数据中出现次数最多的值。
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`from scipy import stats
import numpy as np

data = [1, 2, 2, 3, 3, 3, 4, 4, 5]

# 计算众数
mode = stats.mode(data)
print(f"众数: {mode.mode}, 出现次数: {mode.count}")

# 使用 Pandas
import pandas as pd
df = pd.DataFrame({'values': data})
mode_pandas = df['values'].mode()
print(f"Pandas众数: {mode_pandas.tolist()}")`}</code>
          </pre>
        </div>

        {/* 第三部分：离散程度 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">三、离散程度指标</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. 极差（Range）</h3>
          <p className="text-gray-600 mb-2">
            极差是最大值与最小值的差，反映数据的范围。
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import numpy as np

data = [10, 20, 30, 40, 50]

# 计算极差
range_val = np.max(data) - np.min(data)
print(f"极差: {range_val}")  # 40

# 使用 numpy 的 ptp 函数
range_ptp = np.ptp(data)
print(f"ptp极差: {range_ptp}")  # 40`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. 方差（Variance）</h3>
          <p className="text-gray-600 mb-2">
            方差衡量数据偏离均值的程度，是每个数据点与均值差的平方的平均。
          </p>
          <div className="bg-gray-100 p-3 rounded mb-3">
            <p className="text-sm text-gray-700">
              <strong>公式：</strong> σ² = Σ(x - μ)² / n
            </p>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import numpy as np

data = [10, 20, 30, 40, 50]

# 计算方差
variance = np.var(data)
print(f"方差: {variance}")  # 200.0

# 手动计算
mean = np.mean(data)
var_manual = sum((x - mean)**2 for x in data) / len(data)
print(f"手动方差: {var_manual}")  # 200.0`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">3. 标准差（Standard Deviation）</h3>
          <p className="text-gray-600 mb-2">
            标准差是方差的平方根，与原数据单位一致，更直观。
          </p>
          <div className="bg-gray-100 p-3 rounded mb-3">
            <p className="text-sm text-gray-700">
              <strong>公式：</strong> σ = √σ² = √[Σ(x - μ)² / n]
            </p>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import numpy as np

data = [10, 20, 30, 40, 50]

# 计算标准差
std = np.std(data)
print(f"标准差: {std}")  # 14.14

# 标准差 = 方差的平方根
variance = np.var(data)
std_manual = np.sqrt(variance)
print(f"手动标准差: {std_manual}")  # 14.14`}</code>
          </pre>

          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-blue-700 mb-2">💡 标准差的业务意义</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• 标准差越小，数据越稳定</li>
              <li>• 标准差越大，数据波动越大</li>
              <li>• 业务应用：评估销售稳定性、用户行为一致性等</li>
            </ul>
          </div>
        </div>

        {/* 第四部分：分位数 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">四、分位数与箱线图</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. 四分位数</h3>
          <p className="text-gray-600 mb-2">
            四分位数将数据分成四等份，常用于分析数据分布。
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import numpy as np

data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 计算四分位数
Q1 = np.percentile(data, 25)  # 第一四分位数
Q2 = np.percentile(data, 50)  # 第二四分位数（中位数）
Q3 = np.percentile(data, 75)  # 第三四分位数

print(f"Q1 (25%): {Q1}")  # 3.25
print(f"Q2 (50%): {Q2}")  # 5.5
print(f"Q3 (75%): {Q3}")  # 7.75

# 四分位距（IQR）
IQR = Q3 - Q1
print(f"IQR: {IQR}")  # 4.5`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. 箱线图解读</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">箱线图组成</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• <strong>箱体：</strong>Q1 到 Q3 的范围</li>
                  <li>• <strong>中线：</strong>中位数 Q2</li>
                  <li>• <strong>须线：</strong>Q1-1.5*IQR 到 Q3+1.5*IQR</li>
                  <li>• <strong>异常点：</strong>超出须线的点</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">业务应用</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 快速识别异常值</li>
                  <li>• 比较不同组的数据分布</li>
                  <li>• 分析销售数据的稳定性</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="font-semibold text-gray-700 mb-3">3. 使用 Pandas 描述统计</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 创建示例数据
np.random.seed(42)
df = pd.DataFrame({
    'sales': np.random.normal(1000, 200, 100),
    'quantity': np.random.randint(10, 100, 100)
})

# describe() 一次性输出所有统计指标
print(df.describe())

# 输出包括：
# count  - 数量
# mean   - 均值
# std    - 标准差
# min    - 最小值
# 25%    - Q1
# 50%    - Q2（中位数）
# 75%    - Q3
# max    - 最大值`}</code>
          </pre>
        </div>

        {/* 第五部分：分布形态 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">五、分布形态分析</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. 偏度（Skewness）</h3>
          <p className="text-gray-600 mb-2">
            偏度衡量数据分布的不对称程度。
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import numpy as np
from scipy import stats

# 正态分布（偏度≈0）
normal_data = np.random.normal(0, 1, 1000)
skew_normal = stats.skew(normal_data)
print(f"正态分布偏度: {skew_normal:.4f}")

# 右偏分布（正偏度）
right_skew = [1, 1, 1, 2, 2, 3, 10, 20, 50]
skew_right = stats.skew(right_skew)
print(f"右偏分布偏度: {skew_right:.4f}")

# 左偏分布（负偏度）
left_skew = [50, 20, 10, 3, 2, 2, 1, 1, 1]
skew_left = stats.skew(left_skew)
print(f"左偏分布偏度: {skew_left:.4f}")`}</code>
          </pre>

          <div className="bg-pink-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-pink-700 mb-2">📊 偏度解读</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• <strong>偏度 = 0：</strong>对称分布（正态分布）</li>
              <li>• <strong>偏度 {'>'} 0：</strong>右偏分布，长尾在右侧</li>
              <li>• <strong>偏度 {'<'} 0：</strong>左偏分布，长尾在左侧</li>
            </ul>
          </div>

          <h3 className="font-semibold text-gray-700 mb-3">2. 峰度（Kurtosis）</h3>
          <p className="text-gray-600 mb-2">
            峰度衡量数据分布的尖锐程度。
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`from scipy import stats
import numpy as np

# 正态分布（峰度≈0）
normal_data = np.random.normal(0, 1, 1000)
kurt_normal = stats.kurtosis(normal_data)
print(f"正态分布峰度: {kurt_normal:.4f}")

# 峰度解读：
# 峰度 ≈ 0：正态分布
# 峰度 {'>'} 0：尖峰分布（数据集中在中心）
# 峰度 {'<'} 0：平坦分布（数据分散）`}</code>
          </pre>
        </div>

        {/* 第六部分：实战案例 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">六、商务数据分析实战</h2>

          <h3 className="font-semibold text-gray-700 mb-3">案例：销售数据统计分析</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 模拟销售数据
np.random.seed(42)
sales_data = pd.DataFrame({
    '日期': pd.date_range('2024-01-01', periods=30),
    '销售额': np.random.normal(5000, 1000, 30),
    '订单数': np.random.randint(50, 150, 30)
})

# 基本统计分析
print("=" * 50)
print("销售数据统计分析报告")
print("=" * 50)

print("\\n销售额统计:")
print(f"  平均销售额: {sales_data['销售额'].mean():.2f} 元")
print(f"  销售额中位数: {sales_data['销售额'].median():.2f} 元")
print(f"  销售额标准差: {sales_data['销售额'].std():.2f} 元")
print(f"  最高销售额: {sales_data['销售额'].max():.2f} 元")
print(f"  最低销售额: {sales_data['销售额'].min():.2f} 元")

print("\\n订单数统计:")
print(f"  平均订单数: {sales_data['订单数'].mean():.0f}")
print(f"  订单数中位数: {sales_data['订单数'].median():.0f}")

# 计算客单价
sales_data['客单价'] = sales_data['销售额'] / sales_data['订单数']
print("\\n客单价统计:")
print(f"  平均客单价: {sales_data['客单价'].mean():.2f} 元")

# 分析结论
print("\\n分析结论:")
if sales_data['销售额'].std() / sales_data['销售额'].mean() > 0.3:
    print("  ⚠️ 销售波动较大，需要关注异常日期")
else:
    print("  ✓ 销售相对稳定")

print(f"  客单价集中在 {sales_data['客单价'].quantile(0.25):.0f} - {sales_data['客单价'].quantile(0.75):.0f} 元区间")`}</code>
          </pre>
        </div>

        {/* 交互式代码运行区 */}
        <div className="mt-8">
          <PythonRunner
            title="描述性统计练习"
            initialCode={`import numpy as np
import pandas as pd

# 创建示例数据
data = [23, 45, 67, 89, 12, 34, 56, 78, 90, 11]

print("原始数据:", data)
print("\\n集中趋势指标:")
print(f"均值: {np.mean(data):.2f}")
print(f"中位数: {np.median(data):.2f}")

print("\\n离散程度指标:")
print(f"极差: {np.ptp(data)}")
print(f"方差: {np.var(data):.2f}")
print(f"标准差: {np.std(data):.2f}")

print("\\n分位数:")
print(f"Q1 (25%): {np.percentile(data, 25):.2f}")
print(f"Q2 (50%): {np.percentile(data, 50):.2f}")
print(f"Q3 (75%): {np.percentile(data, 75):.2f}")
print(f"IQR: {np.percentile(data, 75) - np.percentile(data, 25):.2f}")`}
            showInputFields={false}
          />

          <div className="mt-6">
            <PythonRunner
              title="销售数据分析实战"
              initialCode={`import pandas as pd
import numpy as np

# 模拟30天销售数据
np.random.seed(42)
df = pd.DataFrame({
    '日期': pd.date_range('2024-01-01', periods=30),
    '销售额': np.random.normal(10000, 2000, 30),
    '订单数': np.random.randint(80, 200, 30)
})

# 计算客单价
df['客单价'] = df['销售额'] / df['订单数']

print("销售数据统计摘要:")
print(df.describe())

print("\\n关键指标:")
print(f"日均销售额: {df['销售额'].mean():,.0f} 元")
print(f"销售额波动率: {df['销售额'].std()/df['销售额'].mean()*100:.1f}%")
print(f"平均客单价: {df['客单价'].mean():.0f} 元")`}
              showInputFields={false}
            />
          </div>
        </div>

        {/* 模块练习 */}
        <div className="mt-8 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 模块练习</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">练习题目</h3>
            <p className="text-gray-600">
              1. 计算一组销售数据的均值、中位数、标准差<br />
              2. 使用 describe() 函数分析数据分布<br />
              3. 计算四分位数并判断是否存在异常值
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/modules/numpy" className="bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200">
            ← NumPy专项
          </Link>
          <Link to="/modules/time-series" className="bg-pink-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-200">
            时间序列分析 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatisticsModule;