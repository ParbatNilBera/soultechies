import siteData from "../Constants/siteData";
import { useState, useEffect, useRef } from "react";

// // Clients Section - Tailwind v4.1 Ready

// // const Clients = () => {
// //   return (
// //     <section className="py-20 md:py-28 bg-olive-50">
// //       <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
// //         {/* Title */}
// //         <h2 className="text-center text-3xl md:text-4xl font-bold text-olive-800 mb-12 md:mb-20">
// //           Worked With
// //         </h2>

// //         {/* Logo Grid */}
// //         <div
// //           className="
// //           grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
// //           gap-6 md:gap-10 items-center
// //         "
// //         >
// //           {siteData.clients.map((client) => (
// //             <div
// //               key={client.id}
// //               className="
// //                 flex items-center justify-center
// //                 rounded-xl bg-white p-6 shadow-md
// //                 transition-all duration-300
// //                 hover:shadow-xl hover:scale-105
// //               "
// //             >
// //               <img
// //                 src={client.logo}
// //                 alt={client.name}
// //                 className="
// //                   max-w-full h-auto opacity-70 
// //                   transition-opacity duration-300 
// //                   hover:opacity-100
// //                 "
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
// // export default Clients;

const Clients = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const clients = siteData.clients.slice(0, 3); // Only 3 cards

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[var(--color-primary)] rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.2,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Worked With
        </h2>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-12 md:gap-20 relative z-10">
        {clients.map((client, index) => {
          const isHovered = hoveredId === client.id;

          return (
            <div
              key={client.id}
              className="group relative flex-shrink-0"
              onMouseEnter={() => setHoveredId(client.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fadeInUp 0.7s ease-out ${index * 0.12}s both`,
                width: "260px",
              }}
            >
              {/* Glassmorphism Card */}
              <div
                className={`
                  relative flex items-center justify-center
                  rounded-3xl backdrop-blur-xl
                  bg-white/20 border border-white/40 shadow-lg
                  p-10 transition-all duration-500
                  ${
                    isHovered ? "scale-110 shadow-2xl bg-white/30" : "scale-100"
                  }
                `}
                style={{
                  minHeight: "230px",
                }}
              >
                {/* Logo */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`
                    max-w-[80%] max-h-24 transition-all duration-500
                    ${isHovered ? "scale-110 opacity-100" : "opacity-80"}
                  `}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Accent line */}
      <div className="mt-16 flex justify-center relative z-10">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent rounded-full"></div>
      </div>

      <style>{`
        :root {
          --color-primary: #7c3bed;
          --color-primary-text: #ffffff;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
    </section>
  );
};






export default Clients;








