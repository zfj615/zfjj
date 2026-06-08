import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle, ArrowLeft } from 'lucide-react';
import PythonRunner from '../components/PythonRunner';

const BusinessMetrics: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeSections = [
    {
      id: 'gmv-conversion',
      title: 'GMV与转化率分析',
      description: '学习计算和分析GMV、转化率等核心业务指标',
      code: `import pandas as pd
import numpy as np

# 1. 创建示例数据
np.random.seed(42)
dates = pd.date_range("2024-01-01", periods=30)
visitors = np.random.randint(1000, 3000, size=30)
orders = np.random.randint(50, 200, size=30)
amounts = orders * np.random.randint(100, 500, size=30)

df = pd.DataFrame({
    "日期": dates,
    "访问量": visitors,
    "订单量": orders,
    "销售额": amounts
})

print("原始数据:")
print(df.head())

# 2. 计算核心指标
df["转化率"] = df["订单量"] / df["访问量"]
df["客单价"] = df["销售额"] / df["订单量"]
df["GMV"] = df["销售额"]

print("\\n数据指标:")
print(df.head())

# 3. 统计汇总
print("\\n核心指标汇总:")
print(f"总GMV: {df['GMV'].sum():,.2f} 元")
print(f"平均转化率: {df['转化率'].mean():.2%}")
print(f"平均客单价: {df['客单价'].mean():,.2f} 元")
print(f"日均访问量: {df['访问量'].mean():.0f}")

# 4. 同比环比分析
df["GMV_7d"] = df["GMV"].rolling(window=7).mean()
df["GMV_MoM"] = df["GMV"].pct_change(periods=7)
df["GMV_YoY"] = df["GMV"].pct_change(periods=28)

print("\\n趋势分析:")
print(df[["日期", "GMV", "GMV_7d", "GMV_MoM"]].tail(10))

# 5. 转化率分箱分析
df["转化率分段"] = pd.cut(df["转化率"], 
                          bins=[0, 0.03, 0.05, 0.08, 1],
                          labels=["<3%", "3-5%", "5-8%", ">8%"])

conversion_summary = df.groupby("转化率分段").agg({
    "访问量": "sum",
    "订单量": "sum",
    "销售额": "sum"
}).reset_index()

print("\\n转化率分布分析:")
print(conversion_summary)

# 6. 业务健康度评估
avg_conversion = df["转化率"].mean()
avg_order_value = df["客单价"].mean()

print(f"\\n业务健康度评估:")
print(f"转化率表现: {'优秀' if avg_conversion > 0.07 else '良好' if avg_conversion > 0.05 else '待优化'}")
print(f"客单价表现: {'高' if avg_order_value > 300 else '中等' if avg_order_value > 200 else '低'}")
`
    },
    {
      id: 'retention-repurchase',
      title: '留存率与复购率计算',
      description: '学习计算用户留存率和复购率等关键运营指标',
      code: `import pandas as pd
import numpy as np
from datetime import timedelta

# 1. 创建用户行为数据
np.random.seed(42)
data = {
    "用户ID": np.random.randint(1, 501, size=2000),
    "下单日期": pd.date_range("2024-01-01", periods=2000, freq="H"),
    "订单金额": np.random.randint(50, 1000, size=2000)
}
df = pd.DataFrame(data)
df["下单日期"] = df["下单日期"].dt.date

print("用户行为数据:")
print(df.head())

# 2. 计算用户首次购买日期
first_purchase = df.groupby("用户ID")["下单日期"].min().reset_index()
first_purchase.columns = ["用户ID", "首次购买日期"]

df = df.merge(first_purchase, on="用户ID")

# 3. 计算每个用户的购买次数
user_orders = df.groupby("用户ID").agg({
    "下单日期": "count",
    "订单金额": "sum"
}).reset_index()
user_orders.columns = ["用户ID", "购买次数", "总金额"]

print("\\n用户购买统计:")
print(user_orders.head())

# 4. 计算复购率
total_users = len(user_orders)
repeat_users = len(user_orders[user_orders["购买次数"] >= 2])
repurchase_rate = repeat_users / total_users

print(f"\\n复购分析:")
print(f"总用户数: {total_users}")
print(f"复购用户数: {repeat_users}")
print(f"复购率: {repurchase_rate:.2%}")

# 5. 计算留存率
df["首次购买日期"] = pd.to_datetime(df["首次购买日期"])
df["下单日期"] = pd.to_datetime(df["下单日期"])
df["购买距首次天数"] = (df["下单日期"] - df["首次购买日期"]).dt.days

# 按周次统计
df["购买周次"] = (df["购买距首次天数"] / 7).astype(int) + 1

retention_data = df.groupby(["用户ID", "购买周次"])["下单日期"].count().reset_index()
retention_cohort = retention_data.pivot_table(
    index="用户ID", 
    columns="购买周次", 
    values="下单日期",
    fill_value=0
).clip(0, 1)

retention_rates = {}
for week in range(1, 8):
    if week in retention_cohort.columns:
        week_users = retention_cohort[retention_cohort[1] == 1]
        if week == 1:
            retention_rates["第1周"] = 1.0
        else:
            if week in week_users.columns:
                retention_rates[f"第{week}周"] = week_users[week].sum() / len(week_users)

print("\\n周留存率分析:")
for week, rate in retention_rates.items():
    print(f"{week}留存率: {rate:.2%}")

# 6. 复购用户分析
repeat_user_data = user_orders[user_orders["购买次数"] >= 2]

print("\\n复购用户特征:")
print(f"复购用户平均购买次数: {repeat_user_data['购买次数'].mean():.1f}")
print(f"复购用户平均消费金额: {repeat_user_data['总金额'].mean():,.2f} 元")
`
    },
    {
      id: 'customer-segmentation',
      title: '客户价值分层分析',
      description: '学习使用RFM模型对客户进行价值分层',
      code: `import pandas as pd
import numpy as np
from datetime import datetime

# 1. 创建客户数据
np.random.seed(42)
current_date = datetime(2024, 6, 1)
data = {
    "客户ID": np.random.randint(1001, 2001, size=500),
    "最近购买日期": current_date - pd.to_timedelta(np.random.randint(1, 365, size=500), unit="D"),
    "购买频率": np.random.randint(1, 50, size=500),
    "累计消费金额": np.random.randint(100, 50000, size=500)
}
df = pd.DataFrame(data)

print("客户数据:")
print(df.head())

# 2. 计算RFM指标
df["Recency"] = (current_date - df["最近购买日期"]).dt.days
df["Frequency"] = df["购买频率"]
df["Monetary"] = df["累计消费金额"]

print("\\nRFM指标:")
print(df[["客户ID", "Recency", "Frequency", "Monetary"]].head())

# 3. RFM分箱打分
df["R_score"] = pd.qcut(df["Recency"], q=5, labels=[5, 4, 3, 2, 1])
df["F_score"] = pd.qcut(df["Frequency"], q=5, labels=[1, 2, 3, 4, 5])
df["M_score"] = pd.qcut(df["Monetary"], q=5, labels=[1, 2, 3, 4, 5])

df["R_score"] = df["R_score"].astype(int)
df["F_score"] = df["F_score"].astype(int)
df["M_score"] = df["M_score"].astype(int)
df["RFM_Score"] = df["R_score"] + df["F_score"] + df["M_score"]

print("\\nRFM得分:")
print(df[["客户ID", "R_score", "F_score", "M_score", "RFM_Score"]].head())

# 4. 客户分层
def segment_customer(row):
    r, f, m = row["R_score"], row["F_score"], row["M_score"]
    if r >= 4 and f >= 4 and m >= 4:
        return "重要价值客户"
    elif r >= 4 and f <= 2:
        return "重要发展客户"
    elif r <= 2 and f >= 4 and m >= 4:
        return "重要挽留客户"
    elif r >= 3 and f >= 3 and m >= 3:
        return "一般价值客户"
    elif r <= 2:
        return "流失客户"
    else:
        return "新客户"

df["客户分层"] = df.apply(segment_customer, axis=1)

print("\\n客户分层分布:")
segment_summary = df["客户分层"].value_counts().reset_index()
segment_summary.columns = ["客户分层", "用户数量"]
print(segment_summary)

# 5. 分层分析
segment_analysis = df.groupby("客户分层").agg({
    "客户ID": "count",
    "Recency": "mean",
    "Frequency": "mean",
    "Monetary": "sum"
}).reset_index()
segment_analysis.columns = ["客户分层", "用户数量", "平均最近购买天数", "平均购买频率", "总消费金额"]
segment_analysis["用户占比"] = segment_analysis["用户数量"] / len(df)
segment_analysis["金额占比"] = segment_analysis["总消费金额"] / df["Monetary"].sum()

print("\\n分层分析:")
print(segment_analysis)
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

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp size={48} className="mr-4" />
            <div>
              <h1 className="text-3xl font-bold">商务指标分析模块</h1>
              <p className="text-amber-100">GMV、转化率、复购率、留存率等核心指标计算与分析</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">模块概述</h2>
          <p className="text-gray-600 mb-6">
            商务指标是衡量业务健康度的关键。本模块将学习：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-700 mb-2">💰 销售指标</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• GMV与销售额计算</li>
                <li>• 转化率与客单价分析</li>
                <li>• 同比环比趋势分析</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-700 mb-2">👥 用户指标</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 用户留存率计算</li>
                <li>• 复购率与回购分析</li>
                <li>• RFM客户价值分层</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {codeSections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-amber-50 p-6 border-b border-amber-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Python 代码</span>
                    <button
                      onClick={() => copyCode(section.code, section.id)}
                      className="text-sm text-amber-600 hover:text-amber-800 flex items-center"
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
            title="GMV 与转化率计算练习"
            initialCode={`import pandas as pd
import numpy as np

# 创建销售数据
data = {
    '日期': pd.date_range("2024-01-01", periods=7),
    '访问量': [2500, 2800, 2200, 3000, 2600, 2900, 3100],
    '订单量': [125, 140, 110, 150, 130, 145, 155],
    '销售额': [25000, 28000, 22000, 30000, 26000, 29000, 31000]
}

df = pd.DataFrame(data)

# 计算指标
df['转化率'] = df['订单量'] / df['访问量'] * 100
df['客单价'] = df['销售额'] / df['订单量']

print("每日销售数据:")
print(df.to_string(index=False))

print("\\n核心指标统计:")
print(f"总访问量: {df['访问量'].sum():,}")
print(f"总订单量: {df['订单量'].sum():,}")
print(f"总销售额: {df['销售额'].sum():,} 元")
print(f"平均转化率: {df['转化率'].mean():.2f}%")
print(f"平均客单价: {df['客单价'].mean():.2f} 元")`}
            showInputFields={false}
          />

          <div className="mt-6">
            <PythonRunner
              title="RFM 客户分层练习"
              initialCode={`import pandas as pd
import numpy as np

# 模拟客户数据
np.random.seed(42)
data = {
    '客户ID': range(1001, 1011),
    '最近购买天数': np.random.randint(1, 180, 10),
    '购买频率': np.random.randint(1, 20, 10),
    '累计消费': np.random.randint(500, 20000, 10)
}

df = pd.DataFrame(data)

print("客户数据:")
print(df)

# RFM打分
df['R_score'] = pd.cut(df['最近购买天数'], bins=5, labels=[5, 4, 3, 2, 1])
df['F_score'] = pd.cut(df['购买频率'], bins=5, labels=[1, 2, 3, 4, 5])
df['M_score'] = pd.cut(df['累计消费'], bins=5, labels=[1, 2, 3, 4, 5])

# 转换为数值
df['R_score'] = df['R_score'].astype(int)
df['F_score'] = df['F_score'].astype(int)
df['M_score'] = df['M_score'].astype(int)
df['RFM总分'] = df['R_score'] + df['F_score'] + df['M_score']

print("\\nRFM分析结果:")
print(df[['客户ID', '最近购买天数', '购买频率', '累计消费', 'RFM总分']])

print("\\n客户价值分布:")
print(f"高价值客户 (>12分): {len(df[df['RFM总分'] > 12])} 人")
print(f"中等价值客户 (8-12分): {len(df[(df['RFM总分'] >= 8) & (df['RFM总分'] <= 12)])} 人")
print(f"低价值客户 (<8分): {len(df[df['RFM总分'] < 8])} 人")`}
              showInputFields={false}
            />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/modules/data-visualization" className="bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200">
            ← 数据可视化
          </Link>
          <Link to="/modules/case-studies" className="bg-amber-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-amber-700 transition duration-200">
            实战案例分析 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessMetrics;
