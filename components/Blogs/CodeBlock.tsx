import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'typescript', filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  React.useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="my-6 rounded-lg overflow-hidden bg-gray-900">
      {filename && (
        <div className="px-4 py-2 bg-gray-800 border-b border-gray-700">
          <p className="text-sm text-gray-400">{filename}</p>
        </div>
      )}
      <div className="relative group">
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 p-2 rounded-lg bg-gray-800/50 opacity-0 group-hover:opacity-100 
                   transition-opacity duration-200 hover:bg-gray-800"
          aria-label="Copy code"
        >
          {copied ? (
            <FiCheck className="w-4 h-4 text-green-400" />
          ) : (
            <FiCopy className="w-4 h-4 text-gray-400" />
          )}
        </button>
        <pre className="!m-0 p-4 overflow-x-auto">
          <code className={`language-${language}`}>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock; 