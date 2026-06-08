import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import PythonRunner from '../components/PythonRunner';

const TimeSeriesModule: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/modules" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-200">
            <ArrowLeft size={18} />
            <span>返回课程模块</span>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Clock size={48} className="mr-4" />
            <div>
              <h1 className="text-3xl font-bold">时间序列分析模块</h1>
              <p className="text-cyan-100">掌握时间数据处理、趋势分析、季节性分解等核心技能</p>
            </div>
          </div>
        </div>

        {/* 学习目标 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 学习目标</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">掌握 Pandas 时间序列数据类型</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">学会日期解析、时间索引创建</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">掌握时间重采样和窗口计算</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">学会移动平均、趋势分析</span>
            </div>
          </div>
        </div>

        {/* 第一部分：时间序列基础 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">一、时间序列基础概念</h2>
          <p className="text-gray-600 mb-4">
            时间序列是按时间顺序排列的数据点序列，在商务分析中广泛应用于销售预测、用户行为分析等场景。
          </p>

          <div className="bg-cyan-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-cyan-700 mb-2">⏰ 时间序列的组成要素</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• <strong>趋势（Trend）：</strong>数据长期变化方向</li>
              <li>• <strong>季节性（Seasonality）：</strong>周期性重复模式</li>
              <li>• <strong>周期（Cycle）：</strong>非固定周期的波动</li>
              <li>• <strong>噪声（Noise）：</strong>随机波动</li>
            </ul>
          </div>

          <h3 className="font-semibold text-gray-700 mb-3">常见时间序列类型</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-medium text-gray-800">按时间粒度</h4>
              <ul className="text-gray-600 text-sm mt-1">
                <li>• 日数据</li>
                <li>• 周数据</li>
                <li>• 月数据</li>
                <li>• 季度数据</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-medium text-gray-800">按数据类型</h4>
              <ul className="text-gray-600 text-sm mt-1">
                <li>• 销售数据</li>
                <li>• 用户活跃度</li>
                <li>• 网站流量</li>
                <li>• 股票价格</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-medium text-gray-800">业务应用</h4>
              <ul className="text-gray-600 text-sm mt-1">
                <li>• 销售预测</li>
                <li>• 异常检测</li>
                <li>• 趋势分析</li>
                <li>• 季节性分析</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 第二部分：日期处理 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">二、日期时间处理</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. 创建时间序列</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 创建日期范围
dates = pd.date_range('2024-01-01', '2024-12-31', freq='D')
print("日期范围:", dates[:5])

# 创建月度日期
months = pd.date_range('2024-01-01', '2024-12-31', freq='M')
print("月度日期:", months)

# 创建小时级日期
hours = pd.date_range('2024-01-01', periods=24, freq='H')
print("小时级日期:", hours[:5])`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. 解析日期字符串</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import pandas as pd

# 从字符串解析日期
date_str = '2024-03-15'
parsed_date = pd.to_datetime(date_str)
print(f"解析日期: {parsed_date}")

# 解析多种格式
dates_list = ['2024-01-01', '2024/02/15', 'Mar 20, 2024']
parsed_dates = pd.to_datetime(dates_list)
print("解析多个日期:", parsed_dates)

# 处理格式不规范的日期
custom_dates = pd.to_datetime(['15-01-2024', '20-02-2024'], format='%d-%m-%Y')
print("自定义格式:", custom_dates)`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">3. 提取日期属性</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`import pandas as pd

# 创建日期索引
df = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=365),
    'sales': range(365)
})

# 提取日期属性
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day'] = df['date'].dt.day
df['weekday'] = df['date'].dt.weekday  # 0=周一, 6=周日
df['quarter'] = df['date'].dt.quarter
df['is_weekend'] = df['date'].dt.weekday >= 5

print(df.head())`}</code>
          </pre>
        </div>

        {/* 第三部分：时间索引 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">三、时间索引操作</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. 设置时间索引</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 创建带时间索引的DataFrame
np.random.seed(42)
df = pd.DataFrame({
    'sales': np.random.randint(100, 500, 30),
    'orders': np.random.randint(10, 50, 30)
}, index=pd.date_range('2024-01-01', periods=30))

print("时间索引DataFrame:")
print(df.head())

# 按日期选择数据
print("\\n选择特定日期:")
print(df.loc['2024-01-05'])

# 选择日期范围
print("\\n选择日期范围:")
print(df.loc['2024-01-01':'2024-01-07'])`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. 时间切片</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 创建月度数据
np.random.seed(42)
df = pd.DataFrame({
    'sales': np.random.randint(1000, 5000, 12)
}, index=pd.date_range('2024-01-01', periods=12, freq='M'))

# 选择某月数据
print("1月数据:", df.loc['2024-01'])

# 选择某季度数据
print("\\n第一季度数据:")
print(df.loc['2024-01':'2024-03'])

# 选择上半年数据
print("\\n上半年数据:")
print(df.loc[:'2024-06'])`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">3. 时间偏移</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`import pandas as pd

# 创建日期
date = pd.Timestamp('2024-03-15')

# 时间偏移
print("原始日期:", date)
print("加1天:", date + pd.Timedelta(days=1))
print("加1周:", date + pd.Timedelta(weeks=1))
print("加1月:", date + pd.DateOffset(months=1))
print("加1年:", date + pd.DateOffset(years=1))

# 日期偏移批量操作
dates = pd.date_range('2024-01-01', periods=5)
shifted = dates + pd.Timedelta(days=10)
print("\\n批量偏移:", shifted)`}</code>
          </pre>
        </div>

        {/* 第四部分：重采样 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">四、时间重采样</h2>
          <p className="text-gray-600 mb-4">
            重采样是将时间序列从一个频率转换为另一个频率的过程，常用于数据聚合和降维。
          </p>

          <h3 className="font-semibold text-gray-700 mb-3">1. 降采样（聚合）</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 创建日度数据
np.random.seed(42)
df = pd.DataFrame({
    'sales': np.random.randint(100, 500, 90)
}, index=pd.date_range('2024-01-01', periods=90))

print("原始日度数据:")
print(df.head())

# 按周聚合
weekly = df.resample('W').sum()
print("\\n周度汇总:")
print(weekly.head())

# 按月聚合
monthly = df.resample('M').sum()
print("\\n月度汇总:")
print(monthly)

# 多种聚合方式
monthly_stats = df.resample('M').agg({
    'sales': ['sum', 'mean', 'max', 'min']
})
print("\\n月度多指标:")
print(monthly_stats)`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. 升采样（填充）</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 创建月度数据
monthly_df = pd.DataFrame({
    'sales': [1000, 1200, 1500, 1800]
}, index=pd.date_range('2024-01-01', periods=4, freq='M'))

print("月度数据:")
print(monthly_df)

# 升采样为日度数据
daily = monthly_df.resample('D').ffill()  # 前向填充
print("\\n升采样（前向填充）:")
print(daily.head(10))

# 其他填充方式
daily_interp = monthly_df.resample('D').interpolate()
print("\\n升采样（插值填充）:")
print(daily_interp.head(10))`}</code>
          </pre>
        </div>

        {/* 第五部分：移动窗口 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">五、移动窗口计算</h2>
          <p className="text-gray-600 mb-4">
            移动窗口计算是对时间序列进行平滑处理和趋势分析的重要方法。
          </p>

          <h3 className="font-semibold text-gray-700 mb-3">1. 移动平均</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 创建销售数据
np.random.seed(42)
df = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=30),
    'sales': np.random.randint(100, 500, 30)
})

# 7天移动平均
df['MA_7'] = df['sales'].rolling(window=7).mean()
print("7天移动平均:")
print(df[['date', 'sales', 'MA_7']].head(10))

# 14天移动平均
df['MA_14'] = df['sales'].rolling(window=14).mean()
print("\\n14天移动平均:")
print(df[['date', 'sales', 'MA_14']].tail(10))`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. 移动统计</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

np.random.seed(42)
df = pd.DataFrame({
    'sales': np.random.randint(100, 500, 30)
})

# 移动窗口统计
df['rolling_sum'] = df['sales'].rolling(window=7).sum()
df['rolling_mean'] = df['sales'].rolling(window=7).mean()
df['rolling_std'] = df['sales'].rolling(window=7).std()
df['rolling_max'] = df['sales'].rolling(window=7).max()
df['rolling_min'] = df['sales'].rolling(window=7).min()

print("移动窗口统计:")
print(df.head(10))`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">3. 扩展窗口</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

np.random.seed(42)
df = pd.DataFrame({
    'sales': np.random.randint(100, 500, 10)
})

# 扩展窗口（累积）
df['expanding_mean'] = df['sales'].expanding().mean()
df['expanding_sum'] = df['sales'].expanding().sum()

print("扩展窗口计算:")
print(df)`}</code>
          </pre>
        </div>

        {/* 第六部分：趋势分析 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">六、趋势分析与季节性</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. 同比与环比分析</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 创建月度销售数据
np.random.seed(42)
monthly_sales = pd.DataFrame({
    'month': pd.date_range('2023-01-01', periods=24, freq='M'),
    'sales': np.random.randint(1000, 5000, 24) + 
             np.array([i * 100 for i in range(24)])  # 添加趋势
})

# 环比增长率（与上月对比）
monthly_sales['环比增长率'] = monthly_sales['sales'].pct_change() * 100

print("月度销售数据（含环比）:")
print(monthly_sales.tail(12))

# 同比增长率（与去年同期对比）
monthly_sales['去年同期'] = monthly_sales['sales'].shift(12)
monthly_sales['同比增长率'] = (
    (monthly_sales['sales'] - monthly_sales['去年同期']) 
    / monthly_sales['去年同期'] * 100
)

print("\\n同比分析（2024年）:")
print(monthly_sales[monthly_sales['month'] >= '2024-01-01'][['month', 'sales', '同比增长率']])`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. 季节性分析</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 创建带季节性的销售数据
np.random.seed(42)
dates = pd.date_range('2022-01-01', '2024-12-31', freq='M')
# 基础趋势 + 季节性波动
sales = 1000 + np.array([i * 20 for i in range(len(dates))]) + \
        np.array([100 if m in [11, 12, 1] else -50 if m in [6, 7] else 0 
                  for m in dates.month])

df = pd.DataFrame({'date': dates, 'sales': sales})

# 按月份分析季节性
df['month'] = df['date'].dt.month
monthly_avg = df.groupby('month')['sales'].mean()

print("各月份平均销售额:")
print(monthly_avg)

# 找出销售旺季和淡季
print("\\n销售旺季（月份）:", monthly_avg.nlargest(3).index.tolist())
print("销售淡季（月份）:", monthly_avg.nsmallest(3).index.tolist())`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">3. 趋势判断</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 创建销售数据
np.random.seed(42)
df = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=90),
    'sales': np.random.randint(100, 500, 90) + np.array([i * 2 for i in range(90)])
})

# 计算移动平均判断趋势
df['MA_30'] = df['sales'].rolling(window=30).mean()

# 判断趋势方向
first_half = df['MA_30'].iloc[:45].mean()
second_half = df['MA_30'].iloc[45:].mean()

print("趋势分析:")
print(f"前45天平均: {first_half:.2f}")
print(f"后45天平均: {second_half:.2f}")

if second_half > first_half * 1.05:
    print("趋势判断: 上升趋势 ✓")
elif second_half < first_half * 0.95:
    print("趋势判断: 下降趋势 ↓")
else:
    print("趋势判断: 平稳趋势 —")`}</code>
          </pre>
        </div>

        {/* 第七部分：实战案例 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">七、商务实战案例</h2>

          <h3 className="font-semibold text-gray-700 mb-3">案例：电商销售时间序列分析</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`import pandas as pd
import numpy as np

# 模拟电商销售数据（365天）
np.random.seed(42)
dates = pd.date_range('2024-01-01', periods=365)

# 创建带趋势和季节性的数据
base_sales = 1000
trend = np.array([i * 3 for i in range(365)])  # 上升趋势
seasonality = np.array([
    500 if dates[i].month in [11, 12] else  # 年末旺季
    300 if dates[i].month == 6 else          # 6月促销
    -200 if dates[i].weekday >= 5 else       # 周末淡季
    0 for i in range(365)
])
noise = np.random.normal(0, 100, 365)

sales = base_sales + trend + seasonality + noise

df = pd.DataFrame({
    'date': dates,
    'sales': sales.astype(int)
})

print("=" * 50)
print("电商销售时间序列分析报告")
print("=" * 50)

# 基本统计
print("\\n基本统计:")
print(f"日均销售额: {df['sales'].mean():,.0f} 元")
print(f"最高日销售: {df['sales'].max():,.0f} 元")
print(f"最低日销售: {df['sales'].min():,.0f} 元")

# 月度分析
df['month'] = df['date'].dt.month
monthly = df.groupby('month')['sales'].sum()
print("\\n月度销售汇总:")
print(monthly)

# 周度分析
df['weekday'] = df['date'].dt.weekday
weekday_avg = df.groupby('weekday')['sales'].mean()
print("\\n各工作日平均销售:")
print(weekday_avg)

# 季度分析
df['quarter'] = df['date'].dt.quarter
quarterly = df.groupby('quarter')['sales'].agg(['sum', 'mean'])
print("\\n季度销售分析:")
print(quarterly)

# 环比增长
df['环比增长'] = df['sales'].pct_change() * 100
print("\\n最近7天环比增长:")
print(df[['date', 'sales', '环比增长']].tail(7))`}</code>
          </pre>
        </div>

        {/* 交互式代码运行区 */}
        <div className="mt-8">
          <PythonRunner
            title="日期处理练习"
            initialCode={`import pandas as pd
import numpy as np

# 创建日期范围
dates = pd.date_range('2024-01-01', '2024-12-31', freq='D')
print(f"2024年共{len(dates)}天")

# 创建月度日期
months = pd.date_range('2024-01-01', periods=12, freq='M')
print("\\n月度日期:")
for m in months:
    print(f"  {m.strftime('%Y-%m')}")

# 解析日期字符串
date_strs = ['2024-01-15', '2024/02/20', 'Mar 15, 2024']
parsed = pd.to_datetime(date_strs)
print("\\n解析日期:")
for d in parsed:
    print(f"  {d.strftime('%Y年%m月%d日')}")`}
            showInputFields={false}
          />

          <div className="mt-6">
            <PythonRunner
              title="时间重采样练习"
              initialCode={`import pandas as pd
import numpy as np

# 创建日度销售数据
np.random.seed(42)
df = pd.DataFrame({
    'sales': np.random.randint(100, 500, 30)
}, index=pd.date_range('2024-01-01', periods=30))

print("原始日度数据（前5天）:")
print(df.head())

# 按周汇总
weekly = df.resample('W').agg({
    'sales': ['sum', 'mean', 'max', 'min']
})
print("\\n周度汇总:")
print(weekly)

# 按月汇总
monthly = df.resample('M').sum()
print("\\n月度汇总:")
print(monthly)`}
              showInputFields={false}
            />
          </div>

          <div className="mt-6">
            <PythonRunner
              title="移动平均趋势分析"
              initialCode={`import pandas as pd
import numpy as np

# 创建销售数据（带上升趋势）
np.random.seed(42)
df = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=60),
    'sales': np.random.randint(100, 300, 60) + np.array([i * 5 for i in range(60)])
})

# 计算移动平均
df['MA_7'] = df['sales'].rolling(window=7).mean()
df['MA_14'] = df['sales'].rolling(window=14).mean()

print("销售数据与移动平均:")
print(df[['date', 'sales', 'MA_7', 'MA_14']].tail(10))

# 判断趋势
first_week = df['MA_7'].iloc[:7].mean()
last_week = df['MA_7'].iloc[-7:].mean()
growth_rate = (last_week - first_week) / first_week * 100

print(f"\\n趋势分析:")
print(f"首周平均: {first_week:.0f}")
print(f"末周平均: {last_week:.0f}")
print(f"增长率: {growth_rate:.1f}%")`}
              showInputFields={false}
            />
          </div>
        </div>

        {/* 模块练习 */}
        <div className="mt-8 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-6 border border-cyan-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 模块练习</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">练习题目</h3>
            <p className="text-gray-600">
              1. 创建一年的日度销售数据，按月汇总计算总销售额<br />
              2. 计算7天移动平均，判断销售趋势方向<br />
              3. 分析工作日与周末的销售差异
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/modules/statistics" className="bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200">
            ← 统计学基础
          </Link>
          <Link to="/modules/data-cleaning" className="bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-cyan-700 transition duration-200">
            数据清洗模块 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TimeSeriesModule;