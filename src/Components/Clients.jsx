

// import siteData from "../Constants/siteData";
// import { useState } from "react";

// const Clients = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   const clients = siteData.clients.slice(0, 3);

//   return (
//     <section className="relative py-24 bg-gray-50 overflow-hidden">
//       {/* Background Grid */}
//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(var(--color-primary) 1px, transparent 1px),
//             linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
//           `,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Floating particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 rounded-full bg-[var(--color-primary)] animate-float"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: Math.random() * 0.4 + 0.2,
//               animationDuration: `${4 + Math.random() * 6}s`,
//               animationDelay: `${Math.random() * 3}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Title */}
//       <div className="text-center mb-12 relative z-10">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
//           Worked With
//         </h2>
//       </div>

//       {/* ----- MOBILE CAROUSEL ----- */}
//       <div className="md:hidden overflow-x-auto flex gap-6 px-6 pb-4 snap-x snap-mandatory no-scrollbar relative z-10">
//         {clients.map((client) => (
//           <div key={client.id} className="snap-center flex-shrink-0 w-64">
//             <div
//               className="
//                 relative flex items-center justify-center
//                 rounded-3xl backdrop-blur-xl
//                 bg-white/20 border border-white/40 shadow-lg
//                 p-10 transition-all duration-500
//               "
//               style={{ minHeight: "220px" }}
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="max-w-[80%] max-h-24 opacity-90 transition-all duration-500"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ----- DESKTOP LAYOUT ----- */}
//       <div className="hidden md:flex justify-center gap-12 md:gap-20 relative z-10">
//         {clients.map((client, index) => {
//           const isHovered = hoveredId === client.id;

//           return (
//             <div
//               key={client.id}
//               className="group relative flex-shrink-0 animate-fade-in-up"
//               onMouseEnter={() => setHoveredId(client.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               style={{
//                 animationDelay: `${index * 0.12}s`,
//                 width: "260px",
//               }}
//             >
//               <div
//                 className={`
//                   relative flex items-center justify-center
//                   rounded-3xl backdrop-blur-xl bg-white/20
//                   border border-white/40 shadow-lg
//                   p-10 transition-all duration-500
//                   ${
//                     isHovered ? "scale-110 shadow-2xl bg-white/30" : "scale-100"
//                   }
//                 `}
//                 style={{ minHeight: "230px" }}
//               >
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className={`
//                     max-w-[80%] max-h-24 transition-all duration-500
//                     ${isHovered ? "scale-110 opacity-100" : "opacity-80"}
//                   `}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Accent line */}
//       <div className="mt-16 flex justify-center relative z-10">
//         <div className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />
//       </div>
//     </section>
//   );
// };

// export default Clients;




import siteData from "../Constants/siteData";
import { useState } from "react";

const Clients = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const clients = siteData.clients.slice(0, 3);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "var(--clients-bg, #f9fafb)",
      }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--clients-grid, var(--color-primary)) 1px, transparent 1px),
            linear-gradient(90deg, var(--clients-grid, var(--color-primary)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              background: "var(--color-primary)",
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
      <div className="text-center mb-12 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight"
          style={{ color: "var(--clients-title, #111827)" }}
        >
          Worked With
        </h2>
      </div>

      {/* ----- MOBILE CAROUSEL ----- */}
      <div className="md:hidden overflow-x-auto flex gap-6 px-6 pb-4 snap-x snap-mandatory no-scrollbar relative z-10">
        {clients.map((client) => (
          <div key={client.id} className="snap-center flex-shrink-0 w-64">
            <div
              className="relative flex items-center justify-center rounded-3xl backdrop-blur-xl shadow-lg p-10 transition-all duration-500"
              style={{
                minHeight: "220px",
                background: "var(--clients-card-bg, rgba(255,255,255,0.2))",
                border:
                  "1px solid var(--clients-card-border, rgba(255,255,255,0.4))",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-[80%] max-h-24 opacity-90 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ----- DESKTOP LAYOUT ----- */}
      <div className="hidden md:flex justify-center gap-12 md:gap-20 relative z-10">
        {clients.map((client, index) => {
          const isHovered = hoveredId === client.id;

          return (
            <div
              key={client.id}
              className="group relative flex-shrink-0 animate-fade-in-up"
              onMouseEnter={() => setHoveredId(client.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${index * 0.12}s`,
                width: "260px",
              }}
            >
              <div
                className={`relative flex items-center justify-center rounded-3xl backdrop-blur-xl shadow-lg p-10 transition-all duration-500 ${
                  isHovered ? "scale-110 shadow-2xl" : "scale-100"
                }`}
                style={{
                  minHeight: "230px",
                  background: "var(--clients-card-bg, rgba(255,255,255,0.2))",
                  border:
                    "1px solid var(--clients-card-border, rgba(255,255,255,0.4))",
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`max-w-[80%] max-h-24 transition-all duration-500 ${
                    isHovered ? "scale-110 opacity-100" : "opacity-80"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Accent line */}
      <div className="mt-16 flex justify-center relative z-10">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />
      </div>
    </section>
  );
};

export default Clients;




