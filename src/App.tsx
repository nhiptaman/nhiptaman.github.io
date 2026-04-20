/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate, useLocation, useSearchParams, useParams } from 'react-router-dom';
import { Facebook, MessageCircle, Play, Heart, Sparkles, Wind, Moon, Sun, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const FloatingElements = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <motion.div
      animate={{
        x: [0, 50, 0],
        y: [0, 30, 0],
        rotate: [0, 10, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[15%] left-[5%] text-primary/20"
    >
      <Heart size={120} fill="currentColor" />
    </motion.div>
    <motion.div
      animate={{
        x: [0, -40, 0],
        y: [0, 60, 0],
        rotate: [0, -15, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[20%] right-[10%] text-secondary/20"
    >
      <Sparkles size={100} />
    </motion.div>
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[40%] right-[30%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"
    />
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3 shadow-2xl">
        <Link 
          to="/"
          className="flex items-center gap-2 group"
        >
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30"
          >
            <Heart className="text-white fill-white" size={20} />
          </motion.div>
          <span className="text-xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">NHỊP TÂM AN</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-black text-sm uppercase tracking-widest">
          {['Trang chủ', 'Khóa học', 'Giảng viên', 'Giới thiệu', 'Blog', 'Test'].map((item, i) => (
            <Link 
              key={item}
              to={i === 0 ? "/" : i === 1 ? "/khoahoc" : i === 2 ? "/giangvien" : i === 3 ? "/gioithieu" : i === 4 ? "/blog" : "/test-cam-xuc"} 
              className="text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link to="/hotline" className="text-sm font-black text-primary transition-colors flex items-center gap-2 group">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            HOTLINE 24/7
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/khoahoc')}
            className="hidden sm:block liquid-glass rounded-full px-6 py-2 text-sm font-black text-foreground cursor-pointer border-2 border-primary/20 hover:border-primary/50 transition-all"
          >
            Đăng ký ngay
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

const QuickAccess = () => {
  const links = [
    { name: "Test cảm xúc", to: "/test-cam-xuc", icon: "🧠" },
    { name: "Khóa học", to: "/khoahoc", icon: "📚" },
    { name: "Hotline", to: "/hotline", icon: "📞" },
    { name: "FAQ", to: "/faq", icon: "❓" },
    { name: "Blog", to: "/blog", icon: "📝" },
    { name: "Giảng viên", to: "/giangvien", icon: "👨‍🏫" },
  ];

  return (
    <div className="relative z-20 pt-28 pb-2 px-6 overflow-x-auto no-scrollbar lg:hidden">
      <div className="flex items-center gap-2 pb-2">
        {links.map((link) => (
          <Link 
            key={link.to} 
            to={link.to}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 text-foreground font-black text-[10px] uppercase tracking-wider transition-all whitespace-nowrap shadow-xl active:scale-95"
          >
            <span className="text-sm">{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="floating mb-8"
      >
        <div className="bg-primary/20 backdrop-blur-md px-6 py-2 rounded-full text-primary text-xs font-black border-2 border-primary/40 shadow-lg uppercase tracking-[0.2em]">
          ✨ TRUNG TÂM QUẢN LÝ CẢM XÚC
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-6xl font-black text-foreground drop-shadow-2xl"
      >
        Hiểu cảm xúc – <br />
        <span className="text-primary relative inline-block">
          Làm chủ bản thân
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-6 -right-10 text-4xl hidden md:block"
          >❤️</motion.span>
        </span> <br />
        Sống bình an
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 max-w-3xl"
      >
        <p className="text-xl md:text-2xl text-muted-foreground font-bold leading-relaxed bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
          Nhịp Tâm An là trung tâm quản lý cảm xúc dành riêng cho sinh viên. 
          Chúng tôi giúp các bạn trẻ nhận diện cảm xúc, giảm stress, cân bằng áp lực học tập và xây dựng những mối quan hệ tích cực.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-16"
      >
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(var(--primary), 0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/khoahoc')}
          className="liquid-glass rounded-full px-12 py-5 text-lg font-black text-foreground cursor-pointer border-2 border-primary/30 shadow-2xl bg-primary/10"
        >
          Đăng ký học thử miễn phí
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/hotline')}
          className="bg-primary text-white rounded-full px-12 py-5 text-lg font-black shadow-2xl hover:shadow-primary/50 transition-all cursor-pointer"
        >
          Gặp chuyên gia ngay
        </motion.button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">Cuộn để khám phá</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    "Áp lực học tập và thi cử kéo dài",
    "Dễ nóng giận, mất kiểm soát cảm xúc",
    "Lo âu, suy nghĩ quá nhiều",
    "Khó chia sẻ với gia đình hoặc bạn bè",
    "Thiếu tự tin trong giao tiếp",
    "Bị ảnh hưởng bởi mạng xã hội",
    "Mất phương hướng về tương lai"
  ];

  return (
    <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/30"
        >
          <img src="https://i.imgur.com/ocLxgJo.png" alt="Student stress" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
        </motion.div>
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-foreground mb-10 leading-tight tracking-tighter"
          >
            Bạn có đang gặp <br /> <span className="text-primary">những vấn đề này?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-bold mb-10"
          >
            Nhiều sinh viên hiện nay đang phải đối mặt với:
          </motion.p>
          <ul className="space-y-6">
            {problems.map((p, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-5 text-foreground font-bold text-xl group"
              >
                <motion.div 
                  whileHover={{ scale: 1.5 }}
                  className="h-4 w-4 rounded-full bg-primary shadow-[0_0_15px_rgba(255,193,7,0.8)] group-hover:bg-secondary transition-colors"
                ></motion.div>
                {p}
              </motion.li>
            ))}
          </ul>
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-12 p-8 bg-white/5 backdrop-blur-md rounded-3xl border-l-8 border-primary italic font-bold text-muted-foreground shadow-xl"
          >
            "Những cảm xúc tiêu cực nếu không được tháo gỡ sớm có thể ảnh hưởng trực tiếp đến kết quả học tập, các mối quan hệ và sức khỏe tinh thần lâu dài."
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const solutions = [
    { title: "Khóa học quản lý cảm xúc", desc: "Online và Offline linh hoạt", icon: "🎓" },
    { title: "Nhật ký cảm xúc số", desc: "Theo dõi tâm trạng mỗi ngày", icon: "📔" },
    { title: "Hệ thống AI cá nhân hóa", desc: "Lộ trình EQ riêng biệt", icon: "🤖" },
    { title: "Chuyên gia hỗ trợ 24/7", desc: "Luôn lắng nghe qua hotline", icon: "📞" },
    { title: "Workshop & Talkshow", desc: "Sự kiện định kỳ bổ ích", icon: "🎤" },
    { title: "Trại hè phát triển EQ", desc: "Kết hợp vui chơi & học tập", icon: "🏕️" }
  ];

  return (
    <section className="relative z-10 py-32 px-6 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter"
          >
            Nhịp Tâm An <span className="text-primary">đồng hành</span> cùng bạn như thế nào?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-bold max-w-4xl mx-auto"
          >
            Chúng tôi xây dựng mô hình học tập kết hợp giữa trải nghiệm thực tế, tư vấn chuyên sâu và công nghệ số để giúp mỗi học viên có lộ trình phát triển cảm xúc riêng.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
              className="liquid-glass p-10 rounded-[3rem] border-2 border-primary/10 hover:border-primary/40 transition-all group shadow-xl"
            >
              <div className="text-6xl mb-8 group-hover:scale-125 transition-transform inline-block drop-shadow-lg">{s.icon}</div>
              <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-muted-foreground font-bold leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DifferenceSection = () => {
  const diffs = [
    "Lộ trình cá nhân hóa theo từng độ tuổi",
    "Kết hợp AI đánh giá cảm xúc",
    "Mô hình học Hybrid Online – Offline",
    "Chuyên gia tâm lý và cố vấn học đường",
    "Theo dõi sự tiến bộ dài hạn",
    "Môi trường học tập an toàn, chữa lành"
  ];

  return (
    <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter"
        >
          Điều gì làm Nhịp Tâm An <span className="text-primary">khác biệt?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground font-bold max-w-4xl mx-auto"
        >
          Khác với các trung tâm kỹ năng mềm thông thường, Nhịp Tâm An tập trung chuyên sâu vào giáo dục cảm xúc và sức khỏe tinh thần cho sinh viên.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {diffs.map((d, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: i % 3 === 0 ? -30 : i % 3 === 2 ? 30 : 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,193,7,0.1)" }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 flex items-center gap-5 shadow-lg group transition-all"
          >
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black group-hover:bg-primary group-hover:text-white transition-all">✓</div>
            <span className="font-black text-foreground text-lg">{d}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FeaturedCourses = () => {
  const navigate = useNavigate();
  const courses = [
    { title: "Khóa Nền tảng: Online", desc: "Xây dựng nền tảng EQ vững chắc với chi phí tối ưu chỉ 100.000VNĐ.", img: "https://i.imgur.com/9GwwuEE.png" },
    { title: "Khóa Nền tảng: Offline", desc: "Trải nghiệm trực tiếp, kết nối sâu sắc với mức phí 200.000VNĐ.", img: "https://i.imgur.com/0ULt3td.png" },
    { title: "Khóa Nâng cao: Online", desc: "Làm chủ cảm xúc chuyên sâu qua nền tảng số với 300.000VNĐ.", img: "https://i.imgur.com/huHbbDH.png" },
    { title: "Khóa Nâng cao: Offline", desc: "Đào tạo chuyên sâu, thực hành thực tế với 400.000VNĐ.", img: "https://i.imgur.com/5oY6wPs.png" }
  ];

  return (
    <section className="relative z-10 py-32 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tighter"
            >
              Khóa học <span className="text-primary">nổi bật</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-bold"
            >
              Những chương trình được thiết kế chuyên sâu để thay đổi tư duy và cảm xúc của bạn.
            </motion.p>
          </div>
          <div className="flex gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/khoahoc')} 
              className="px-10 py-4 rounded-full border-2 border-primary text-primary font-black hover:bg-primary hover:text-white transition-all shadow-lg"
            >
              Xem tất cả
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(var(--primary), 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/khoahoc')} 
              className="px-10 py-4 rounded-full bg-primary text-white font-black hover:scale-105 transition-transform shadow-xl"
            >
              Học thử ngay
            </motion.button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="liquid-glass overflow-hidden rounded-[3rem] border-2 border-primary/10 hover:border-primary/40 transition-all group shadow-2xl"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Star className="text-white fill-white animate-spin-slow" size={40} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">{c.title}</h3>
                <p className="text-base text-muted-foreground font-bold leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CommitmentSection = () => {
  const values = ["An toàn", "Tôn trọng", "Bảo mật", "Không phán xét", "Đồng hành lâu dài", "Phù hợp cá nhân"];

  return (
    <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-black text-foreground mb-16 tracking-tighter"
      >
        Cam kết từ <span className="text-primary">Nhịp Tâm An</span>
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {values.map((v, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-8 rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center gap-6 shadow-xl group"
          >
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-4xl group-hover:bg-primary/20 transition-colors">✨</div>
            <span className="font-black text-foreground text-sm uppercase tracking-[0.2em]">{v}</span>
          </motion.div>
        ))}
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-16 text-2xl text-muted-foreground font-bold max-w-4xl mx-auto leading-relaxed"
      >
        Mỗi học viên đều được lắng nghe, thấu hiểu và hỗ trợ theo đúng vấn đề cảm xúc mình đang gặp phải.
      </motion.p>
    </section>
  );
};

const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="relative z-10 py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto liquid-glass p-16 md:p-24 rounded-[5rem] border-4 border-primary/20 text-center shadow-2xl overflow-hidden relative"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-primary -z-10"
        />
        <h2 className="text-5xl md:text-7xl font-black text-foreground mb-10 leading-tight tracking-tighter">
          Bắt đầu hành trình chữa lành và <br /> <span className="text-primary">phát triển cảm xúc</span> ngay hôm nay
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground font-bold mb-16 max-w-4xl mx-auto leading-relaxed">
          Chỉ với một bước đăng ký, bạn sẽ được trải nghiệm buổi học thử miễn phí cùng chuyên gia để hiểu rõ cảm xúc của bản thân và xây dựng lộ trình phù hợp nhất.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(var(--primary), 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/khoahoc')} 
            className="bg-primary text-white px-14 py-6 rounded-full text-xl font-black shadow-2xl transition-all cursor-pointer"
          >
            Đăng ký miễn phí
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/hotline')} 
            className="liquid-glass px-14 py-6 rounded-full text-xl font-black text-foreground border-2 border-primary/30 shadow-xl cursor-pointer"
          >
            Nhận tư vấn ngay
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter">Liên hệ với <span className="text-primary">Nhịp Tâm An</span></h2>
        <p className="text-xl text-muted-foreground font-bold max-w-3xl mx-auto">Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên hành trình thấu hiểu bản thân.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="liquid-glass p-10 md:p-16 rounded-[4rem] border-2 border-primary/10 shadow-2xl"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-foreground uppercase tracking-widest opacity-60">Họ và tên</label>
                <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-white/5 border-2 border-primary/10 rounded-2xl px-6 py-5 text-foreground font-bold focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-foreground uppercase tracking-widest opacity-60">Số điện thoại</label>
                <input type="tel" placeholder="090xxxxxxx" className="w-full bg-white/5 border-2 border-primary/10 rounded-2xl px-6 py-5 text-foreground font-bold focus:border-primary outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-foreground uppercase tracking-widest opacity-60">Email</label>
              <input type="email" placeholder="email@example.com" className="w-full bg-white/5 border-2 border-primary/10 rounded-2xl px-6 py-5 text-foreground font-bold focus:border-primary outline-none transition-all" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-foreground uppercase tracking-widest opacity-60">Lời nhắn</label>
              <textarea placeholder="Bạn cần hỗ trợ điều gì?" rows={4} className="w-full bg-white/5 border-2 border-primary/10 rounded-2xl px-6 py-5 text-foreground font-bold focus:border-primary outline-none transition-all resize-none"></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full py-6 rounded-2xl bg-primary text-white font-black text-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all cursor-pointer"
            >
              Gửi thông tin liên hệ
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: "📍", title: "Địa chỉ", desc: "Thôn Nhạc Lộc, Xã Như Quỳnh, Tỉnh Hưng Yên" },
              { icon: "📞", title: "Hotline", desc: "0394155763" },
              { icon: "✉️", title: "Email", desc: "nhiptaman@gmail.com" },
              { icon: "🌐", title: "Mạng xã hội", isSocial: true }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 shadow-xl group transition-all"
              >
                <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-black text-foreground text-xl mb-3">{item.title}</h4>
                {item.isSocial ? (
                  <div className="flex gap-6 mt-4">
                    <motion.a whileHover={{ scale: 1.3, color: "#1877F2" }} href="https://web.facebook.com/tm12a.tamlyhoc" target="_blank" rel="noopener noreferrer" className="text-primary transition-colors" title="Facebook"><Facebook size={28} /></motion.a>
                    <motion.a whileHover={{ scale: 1.3, color: "#000000" }} href="#" className="text-primary transition-colors" title="TikTok"><Play size={28} /></motion.a>
                    <motion.a whileHover={{ scale: 1.3, color: "#0068FF" }} href="#" className="text-primary transition-colors" title="Zalo"><MessageCircle size={28} /></motion.a>
                  </div>
                ) : (
                  <p className="text-muted-foreground font-bold leading-relaxed">{item.desc}</p>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3.5rem] overflow-hidden border-8 border-white/30 h-80 shadow-2xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681007846!2d106.6584306147489!3d10.773374292323604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed189fa355d%3A0x1d1d3a9199c5867d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1648771234567!5m2!1svi!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative z-10 py-20 px-6 border-t border-primary/10 bg-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Heart className="text-white fill-white" size={24} />
            </div>
            <span className="text-3xl font-black tracking-tighter text-primary">NHỊP TÂM AN</span>
          </motion.div>
          <p className="text-lg text-muted-foreground font-bold max-w-md leading-relaxed mb-10">
            Chúng tôi tin rằng mỗi tâm hồn đều xứng đáng được lắng nghe và chữa lành. Hãy để Nhịp Tâm An đồng hành cùng bạn trên con đường tìm lại chính mình.
          </p>
          <div className="flex gap-8">
            <motion.a whileHover={{ scale: 1.2, color: "#1877F2" }} href="#" className="text-muted-foreground transition-colors"><Facebook size={28} /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#000000" }} href="#" className="text-muted-foreground transition-colors"><Play size={28} /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#0068FF" }} href="#" className="text-muted-foreground transition-colors"><MessageCircle size={28} /></motion.a>
          </div>
        </div>
        
        <div>
          <h4 className="font-black text-foreground uppercase tracking-[0.2em] mb-8">Liên kết nhanh</h4>
          <ul className="space-y-4 font-bold text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link></li>
            <li><Link to="/gioithieu" className="hover:text-primary transition-colors">Về chúng tôi</Link></li>
            <li><Link to="/giangvien" className="hover:text-primary transition-colors">Đội ngũ giảng viên</Link></li>
            <li><Link to="/khoahoc" className="hover:text-primary transition-colors">Khóa học</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog Tâm An</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black text-foreground uppercase tracking-[0.2em] mb-8">Hỗ trợ</h4>
          <ul className="space-y-4 font-bold text-muted-foreground">
            <li><Link to="/hotline" className="hover:text-primary transition-colors">Hotline 24/7</Link></li>
            <li><Link to="/dieukhoan" className="hover:text-primary transition-colors">Điều khoản dịch vụ</Link></li>
            <li><Link to="/baomat" className="hover:text-primary transition-colors">Chính sách bảo mật</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">Câu hỏi thường gặp</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 text-center text-sm font-bold text-muted-foreground">
        © 2026 Nhịp Tâm An. Bảo lưu mọi quyền. Designed with ❤️ for a peaceful life.
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <PageWrapper>
      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <DifferenceSection />
      <FeaturedCourses />
      <CommitmentSection />
      <FinalCTA />
      <ContactSection />
    </PageWrapper>
  );
};

const AboutPage = () => {
  return (
    <PageWrapper>
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter">Về <span className="text-primary">Nhịp Tâm An</span></h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-3 bg-primary mx-auto rounded-full mb-12"
          ></motion.div>
          <p className="text-3xl md:text-4xl font-black text-primary italic leading-tight">"Yêu thương hiện diện – Lắng nghe thấu cảm"</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/30"
          >
            <img src="https://i.imgur.com/oDRqAwy.png" alt="About Nhịp Tâm An" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </motion.div>
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-10 md:p-12 rounded-[3rem] border-2 border-primary/10 shadow-2xl"
            >
              <p className="text-xl text-muted-foreground font-bold leading-relaxed">
                Nhịp Tâm An được xây dựng với sứ mệnh hướng đến một nền giáo dục hạnh phúc, nơi mỗi sinh viên đều có cơ hội hiểu chính mình, làm chủ cảm xúc và phát triển toàn diện.
              </p>
              <p className="text-xl text-muted-foreground font-bold leading-relaxed mt-8">
                Chúng tôi tin rằng thành công bền vững không chỉ đến từ IQ mà còn bắt đầu từ EQ, khả năng kiểm soát cảm xúc, thấu hiểu bản thân và xây dựng những mối quan hệ tích cực.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-primary/10 rounded-[3rem] border-4 border-primary/20 shadow-xl"
            >
              <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-[0.2em]">Sứ mệnh</h3>
              <p className="text-2xl font-black text-foreground leading-tight">Giúp thế hệ trẻ sống bình an từ bên trong.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

const CoursesPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = React.useState<number | null>(null);

  const courses = [
    {
      title: "Khóa học Nền tảng: Thấu hiểu & Cân bằng",
      description: "Chương trình cơ bản giúp sinh viên nhận diện cảm xúc, xây dựng nền tảng tâm lý vững chắc và học cách cân bằng cuộc sống đại học.",
      details: "Khóa học kéo dài 5 tuần, mỗi tuần 1 buổi từ 20:00 đến 21:30. Sinh viên được tự chọn lịch học (1 ngày cố định trong tuần) cho toàn bộ khóa học. Nội dung tập trung vào các kỹ năng nhận diện và quản lý cảm xúc cơ bản.",
      results: ["Nhận diện 6 loại cảm xúc cơ bản", "Kỹ thuật hít thở giảm stress tức thì", "Xây dựng thói quen tích cực", "Hiểu về giá trị bản thân", "Giao tiếp cơ bản"],
      format: "Online / Offline",
      prices: { online: "100.000 VNĐ", offline: "200.000 VNĐ" },
      icon: "🌱"
    },
    {
      title: "Khóa học Nâng cao: Làm chủ & Kết nối",
      description: "Chương trình chuyên sâu tập trung vào kỹ năng làm chủ tâm trí, giải quyết mâu thuẫn phức tạp và xây dựng các mối quan hệ bền vững.",
      details: "Khóa học kéo dài 5 tuần, mỗi tuần 1 buổi từ 20:00 đến 21:30. Sinh viên được tự chọn lịch học (1 ngày cố định trong tuần) cho toàn bộ khóa học. Nội dung nâng cao mang tính chuyên sâu và hiệu quả vượt trội so với gói cơ bản, giúp chuyển hóa cảm xúc mạnh mẽ.",
      results: ["Làm chủ cơn giận & lo âu", "Kỹ năng giải quyết xung đột", "Lắng nghe thấu cảm chuyên sâu", "Xây dựng ranh giới cá nhân", "Lãnh đạo bằng trí tuệ cảm xúc"],
      format: "Online / Offline",
      prices: { online: "300.000 VNĐ", offline: "400.000 VNĐ" },
      icon: "💎"
    }
  ];

  return (
    <PageWrapper>
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter">Khóa Học <span className="text-primary">Tâm An</span></h1>
          <p className="text-2xl text-muted-foreground font-bold max-w-3xl mx-auto">Lựa chọn lộ trình phù hợp để bắt đầu hành trình thấu hiểu bản thân.</p>
        </motion.div>

        <div className="space-y-24">
          {courses.map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="liquid-glass p-10 md:p-16 rounded-[4rem] border-2 border-primary/10 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start shadow-2xl overflow-hidden relative"
            >
              <div className="lg:col-span-2">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-8xl mb-10 inline-block drop-shadow-2xl"
                >{c.icon}</motion.div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tight">{c.title}</h2>
                <p className="text-xl text-muted-foreground font-bold mb-8 leading-relaxed">{c.description}</p>
                
                <div className="mb-10 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                  <h4 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Sparkles size={16} /> Thông tin chi tiết:
                  </h4>
                  <p className="text-lg text-foreground font-bold leading-relaxed italic">
                    {c.details}
                  </p>
                </div>

                <h4 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-6">Kết quả nhận được:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                  {c.results.map((r, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-center gap-4 text-foreground font-bold text-lg"
                    >
                      <div className="h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
                      {r}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-primary/10 p-10 rounded-[3rem] border-4 border-primary/20 space-y-8 shadow-xl"
              >
                <div>
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] block mb-3 opacity-60">Hình thức học:</span>
                  <span className="text-2xl font-black text-foreground">{c.format}</span>
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] block mb-3 opacity-60">Học phí:</span>
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="font-bold text-muted-foreground">Online:</span>
                    <span className="text-2xl font-black text-primary">{c.prices.online}</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="font-bold text-muted-foreground">Offline:</span>
                    <span className="text-2xl font-black text-primary">{c.prices.offline}</span>
                  </div>
                </div>
                <div className="pt-6 space-y-4">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(var(--primary), 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/dangky?course=${encodeURIComponent(c.title)}&type=Online`)}
                    className="w-full py-5 rounded-2xl bg-primary text-white font-black text-lg shadow-xl transition-all cursor-pointer"
                  >
                    Đăng ký khóa học
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/dangky?course=${encodeURIComponent(c.title)}&type=Online`)}
                    className="w-full py-5 rounded-2xl border-2 border-primary/30 text-primary font-black text-lg transition-all cursor-pointer"
                  >
                    Nhận lịch khai giảng
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

const HotlinePage = () => {
  const [isMessaging, setIsMessaging] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [isSent, setIsSent] = React.useState(false);

  const handleSend = () => {
    if (message.trim()) {
      // In a real app, this would send to a backend
      setIsSent(true);
      setMessage("");
      setTimeout(() => {
        setIsSent(false);
        setIsMessaging(false);
      }, 3000);
    }
  };

  return (
    <PageWrapper>
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto text-center">
        <div className="mb-24">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block p-8 bg-primary/20 rounded-full mb-10 shadow-2xl"
          >
            <div className="h-20 w-20 flex items-center justify-center text-6xl drop-shadow-xl">📞</div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-foreground mb-10 leading-tight tracking-tighter"
          >
            Bạn không cần phải một mình <br /> <span className="text-primary">vượt qua cảm xúc tiêu cực</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-muted-foreground font-bold max-w-4xl mx-auto leading-relaxed"
          >
            Khi cảm thấy áp lực, lo âu, mất phương hướng hoặc cần một người lắng nghe ngay lập tức, đội ngũ chuyên gia của Nhịp Tâm An luôn sẵn sàng đồng hành cùng bạn 24/7.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {["Stress thi cử", "Mâu thuẫn gia đình", "Áp lực bạn bè", "Khủng hoảng cảm xúc", "Mất động lực học tập"].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
              className="liquid-glass p-10 rounded-[3rem] border-2 border-primary/10 font-black text-2xl text-foreground shadow-xl transition-all"
            >
              {item}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8">
          <AnimatePresence mode="wait">
            {!isMessaging ? (
              <motion.div 
                key="buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col sm:flex-row justify-center gap-8 w-full"
              >
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(var(--primary), 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:1900xxxx" 
                  className="bg-primary text-white px-16 py-6 rounded-full text-2xl font-black shadow-2xl transition-all flex items-center justify-center gap-5"
                >
                  <span>📞</span> Gọi ngay chuyên gia
                </motion.a>
                <motion.button 
                  onClick={() => setIsMessaging(true)}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="liquid-glass px-16 py-6 rounded-full text-2xl font-black text-foreground border-2 border-primary/30 shadow-xl flex items-center justify-center gap-5 cursor-pointer"
                >
                  <span>💬</span> Nhắn tin ẩn danh
                </motion.button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full max-w-2xl liquid-glass p-8 md:p-12 rounded-[3rem] border-2 border-primary/20 shadow-2xl"
              >
                {isSent ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-10"
                  >
                    <div className="text-6xl mb-6">✨</div>
                    <h3 className="text-3xl font-black text-foreground mb-4">Cảm ơn bạn đã chia sẻ!</h3>
                    <p className="text-xl text-muted-foreground font-bold">Thông điệp của bạn đã được gửi đi một cách an toàn và ẩn danh.</p>
                  </motion.div>
                ) : (
                  <div className="space-y-8">
                    <div className="text-left">
                      <h3 className="text-3xl font-black text-foreground mb-2">Lời nhắn ẩn danh</h3>
                      <p className="text-muted-foreground font-bold">Mọi chia sẻ của bạn đều được bảo mật tuyệt đối.</p>
                    </div>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hãy viết những gì bạn đang cảm thấy ở đây..."
                      className="w-full h-48 bg-white/5 border-2 border-primary/10 rounded-3xl p-6 text-xl font-bold text-foreground focus:border-primary/50 outline-none transition-all resize-none"
                    />
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setIsMessaging(false)}
                        className="flex-1 py-5 border-2 border-primary/30 text-primary rounded-2xl font-black text-xl"
                      >
                        Hủy bỏ
                      </button>
                      <button 
                        onClick={handleSend}
                        disabled={!message.trim()}
                        className={`flex-1 py-5 rounded-2xl font-black text-xl shadow-xl transition-all ${
                          message.trim() ? 'bg-primary text-white' : 'bg-muted text-muted-foreground cursor-not-allowed'
                        }`}
                      >
                        Gửi đi 🚀
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageWrapper>
  );
};

const blogPosts = [
  { 
    id: "kiem-soat-nong-gian",
    title: "5 cách kiểm soát cơn nóng giận cho sinh viên", 
    img: "https://i.imgur.com/uUSqXrv.png", 
    date: "01/04/2026",
    excerpt: "Nóng giận là bản năng, kiểm soát là bản lĩnh. Cùng tìm hiểu cách làm chủ cảm xúc trong môi trường đại học.",
    content: `
      <p>Nóng giận là một cảm xúc tự nhiên của con người, nhưng nếu không được kiểm soát, nó có thể gây ra những hậu quả đáng tiếc trong các mối quan hệ và học tập. Đối với sinh viên, áp lực từ thi cử, bạn bè và gia đình thường là ngòi nổ cho những cơn giận bộc phát.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">1. Quy tắc 10 giây</h3>
      <p>Khi cảm thấy cơn giận đang dâng trào, hãy dừng lại và đếm chậm từ 1 đến 10. Khoảng thời gian ngắn này giúp não bộ chuyển từ phản ứng bản năng sang suy nghĩ lý trí.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">2. Hít thở sâu</h3>
      <p>Hít vào thật sâu bằng mũi và thở ra từ từ bằng miệng. Việc này giúp làm dịu hệ thần kinh và giảm nhịp tim đang đập nhanh do tức giận.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">3. Rời khỏi hiện trường</h3>
      <p>Nếu cuộc tranh luận đang trở nên quá căng thẳng, hãy xin phép rời đi một lát. Một chút không gian riêng sẽ giúp bạn bình tĩnh lại trước khi tiếp tục giải quyết vấn đề.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">4. Viết ra cảm xúc</h3>
      <p>Thay vì nói ra những lời gây tổn thương, hãy thử viết tất cả những gì bạn đang nghĩ vào một tờ giấy hoặc ghi chú trên điện thoại. Đây là cách giải tỏa năng lượng tiêu cực rất hiệu quả.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">5. Tìm kiếm sự thấu cảm</h3>
      <p>Hãy thử đặt mình vào vị trí của người khác để hiểu tại sao họ lại hành động như vậy. Sự thấu cảm là liều thuốc giải độc tốt nhất cho cơn giận.</p>
    `
  },
  { 
    id: "ap-luc-thi-cu",
    title: "Làm gì khi áp lực thi cử quá lớn?", 
    img: "https://i.imgur.com/1Vy7PiL.png", 
    date: "30/03/2026",
    excerpt: "Áp lực thi cử là điều không thể tránh khỏi, nhưng bạn hoàn toàn có thể vượt qua nó một cách nhẹ nhàng hơn.",
    content: `
      <p>Mùa thi cử luôn là giai đoạn căng thẳng nhất đối với mọi sinh viên. Những đêm thức trắng, những tập tài liệu dày cộp và kỳ vọng từ gia đình có thể tạo nên một áp lực khổng lồ.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Lập kế hoạch học tập khoa học</h3>
      <p>Thay vì học dồn vào những ngày cuối, hãy chia nhỏ khối lượng kiến thức và học đều đặn mỗi ngày. Một kế hoạch rõ ràng sẽ giúp bạn cảm thấy mọi thứ đang trong tầm kiểm soát.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Đảm bảo giấc ngủ</h3>
      <p>Nhiều bạn nghĩ rằng thức đêm sẽ học được nhiều hơn, nhưng thực tế não bộ cần nghỉ ngơi để ghi nhớ thông tin. Hãy đảm bảo ngủ đủ ít nhất 6-7 tiếng mỗi ngày.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Vận động nhẹ nhàng</h3>
      <p>Dành 15-30 phút mỗi ngày để đi bộ hoặc tập thể dục nhẹ. Vận động giúp cơ thể tiết ra endorphin - hormone hạnh phúc, giúp giảm căng thẳng hiệu quả.</p>
    `
  },
  { 
    id: "noi-chuyen-voi-bo-me",
    title: "Cách nói chuyện với bố mẹ khi không được thấu hiểu", 
    img: "https://i.imgur.com/4at66Qc.png", 
    date: "28/03/2026",
    excerpt: "Khoảng cách thế hệ đôi khi khiến việc giao tiếp trở nên khó khăn. Hãy tìm cách để tiếng nói của bạn được lắng nghe.",
    content: `
      <p>Giao tiếp với bố mẹ đôi khi giống như một thử thách lớn, đặc biệt là khi quan điểm của hai thế hệ có sự khác biệt rõ rệt.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Chọn thời điểm thích hợp</h3>
      <p>Đừng bắt đầu một cuộc trò chuyện quan trọng khi bố mẹ đang mệt mỏi hoặc bận rộn. Hãy chọn lúc không gian yên tĩnh và mọi người đều đang thoải mái.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Sử dụng thông điệp "Tôi"</h3>
      <p>Thay vì nói "Bố mẹ luôn áp đặt con", hãy thử nói "Con cảm thấy áp lực khi bố mẹ kỳ vọng quá nhiều vào con". Cách nói này giúp giảm bớt sự phòng thủ từ phía bố mẹ.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Lắng nghe trước khi phản hồi</h3>
      <p>Đôi khi bố mẹ khắt khe cũng vì lo lắng cho bạn. Hãy lắng nghe nỗi lòng của họ trước, sau đó mới trình bày quan điểm của mình một cách từ tốn.</p>
    `
  },
  { 
    id: "stress-hoc-duong",
    title: "Dấu hiệu stress học đường", 
    img: "https://i.imgur.com/ZxCkdEX.png", 
    date: "25/03/2026",
    excerpt: "Đừng lờ đi những dấu hiệu của cơ thể. Nhận diện sớm stress giúp bạn bảo vệ sức khỏe tâm thần của mình.",
    content: `
      <p>Stress học đường không chỉ là cảm giác mệt mỏi nhất thời, nó có thể ảnh hưởng sâu sắc đến sức khỏe và chất lượng cuộc sống của sinh viên.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Dấu hiệu về thể chất</h3>
      <p>Đau đầu thường xuyên, mất ngủ, chán ăn hoặc ăn quá nhiều, thường xuyên cảm thấy mệt mỏi dù không vận động nặng.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Dấu hiệu về tâm lý</h3>
      <p>Dễ cáu gắt, cảm thấy tuyệt vọng, mất hứng thú với những sở thích trước đây, khó tập trung vào việc học tập.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Cách ứng phó</h3>
      <p>Khi nhận thấy các dấu hiệu này, hãy dành thời gian nghỉ ngơi, trò chuyện với bạn bè hoặc tìm đến các chuyên gia tư vấn tâm lý để được hỗ trợ kịp thời.</p>
    `
  },
  { 
    id: "yeu-ban-than",
    title: "Làm sao để yêu bản thân hơn mỗi ngày?", 
    img: "https://i.imgur.com/2ZkKrFE.png", 
    date: "22/03/2026",
    excerpt: "Yêu bản thân là khởi đầu của một cuộc tình lãng mạn suốt đời. Hãy bắt đầu từ những điều nhỏ bé nhất.",
    content: `
      <p>Yêu bản thân không phải là ích kỷ, mà là học cách trân trọng và chăm sóc cho chính mình để có thể yêu thương người khác tốt hơn.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Ngừng so sánh</h3>
      <p>Mỗi người có một hành trình riêng. Đừng so sánh chương 1 của mình với chương 20 của người khác. Hãy tập trung vào sự tiến bộ của chính bạn.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Chấp nhận những khiếm khuyết</h3>
      <p>Không ai hoàn hảo cả. Hãy học cách bao dung với những lỗi lầm của bản thân và xem đó là bài học để trưởng thành.</p>
      
      <h3 class="text-2xl font-black text-primary mt-8 mb-4">Dành thời gian cho sở thích</h3>
      <p>Dù bận rộn đến đâu, hãy dành ít nhất 30 phút mỗi ngày để làm điều bạn thực sự yêu thích, dù đó chỉ là đọc một vài trang sách hay nghe một bản nhạc hay.</p>
    `
  }
];

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter">Blog <span className="text-primary">Tâm An</span></h1>
          <p className="text-2xl text-muted-foreground font-bold">Chia sẻ kiến thức, kỹ năng và những câu chuyện chữa lành.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              onClick={() => navigate(`/blog/${p.id}`)}
              className="liquid-glass overflow-hidden rounded-[4rem] border-2 border-primary/10 hover:border-primary/40 transition-all group cursor-pointer shadow-2xl"
            >
              <div className="h-72 overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">{p.date}</div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-foreground leading-tight group-hover:text-primary transition-colors mb-6">{p.title}</h3>
                <p className="text-muted-foreground font-bold mb-8 line-clamp-2">{p.excerpt}</p>
                <div className="flex items-center gap-3 text-primary font-black text-sm group-hover:gap-5 transition-all">
                  ĐỌC THÊM <ChevronRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

const BlogPostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <PageWrapper>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-4xl font-black text-foreground mb-8">Không tìm thấy bài viết</h2>
          <button 
            onClick={() => navigate('/blog')}
            className="px-8 py-4 bg-primary text-white font-black rounded-full hover:scale-105 transition-transform"
          >
            QUAY LẠI BLOG
          </button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <article className="relative z-10 px-6 py-32 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-primary font-black mb-8 hover:gap-4 transition-all"
          >
            <ChevronRight size={20} className="rotate-180" /> QUAY LẠI BLOG
          </button>
          <div className="text-primary font-black mb-4 uppercase tracking-widest">{post.date}</div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter leading-tight">{post.title}</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-[4rem] overflow-hidden shadow-2xl mb-16 border-8 border-white/30"
        >
          <img src={post.img} alt={post.title} className="w-full h-auto" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-xl prose-primary max-w-none font-bold text-muted-foreground leading-relaxed"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>

        <div className="mt-24 pt-12 border-t border-primary/10">
          <h3 className="text-2xl font-black text-foreground mb-8">Bài viết khác</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.id !== id).slice(0, 2).map((p, i) => (
              <div 
                key={i}
                onClick={() => navigate(`/blog/${p.id}`)}
                className="liquid-glass p-6 rounded-3xl border border-primary/10 cursor-pointer hover:border-primary/40 transition-all group"
              >
                <h4 className="font-black text-foreground group-hover:text-primary transition-colors">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </article>
    </PageWrapper>
  );
};

const InstructorsPage = () => {
  const instructors = [
    {
      name: "Cô Nguyễn Thúy Hà",
      role: "Giảng viên Quản lý cảm xúc - Tổ chức Seroto",
      desc: "Với hơn 5 năm miệt mài gieo mầm bình an, cô Hà không chỉ là một người thầy mà còn là một người bạn tâm giao của sinh viên. Bằng sự nhiệt huyết và trái tim ấm áp, cô luôn biết cách khơi gợi những cảm xúc tích cực, giúp các bạn trẻ tìm thấy ánh sáng trong những giai đoạn chênh vênh nhất của cuộc đời.",
      img: "https://i.imgur.com/s2Ve325.jpeg",
      specialty: "Chuyên gia Trí tuệ cảm xúc"
    },
    {
      name: "Cô Đào Thị Tuất",
      role: "Giảng viên Quản lý cảm xúc - Tổ chức Seroto",
      desc: "Sở hữu bề dày kinh nghiệm hơn 5 năm trong lĩnh vực tâm lý, cô Tuất nổi tiếng với phong cách giảng dạy đầy năng lượng và sự tận tâm không biên giới. Cô luôn tin rằng mỗi sinh viên đều là một viên ngọc quý cần được mài giũa bằng sự thấu cảm, giúp các bạn tự tin làm chủ tâm trí và kiến tạo cuộc sống hạnh phúc.",
      img: "https://i.imgur.com/TpoSZBv.jpeg",
      specialty: "Chuyên gia Tâm lý học đường"
    },
    {
      name: "Cô Nguyễn Thy Thy",
      role: "Giảng viên Quản lý cảm xúc - Tổ chức Seroto",
      desc: "Với hơn 5 năm kinh nghiệm đồng hành cùng giới trẻ, cô Thy Thy mang đến một làn gió mới trong việc quản lý cảm xúc. Sự tinh tế, nhẹ nhàng nhưng đầy quyết đoán của cô đã giúp hàng ngàn sinh viên tháo gỡ những nút thắt trong lòng, xây dựng nội lực vững vàng để đối mặt với mọi áp lực xã hội.",
      img: "https://i.imgur.com/eeCrgDO.jpeg",
      specialty: "Chuyên gia Kết nối & Thấu cảm"
    }
  ];

  const methods = [
    "Coaching cá nhân hóa",
    "Tình huống mô phỏng thực tế",
    "Workshop nhóm",
    "Nhật ký cảm xúc số",
    "Hoạt động storytelling",
    "Thiền cơ bản và viết chữa lành",
    "Tư vấn 1:1 cùng chuyên gia"
  ];

  const commitments = [
    "Lắng nghe bằng sự thấu cảm",
    "Tôn trọng cảm xúc cá nhân",
    "Đồng hành lâu dài",
    "Bảo mật thông tin học viên",
    "Cá nhân hóa lộ trình học tập",
    "Theo dõi tiến bộ sau từng giai đoạn"
  ];

  return (
    <PageWrapper>
      {/* Section 1: Banner */}
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black text-foreground mb-10 tracking-tighter"
        >
          Đội ngũ giảng viên và <br /> <span className="text-primary">chuyên gia đồng hành</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-bold leading-relaxed">
            Tại Nhịp Tâm An, mỗi học viên không chỉ tham gia một khóa học mà còn được đồng hành bởi đội ngũ giảng viên, chuyên gia tâm lý và cố vấn giáo dục giàu sự thấu cảm.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground font-bold leading-relaxed">
            Chúng tôi tin rằng sự thay đổi cảm xúc tích cực chỉ thực sự bền vững khi người học được hướng dẫn bởi những người vừa có chuyên môn, vừa có khả năng lắng nghe và đồng hành lâu dài.
          </p>
        </motion.div>
      </section>

      {/* Section 2: Featured Instructors */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="space-y-32">
          {instructors.map((ins, i) => (
            <motion.div 
              key={ins.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="w-full lg:w-1/3">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/30 relative group"
                >
                  <img src={ins.img} alt={ins.name} className="w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20">
                    <span className="text-xs font-black text-primary uppercase tracking-widest">{ins.specialty}</span>
                    <h3 className="text-2xl font-black text-foreground mt-1">{ins.name}</h3>
                  </div>
                </motion.div>
              </div>
              <div className="w-full lg:w-2/3 space-y-8">
                <div className="inline-block px-6 py-2 bg-primary/10 rounded-full text-primary font-black text-sm uppercase tracking-widest">
                  Giảng viên nổi bật
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">{ins.name}</h2>
                <p className="text-2xl font-black text-primary italic">{ins.role}</p>
                <p className="text-xl text-muted-foreground font-bold leading-relaxed">{ins.desc}</p>
                
                {(ins as any).tasks && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-foreground uppercase tracking-[0.2em] opacity-60">Lĩnh vực phụ trách:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(ins as any).tasks.map((task: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-3 text-foreground font-bold">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Teaching Philosophy */}
      <section className="relative z-10 py-32 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter"
            >
              Phương pháp giảng dạy tại <span className="text-primary">Nhịp Tâm An</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground font-bold max-w-4xl mx-auto leading-relaxed"
            >
              Đội ngũ giảng viên tại Nhịp Tâm An không đi theo lối dạy lý thuyết khô khan, mà tập trung vào trải nghiệm thực tế và chữa lành cảm xúc từ bên trong.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methods.map((m, i) => (
              <motion.div 
                key={m}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="liquid-glass p-8 rounded-[2.5rem] border-2 border-primary/10 flex flex-col items-center text-center gap-6 shadow-xl"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Star size={32} />
                </div>
                <span className="font-black text-foreground text-lg leading-tight">{m}</span>
              </motion.div>
            ))}
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center text-2xl font-black text-primary italic"
          >
            Mỗi buổi học đều được thiết kế để học viên hiểu – nhận diện – kiểm soát – chuyển hóa cảm xúc theo cách tự nhiên nhất.
          </motion.p>
        </div>
      </section>

      {/* Section 4: Team Commitment */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-foreground mb-10 tracking-tighter"
            >
              Cam kết từ <br /> <span className="text-primary">đội ngũ chuyên gia</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground font-bold mb-12 leading-relaxed"
            >
              Chúng tôi không chỉ dạy kỹ năng mà còn đồng hành để mỗi học viên thực sự trưởng thành từ bên trong.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {commitments.map((c, i) => (
                <motion.div 
                  key={c}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-foreground font-bold text-lg"
                >
                  <div className="h-4 w-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
                  {c}
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/30"
          >
            <img src="https://picsum.photos/seed/commitment/800/1000" alt="Team commitment" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto liquid-glass p-16 md:p-24 rounded-[5rem] border-4 border-primary/20 text-center shadow-2xl overflow-hidden relative"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-primary -z-10"
          />
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-10 leading-tight tracking-tighter">
            Gặp chuyên gia phù hợp <br /> <span className="text-primary">với vấn đề của bạn</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-bold mb-16 max-w-4xl mx-auto leading-relaxed">
            Đăng ký tư vấn cùng đội ngũ chuyên gia để được xây dựng lộ trình quản lý cảm xúc phù hợp nhất với độ tuổi và vấn đề bạn đang gặp phải.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(var(--primary), 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-14 py-6 rounded-full text-xl font-black shadow-2xl transition-all cursor-pointer"
            >
              Đặt lịch tư vấn
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass px-14 py-6 rounded-full text-xl font-black text-foreground border-2 border-primary/30 shadow-xl cursor-pointer"
            >
              Học thử cùng giảng viên
            </motion.button>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

const RegistrationPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    course: searchParams.get('course') || "Khóa học Nền tảng",
    type: searchParams.get('type') || "Online",
    month: "Tháng 5/2026",
    day: "Thứ Hai",
    name: "",
    phone: ""
  });

  const steps = ["Chọn khóa học", "Chọn lịch khai giảng", "Thanh toán"];

  const schedules = [
    { month: "Tháng 5/2026", start: "01/05/2026" },
    { month: "Tháng 6/2026", start: "01/06/2026" },
    { month: "Tháng 7/2026", start: "01/07/2026" }
  ];

  const days = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"];

  const prices: Record<string, Record<string, string>> = {
    "Khóa học Nền tảng": { "Online": "100.000 VNĐ", "Offline": "200.000 VNĐ" },
    "Khóa học Nâng cao": { "Online": "300.000 VNĐ", "Offline": "400.000 VNĐ" }
  };

  const currentPrice = prices[formData.course.includes("Nền tảng") ? "Khóa học Nền tảng" : "Khóa học Nâng cao"]?.[formData.type] || "0 VNĐ";

  return (
    <PageWrapper>
      <section className="relative z-10 px-6 py-32 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tighter">Đăng ký <span className="text-primary">khai giảng</span></h1>
          <div className="flex justify-center items-center gap-4">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className={`flex items-center gap-2 ${step >= i + 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center font-black border-2 ${step >= i + 1 ? 'border-primary bg-primary text-white' : 'border-muted-foreground'}`}>
                    {i + 1}
                  </div>
                  <span className="hidden sm:inline font-bold">{s}</span>
                </div>
                {i < steps.length - 1 && <div className={`h-1 w-8 rounded-full ${step > i + 1 ? 'bg-primary' : 'bg-muted-foreground/20'}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="liquid-glass p-8 md:p-12 rounded-[3rem] border-2 border-primary/10 shadow-2xl">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="space-y-4">
                <label className="text-sm font-black text-foreground uppercase tracking-widest">Khóa học bạn chọn:</label>
                <div className="grid grid-cols-1 gap-4">
                  {["Khóa học Nền tảng: Thấu hiểu & Cân bằng", "Khóa học Nâng cao: Làm chủ & Kết nối"].map(c => (
                    <button 
                      key={c}
                      onClick={() => setFormData({...formData, course: c})}
                      className={`p-6 rounded-2xl border-2 text-left transition-all ${formData.course === c ? 'border-primary bg-primary/5' : 'border-white/10 hover:border-primary/30'}`}
                    >
                      <span className="font-black text-lg block">{c}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-black text-foreground uppercase tracking-widest">Hình thức học:</label>
                <div className="flex gap-4">
                  {["Online", "Offline"].map(t => (
                    <button 
                      key={t}
                      onClick={() => setFormData({...formData, type: t})}
                      className={`flex-1 p-4 rounded-2xl border-2 font-black transition-all ${formData.type === t ? 'border-primary bg-primary/5 text-primary' : 'border-white/10 text-muted-foreground'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => setStep(2)} className="w-full py-5 bg-primary text-white rounded-2xl font-black text-xl shadow-xl">Tiếp theo</button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="space-y-4">
                <label className="text-sm font-black text-foreground uppercase tracking-widest">Tháng khai giảng (Bắt đầu từ ngày 01 hàng tháng):</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {schedules.map(s => (
                    <button 
                      key={s.month}
                      onClick={() => setFormData({...formData, month: s.month})}
                      className={`p-4 rounded-2xl border-2 transition-all text-center ${formData.month === s.month ? 'border-primary bg-primary/5' : 'border-white/10'}`}
                    >
                      <span className="font-black block">{s.month}</span>
                      <span className="text-xs text-muted-foreground">Khai giảng: {s.start}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-black text-foreground uppercase tracking-widest">Chọn ngày học cố định (20:00 - 21:30):</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {days.map(d => (
                    <button 
                      key={d}
                      onClick={() => setFormData({...formData, day: d})}
                      className={`p-3 rounded-xl border-2 font-bold transition-all ${formData.day === d ? 'border-primary bg-primary/5 text-primary' : 'border-white/10 text-muted-foreground'}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-primary font-bold italic">* Lưu ý: Lịch học sẽ cố định trong suốt 5 tuần của khóa học.</p>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="flex-1 py-5 border-2 border-primary/30 text-primary rounded-2xl font-black text-xl">Quay lại</button>
                <button onClick={() => setStep(3)} className="flex-1 py-5 bg-primary text-white rounded-2xl font-black text-xl shadow-xl">Tiếp theo</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 space-y-4">
                <h3 className="text-2xl font-black text-foreground">Tóm tắt đơn hàng</h3>
                <div className="space-y-2 font-bold text-muted-foreground">
                  <div className="flex justify-between"><span>Khóa học:</span> <span className="text-foreground">{formData.course}</span></div>
                  <div className="flex justify-between"><span>Hình thức:</span> <span className="text-foreground">{formData.type}</span></div>
                  <div className="flex justify-between"><span>Khai giảng:</span> <span className="text-foreground">{formData.month}</span></div>
                  <div className="flex justify-between"><span>Lịch học:</span> <span className="text-foreground">{formData.day} (20:00 - 21:30)</span></div>
                  <div className="h-px bg-white/10 my-4" />
                  <div className="flex justify-between text-2xl font-black text-primary"><span>Tổng cộng:</span> <span>{currentPrice}</span></div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black text-foreground">Thông tin thanh toán</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <p className="font-bold text-muted-foreground">Vui lòng chuyển khoản theo thông tin bên dưới:</p>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2 font-mono text-sm">
                      <p>Ngân hàng: <span className="text-primary font-bold">MB Bank</span></p>
                      <p>Số TK: <span className="text-primary font-bold">1234567890</span></p>
                      <p>Chủ TK: <span className="text-primary font-bold">NHIP TAM AN</span></p>
                      <p>Nội dung: <span className="text-primary font-bold">DK {formData.course.split(':')[0]}</span></p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-48 w-48 bg-white p-4 rounded-3xl shadow-2xl">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=STK_INFO" alt="QR Payment" className="w-full h-full" />
                    </div>
                    <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Quét mã để thanh toán nhanh</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="flex-1 py-5 border-2 border-primary/30 text-primary rounded-2xl font-black text-xl">Quay lại</button>
                <button onClick={() => {
                  alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.");
                  navigate('/');
                }} className="flex-1 py-5 bg-primary text-white rounded-2xl font-black text-xl shadow-xl">Xác nhận đã chuyển khoản</button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};
const TermsPage = () => (
  <PageWrapper>
    <section className="relative z-10 px-6 py-32 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-black text-foreground mb-12 tracking-tighter">Điều khoản <span className="text-primary">dịch vụ</span></h1>
      <div className="space-y-8 text-lg text-muted-foreground font-bold leading-relaxed">
        <p>Chào mừng bạn đến với Nhịp Tâm An. Khi sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản sau:</p>
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-foreground">1. Đăng ký khóa học</h3>
          <p>Học viên cần cung cấp thông tin chính xác khi đăng ký. Lịch học sau khi đã chọn cố định sẽ không được thay đổi trong suốt khóa học 5 tuần để đảm bảo tính kỷ luật và hiệu quả.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-foreground">2. Hoàn phí</h3>
          <p>Học phí sẽ không được hoàn lại sau khi khóa học đã bắt đầu. Trường hợp đặc biệt cần bảo lưu, vui lòng liên hệ hotline trước 48h.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-foreground">3. Quyền sở hữu trí tuệ</h3>
          <p>Toàn bộ nội dung bài giảng, tài liệu và phương pháp đào tạo thuộc bản quyền của Nhịp Tâm An. Nghiêm cấm sao chép hoặc chia sẻ dưới mọi hình thức.</p>
        </div>
      </div>
    </section>
  </PageWrapper>
);

const PrivacyPage = () => (
  <PageWrapper>
    <section className="relative z-10 px-6 py-32 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-black text-foreground mb-12 tracking-tighter">Chính sách <span className="text-primary">bảo mật</span></h1>
      <div className="space-y-8 text-lg text-muted-foreground font-bold leading-relaxed">
        <p>Tại Nhịp Tâm An, sự an toàn và riêng tư của bạn là ưu tiên hàng đầu của chúng tôi.</p>
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-foreground">1. Thu thập thông tin</h3>
          <p>Chúng tôi chỉ thu thập các thông tin cần thiết như họ tên, số điện thoại và email để phục vụ việc đăng ký và hỗ trợ học tập.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-foreground">2. Bảo mật cảm xúc</h3>
          <p>Mọi chia sẻ của học viên trong các buổi học hoặc tư vấn 1:1 đều được bảo mật tuyệt đối, không chia sẻ với bên thứ ba trừ khi có sự đồng ý của học viên hoặc yêu cầu pháp lý khẩn cấp.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-foreground">3. Sử dụng dữ liệu</h3>
          <p>Dữ liệu từ nhật ký cảm xúc số được sử dụng ẩn danh để AI cá nhân hóa lộ trình học tập cho riêng bạn.</p>
        </div>
      </div>
    </section>
  </PageWrapper>
);

const EmotionTestPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [scores, setScores] = React.useState({ basic: 0, advanced: 0 });
  const [showResult, setShowResult] = React.useState(false);

  const questions = [
    {
      q: "Bạn thường cảm thấy thế nào khi gặp áp lực lớn?",
      options: [
        { text: "Dễ mất bình tĩnh, hay cáu gắt hoặc muốn khóc ngay", score: { basic: 2, advanced: 1 } },
        { text: "Cố gắng kìm nén nhưng sau đó lại bùng nổ dữ dội", score: { basic: 1, advanced: 2 } },
        { text: "Cảm thấy trống rỗng, không biết phải làm gì", score: { basic: 2, advanced: 0 } },
        { text: "Có thể kiểm soát được nhưng vẫn thấy mệt mỏi", score: { basic: 0, advanced: 2 } }
      ]
    },
    {
      q: "Trong các mối quan hệ, bạn gặp khó khăn gì nhất?",
      options: [
        { text: "Không biết cách diễn đạt cảm xúc của mình cho người khác", score: { basic: 2, advanced: 0 } },
        { text: "Hay xảy ra mâu thuẫn vì không kiềm chế được lời nói", score: { basic: 1, advanced: 2 } },
        { text: "Cảm thấy khó kết nối sâu sắc với mọi người", score: { basic: 0, advanced: 2 } },
        { text: "Sợ bị từ chối nên thường chiều theo ý người khác", score: { basic: 2, advanced: 1 } }
      ]
    },
    {
      q: "Bạn mong muốn điều gì nhất lúc này?",
      options: [
        { text: "Tìm lại sự bình yên và thấu hiểu bản thân", score: { basic: 2, advanced: 0 } },
        { text: "Học cách làm chủ cảm xúc trong mọi tình huống", score: { basic: 1, advanced: 2 } },
        { text: "Cải thiện kỹ năng giao tiếp và kết nối", score: { basic: 0, advanced: 2 } },
        { text: "Vượt qua những tổn thương trong quá khứ", score: { basic: 1, advanced: 2 } }
      ]
    }
  ];

  const handleAnswer = (score: { basic: number, advanced: number }) => {
    setScores(prev => ({
      basic: prev.basic + score.basic,
      advanced: prev.advanced + score.advanced
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const recommendation = scores.advanced >= scores.basic 
    ? {
        title: "Khóa học Nâng cao: Làm chủ & Kết nối",
        desc: "Bạn đã có nền tảng nhận thức về cảm xúc nhưng cần những kỹ thuật chuyên sâu hơn để chuyển hóa và xây dựng các mối quan hệ bền vững.",
        link: "/khoahoc?course=advanced"
      }
    : {
        title: "Khóa học Nền tảng: Thấu hiểu & Cân bằng",
        desc: "Bạn đang ở giai đoạn bắt đầu hành trình khám phá bản thân. Khóa học này sẽ giúp bạn xây dựng nền móng vững chắc để thấu hiểu và yêu thương chính mình.",
        link: "/khoahoc?course=basic"
      };

  return (
    <PageWrapper>
      <section className="relative z-10 px-6 py-32 max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
        {!showResult ? (
          <motion.div 
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="liquid-glass p-10 md:p-16 rounded-[3rem] border-4 border-primary/20 shadow-2xl"
          >
            <div className="mb-8 flex justify-between items-center">
              <span className="text-primary font-black uppercase tracking-widest text-sm">Câu hỏi {currentQuestion + 1}/{questions.length}</span>
              <div className="h-2 w-32 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-10 tracking-tighter leading-tight">
              {questions[currentQuestion].q}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(opt.score)}
                  className="p-6 rounded-2xl border-2 border-white/10 bg-white/5 hover:border-primary/50 hover:bg-primary/5 text-left font-bold text-foreground transition-all flex items-center gap-4 group"
                >
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black group-hover:bg-primary group-hover:text-white transition-colors">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="liquid-glass p-10 md:p-16 rounded-[4rem] border-4 border-primary/20 text-center shadow-2xl"
          >
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Sparkles className="text-primary" size={48} />
            </div>
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Kết quả của bạn</h2>
            <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tighter leading-tight">
              {recommendation.title}
            </h3>
            <p className="text-xl text-muted-foreground font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
              {recommendation.desc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => navigate(recommendation.link)}
                className="bg-primary text-white px-10 py-5 rounded-full text-xl font-black shadow-2xl hover:shadow-primary/50 transition-all"
              >
                Tìm hiểu khóa học ngay
              </button>
              <button 
                onClick={() => {
                  setCurrentQuestion(0);
                  setScores({ basic: 0, advanced: 0 });
                  setShowResult(false);
                }}
                className="liquid-glass px-10 py-5 rounded-full text-xl font-black text-foreground border-2 border-primary/30"
              >
                Làm lại test
              </button>
            </div>
          </motion.div>
        )}
      </section>
    </PageWrapper>
  );
};

const FAQPage = () => {
  const faqs = [
    { q: "Khóa học kéo dài bao lâu?", a: "Tất cả các khóa học (Nền tảng và Nâng cao) đều kéo dài trong 5 tuần, mỗi tuần 1 buổi." },
    { q: "Thời gian học cụ thể như thế nào?", a: "Các buổi học diễn ra từ 20:00 đến 21:30 tối. Bạn được tự chọn 1 ngày trong tuần phù hợp với lịch cá nhân." },
    { q: "Tôi có thể đổi lịch học giữa chừng không?", a: "Để đảm bảo hiệu quả và tính cố định của nhóm học, lịch học đã chọn sẽ được giữ nguyên cho tới hết khóa học." },
    { q: "Khóa Nâng cao khác gì khóa Nền tảng?", a: "Khóa Nâng cao đi sâu vào các kỹ thuật chuyển hóa cảm xúc mạnh mẽ, giải quyết mâu thuẫn phức tạp và mang lại hiệu quả bền vững hơn so với các kỹ năng cơ bản ở khóa Nền tảng." },
    { q: "Tôi có được hỗ trợ sau khóa học không?", a: "Có, Nhịp Tâm An luôn có đội ngũ chuyên gia đồng hành và cộng đồng học viên để hỗ trợ bạn lâu dài." }
  ];

  return (
    <PageWrapper>
      <section className="relative z-10 px-6 py-32 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-foreground mb-12 tracking-tighter">Câu hỏi <span className="text-primary">thường gặp</span></h1>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass p-8 rounded-3xl border border-primary/10 shadow-lg"
            >
              <h3 className="text-xl font-black text-foreground mb-4 flex items-center gap-3">
                <span className="text-primary">Q:</span> {faq.q}
              </h3>
              <p className="text-muted-foreground font-bold leading-relaxed pl-8 border-l-2 border-primary/20">
                <span className="text-primary font-black mr-2">A:</span> {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="relative min-h-screen w-full bg-background overflow-x-hidden font-body selection:bg-primary selection:text-white">
        {/* Van Gogh Inspired Animated Background */}
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source 
              src="https://cdn.pixabay.com/video/2021/07/27/82927-581347061_large.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20 backdrop-blur-[2px]"></div>
        </div>

        <FloatingElements />
        
        <Navbar />
        <QuickAccess />

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/khoahoc" element={<CoursesPage />} />
              <Route path="/giangvien" element={<InstructorsPage />} />
              <Route path="/gioithieu" element={<AboutPage />} />
              <Route path="/hotline" element={<HotlinePage />} />
              <Route path="/test-cam-xuc" element={<EmotionTestPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostDetailPage />} />
              <Route path="/dangky" element={<RegistrationPage />} />
              <Route path="/dieukhoan" element={<TermsPage />} />
              <Route path="/baomat" element={<PrivacyPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
          </AnimatePresence>
        </div>

        <Footer />
      </main>
    </Router>
  );
}
