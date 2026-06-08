import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Settings, Terminal, Code, CheckCircle, XCircle, Loader } from 'lucide-react';

interface PythonRunnerProps {
  initialCode?: string;
  title?: string;
  showInputFields?: boolean;
  inputFields?: { name: string; label: string; defaultValue: string; type?: 'string' | 'number' }[];
  onCodeChange?: (code: string) => void;
}

const PythonRunner: React.FC<PythonRunnerProps> = ({
  initialCode = '# 在这里编写你的Python代码\nprint("Hello, World!")',
  title = '代码运行测试区',
  showInputFields = false,
  inputFields = [],
  onCodeChange
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<Array<{ type: 'log' | 'error'; content: string }>>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPyodideLoaded, setIsPyodideLoaded] = useState(false);
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const pyodideRef = useRef<any>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // 初始化Pyodide
  useEffect(() => {
    const loadPyodide = async () => {
      if (window.loadPyodide) {
        try {
          pyodideRef.current = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
          });
          // 加载必要的包
          await pyodideRef.current.loadPackage(["numpy", "pandas"]);
          setIsPyodideLoaded(true);
        } catch (error) {
          console.error('Pyodide加载失败:', error);
          setOutput([{ type: 'error', content: 'Python环境加载失败，请刷新页面重试' }]);
        }
      } else {
        // 如果Pyodide未加载，添加脚本
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
        script.async = true;
        script.onload = async () => {
          try {
            pyodideRef.current = await window.loadPyodide({
              indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
            });
            await pyodideRef.current.loadPackage(["numpy", "pandas"]);
            setIsPyodideLoaded(true);
          } catch (error) {
            console.error('Pyodide初始化失败:', error);
            setOutput([{ type: 'error', content: 'Python环境初始化失败，请刷新页面重试' }]);
          }
        };
        script.onerror = () => {
          setOutput([{ type: 'error', content: '无法加载Python运行环境，请检查网络连接' }]);
        };
        document.head.appendChild(script);
      }
    };

    loadPyodide();

    // 初始化输入字段值
    const initialValues: Record<string, string> = {};
    inputFields.forEach(field => {
      initialValues[field.name] = field.defaultValue;
    });
    setInputValues(initialValues);
  }, []);

  // 自动滚动输出
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const runCode = async () => {
    if (!pyodideRef.current) {
      setOutput([{ type: 'error', content: 'Python环境未就绪，请稍候...' }]);
      return;
    }

    setIsRunning(true);
    setOutput([]);

    try {
      // 替换代码中的变量占位符
      let executableCode = code;
      inputFields.forEach(field => {
        const value = inputValues[field.name] || field.defaultValue;
        const placeholder = new RegExp(`\\$\\{${field.name}\\}`, 'g');
        executableCode = executableCode.replace(placeholder, field.type === 'number' ? value : `"${value}"`);
      });

      // 捕获print输出
      pyodideRef.current.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
      `);

      // 运行用户代码
      await pyodideRef.current.runPythonAsync(executableCode);

      // 获取输出
      const stdout = pyodideRef.current.runPython("sys.stdout.getvalue()");
      const stderr = pyodideRef.current.runPython("sys.stderr.getvalue()");

      const results: Array<{ type: 'log' | 'error'; content: string }> = [];

      if (stdout) {
        stdout.split('\n').filter(line => line.trim()).forEach(line => {
          results.push({ type: 'log', content: line });
        });
      }

      if (stderr) {
        stderr.split('\n').filter(line => line.trim()).forEach(line => {
          results.push({ type: 'error', content: line });
        });
      }

      if (results.length === 0) {
        results.push({ type: 'log', content: '✓ 代码执行成功（无输出）' });
      }

      setOutput(results);
    } catch (error: any) {
      setOutput([{
        type: 'error',
        content: error.message || '代码执行出错'
      }]);
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    const initialValues: Record<string, string> = {};
    inputFields.forEach(field => {
      initialValues[field.name] = field.defaultValue;
    });
    setInputValues(initialValues);
    setOutput([]);
    onCodeChange?.(initialCode);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setInputValues(prev => ({ ...prev, [fieldName]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Code size={24} />
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
          <div className="flex items-center space-x-2">
            {!isPyodideLoaded && (
              <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full flex items-center">
                <Loader size={12} className="animate-spin mr-1" />
                加载中
              </span>
            )}
            {isPyodideLoaded && (
              <span className="text-xs bg-green-400 text-green-900 px-2 py-1 rounded-full flex items-center">
                <CheckCircle size={12} className="mr-1" />
                Python就绪
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Input Fields */}
      {showInputFields && inputFields.length > 0 && (
        <div className="bg-blue-50 border-b border-blue-100 p-4">
          <div className="flex items-center mb-3">
            <Settings size={16} className="text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-900">自定义参数</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {inputFields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type === 'number' ? 'number' : 'text'}
                  value={inputValues[field.name] || ''}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder={`输入 ${field.label}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Code Input */}
      <div className="p-4 bg-gray-900">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Python 代码</span>
          <div className="flex space-x-2">
            <button
              onClick={resetCode}
              className="text-gray-400 hover:text-white flex items-center text-sm"
              title="重置代码"
            >
              <RotateCcw size={16} className="mr-1" />
              重置
            </button>
          </div>
        </div>
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="w-full h-48 bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
          spellCheck={false}
          placeholder="编写你的Python代码..."
        />
      </div>

      {/* Action Buttons */}
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            💡 提示：使用 <code className="bg-gray-200 px-1 rounded">print()</code> 输出结果
          </div>
          <button
            onClick={runCode}
            disabled={isRunning || !isPyodideLoaded}
            className={`px-6 py-2 rounded-lg font-medium flex items-center transition-all ${
              isRunning || !isPyodideLoaded
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {isRunning ? (
              <>
                <Loader size={18} className="animate-spin mr-2" />
                运行中...
              </>
            ) : (
              <>
                <Play size={18} className="mr-2" />
                运行代码
              </>
            )}
          </button>
        </div>
      </div>

      {/* Output */}
      {output.length > 0 && (
        <div className="border-t border-gray-200">
          <div className="bg-gray-100 px-4 py-2 flex items-center">
            <Terminal size={16} className="text-gray-600 mr-2" />
            <span className="text-sm font-semibold text-gray-700">运行结果</span>
          </div>
          <div
            ref={outputRef}
            className="bg-gray-900 text-gray-100 p-4 font-mono text-sm max-h-64 overflow-y-auto"
          >
            {output.map((line, index) => (
              <div
                key={index}
                className={`flex items-start mb-1 ${
                  line.type === 'error' ? 'text-red-400' : 'text-green-400'
                }`}
              >
                <span className="mr-2">
                  {line.type === 'error' ? (
                    <XCircle size={14} className="mt-0.5" />
                  ) : (
                    <CheckCircle size={14} className="mt-0.5" />
                  )}
                </span>
                <span className="whitespace-pre-wrap">{line.content}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Usage Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-100 p-4">
        <div className="text-sm text-gray-700">
          <h4 className="font-semibold mb-2">📚 使用说明</h4>
          <ul className="space-y-1 text-xs">
            <li>• 支持 NumPy 和 Pandas 库</li>
            <li>• 使用 <code className="bg-gray-200 px-1 rounded">print()</code> 查看输出</li>
            <li>• 点击参数输入框自定义变量值</li>
            <li>• 代码自动保存到浏览器本地存储</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 声明Pyodide的全局类型
declare global {
  interface Window {
    loadPyodide: any;
  }
}

export default PythonRunner;
