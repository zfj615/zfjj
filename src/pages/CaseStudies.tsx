import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle, ArrowLeft } from 'lucide-react';
import PythonRunner from '../components/PythonRunner';

const CaseStudies: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeSections = [
    {
      id: 'e-commerce-analysis',
      title: '电商数据分析实战',
      description: '完整的电商销售数据分析流程，包含数据清洗、指标计算、可视化展示',
      code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False
sns.set_style("whitegrid")

# 1. 生成模拟电商数据
np.random.seed(42)
dates = pd.date_range("2024-01-01", periods=180, freq="D")
products = ['手机', '笔记本电脑', '平板', '耳机', '智能手表']
categories = ['电子产品', '电子产品', '电子产品', '配件', '配件']

data = []
for date in dates:
    for i, product in enumerate(products):
        base_sales = {'手机': 50, '笔记本电脑': 20, '平板': 30, '耳机': 100, '智能手表': 40}[product]
        sales = np.random.poisson(base_sales)
        price = {'手机': 3999, '笔记本电脑': 5999, '平板': 2999, '耳机': 299, '智能手表': 1299}[product]
        revenue = sales * price
        data.append({
            '日期': date,
            '产品': product,
            '类别': categories[i],
            '销量': sales,
            '单价': price,
            '销售额': revenue
        })

df = pd.DataFrame(data)
df['月份'] = df['日期'].dt.to_period('M')

print("电商数据预览:")
print(df.head())
print(f"\\n数据规模: {df.shape[0]} 行, {df.shape[1]} 列")

# 2. 数据清洗与探索
print("\\n数据基本信息:")
print(df.info())

print("\\n统计描述:")
print(df.describe())

# 3. 核心指标计算
total_sales = df['销售额'].sum()
avg_daily_sales = df.groupby('日期')['销售额'].sum().mean()
top_product = df.groupby('产品')['销售额'].sum().idxmax()

print(f"\\n核心指标:")
print(f"总销售额: {total_sales:,.2f} 元")
print(f"日均销售额: {avg_daily_sales:,.2f} 元")
print(f"销量最高产品: {top_product}")

# 4. 月度销售趋势分析
monthly_sales = df.groupby('月份')['销售额'].sum().reset_index()
monthly_sales['月份'] = monthly_sales['月份'].astype(str)

print("\\n月度销售数据:")
print(monthly_sales)

# 5. 产品销售分析
product_analysis = df.groupby('产品').agg({
    '销量': 'sum',
    '销售额': 'sum',
    '单价': 'mean'
}).sort_values('销售额', ascending=False).reset_index()

product_analysis['销售额占比'] = product_analysis['销售额'] / product_analysis['销售额'].sum() * 100

print("\\n产品销售分析:")
print(product_analysis)

# 6. 可视化展示
fig, axes = plt.subplots(2, 2, figsize=(16, 12))

# 图1: 月度销售趋势
axes[0, 0].plot(monthly_sales['月份'], monthly_sales['销售额'], marker='o', linewidth=2, color='#3B82F6')
axes[0, 0].set_title('月度销售趋势', fontsize=14, pad=20)
axes[0, 0].set_xlabel('月份')
axes[0, 0].set_ylabel('销售额')
axes[0, 0].tick_params(axis='x', rotation=45)
axes[0, 0].grid(True, alpha=0.3)

# 图2: 产品销售额占比
colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']
axes[0, 1].pie(product_analysis['销售额'], labels=product_analysis['产品'], autopct='%1.1f%%', colors=colors)
axes[0, 1].set_title('产品销售额占比', fontsize=14, pad=20)

# 图3: 产品销量对比
bars = axes[1, 0].bar(product_analysis['产品'], product_analysis['销量'], color=colors)
axes[1, 0].set_title('各产品销量对比', fontsize=14, pad=20)
axes[1, 0].set_xlabel('产品')
axes[1, 0].set_ylabel('销量')
for bar in bars:
    height = bar.get_height()
    axes[1, 0].text(bar.get_x() + bar.get_width()/2., height, f'{int(height)}', ha='center', va='bottom')

# 图4: 类别销售额对比
category_sales = df.groupby('类别')['销售额'].sum().reset_index()
sns.barplot(x='类别', y='销售额', data=category_sales, ax=axes[1, 1], palette='Set2')
axes[1, 1].set_title('品类销售额对比', fontsize=14, pad=20)

plt.tight_layout()
plt.show()

# 7. 业务洞察报告
print("\\n" + "="*50)
print("电商数据分析报告")
print("="*50)
print(f"1. 总体销售表现:")
print(f"   - 分析周期: {df['日期'].min()} 至 {df['日期'].max()}")
print(f"   - 总销售额: {total_sales:,.2f} 元")
print(f"   - 日均销售额: {avg_daily_sales:,.2f} 元")
print(f"\\n2. 产品表现:")
for idx, row in product_analysis.iterrows():
    print(f"   - {row['产品']}: 销售额 {row['销售额']:,.2f} 元 ({row['销售额占比']:.1f}%)")
print(f"\\n3. 关键建议:")
print(f"   - 重点维护 '{top_product}' 的库存和营销")
print(f"   - 关注销售趋势变化，提前做好备货")
print(f"   - 针对低销量产品考虑促销或优化策略")
`
    },
    {
      id: 'sales-report-analysis',
      title: '销售报表分析实战',
      description: '销售数据深度分析，包含同比环比、销售人员绩效、区域分析等',
      code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta

plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False
sns.set_style("whitegrid")

# 1. 生成模拟销售数据
np.random.seed(42)
start_date = datetime(2023, 1, 1)
dates = [start_date + timedelta(days=i) for i in range(365)]

sales_persons = ['张三', '李四', '王五', '赵六', '钱七', '孙八']
regions = ['华东', '华南', '华北', '华中', '西南', '西北']
products = ['产品A', '产品B', '产品C', '产品D']

data = []
for date in dates:
    for _ in range(np.random.randint(5, 15)):
        sales_person = np.random.choice(sales_persons)
        region = np.random.choice(regions)
        product = np.random.choice(products)
        quantity = np.random.randint(1, 10)
        unit_price = np.random.choice([100, 200, 300, 400, 500])
        discount = np.random.choice([0, 0.05, 0.1, 0.15])
        amount = quantity * unit_price * (1 - discount)
        
        data.append({
            '日期': date,
            '销售人员': sales_person,
            '区域': region,
            '产品': product,
            '数量': quantity,
            '单价': unit_price,
            '折扣': discount,
            '金额': amount
        })

df = pd.DataFrame(data)
df['月份'] = df['日期'].dt.to_period('M')
df['季度'] = df['日期'].dt.to_period('Q')
df['年份'] = df['日期'].dt.year

print("销售数据预览:")
print(df.head())
print(f"\\n总记录数: {len(df):,} 条")

# 2. 整体销售概况
total_revenue = df['金额'].sum()
total_quantity = df['数量'].sum()
avg_order_value = df.groupby(df.index // 1)['金额'].sum().mean()

print(f"\\n整体销售概况:")
print(f"总营收: {total_revenue:,.2f} 元")
print(f"总销量: {total_quantity:,} 件")
print(f"平均订单金额: {avg_order_value:,.2f} 元")

# 3. 时间维度分析 - 同比环比
monthly_data = df.groupby('月份')['金额'].sum().reset_index()
monthly_data['月份'] = monthly_data['月份'].astype(str)
monthly_data['环比'] = monthly_data['金额'].pct_change() * 100

print(f"\\n月度销售数据:")
print(monthly_data[['月份', '金额', '环比']])

# 4. 销售人员绩效分析
sales_performance = df.groupby('销售人员').agg({
    '金额': ['sum', 'mean', 'count'],
    '数量': 'sum'
}).reset_index()

sales_performance.columns = ['销售人员', '总销售额', '平均订单额', '订单数', '总销量']
sales_performance = sales_performance.sort_values('总销售额', ascending=False).reset_index(drop=True)

print(f"\\n销售人员绩效排名:")
print(sales_performance)

# 5. 区域销售分析
region_analysis = df.groupby('区域').agg({
    '金额': 'sum',
    '数量': 'sum'
}).sort_values('金额', ascending=False).reset_index()

region_analysis['销售额占比'] = region_analysis['金额'] / region_analysis['金额'].sum() * 100

print(f"\\n区域销售分析:")
print(region_analysis)

# 6. 产品销售分析
product_analysis = df.groupby('产品').agg({
    '金额': 'sum',
    '数量': 'sum',
    '折扣': 'mean'
}).sort_values('金额', ascending=False).reset_index()

print(f"\\n产品销售分析:")
print(product_analysis)

# 7. 可视化分析
fig = plt.figure(figsize=(18, 12))
gs = fig.add_gridspec(3, 2, hspace=0.3, wspace=0.3)

# 图1: 月度销售趋势
ax1 = fig.add_subplot(gs[0, :])
ax1.plot(monthly_data['月份'], monthly_data['金额'], marker='o', linewidth=2, color='#3B82F6')
ax1.set_title('月度销售趋势', fontsize=14, pad=20)
ax1.set_xlabel('月份')
ax1.set_ylabel('销售额')
ax1.tick_params(axis='x', rotation=45)
ax1.grid(True, alpha=0.3)

# 图2: 销售人员绩效
ax2 = fig.add_subplot(gs[1, 0])
sns.barplot(x='总销售额', y='销售人员', data=sales_performance, ax=ax2, palette='viridis')
ax2.set_title('销售人员绩效排名', fontsize=14, pad=20)

# 图3: 区域销售占比
ax3 = fig.add_subplot(gs[1, 1])
colors = sns.color_palette('Set3')
ax3.pie(region_analysis['金额'], labels=region_analysis['区域'], autopct='%1.1f%%', colors=colors)
ax3.set_title('区域销售额占比', fontsize=14, pad=20)

# 图4: 产品销售分析
ax4 = fig.add_subplot(gs[2, 0])
sns.barplot(x='产品', y='金额', data=product_analysis, ax=ax4, palette='Set2')
ax4.set_title('产品销售额对比', fontsize=14, pad=20)

# 图5: 区域产品销售热力图
ax5 = fig.add_subplot(gs[2, 1])
heatmap_data = df.pivot_table(values='金额', index='区域', columns='产品', aggfunc='sum', fill_value=0)
sns.heatmap(heatmap_data, annot=True, fmt='.0f', cmap='YlOrRd', ax=ax5)
ax5.set_title('区域产品销售热力图', fontsize=14, pad=20)

plt.show()

# 8. 综合分析报告
print("\\n" + "="*60)
print("销售报表分析报告")
print("="*60)

top_salesperson = sales_performance.iloc[0]['销售人员']
top_region = region_analysis.iloc[0]['区域']
top_product = product_analysis.iloc[0]['产品']

print(f"\\n1. 核心指标:")
print(f"   - 总营收: {total_revenue:,.2f} 元")
print(f"   - 总订单: {len(df):,} 单")
print(f"   - 平均折扣: {df['折扣'].mean():.1%}")

print(f"\\n2. 最佳表现:")
print(f"   - 最佳销售: {top_salesperson} ({sales_performance.iloc[0]['总销售额']:,.2f} 元)")
print(f"   - 最佳区域: {top_region} ({region_analysis.iloc[0]['销售额占比']:.1f}%)")
print(f"   - 最佳产品: {top_product} ({product_analysis.iloc[0]['金额']:,.2f} 元)")

print(f"\\n3. 业务建议:")
print(f"   - 表彰 {top_salesperson} 的优秀表现，分享经验")
print(f"   - 加大 {top_region} 区域的资源投入")
print(f"   - 推广 {top_product} 的成功经验到其他产品")
print(f"   - 关注销售趋势变化，及时调整策略")
print(f"   - 分析低绩效区域的原因，制定改进计划")
`
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

        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Briefcase size={48} className="mr-4" />
            <div>
              <h1 className="text-3xl font-bold">实战案例模块</h1>
              <p className="text-red-100">电商数据分析、销售报表分析等完整实战案例</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">模块概述</h2>
          <p className="text-gray-600 mb-6">
            通过完整的实战案例，将前面学到的知识融会贯通。本模块包含：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">🛒 电商数据分析</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 数据生成与加载</li>
                <li>• 销售趋势分析</li>
                <li>• 产品表现评估</li>
                <li>• 业务洞察报告</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-700 mb-2">📊 销售报表分析</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 同比环比分析</li>
                <li>• 人员绩效评估</li>
                <li>• 区域销售分析</li>
                <li>• 综合报表输出</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {codeSections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-red-50 p-6 border-b border-red-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Python 代码</span>
                    <button
                      onClick={() => copyCode(section.code, section.id)}
                      className="text-sm text-red-600 hover:text-red-800 flex items-center"
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
            title="电商数据分析实战练习"
            initialCode={`import pandas as pd
import numpy as np

# 模拟电商数据
np.random.seed(42)
products = ['手机', '笔记本电脑', '平板', '耳机', '智能手表']
prices = [3999, 5999, 2999, 299, 1299]

print("=" * 50)
print("电商数据分析实战")
print("=" * 50)

# 创建销售数据
data = []
for i, product in enumerate(products):
    sales = np.random.randint(50, 150)
    revenue = sales * prices[i]
    data.append({
        '产品': product,
        '销量': sales,
        '单价': prices[i],
        '销售额': revenue
    })

df = pd.DataFrame(data)

print("\\n产品销售数据:")
print(df)

print("\\n核心指标:")
print(f"总销售额: {df['销售额'].sum():,} 元")
print(f"总销量: {df['销量'].sum()} 件")
print(f"平均单价: {df['单价'].mean():.2f} 元")

print("\\n产品销售额排名:")
df_sorted = df.sort_values('销售额', ascending=False)
for i, row in df_sorted.iterrows():
    pct = row['销售额'] / df['销售额'].sum() * 100
    print(f"{row['产品']}: {row['销售额']:,} 元 ({pct:.1f}%)")

print("\\n分析结论:")
top_product = df_sorted.iloc[0]['产品']
print(f"1. {top_product} 销售额最高，建议重点维护")
print("2. 耳机销量最大但单价较低，适合引流")
print("3. 建议优化产品组合，提升客单价")`}
            showInputFields={false}
          />

          <div className="mt-6">
            <PythonRunner
              title="销售报表分析练习"
              initialCode={`import pandas as pd
import numpy as np

# 模拟销售数据
np.random.seed(42)
sales_data = []
salespersons = ['张三', '李四', '王五', '赵六']
regions = ['华东', '华南', '华北', '华中']

print("=" * 50)
print("销售报表分析实战")
print("=" * 50)

for person in salespersons:
    for region in regions:
        sales = np.random.randint(10000, 50000)
        sales_data.append({
            '销售人员': person,
            '区域': region,
            '销售额': sales
        })

df = pd.DataFrame(sales_data)

print("\\n销售数据:")
print(df)

print("\\n销售人员业绩:")
person_stats = df.groupby('销售人员')['销售额'].sum().sort_values(ascending=False)
print(person_stats)

print("\\n区域销售业绩:")
region_stats = df.groupby('区域')['销售额'].sum().sort_values(ascending=False)
print(region_stats)

print("\\n绩效排名:")
for i, (person, sales) in enumerate(person_stats.items(), 1):
    print(f"第{i}名: {person} - {sales:,} 元")

print("\\n业务建议:")
top_person = person_stats.index[0]
top_region = region_stats.index[0]
print(f"1. 表扬 {top_person} 的优秀表现")
print(f"2. 加大 {top_region} 区域投入")
print("3. 分析低绩效人员原因，制定改进计划")`}
              showInputFields={false}
            />
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800">🎓 学习总结</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              恭喜你完成了所有模块的学习！现在你应该掌握了：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Python 基础编程和数据分析库使用</li>
              <li>数据清洗和预处理技术</li>
              <li>数据可视化方法和工具</li>
              <li>商务指标计算和分析</li>
              <li>完整的实战数据分析流程</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-blue-700 text-sm">
                💡 建议：继续使用真实数据进行练习，结合业务场景不断提升数据分析能力！
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/modules/business-metrics" className="bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200">
            ← 商务指标分析
          </Link>
          <Link to="/resources" className="bg-red-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-700 transition duration-200">
            学习资源 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
