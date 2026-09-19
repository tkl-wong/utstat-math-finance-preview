"use client";

import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { MotionArticle, MotionDiv } from './motions';

const researchAreas = [
  {
    id: "01",
    title: "Stochastic Control",
    subtitle: "Optimization under uncertainty",
    description: "Advanced mathematical frameworks for decision-making in volatile financial environments, combining control theory with stochastic calculus.",
    keywords: ["Portfolio Optimization", "Dynamic Programming", "Risk Management"],
    color: "#F8FAFB"
  },
  {
    id: "02",
    title: "Mean-Field Games",
    subtitle: "Large population behavior",
    description: "Strategic analysis of market participants' collective behavior using advanced game theory and differential equations.",
    keywords: ["Nash Equilibria", "Population Dynamics", "Market Impact"],
    color: "#F8FAFB"
  },
  {
    id: "03",
    title: "Market Microstructure",
    subtitle: "Trading mechanism design",
    description: "Quantitative analysis of market mechanisms, order flow dynamics, and price formation processes.",
    keywords: ["Price Formation", "Order Flow", "Market Making"],
    color: "#F8FAFB"
  },
  {
    id: "04",
    title: "Optimal Transport",
    subtitle: "Resource allocation",
    description: "Mathematical optimization techniques for efficient resource distribution in financial markets.",
    keywords: ["Asset Allocation", "Risk Transfer", "Market Efficiency"],
    color: "#F8FAFB"
  }
];

const ResearchSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  return (
    <section id="research-areas" className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 10}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6 max-w-2xl">
            Research Areas
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Exploring the intersection of mathematics and finance through innovative research
            and advanced computational methods.
          </p>
        </MotionDiv>

        <div className="grid gap-px">
          {researchAreas.map((area, index) => (
            <MotionArticle
              key={area.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.32, 0.72, 0, 1]
              }}
              className={`
                group transition-all duration-300 ease-out cursor-pointer
                ${activeIndex === index ? 'p-12' : 'p-8 hover:p-12'}
              `}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="max-w-4xl">
                <div className="flex items-center gap-8 mb-6">
                  <h3 className="text-xl text-brand tracking-tight">
                    {area.title}
                  </h3>
                  <ChevronRightIcon
                        className={`
                          w-5 h-5 text-gray-400 transition-all duration-300
                          group-hover:text-gray-900
                          ${activeIndex === index ? 'rotate-90' : ''}
                        `}
                      />
                </div>

                <div className={`
                  grid transition-all duration-300 ease-out
                  ${activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                `}>
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-6">
                      <p className="text-gray-600 leading-relaxed">
                        {area.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {area.keywords.map((keyword, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 text-sm text-gray-600 bg-gray-50 rounded-full"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
