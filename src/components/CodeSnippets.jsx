import { motion } from 'framer-motion';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy, FaCheck, FaCode } from 'react-icons/fa';

export default function CodeSnippets() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const snippets = [
    {
      title: 'React Counter Hook',
      language: 'javascript',
      code: `import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 bg-slate-800 rounded">
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}`,
    },
    {
      title: 'Express.js Middleware',
      language: 'javascript',
      code: `const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

app.listen(3000, () => {
  console.log('Server is live on 3000');
}
  );`,
    },
  ];

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="code-snippets" className="py-24 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-sky-500/10 rounded-2xl text-sky-500">
            <FaCode size={28} />
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight">Code <span className="text-slate-500">Artifacts</span></h2>
            <p className="text-slate-400 text-sm">Reusable logic and architectural patterns.</p>
          </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-2 gap-12"
        >
          {snippets.map((snippet, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="group relative"
            >
              {/* Window Header (Mac Style) */}
              <div className="flex items-center justify-between bg-slate-900 border-x border-t border-slate-800 rounded-t-2xl px-5 py-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
                    {snippet.title}
                  </span>
                </div>
                
                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(snippet.code, index)}
                  className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-sky-400 transition-colors bg-slate-800 px-3 py-1 rounded-md"
                >
                  {copiedIndex === index ? (
                    <><FaCheck className="text-green-500" /> Copied</>
                  ) : (
                    <><FaCopy /> Copy Code</>
                  )}
                </button>
              </div>

              {/* Syntax Highlighter Container */}
              <div className="relative overflow-hidden rounded-b-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm group-hover:border-sky-500/30 transition-colors">
                <SyntaxHighlighter
                  language={snippet.language}
                  style={vscDarkPlus}
                  customStyle={{
                    background: 'transparent',
                    margin: 0,
                    padding: '24px',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                  }}
                >
                  {snippet.code}
                </SyntaxHighlighter>

                {/* Decorative Gradient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}