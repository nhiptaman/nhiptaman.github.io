import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Bot, Loader2, Minimize2 } from 'lucide-react';
import { sendMessage } from '../services/geminiService';

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'Chào bạn! Mình là Trợ lý Tâm An. Hôm nay bạn cảm thấy thế nào? Mình luôn ở đây để lắng nghe và chia sẻ cùng bạn. ❤️' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const botResponse = await sendMessage(userMessage);
    setMessages(prev => [...prev, { role: 'bot', content: botResponse || "Mình chưa hiểu ý bạn lắm, bạn có thể nói rõ hơn được không?" }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-primary/30 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-zinc-900 p-6 flex items-center justify-between shadow-2xl relative z-10 border-b-2 border-primary/50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(255,191,0,0.5)] border-2 border-white/20">
                  <Bot className="text-black" size={28} />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl leading-tight tracking-tight">Trợ lý Tâm An</h3>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest">Đang trực tuyến</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-all p-2 hover:bg-white/20 rounded-full active:scale-90"
              >
                <Minimize2 size={24} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-slate-50/50 dark:bg-zinc-950/50 backdrop-blur-sm"
            >
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-[1.5rem] font-black text-base md:text-lg leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-black rounded-tr-none shadow-md shadow-primary/30' 
                      : 'bg-zinc-900 border-2 border-zinc-700 text-white rounded-tl-none shadow-xl'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-zinc-800 p-5 rounded-[1.5rem] rounded-tl-none border-2 border-zinc-100 dark:border-zinc-700 shadow-md">
                    <Loader2 className="animate-spin text-primary" size={24} />
                  </div>
                </div>
              )}
            </div>

            {/* Input area */}
            <div className="p-6 bg-white dark:bg-zinc-900 border-t-2 border-zinc-100 dark:border-zinc-800">
              <div className="relative flex items-center gap-3">
                <input 
                  type="text"
                  placeholder="Hỏi Tâm An điều gì đó..."
                  className="w-full p-4 pr-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-zinc-900 outline-none font-bold text-base transition-all text-foreground"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-3 bg-primary text-white rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:scale-100"
                >
                  <Send size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`h-16 w-16 rounded-full shadow-2xl flex items-center justify-center transition-all ${
          isOpen ? 'bg-zinc-900 text-white' : 'bg-primary text-white'
        }`}
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
        {!isOpen && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
          >
            <span className="text-[10px] font-black text-white">1</span>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};
