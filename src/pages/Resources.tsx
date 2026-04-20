import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book, AlertTriangle, Code } from 'lucide-react';

interface CheatSheetItem {
  title: string;
  content: React.ReactNode;
}

interface PitfallItem {
  scenario: string;
  error: string;
  solution: string;
}

const Resources: React.FC = () => {
  const [expandedCheatSheet, setExpandedCheatSheet] = useState<number | null>(0);
  const [expandedPitfall, setExpandedPitfall] = useState<number | null>(null);

  const cheatSheets: CheatSheetItem[] = [
    {
      title: '五大专家思维模型速查表',
      content: (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">思维模型</th>
                <th className="border border-gray-300 px-4 py-2 text-left">核心定义</th>
                <th className="border border-gray-300 px-4 py-2 text-left">对应项目</th>
                <th className="border border-gray-300 px-4 py-2 text-left">关键行动指令</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">MECE 原则</td>
                <td className="border border-gray-300 px-4 py-2">相互独立、完全穷尽</td>
                <td className="border border-gray-300 px-4 py-2">1, 2, 3, 9, 10</td>
                <td className="border border-gray-300 px-4 py-2">列清单，查遗漏</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">漏斗分析</td>
                <td className="border border-gray-300 px-4 py-2">流程衰减定位</td>
                <td className="border border-gray-300 px-4 py-2">4, 10</td>
                <td className="border border-gray-300 px-4 py-2">算转化率，找断点</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">帕累托分析</td>
                <td className="border border-gray-300 px-4 py-2">二八法则抓重点</td>
                <td className="border border-gray-300 px-4 py-2">5</td>
                <td className="border border-gray-300 px-4 py-2">排序取 Top N，看累计占比</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">RFM 模型</td>
                <td className="border border-gray-300 px-4 py-2">三维度客户评估</td>
                <td className="border border-gray-300 px-4 py-2">8</td>
                <td className="border border-gray-300 px-4 py-2">定义 R、F、M 指标并打分</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">假设驱动</td>
                <td className="border border-gray-300 px-4 py-2">先猜后验证</td>
                <td className="border border-gray-300 px-4 py-2">6, 7, 9</td>
                <td className="border border-gray-300 px-4 py-2">写代码前先写结论假设句</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: 'Pandas 核心函数速查表',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">数据读取与写入</h4>
            <ul className="space-y-2 text-sm">
              <li><code>pd.read_csv()</code> - 读取 CSV 文件</li>
              <li><code>pd.read_excel()</code> - 读取 Excel 文件</li>
              <li><code>df.to_csv()</code> - 写入 CSV 文件</li>
              <li><code>df.to_excel()</code> - 写入 Excel 文件</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">数据清洗</h4>
            <ul className="space-y-2 text-sm">
              <li><code>df.fillna()</code> - 填充缺失值</li>
              <li><code>df.dropna()</code> - 删除缺失值</li>
              <li><code>df.drop_duplicates()</code> - 删除重复值</li>
              <li><code>pd.to_datetime()</code> - 转换为时间戳</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">数据转换</h4>
            <ul className="space-y-2 text-sm">
              <li><code>df.groupby()</code> - 分组聚合</li>
              <li><code>df.merge()</code> - 合并数据</li>
              <li><code>df.pivot_table()</code> - 创建透视表</li>
              <li><code>df.explode()</code> - 展开列表数据</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">字符串处理</h4>
            <ul className="space-y-2 text-sm">
              <li><code>df['col'].str.replace()</code> - 替换字符串</li>
              <li><code>df['col'].str.split()</code> - 分割字符串</li>
              <li><code>df['col'].str.contains()</code> - 检查包含关系</li>
              <li><code>df['col'].str.lower()</code> - 转为小写</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const pitfalls: PitfallItem[] = [
    {
      scenario: '时间戳对齐',
      error: 'ValueError: cannot reindex...',
      solution: '使用 pd.merge_asof() 替代 merge'
    },
    {
      scenario: '多层索引取值',
      error: 'KeyError: \'Level...\'',
      solution: '先拍平列名：df.columns = [\'_\'.join(col) for col in df.columns]'
    },
    {
      scenario: '大文件内存溢出',
      error: 'Kernel Restarting...',
      solution: '分块读取：pd.read_csv(\'file.csv\', chunksize=50000)'
    }
  ];

  const toggleCheatSheet = (index: number) => {
    setExpandedCheatSheet(expandedCheatSheet === index ? null : index);
  };

  const togglePitfall = (index: number) => {
    setExpandedPitfall(expandedPitfall === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">资源中心</h1>

        {/* Cheat Sheets */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Book size={24} className="mr-2 text-blue-600" />
            速查表
          </h2>
          <div className="space-y-4">
            {cheatSheets.map((sheet, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleCheatSheet(index)}
                  className="w-full flex justify-between items-center p-6 text-left bg-gray-50 hover:bg-gray-100 transition duration-200"
                >
                  <h3 className="text-lg font-semibold">{sheet.title}</h3>
                  {expandedCheatSheet === index ? (
                    <ChevronUp size={20} className="text-gray-600" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-600" />
                  )}
                </button>
                {expandedCheatSheet === index && (
                  <div className="p-6 border-t border-gray-200">
                    {sheet.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Pitfalls Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <AlertTriangle size={24} className="mr-2 text-amber-500" />
            新手常见 Pandas 报错与解法（避坑指南）
          </h2>
          <div className="space-y-4">
            {pitfalls.map((pitfall, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => togglePitfall(index)}
                  className="w-full flex justify-between items-center p-6 text-left bg-amber-50 hover:bg-amber-100 transition duration-200"
                >
                  <h3 className="text-lg font-semibold">{pitfall.scenario}</h3>
                  {expandedPitfall === index ? (
                    <ChevronUp size={20} className="text-amber-600" />
                  ) : (
                    <ChevronDown size={20} className="text-amber-600" />
                  )}
                </button>
                {expandedPitfall === index && (
                  <div className="p-6 border-t border-gray-200">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-red-600">报错信息：</h4>
                        <p className="text-gray-700">{pitfall.error}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600">解决方案：</h4>
                        <p className="text-gray-700">{pitfall.solution}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Traesolo 学习网站搭建建议 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Code size={24} className="mr-2 text-purple-600" />
            Traesolo 学习网站搭建建议
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>章节划分：</strong>建议将上述「第一部分」至「第四部分」作为网站的四个核心课程模块（Modules）。
              </li>
              <li>
                <strong>题目应用：</strong>可将每项目的 10 道测试题录入 Traesolo 的测验（Quiz）功能中，设置为每个项目的课后测试。
              </li>
              <li>
                <strong>代码展示：</strong>在 Traesolo 后台编辑器中，为 Python 代码块选择 Code 格式，并设置语法高亮为 Python。
              </li>
              <li>
                <strong>作业与测验：</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>每个项目结束后设置一道多项选择题，考察思维模型的应用（例如："项目五主要应用了哪种思维模型？"）。</li>
                  <li>设置代码填空题，考察 pd.merge_asof 或 groupby 的关键参数。</li>
                </ul>
              </li>
              <li>
                <strong>项目文件下载：</strong>为每个项目提供对应的 .csv 数据文件和 .ipynb 代码模板下载链接。
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;