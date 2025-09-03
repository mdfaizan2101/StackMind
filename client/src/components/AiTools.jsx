import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {

  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-6 sm:px-20 xl:px-32 my-24">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-slate-800 text-3xl sm:text-4xl font-bold tracking-tight">
          ⚡ Powerful AI Tools
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Unlock creativity and efficiency with cutting-edge AI technology — 
          write smarter, design faster, and optimize better.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            className="group p-8 max-w-xs w-full rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div
              className="w-14 h-14 flex items-center justify-center rounded-xl shadow-sm group-hover:scale-105 transition-transform"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            >
              <tool.Icon className="w-7 h-7 text-white" />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-lg font-semibold text-slate-700 group-hover:text-[color:var(--color-primary)] transition-colors">
              {tool.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>

      {/* Prompt if not logged in */}
      {!user && (
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm sm:text-base">
            Sign in to start using AI tools and unlock full features.
          </p>
        </div>
      )}
    </div>
  )
}

export default AiTools;