import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle, ArrowLeft } from 'lucide-react';
import PythonRunner from '../components/PythonRunner';

const DataVisualization: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeSections = [
    {
      id: 'matplotlib-basics',
      title: 'Matplotlib 基础',
      description: '学习使用Matplotlib创建基本的统计图表',
      code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 设置中文字体
plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False

# 1. 创建示例数据
dates = pd.date_range("2024-01-01", periods=12, freq="M")
sales = [1200, 1500, 1300, 1800, 1600, 2000, 1900, 2200, 2100, 2500, 2300, 2800]
profit = [300, 350, 320, 450, 400, 500, 480, 550, 520, 600, 580, 700]

# 2. 折线图
plt.figure(figsize=(12, 6))
plt.plot(dates, sales, marker='o', label='销售额', color='#3B82F6')
plt.plot(dates, profit, marker='s', label='利润', color='#10B981')
plt.title('月度销售趋势', fontsize=14, pad=20)
plt.xlabel('日期')
plt.ylabel('金额')
plt.legend()
plt.grid(alpha=0.3)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# 3. 柱状图
products = ['产品A', '产品B', '产品C', '产品D']
product_sales = [3500, 2800, 4200, 1900]

plt.figure(figsize=(10, 6))
bars = plt.bar(products, product_sales, color=['#3B82F6', '#10B981', '#F59E0B', '#EF4444'])
plt.title('各产品销售对比', fontsize=14, pad=20)
plt.xlabel('产品')
plt.ylabel('销售额')

# 添加数值标签
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2., height, f'{int(height)}', ha='center', va='bottom')

plt.tight_layout()
plt.show()

# 4. 饼图
categories = ['电子产品', '服装', '食品', '日用品']
category_sales = [4500, 3200, 2800, 1500]
colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']

plt.figure(figsize=(10, 8))
wedges, texts, autotexts = plt.pie(category_sales, labels=categories, autopct='%1.1f%%', colors=colors, startangle=90)
plt.title('销售品类分布', fontsize=14, pad=20)
plt.legend(wedges, categories, loc="best", bbox_to_anchor=(1, 0, 0.5, 1))
plt.axis('equal')
plt.tight_layout()
plt.show()

# 5. 子图布局
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 子图1: 折线图
axes[0, 0].plot(dates, sales, marker='o', color='#3B82F6')
axes[0, 0].set_title('销售额趋势')
axes[0, 0].tick_params(axis='x', rotation=45)

# 子图2: 柱状图
axes[0, 1].bar(products, product_sales, color='#10B981')
axes[0, 1].set_title('产品销售额')

# 子图3: 饼图
axes[1, 0].pie(category_sales, labels=categories, autopct='%1.1f%%')
axes[1, 0].set_title('品类分布')

# 子图4: 散点图
axes[1, 1].scatter(sales, profit, color='#F59E0B', s=100, alpha=0.6)
axes[1, 1].set_xlabel('销售额')
axes[1, 1].set_ylabel('利润')
axes[1, 1].set_title('销售额与利润关系')

plt.tight_layout()
plt.show()`
    },
    {
      id: 'seaborn-plots',
      title: 'Seaborn 统计图表',
      description: '学习使用Seaborn创建更美观的统计分析图表',
      code: `import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False
sns.set_style("whitegrid")

# 1. 创建示例数据
np.random.seed(42)
data = {
    "月份": ["1月", "2月", "3月", "4月", "5月", "6月"] * 3,
    "产品": ["产品A"]*6 + ["产品B"]*6 + ["产品C"]*6,
    "销量": np.random.randint(100, 500, 18),
    "价格": np.random.randint(50, 200, 18)
}
df = pd.DataFrame(data)
df["销售额"] = df["销量"] * df["价格"]

print("示例数据:")
print(df.head())

# 2. 箱线图 - 查看销量分布
plt.figure(figsize=(10, 6))
sns.boxplot(x="产品", y="销售额", data=df, palette="Set2")
plt.title("各产品销售额分布", fontsize=14, pad=20)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# 3. 热力图 - 相关性分析
corr_data = df[["销量", "价格", "销售额"]].corr()
plt.figure(figsize=(8, 6))
sns.heatmap(corr_data, annot=True, cmap="coolwarm", center=0, fmt=".2f")
plt.title("变量相关性热力图", fontsize=14, pad=20)
plt.tight_layout()
plt.show()

# 4. 小提琴图
plt.figure(figsize=(10, 6))
sns.violinplot(x="产品", y="销量", data=df, palette="Pastel1")
plt.title("各产品销量分布小提琴图", fontsize=14, pad=20)
plt.tight_layout()
plt.show()

# 5. 计数图
plt.figure(figsize=(10, 6))
sns.countplot(x="月份", hue="产品", data=df, palette="Set2")
plt.title("各月产品销量计数", fontsize=14, pad=20)
plt.tight_layout()
plt.show()

# 6. 配对图 - 多变量关系
sns.pairplot(df, hue="产品", palette="Set2", diag_kind="kde")
plt.suptitle("多变量关系配对图", y=1.02)
plt.show()

# 7. 分面绘图
g = sns.FacetGrid(df, col="产品", height=4, aspect=1.2)
g.map(sns.lineplot, "月份", "销售额", marker="o")
g.fig.suptitle("各产品月度销售趋势", y=1.02)
g.axes[0, 0].tick_params(axis='x', rotation=45)
plt.tight_layout()
plt.show()`
    },
    {
      id: 'plotly-interactive',
      title: 'Plotly 交互式图表',
      description: '学习使用Plotly创建可交互的图表展示',
      code: `import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots

# 1. 创建示例数据
dates = pd.date_range("2024-01-01", periods=12, freq="M")
products = ["产品A", "产品B", "产品C"]
data = []

for product in products:
    for i, date in enumerate(dates):
        base = {"产品A": 1000, "产品B": 800, "产品C": 600}[product]
        trend = i * 50
        noise = np.random.randint(-200, 200)
        sales = base + trend + noise
        data.append({"日期": date, "产品": product, "销售额": max(sales, 200)})

df = pd.DataFrame(data)

# 2. 交互式折线图
fig = px.line(df, x="日期", y="销售额", color="产品", 
              title="产品销售趋势", markers=True)
fig.update_layout(xaxis_tickangle=-45, height=500)
fig.show()

# 3. 交互式柱状图
fig_bar = px.bar(df, x="产品", y="销售额", color="产品", 
                 title="产品销售额对比",
                 barmode="group", text_auto=True)
fig_bar.update_layout(height=500)
fig_bar.show()

# 4. 交互式饼图
df_total = df.groupby("产品")["销售额"].sum().reset_index()
fig_pie = px.pie(df_total, values="销售额", names="产品",
                 title="产品销售额占比",
                 color_discrete_sequence=px.colors.qualitative.Set2)
fig_pie.update_layout(height=500)
fig_pie.show()

# 5. 交互式散点图
fig_scatter = px.scatter(df, x="日期", y="销售额", color="产品",
                         size="销售额", title="销售散点图",
                         hover_data=["产品", "销售额", "日期"])
fig_scatter.update_layout(xaxis_tickangle=-45, height=500)
fig_scatter.show()

# 6. 子图组合
fig_sub = make_subplots(rows=2, cols=2,
                        subplot_titles=("销售趋势", "产品对比", "占比分析", "散点分布"))

# 添加折线图
for product in products:
    product_data = df[df["产品"] == product]
    fig_sub.add_trace(go.Scatter(x=product_data["日期"], y=product_data["销售额"],
                                 name=product, mode="lines+markers"), row=1, col=1)

# 添加柱状图
df_bar = df.groupby("产品")["销售额"].sum().reset_index()
fig_sub.add_trace(go.Bar(x=df_bar["产品"], y=df_bar["销售额"], name="销售额"), row=1, col=2)

# 添加饼图
fig_sub.add_trace(go.Pie(labels=df_bar["产品"], values=df_bar["销售额"], name="占比"), row=2, col=1)

# 添加散点图
fig_sub.add_trace(go.Scatter(x=df["日期"], y=df["销售额"], mode="markers", name="数据点"), row=2, col=2)

fig_sub.update_layout(height=800, title_text="销售数据分析仪表板", showlegend=True)
fig_sub.update_xaxes(tickangle=-45)
fig_sub.show()

# 7. 交互式热力图
# 创建时间维度数据
df["月份"] = df["日期"].dt.strftime("%Y-%m")
heatmap_data = df.pivot(index="产品", columns="月份", values="销售额")

fig_heat = px.imshow(heatmap_data,
                     labels=dict(x="月份", y="产品", color="销售额"),
                     x=heatmap_data.columns, y=heatmap_data.index,
                     color_continuous_scale="RdBu_r",
                     title="产品月度销售额热力图")
fig_heat.update_xaxes(side="bottom", tickangle=-45)
fig_heat.update_layout(height=500)
fig_heat.show()`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/modules" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-200">
            <ArrowLeft size={18} />
            <span>返回课程模块</span>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <BarChart3 size={48} className="mr-4" />
            <div>
              <h1 className="text-3xl font-bold">数据可视化模块</h1>
              <p className="text-purple-100">Matplotlib、Seaborn、Plotly 图表制作，商务图表实战</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">模块概述</h2>
          <p className="text-gray-600 mb-6">
            数据可视化能帮助我们更直观地理解数据背后的故事。本模块将学习：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-700 mb-2">📊 Matplotlib</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 基础统计图表</li>
                <li>• 子图布局管理</li>
                <li>• 自定义样式设置</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">📈 Seaborn</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 统计图表绘制</li>
                <li>• 相关性分析图表</li>
                <li>• 分面和配对图</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-700 mb-2">🎨 Plotly</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 交互式图表</li>
                <li>• 仪表板制作</li>
                <li>• 动态数据展示</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {codeSections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-purple-50 p-6 border-b border-purple-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Python 代码</span>
                    <button
                      onClick={() => copyCode(section.code, section.id)}
                      className="text-sm text-purple-600 hover:text-purple-800 flex items-center"
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
              </div>
            </div>
          ))}
        </div>

        {/* 交互式代码运行区 */}
        <div className="mt-8">
          <PythonRunner
            title="Matplotlib 图表练习"
            initialCode={`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 创建数据
products = ['产品A', '产品B', '产品C', '产品D']
sales = [3500, 2800, 4200, 1900]

print("产品销售数据:")
for i, product in enumerate(products):
    print(f"{product}: {sales[i]} 元")

print("\\n统计信息:")
print(f"总销售额: {sum(sales)} 元")
print(f"平均销售额: {sum(sales)/len(sales):.2f} 元")
print(f"最高销售额: {max(sales)} 元")
print(f"最低销售额: {min(sales)} 元")

# 注意：由于浏览器环境限制，此处只输出数据
# 如需生成图表，请在本地Python环境中运行以下代码：
print("\\n--- 生成图表代码 ---")
print("import matplotlib.pyplot as plt")
print("plt.figure(figsize=(10, 6))")
print("plt.bar(products, sales, color=['#3B82F6', '#10B981', '#F59E0B', '#EF4444'])")
print("plt.title('产品销售对比')")
print("plt.xlabel('产品')")
print("plt.ylabel('销售额')")
print("plt.tight_layout()")
print("plt.show()")`}
            showInputFields={false}
          />

          <div className="mt-6">
            <PythonRunner
              title="Pandas 数据处理与统计"
              initialCode={`import pandas as pd
import numpy as np

# 创建产品销售数据
data = {
    '产品': ['手机', '笔记本电脑', '平板', '耳机', '智能手表'],
    '销量': [500, 200, 300, 1000, 400],
    '单价': [3999, 5999, 2999, 299, 1299]
}

df = pd.DataFrame(data)
df['销售额'] = df['销量'] * df['单价']

print("产品数据:")
print(df)
print("\\n销售统计:")
print(df['销售额'].describe())
print("\\n销售额占比:")
df['占比'] = df['销售额'] / df['销售额'].sum() * 100
for _, row in df.iterrows():
    print(f"{row['产品']}: {row['占比']:.1f}%")`}
              showInputFields={false}
            />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/modules/data-cleaning" className="bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200">
            ← 数据清洗
          </Link>
          <Link to="/modules/business-metrics" className="bg-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-200">
            商务指标分析 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
