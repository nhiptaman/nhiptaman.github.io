/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
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
          {['Trang chủ', 'Khóa học', 'Giảng viên', 'Giới thiệu', 'Blog'].map((item, i) => (
            <Link 
              key={item}
              to={i === 0 ? "/" : i === 1 ? "/khoahoc" : i === 2 ? "/giangvien" : i === 3 ? "/gioithieu" : "/blog"} 
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
          Nhịp Tâm An là trung tâm quản lý cảm xúc dành riêng cho học sinh THCS, THPT và sinh viên. 
          Chúng tôi giúp người học nhận diện cảm xúc, giảm stress, cân bằng áp lực học tập và xây dựng những mối quan hệ tích cực.
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
          <img src="https://picsum.photos/seed/stress/800/1000" alt="Student stress" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
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
            Nhiều học sinh và sinh viên hiện nay đang phải đối mặt với:
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
          Khác với các trung tâm kỹ năng mềm thông thường, Nhịp Tâm An tập trung chuyên sâu vào giáo dục cảm xúc và sức khỏe tinh thần cho tuổi teen.
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
    { title: "Yêu chính mình", desc: "Xây dựng sự tự tin, yêu bản thân và bảo vệ giá trị cá nhân.", img: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=800&auto=format&fit=crop" },
    { title: "Tháo gỡ áp lực tuổi teen", desc: "Giảm stress học tập, thi cử và áp lực kỳ vọng gia đình.", img: "https://picsum.photos/seed/pressure/400/300" },
    { title: "Bạo lực học đường", desc: "Nhận diện tổn thương tâm lý và cách xử lý an toàn.", img: "https://picsum.photos/seed/safety/400/300" },
    { title: "Tình yêu – Bạn – Gia đình", desc: "Xây dựng mối quan hệ lành mạnh và giao tiếp thấu cảm.", img: "https://picsum.photos/seed/family/400/300" }
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
              { icon: "📍", title: "Địa chỉ", desc: "123 Đường Bình An, Quận Tâm Lý, TP. Hồ Chí Minh" },
              { icon: "📞", title: "Hotline", desc: "1900 xxxx (24/7)" },
              { icon: "✉️", title: "Email", desc: "lienhe@nhiptaman.vn" },
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
                    <motion.a whileHover={{ scale: 1.3, color: "#1877F2" }} href="#" className="text-primary transition-colors" title="Facebook"><Facebook size={28} /></motion.a>
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
            <li><a href="#" className="hover:text-primary transition-colors">Điều khoản dịch vụ</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Câu hỏi thường gặp</a></li>
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
            <img src="https://picsum.photos/seed/about/800/600" alt="About Nhịp Tâm An" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </motion.div>
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-10 md:p-12 rounded-[3rem] border-2 border-primary/10 shadow-2xl"
            >
              <p className="text-xl text-muted-foreground font-bold leading-relaxed">
                Nhịp Tâm An được xây dựng với sứ mệnh hướng đến một nền giáo dục hạnh phúc, nơi mỗi học sinh và sinh viên đều có cơ hội hiểu chính mình, làm chủ cảm xúc và phát triển toàn diện.
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
  const courses = [
    {
      title: "Tháo gỡ áp lực tuổi Teen",
      description: "Khóa học giúp học viên hiểu nguyên nhân gây stress, nhận diện cảm xúc tiêu cực và học cách giải tỏa áp lực từ học tập, thi cử, gia đình và các mối quan hệ.",
      results: ["Kiểm soát cảm xúc tốt hơn", "Giảm căng thẳng", "Tăng sự tự tin", "Biết cách chia sẻ và tìm hỗ trợ", "Cân bằng học tập và cuộc sống"],
      format: "Online / Offline / Hybrid",
      prices: { online: "300.000 VNĐ", offline: "400.000 VNĐ" },
      icon: "🌿"
    },
    {
      title: "Yêu chính mình & Tự tin",
      description: "Xây dựng nền tảng tâm lý vững chắc, giúp bạn hiểu rõ giá trị bản thân và không bị tác động bởi những tiêu chuẩn bên ngoài.",
      results: ["Thấu hiểu bản thân", "Yêu thương cơ thể", "Xây dựng ranh giới cá nhân", "Tự tin giao tiếp", "Tư duy tích cực"],
      format: "Online / Offline",
      prices: { online: "350.000 VNĐ", offline: "450.000 VNĐ" },
      icon: "❤️"
    },
    {
      title: "Kết nối & Thấu cảm",
      description: "Cải thiện mối quan hệ với cha mẹ và bạn bè thông qua kỹ năng lắng nghe và giao tiếp trắc ẩn.",
      results: ["Giao tiếp hiệu quả", "Hóa giải mâu thuẫn", "Lắng nghe thấu cảm", "Xây dựng niềm tin", "Kết nối sâu sắc"],
      format: "Hybrid",
      prices: { online: "400.000 VNĐ", offline: "500.000 VNĐ" },
      icon: "🤝"
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
              className="liquid-glass p-10 md:p-16 rounded-[4rem] border-2 border-primary/10 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start shadow-2xl"
            >
              <div className="lg:col-span-2">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-8xl mb-10 inline-block drop-shadow-2xl"
                >{c.icon}</motion.div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tight">{c.title}</h2>
                <p className="text-xl text-muted-foreground font-bold mb-12 leading-relaxed">{c.description}</p>
                
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
                    className="w-full py-5 rounded-2xl bg-primary text-white font-black text-lg shadow-xl transition-all cursor-pointer"
                  >
                    Đăng ký khóa học
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                    whileTap={{ scale: 0.95 }}
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

        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(var(--primary), 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="tel:1900xxxx" 
            className="bg-primary text-white px-16 py-6 rounded-full text-2xl font-black shadow-2xl transition-all flex items-center justify-center gap-5"
          >
            <span>📞</span> Gọi ngay chuyên gia
          </motion.a>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass px-16 py-6 rounded-full text-2xl font-black text-foreground border-2 border-primary/30 shadow-xl flex items-center justify-center gap-5 cursor-pointer"
          >
            <span>💬</span> Nhắn tin ẩn danh
          </motion.button>
        </div>
      </section>
    </PageWrapper>
  );
};

const BlogPage = () => {
  const posts = [
    { title: "5 cách kiểm soát cơn nóng giận tuổi teen", img: "https://picsum.photos/seed/anger/600/400", date: "01/04/2026" },
    { title: "Làm gì khi áp lực thi cử quá lớn?", img: "https://picsum.photos/seed/exam/600/400", date: "30/03/2026" },
    { title: "Cách nói chuyện với bố mẹ khi không được thấu hiểu", img: "https://picsum.photos/seed/parents/600/400", date: "28/03/2026" },
    { title: "Dấu hiệu stress học đường", img: "https://picsum.photos/seed/schoolstress/600/400", date: "25/03/2026" },
    { title: "Làm sao để yêu bản thân hơn mỗi ngày?", img: "https://picsum.photos/seed/love/600/400", date: "22/03/2026" }
  ];

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
          {posts.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="liquid-glass overflow-hidden rounded-[4rem] border-2 border-primary/10 hover:border-primary/40 transition-all group cursor-pointer shadow-2xl"
            >
              <div className="h-72 overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">{p.date}</div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-foreground leading-tight group-hover:text-primary transition-colors mb-8">{p.title}</h3>
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

const InstructorsPage = () => {
  const instructors = [
    {
      name: "Cô Vũ Thị Thắng",
      role: "Cố vấn học thuật & định hướng chương trình",
      desc: "Cô là người đồng hành trong quá trình xây dựng mô hình giáo dục cảm xúc của Nhịp Tâm An, hỗ trợ phát triển chương trình đào tạo phù hợp với học sinh THCS, THPT và sinh viên. Với kinh nghiệm trong môi trường giáo dục và sự thấu hiểu tâm lý lứa tuổi teen, cô giúp đội ngũ xây dựng các nội dung học tập vừa gần gũi vừa mang tính ứng dụng cao.",
      img: "https://picsum.photos/seed/teacher1/600/800",
      specialty: "Cố vấn chuyên môn"
    },
    {
      name: "Thầy Nguyễn Việt Thành",
      role: "Chuyên gia tâm lý học đường & cố vấn cảm xúc",
      desc: "Thầy là chuyên gia tâm lý học đường với nhiều kinh nghiệm làm việc cùng học sinh trong giai đoạn tuổi teen. Phong cách đồng hành của thầy tập trung vào sự lắng nghe, không phán xét và giúp học viên tự tìm ra hướng giải quyết phù hợp nhất.",
      tasks: [
        "Tư vấn quản lý cảm xúc",
        "Hỗ trợ xử lý áp lực học tập",
        "Bạo lực học đường",
        "Khó khăn trong mối quan hệ bạn bè và gia đình",
        "Định hướng phát triển EQ cho người học"
      ],
      img: "https://picsum.photos/seed/teacher2/600/800",
      specialty: "Chuyên gia tâm lý học đường"
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
                
                {ins.tasks && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-foreground uppercase tracking-[0.2em] opacity-60">Lĩnh vực phụ trách:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ins.tasks.map((task, idx) => (
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

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/khoahoc" element={<CoursesPage />} />
              <Route path="/giangvien" element={<InstructorsPage />} />
              <Route path="/gioithieu" element={<AboutPage />} />
              <Route path="/hotline" element={<HotlinePage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </AnimatePresence>
        </div>

        <Footer />
      </main>
    </Router>
  );
}
