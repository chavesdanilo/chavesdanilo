import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Instagram, Mail, Phone } from "lucide-react";
import { useRef } from "react";

// --- Constants & Data ---

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  align: "left" | "right";
  youtubeId?: string;
}

const PROJECTS: Project[] = [
  {
    id: "26-collective",
    title: "26 Collective",
    subtitle: "Arte, atitude, movimento.",
    description: "Direção e produção independente de videoclipes de artistas nacionais e internacionais.",
    image: "/COLLECTIVE26.png",
    align: "left",
  },
  {
    id: "mystic-album",
    title: "Mystic Álbum",
    subtitle: "Thiago Barromeo & Soom T",
    description: "Documentação da produção do álbum de Thiago Barromeo (nomeado ao Grammy Latino 2019), com participação da lenda do Reggae internacional, Soom T.",
    image: "/MYSTICALBUM.png",
    align: "right",
  },
  {
    id: "j-coppa",
    title: "J Coppa - No Love",
    subtitle: "Videoclipe Independente",
    description: "Fotografia e produção independente do videoclipe do aclamado artista de Hip-Hop Jamaicano durante sua passagem pelo Brasil.",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop", // Subway/Night vibe
    youtubeId: "DdKAeju9Q0U",
    align: "left",
  },
  {
    id: "sj-thirteen-doc",
    title: "Conexão Hermética",
    subtitle: "Documentário - SJ Thirteen",
    description: "Roteiro, produção e edição do documentário sobre a produção do álbum do artista de Trap, com lançamento para o segundo semestre de 2026.",
    image: "/CONEXAOHERMETICA.png",
    align: "right",
  },
  {
    id: "sj-thirteen-clip",
    title: "Notas de Cem",
    subtitle: "Videoclipe - SJ Thirteen",
    description: "Produção independente do videoclipe considerado por muitos o ponto de partida para a revolução do cenário de Trap nacional.",
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1974&auto=format&fit=crop", // Money/Trap vibe
    youtubeId: "SVLiYK8PXEo",
    align: "left",
  },
];

// --- Components ---

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference md:px-12"
    >
      <div className="flex items-center">
        <img 
          src="/logodanilo.png" 
          alt="Danilo Chaves Logo" 
          className="h-8 w-auto object-contain brightness-0 invert"
        />
      </div>
      <div className="hidden space-x-8 text-sm font-medium tracking-widest uppercase md:flex">
        <a href="#about" className="hover:opacity-70 transition-opacity">Sobre</a>
        <a href="#work" className="hover:opacity-70 transition-opacity">Trabalhos</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity">Contato</a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0 bg-[#050505]"
      >
        {/* Film Grain Noise */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-screen z-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Animated Cinematic Lights */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-neutral-600/20 rounded-full blur-[120px] z-10"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-neutral-500/10 rounded-full blur-[120px] z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center">
        <motion.div
          variants={STAGGER}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.img
            variants={FADE_UP}
            src="/logodanilo.png"
            alt="Danilo Chaves Logo"
            className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px] h-auto object-contain brightness-0 invert"
          />
          
          <motion.div variants={FADE_UP} className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-neutral-400">
            <span>Direção</span>
            <span className="hidden md:inline">•</span>
            <span>Produção</span>
            <span className="hidden md:inline">•</span>
            <span>Edição</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 text-xs tracking-widest uppercase"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Aos 26 anos, sou diretor, roteirista e filmmaker.
          </h2>
          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light">
            <p>
              Atualmente, dirijo o <strong className="text-white font-medium">26 Collective</strong>. Dirigi e produzi, de forma independente, videoclipes de artistas nacionais e internacionais.
            </p>
            <p>
              Iniciei no audiovisual como fotógrafo em 2016, e acabei adentrando para o mercado da tecnologia em 2019. Foi quando em 2023, meu coração voltou a bater mais forte para fazer o que amo, só que dessa vez em formato de vídeo.
            </p>
            <p>
              Desde então sou aluno da <strong className="text-white font-medium">RECLEARNING</strong> e aluno vitalício na <strong className="text-white font-medium">SAND</strong>, duas das maiores e mais renomadas escolas do audiovisual; onde pude aprender e entender que entregar um excelente vídeo vai além do melhor equipamento; é história, técnica, processo e inteligência.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-neutral-900 rounded-2xl overflow-hidden">
            <img
              src="/DANILOPROFILE.png"
              alt="Danilo Chaves"
              className="object-cover w-full h-full opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={FADE_UP}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
    >
      <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl bg-neutral-900 aspect-video relative">
        {project.youtubeId ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full scale-[1.15] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=${project.youtubeId}`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
          />
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
      </div>
      
      <div className="w-full lg:w-2/5 space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase">
            {project.subtitle}
          </p>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight">
            {project.title}
          </h3>
        </div>
        <p className="text-neutral-400 text-lg font-light leading-relaxed">
          {project.description}
        </p>
        <div className="pt-4">
          <a 
            href={project.youtubeId ? `https://www.youtube.com/watch?v=${project.youtubeId}` : "#"} 
            target={project.youtubeId ? "_blank" : "_self"}
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-neutral-400 transition-colors group/btn"
          >
            Ver Projeto
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto space-y-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
        >
          <h2 className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-4">
            Portfólio
          </h2>
          <p className="text-4xl md:text-6xl font-light tracking-tight max-w-3xl">
            Projetos selecionados de direção, produção e edição.
          </p>
        </motion.div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto text-left space-y-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="text-4xl md:text-7xl font-medium tracking-tight"
        >
          Por que eu?
        </motion.h2>
        
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="text-xl md:text-3xl font-light leading-relaxed text-neutral-300"
        >
          Atuando no ramo da tecnologia, tive a oportunidade de atuar em grandes empresas multinacionais, como o Banco Mizuho do Brasil e T-systems. Onde, se tratando da cultura japonesa e alemã, respectivamente, pude desenvolver meu profissionalismo e visão de negócio.
        </motion.p>
        
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="text-xl md:text-3xl font-light leading-relaxed text-white"
        >
          Contando comigo em seu time, terá à disposição um profissional com tato artístico e ampla visão de negócio.
        </motion.p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight">
            Vamos criar<br />algo juntos.
          </h2>
          <p className="text-neutral-400 text-lg font-light max-w-md">
            Disponível para projetos de direção, produção e edição. Entre em contato para discutirmos sua próxima ideia.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="flex flex-col justify-end space-y-8 md:items-end"
        >
          <div className="space-y-4">
            <a href="mailto:danilochavesn@gmail.com" className="flex items-center gap-4 text-xl md:text-2xl font-light hover:text-neutral-400 transition-colors group">
              <Mail className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
              danilochavesn@gmail.com
            </a>
            <a href="tel:+5511990164016" className="flex items-center gap-4 text-xl md:text-2xl font-light hover:text-neutral-400 transition-colors group">
              <Phone className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
              (11) 99016-4016
            </a>
          </div>

          <div className="flex gap-8 pt-8">
            <a href="https://instagram.com/dvnillo" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-neutral-400 transition-colors">
              <Instagram className="w-4 h-4" />
              @DVNILLO
            </a>
            <a href="https://instagram.com/dci3r" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-neutral-400 transition-colors">
              <Instagram className="w-4 h-4" />
              @DCI3R
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest text-neutral-600 uppercase">
        <p>© {new Date().getFullYear()} Danilo Chaves.</p>
        <p>Direção, Produção e Edição.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <WhyMe />
      <Footer />
    </div>
  );
}
