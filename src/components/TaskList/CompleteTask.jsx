import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 w-[310px] p-6 bg-slate-900/60 backdrop-blur-md border border-emerald-500/25 rounded-2xl flex flex-col justify-between shadow-xl relative overflow-hidden group'>
      <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-300"></div>
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg'>
            {data.category}
          </span>
          <span className='text-xs font-semibold text-slate-500'>{data.taskDate}</span>
        </div>
        <h2 className='mt-4 text-lg font-bold text-slate-200 leading-snug'>{data.taskTitle}</h2>
        <p className='text-xs text-slate-400 mt-2 leading-relaxed max-h-[90px] overflow-y-auto pr-1'>
          {data.taskDescription}
        </p>
      </div>
      <div className='mt-6 pt-4 border-t border-slate-800/60'>
        <button className='w-full bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 rounded-xl py-2.5 text-[10px] font-bold uppercase tracking-wider cursor-default select-none outline-none'>
          Resolved
        </button>
      </div>
    </div>
  )
}

export default CompleteTask