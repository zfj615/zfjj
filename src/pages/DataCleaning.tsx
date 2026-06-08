import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Database, CheckCircle, ArrowLeft } from 'lucide-react';
import PythonRunner from '../components/PythonRunner';

const DataCleaning: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeSections = [
    {
      id: 'missing-values',
      title: '缺失值处理',
      description: '学习如何识别和处理数据中的缺失值',
      code: `import pandas as pd
import numpy as np

# 1. 创建包含缺失值的示例数据
data = {
    "日期": ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05", "2024-01-06", "2024-01-07"],
    "产品": ["产品A", "产品B", None, "产品C", "产品B", "产品A", None],
    "销量": [100, None, 120, 80, 200, None, 150],
    "单价": [10.5, 15.0, 10.5, None, 15.0, 10.5, 12.0]
}
df = pd.DataFrame(data)
print("原始数据:")
print(df)

# 2. 查看缺失值
print(f"\\n各列缺失值统计:")
print(df.isnull().sum())
print(f"\\n总缺失值: {df.isnull().sum().sum()}")

# 3. 删除缺失值
# 删除包含任何缺失值的行
df_dropna = df.dropna()
print(f"\\n删除缺失值后 ({len(df_dropna)} 行):")
print(df_dropna)

# 删除特定列有缺失值的行
df_dropna_col = df.dropna(subset=["产品", "销量"])
print(f"\\n删除产品和销量列有缺失值的行 ({len(df_dropna_col)} 行):")
print(df_dropna_col)

# 4. 填充缺失值
df_filled = df.copy()
# 数值列用均值填充
df_filled["销量"] = df_filled["销量"].fillna(df_filled["销量"].mean())
df_filled["单价"] = df_filled["单价"].fillna(df_filled["单价"].median())
# 分类列用前向填充（新版Pandas语法）
df_filled["产品"] = df_filled["产品"].ffill()
print(f"\\n填充缺失值后:")
print(df_filled)

# 5. 不同列用不同方法填充
df_multi_fill = df.copy()
df_multi_fill["产品"] = df_multi_fill["产品"].fillna("未知产品")
df_multi_fill["销量"] = df_multi_fill["销量"].fillna(df_multi_fill["销量"].mean())
df_multi_fill["单价"] = df_multi_fill["单价"].interpolate()
print(f"\\n多种方法填充后:")
print(df_multi_fill)`
    },
    {
      id: 'duplicates',
      title: '重复值处理',
      description: '学习如何识别和处理数据中的重复记录',
      code: `import pandas as pd

# 1. 创建包含重复值的示例数据
data = {
    "订单号": ["ORD001", "ORD002", "ORD003", "ORD002", "ORD004", "ORD005", "ORD001"],
    "客户": ["张三", "李四", "王五", "李四", "赵六", "钱七", "张三"],
    "产品": ["产品A", "产品B", "产品A", "产品B", "产品C", "产品A", "产品A"],
    "数量": [2, 1, 3, 1, 2, 4, 2],
    "金额": [200, 150, 300, 150, 250, 400, 200]
}
df = pd.DataFrame(data)
print("原始数据:")
print(df)

# 2. 检查重复值
print(f"\\n是否有重复记录: {df.duplicated().any()}")
print(f"\\n重复记录:")
print(df[df.duplicated(keep=False)])
print(f"\\n重复记录数: {df.duplicated().sum()}")

# 3. 删除重复值
# 删除完全重复的行（保留第一条）
df_unique = df.drop_duplicates()
print(f"\\n删除完全重复行后 ({len(df_unique)} 行):")
print(df_unique)

# 4. 按特定列去重
# 按订单号去重
df_order_unique = df.drop_duplicates(subset=["订单号"], keep="first")
print(f"\\n按订单号去重后 ({len(df_order_unique)} 行):")
print(df_order_unique)

# 5. 去重前先处理
# 先计算每个订单的汇总统计
df_agg = df.groupby("订单号").agg({
    "客户": "first",
    "产品": "first",
    "数量": "sum",
    "金额": "sum"
}).reset_index()
print(f"\\n汇总后的数据:")
print(df_agg)`
    },
    {
      id: 'outliers',
      title: '异常值处理',
      description: '学习如何识别和处理数据中的异常值',
      code: `import pandas as pd
import numpy as np

# 1. 创建包含异常值的示例数据
np.random.seed(42)
data = {
    "日期": pd.date_range("2024-01-01", periods=30),
    "销售额": np.concatenate([
        np.random.normal(1000, 200, 28),  # 正常数据
        [5000, 100]  # 异常值
    ])
}
df = pd.DataFrame(data)
print("原始数据统计:")
print(df.describe())

# 2. 使用IQR方法检测异常值
Q1 = df["销售额"].quantile(0.25)
Q3 = df["销售额"].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR
print(f"\\nIQR方法:")
print(f"Q1: {Q1:.2f}, Q3: {Q3:.2f}, IQR: {IQR:.2f}")
print(f"正常范围: [{lower_bound:.2f}, {upper_bound:.2f}]")

outliers = df[(df["销售额"] < lower_bound) | (df["销售额"] > upper_bound)]
print(f"\\n检测到的异常值:")
print(outliers)

# 3. 使用Z-score方法
from scipy import stats
df["z_score"] = np.abs(stats.zscore(df["销售额"]))
outliers_z = df[df["z_score"] > 3]
print(f"\\nZ-score方法检测到的异常值:")
print(outliers_z)

# 4. 处理异常值
df_clean = df.copy()
# 方法1: 删除异常值
df_removed = df_clean[(df_clean["销售额"] >= lower_bound) & (df_clean["销售额"] <= upper_bound)]
print(f"\\n删除异常值后 ({len(df_removed)} 行):")
print(df_removed[["日期", "销售额"]].head())

# 方法2: 用边界值替换
df_clean["销售额_clean"] = df_clean["销售额"].clip(lower=lower_bound, upper=upper_bound)
print(f"\\n用边界值替换后:")
print(df_clean[["日期", "销售额", "销售额_clean"]].head())

# 方法3: 用中位数替换
median = df_clean["销售额"].median()
df_clean["销售额_median"] = np.where(
    (df_clean["销售额"] < lower_bound) | (df_clean["销售额"] > upper_bound),
    median,
    df_clean["销售额"]
)
print(f"\\n用中位数替换后:")
print(df_clean[["日期", "销售额", "销售额_median"]].head())`
    },
    {
      id: 'data-types',
      title: '数据类型转换',
      description: '学习如何正确转换和处理数据类型',
      code: `import pandas as pd
import numpy as np

# 1. 创建示例数据
data = {
    "日期": ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05"],
    "销量": ["100", "150", "120", "80", "200"],
    "单价": ["10.5", "15.0", "10.5", "25.0", "15.0"],
    "库存": ["有", "无", "有", "有", "无"],
    "销售额": [1050, 2250, 1260, 2000, 3000]
}
df = pd.DataFrame(data)
print("原始数据:")
print(df)
print(f"\\n原始数据类型:")
print(df.dtypes)

# 2. 日期类型转换
df["日期"] = pd.to_datetime(df["日期"])
print(f"\\n转换日期后的数据类型:")
print(df.dtypes)
print(f"\\n日期提取:")
df["年"] = df["日期"].dt.year
df["月"] = df["日期"].dt.month
df["星期"] = df["日期"].dt.dayofweek
print(df[["日期", "年", "月", "星期"]])

# 3. 数值类型转换
df["销量"] = pd.to_numeric(df["销量"], errors="coerce")
df["单价"] = pd.to_numeric(df["单价"], errors="coerce")
print(f"\\n转换数值后的数据类型:")
print(df.dtypes)

# 4. 分类类型转换
df["库存"] = df["库存"].astype("category")
df["库存_encoded"] = df["库存"].map({"有": 1, "无": 0})
print(f"\\n分类转换后:")
print(df[["库存", "库存_encoded"]])

# 5. 文本处理
# 创建示例文本数据
text_data = pd.Series(["产品A", " 产品B ", "产品A", "产品c", "PRODUCT A"])
print(f"\\n文本处理示例:")
print(text_data)
print(f"\\n去除空格:")
print(text_data.str.strip())
print(f"\\n统一小写:")
print(text_data.str.strip().str.lower())
print(f"\\n替换:")
print(text_data.str.strip().str.lower().str.replace("product", "产品"))`
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

        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Database size={48} className="mr-4" />
            <div>
              <h1 className="text-3xl font-bold">数据清洗模块</h1>
              <p className="text-green-100">缺失值、异常值、重复值处理，数据清洗实战案例</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">模块概述</h2>
          <p className="text-gray-600 mb-6">
            数据清洗是数据分析的第一步，高质量的数据才能产生可靠的分析结果。本模块将学习：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">✅ 数据质量处理</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 缺失值识别与处理</li>
                <li>• 重复值检测与删除</li>
                <li>• 异常值检测与纠正</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">✅ 数据类型处理</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 数据类型转换</li>
                <li>• 日期时间处理</li>
                <li>• 文本数据清洗</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {codeSections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-50 p-6 border-b border-green-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Python 代码</span>
                    <button
                      onClick={() => copyCode(section.code, section.id)}
                      className="text-sm text-green-600 hover:text-green-800 flex items-center"
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
                    数据清洗需要根据业务场景选择合适的方法。没有万能的解决方案，关键是理解数据背后的含义。
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 模块练习</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">练习题目</h3>
            <p className="text-gray-600 mb-4">
              1. 模拟一份包含缺失值、重复值和异常值的销售数据<br />
              2. 使用多种方法处理缺失值，比较不同方法的效果<br />
              3. 使用IQR和Z-score方法检测和处理异常值
            </p>
          </div>
        </div>

        {/* 交互式代码运行区 */}
        <div className="mt-8">
          <PythonRunner
            title="缺失值处理实战"
            initialCode={`import pandas as pd
import numpy as np

# 创建包含缺失值的数据
data = {
    "日期": ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05"],
    "产品": ["产品A", "产品B", None, "产品C", "产品B"],
    "销量": [100, None, 120, 80, 200],
    "单价": [10.5, 15.0, 10.5, None, 15.0]
}

df = pd.DataFrame(data)
print("原始数据:")
print(df)
print("\\n缺失值统计:")
print(df.isnull().sum())

# 使用均值填充销量
df["销量"] = df["销量"].fillna(df["销量"].mean())
# 使用众数填充单价
df["单价"] = df["单价"].fillna(df["单价"].mode()[0])
# 使用前向填充产品（新版语法）
df["产品"] = df["产品"].ffill()

print("\\n填充后数据:")
print(df)`}
            showInputFields={false}
          />

          <div className="mt-6">
            <PythonRunner
              title="异常值检测实战"
              initialCode={`import pandas as pd
import numpy as np

# 创建包含异常值的数据
np.random.seed(42)
data = {
    "日期": pd.date_range("2024-01-01", periods=20),
    "销售额": np.concatenate([
        np.random.normal(1000, 200, 18),
        [5000, 100]
    ])
}

df = pd.DataFrame(data)
print("数据统计:")
print(df["销售额"].describe())

# 使用IQR方法检测异常值
Q1 = df["销售额"].quantile(0.25)
Q3 = df["销售额"].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

print(f"\\n正常范围: [{lower_bound:.2f}, {upper_bound:.2f}]")

outliers = df[(df["销售额"] < lower_bound) | (df["销售额"] > upper_bound)]
print(f"\\n检测到的异常值 ({len(outliers)} 个):")
print(outliers)`}
              showInputFields={false}
            />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/modules/python-basics" className="bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200">
            ← Python基础
          </Link>
          <Link to="/modules/data-visualization" className="bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200">
            数据可视化 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataCleaning;
