import React from "react";

function Count() {
  return (
    <main
  className="relative py-10 px-6 md:px-16 min-h-[25vh] flex items-center overflow-hidden"
  style={{
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    backgroundColor: "#0f172a", // dark base
    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
    animation: "moveGrid 30s linear infinite",
  }}
>
  <style>{`
    @keyframes moveGrid {
      0% {
        background-position: 0 0, 0 0;
      }
      100% {
        background-position: 40px 40px, 40px 40px;
      }
    }
  `}</style>
  {/* Your content here */}

      {/* Outer full-width dark background container */}
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(135deg, #0a0f1c 0%, #111827 100%)",
          padding: "40px 0",
        }}
      >
        {/* Inner container with max width and centered content */}
        <div
          className="max-w-6xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center"
        >
          <Stat number={10} label="HOFs" delay={100} />
          <Stat number={94} label="eJPT Score" delay={300} />
          <Stat number={5} label="Top % THM" delay={500} />
          <Stat number={50} label="Writeups" delay={700} />
        </div>
      </div>
    </main>
  );
}

function Stat({ number, label, delay }) {
  return (
    <div
      className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-700 to-indigo-900 shadow-lg cursor-default transition-all duration-300 ease-in-out hover:scale-105"
      style={{
        animation: `fadeInScale 600ms ease forwards`,
        animationDelay: `${delay}ms`,
        opacity: 0,
        boxShadow:
          "0 0 12px rgba(99, 102, 241, 0.6), 0 0 20px rgba(99, 102, 241, 0.3)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 25px rgba(147, 197, 253, 0.8), 0 0 35px rgba(147, 197, 253, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 12px rgba(99, 102, 241, 0.6), 0 0 20px rgba(99, 102, 241, 0.3)";
      }}
    >
      <div className="flex items-baseline space-x-1">
        <CountUp
          from={0}
          to={number}
          duration={2}
          className="text-6xl font-extrabold text-white drop-shadow-md"
        />
        <span className="text-6xl font-extrabold text-white drop-shadow-md">+</span>
      </div>
      <p className="mt-3 text-xl font-semibold text-indigo-200">{label}</p>

      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

function CountUp({ from = 0, to, duration = 2, className = "" }) {
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / (duration * 1000), 1);
      const currentCount = Math.floor(from + (to - from) * progressRatio);
      setCount(currentCount);
      if (progressRatio < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span className={className}>{count}</span>;
}

export default Count;
