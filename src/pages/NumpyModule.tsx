import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, ArrowLeft } from 'lucide-react';
import PythonRunner from '../components/PythonRunner';

const NumpyModule: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/modules" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-200">
            <ArrowLeft size={18} />
            <span>返回课程模块</span>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Calculator size={48} className="mr-4" />
            <div>
              <h1 className="text-3xl font-bold">NumPy 专项模块</h1>
              <p className="text-indigo-100">掌握 Python 数值计算的核心库，高效处理大规模数据</p>
            </div>
          </div>
        </div>

        {/* 学习目标 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 学习目标</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">理解 NumPy 数组（ndarray）的基本概念和优势</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">掌握数组的创建、索引、切片和形状操作</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">学会使用 NumPy 进行高效数值计算</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 mt-1" />
              <span className="text-gray-700">掌握广播机制和向量化运算</span>
            </div>
          </div>
        </div>

        {/* 第一部分：NumPy 简介 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">一、NumPy 简介</h2>
          <p className="text-gray-600 mb-4">
            NumPy（Numerical Python）是 Python 科学计算的基础库，提供了高效的多维数组对象和数值计算工具。
          </p>

          <div className="bg-indigo-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-indigo-700 mb-2">为什么选择 NumPy？</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• <strong>高效性：</strong>比 Python 列表快 10-100 倍</li>
              <li>• <strong>便捷性：</strong>支持向量化运算，无需循环</li>
              <li>• <strong>功能丰富：</strong>提供大量数学函数</li>
              <li>• <strong>生态基础：</strong>Pandas、Matplotlib 都基于 NumPy</li>
            </ul>
          </div>

          <h3 className="font-semibold text-gray-700 mb-2">安装 NumPy</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">pip install numpy</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-2">导入 NumPy</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">import numpy as np</code>
          </pre>
        </div>

        {/* 第二部分：数组创建 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">二、数组创建</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. 从列表创建数组</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`import numpy as np

# 从列表创建一维数组
arr1 = np.array([1, 2, 3, 4, 5])
print("一维数组:", arr1)

# 从列表创建二维数组
arr2 = np.array([[1, 2, 3], [4, 5, 6]])
print("二维数组:", arr2)

# 查看数组形状
print("arr1形状:", arr1.shape)  # (5,)
print("arr2形状:", arr2.shape)  # (2, 3)`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. 使用函数创建特殊数组</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`# 创建全零数组
zeros = np.zeros((3, 4))
print("全零数组:", zeros)

# 创建全一数组
ones = np.ones((2, 3))
print("全一数组:", ones)

# 创建单位矩阵
identity = np.eye(3)
print("单位矩阵:", identity)

# 创建等差数组
range_arr = np.arange(0, 10, 2)  # 0到10，步长2
print("等差数组:", range_arr)

# 创建等间隔数组
linspace_arr = np.linspace(0, 1, 5)  # 0到1，5个点
print("等间隔数组:", linspace_arr)`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">3. 创建随机数组</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`# 设置随机种子（保证结果可复现）
np.random.seed(42)

# 随机整数数组
rand_int = np.random.randint(0, 100, size=(3, 3))
print("随机整数:", rand_int)

# 随机浮点数数组（0-1）
rand_float = np.random.rand(3, 3)
print("随机浮点:", rand_float)

# 正态分布随机数
rand_normal = np.random.randn(3, 3)
print("正态分布:", rand_normal)`}</code>
          </pre>
        </div>

        {/* 第三部分：数组索引与切片 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">三、数组索引与切片</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. 一维数组索引</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`arr = np.array([10, 20, 30, 40, 50])

# 单个元素索引
print("第一个元素:", arr[0])   # 10
print("最后一个元素:", arr[-1])  # 50

# 切片操作
print("前三个元素:", arr[:3])    # [10, 20, 30]
print("后两个元素:", arr[-2:])   # [40, 50]
print("中间元素:", arr[1:4])     # [20, 30, 40]`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. 二维数组索引</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# 单个元素
print("第2行第3列:", arr[1, 2])  # 6

# 整行
print("第1行:", arr[0, :])      # [1, 2, 3]

# 整列
print("第2列:", arr[:, 1])      # [2, 5, 8]

# 子矩阵
print("前两行前两列:", arr[:2, :2])  # [[1, 2], [4, 5]]`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">3. 条件索引</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# 条件筛选
print("大于5的元素:", arr[arr > 5])  # [6, 7, 8, 9, 10]

# 多条件筛选
print("3到7之间的元素:", arr[(arr >= 3) & (arr <= 7)])  # [3, 4, 5, 6, 7]

# 布尔数组
mask = arr > 5
print("布尔掩码:", mask)  # [False, False, False, False, False, True, True, True, True, True]`}</code>
          </pre>
        </div>

        {/* 第四部分：数组运算 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">四、数组运算</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. 基本运算</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

# 加法
print("加法:", a + b)  # [6, 8, 10, 12]

# 减法
print("减法:", b - a)  # [4, 4, 4, 4]

# 乘法（逐元素）
print("乘法:", a * b)  # [5, 12, 21, 32]

# 除法
print("除法:", b / a)  # [5.0, 3.0, 2.33, 2.0]

# 幂运算
print("平方:", a ** 2)  # [1, 4, 9, 16]`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. 统计运算</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# 基本统计
print("求和:", np.sum(arr))       # 55
print("平均值:", np.mean(arr))    # 5.5
print("最大值:", np.max(arr))     # 10
print("最小值:", np.min(arr))     # 1
print("标准差:", np.std(arr))     # 2.87
print("方差:", np.var(arr))       # 8.25

# 累积运算
print("累积求和:", np.cumsum(arr))  # [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">3. 矩阵运算</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# 矩阵乘法
print("矩阵乘法:", np.dot(A, B))
# [[19, 22], [43, 50]]

# 转置
print("转置:", A.T)
# [[1, 3], [2, 4]]

# 行列式
print("行列式:", np.linalg.det(A))  # -2.0

# 逆矩阵
print("逆矩阵:", np.linalg.inv(A))`}</code>
          </pre>
        </div>

        {/* 第五部分：形状操作 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">五、形状操作</h2>

          <h3 className="font-semibold text-gray-700 mb-3">1. reshape 改变形状</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`arr = np.arange(12)  # [0, 1, 2, ..., 11]
print("原始形状:", arr.shape)  # (12,)

# 改为 3x4 矩阵
arr_3x4 = arr.reshape(3, 4)
print("reshape(3,4):", arr_3x4)

# 改为 2x6 矩阵
arr_2x6 = arr.reshape(2, 6)
print("reshape(2,6):", arr_2x6)

# 自动计算某一维度
arr_auto = arr.reshape(3, -1)  # -1表示自动计算
print("reshape(3,-1):", arr_auto)`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">2. flatten 和 ravel</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`arr = np.array([[1, 2, 3], [4, 5, 6]])

# 展平为一维
flat = arr.flatten()
print("flatten:", flat)  # [1, 2, 3, 4, 5, 6]

# ravel（返回视图，不复制）
rav = arr.ravel()
print("ravel:", rav)  # [1, 2, 3, 4, 5, 6]`}</code>
          </pre>

          <h3 className="font-semibold text-gray-700 mb-3">3. concatenate 和 stack</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800">{`a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# 拼接
concat = np.concatenate([a, b])
print("拼接:", concat)  # [1, 2, 3, 4, 5, 6]

# 堆叠
stack_v = np.vstack([a, b])  # 垂直堆叠
print("垂直堆叠:", stack_v)

stack_h = np.hstack([a, b])  # 水平堆叠
print("水平堆叠:", stack_h)`}</code>
          </pre>
        </div>

        {/* 第六部分：广播机制 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">六、广播机制</h2>
          <p className="text-gray-600 mb-4">
            广播是 NumPy 的强大特性，允许不同形状的数组进行运算。
          </p>

          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm text-gray-800">{`# 数组与标量运算
arr = np.array([1, 2, 3, 4])
print("数组 + 10:", arr + 10)  # [11, 12, 13, 14]

# 不同形状数组运算
a = np.array([[1, 2, 3], [4, 5, 6]])  # 2x3
b = np.array([10, 20, 30])            # 1x3

# b 自动广播为 2x3
print("广播加法:", a + b)
# [[11, 22, 33], [14, 25, 36]]`}</code>
          </pre>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-700 mb-2">💡 广播规则</h3>
            <ul className="text-gray-600 space-y-1">
              <li>1. 比较两个数组的形状，从后往前比较</li>
              <li>2. 维度相等或其中一个为 1 时可以广播</li>
              <li>3. 缺失的维度视为 1</li>
            </ul>
          </div>
        </div>

        {/* 交互式代码运行区 */}
        <div className="mt-8">
          <PythonRunner
            title="NumPy 数组创建练习"
            initialCode={`import numpy as np

# 创建不同类型的数组
arr1 = np.array([1, 2, 3, 4, 5])
zeros = np.zeros(5)
ones = np.ones(5)
range_arr = np.arange(0, 10, 2)

print("从列表创建:", arr1)
print("全零数组:", zeros)
print("全一数组:", ones)
print("等差数组:", range_arr)

# 数组属性
print("\\n数组属性:")
print(f"形状: {arr1.shape}")
print(f"维度: {arr1.ndim}")
print(f"元素数: {arr1.size}")
print(f"数据类型: {arr1.dtype}")`}
            showInputFields={false}
          />

          <div className="mt-6">
            <PythonRunner
              title="NumPy 统计运算练习"
              initialCode={`import numpy as np

# 创建随机数据
np.random.seed(42)
data = np.random.randn(100)  # 100个正态分布随机数

print("数据统计:")
print(f"平均值: {np.mean(data):.4f}")
print(f"标准差: {np.std(data):.4f}")
print(f"最小值: {np.min(data):.4f}")
print(f"最大值: {np.max(data):.4f}")
print(f"中位数: {np.median(data):.4f}")

# 分位数
print("\\n分位数:")
print(f"25%分位: {np.percentile(data, 25):.4f}")
print(f"50%分位: {np.percentile(data, 50):.4f}")
print(f"75%分位: {np.percentile(data, 75):.4f}")`}
              showInputFields={false}
            />
          </div>

          <div className="mt-6">
            <PythonRunner
              title="NumPy 矩阵运算练习"
              initialCode={`import numpy as np

# 创建矩阵
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

print("矩阵A:")
print(A)
print("\\n矩阵B:")
print(B)

# 矩阵运算
print("\\n矩阵加法:")
print(A + B)

print("\\n矩阵乘法:")
print(np.dot(A, B))

print("\\nA的转置:")
print(A.T)

print("\\nA的行列式:", np.linalg.det(A))
print("\\nA的逆矩阵:")
print(np.linalg.inv(A))`}
              showInputFields={false}
            />
          </div>
        </div>

        {/* 模块练习 */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 模块练习</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">练习题目</h3>
            <p className="text-gray-600 mb-4">
              1. 创建一个 5x5 的随机整数矩阵（范围 1-100），计算每行的平均值<br />
              2. 使用 NumPy 生成 1000 个正态分布随机数，计算均值和标准差<br />
              3. 创建两个 3x3 矩阵，进行矩阵乘法运算
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/modules/python-basics" className="bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200">
            ← Python基础
          </Link>
          <Link to="/modules/statistics" className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200">
            统计学基础 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NumpyModule;