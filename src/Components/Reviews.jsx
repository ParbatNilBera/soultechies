import React from "react";
import siteData from "../Constants/siteData";
import Star from "./Common/Star";
import { useState, useEffect } from "react";

// // Reviews Section - Tailwind v4.1 Ready

// const Reviews = () => {
//   return (
//     <section className="py-20 md:py-28 bg-white">
//       <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-14 md:mb-20">
//           <h2 className="text-3xl md:text-5xl font-bold text-olive-800 mb-4">
//             Client Reviews
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600">
//             What our clients say about us
//           </p>
//         </div>

//         {/* Reviews Grid */}
//         <div className="grid gap-8 md:grid-cols-3">
//           {siteData.reviews.map((review) => (
//             <div
//               key={review.id}
//               className="
//                 rounded-2xl border border-olive-100
//                 bg-gradient-to-br from-olive-50 to-white
//                 p-8 shadow-lg transition-all duration-300
//                 hover:shadow-2xl hover:-translate-y-2
//               "
//             >
//               {/* User + Company */}
//               <div className="flex items-center mb-6">
//                 <img
//                   src={review.logo}
//                   alt={review.company}
//                   className="h-12 w-12 rounded-full mr-4"
//                 />
//                 <div>
//                   <h4 className="font-bold text-olive-800">{review.name}</h4>
//                   <p className="text-sm text-gray-600">{review.company}</p>
//                 </div>
//               </div>

//               {/* Rating */}
//               <div className="flex mb-4">
//                 {[...Array(review.rating)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={18}
//                     className="text-yellow-500 fill-yellow-500"
//                   />
//                 ))}
//               </div>

//               {/* Review Text */}
//               <p className="text-gray-700 leading-relaxed italic">
//                 "{review.text}"
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Reviews;


const Reviews = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const displayedReviews = siteData.reviews.slice(0, 3);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-purple-50/40 overflow-hidden" id="reviews">
      {/* Decorative Floating Elements */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-0 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-300"></div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-olive-800 tracking-tight">
            Client Reviews
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-3">
            What our clients say about us
          </p>
          <div className="mt-4 h-1 w-24 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </div>

        {/* First 3 Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {displayedReviews.map((review, index) => (
            <div
              key={review.id}
              onMouseEnter={() => setHoveredCard(`grid-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative"
              style={{
                zIndex: hoveredCard === `grid-${index}` ? 50 : 1,
              }}
            >
              <div
                className={`
                  group rounded-3xl border border-purple-200/50
                  bg-gradient-to-br from-white via-white to-purple-50/30 backdrop-blur-xl
                  p-10 md:p-12 shadow-2xl transition-all duration-700 ease-out
                  hover:border-[var(--color-primary)]
                  hover:shadow-[0_20px_60px_rgba(124,59,237,0.4)]
                  relative overflow-hidden
                  ${hoveredCard === `grid-${index}` ? "scale-110" : ""}
                `}
                style={{
                  transform:
                    hoveredCard === `grid-${index}`
                      ? "translateY(-30px) translateX(0) scale(1.1)"
                      : "translateY(0) translateX(0) scale(1)",
                  transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-primary)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-transparent transition-all duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex mb-6 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-md"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 relative">
                    <span className="text-[var(--color-primary)] text-5xl font-serif absolute -left-3 -top-4 opacity-30">
                      "
                    </span>
                    <span className="italic">{review.text}</span>
                    <span className="text-[var(--color-primary)] text-5xl font-serif absolute -right-2 -bottom-6 opacity-30">
                      "
                    </span>
                  </p>

                  {/* Avatar & Name */}
                  <div className="flex items-center pt-6 border-t border-purple-200/50">
                    <img
                      src={review.logo}
                      alt={review.company}
                      className="h-16 w-16 rounded-full mr-4 ring-4 ring-[var(--color-primary)]/20 shadow-lg group-hover:ring-[var(--color-primary)]/40 transition-all"
                    />
                    <div>
                      <h4 className="font-bold text-olive-800 text-xl mb-1">
                        {review.name}
                      </h4>
                      <p className="text-base text-gray-600">
                        {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default Reviews;
