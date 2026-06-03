import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
      
      {/* Queued Deliverables */}
      <div className='rounded-xl p-6 bg-slate-900/45 border border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 shadow-lg relative group overflow-hidden'>
        <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-indigo-500/10 transition-all duration-300"></div>
        <h2 className='text-3xl font-black text-indigo-400 tracking-tight'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xs font-bold mt-1 text-slate-400 uppercase tracking-widest'>Queued</h3>
        <p className='text-[10px] text-slate-500 mt-0.5'>Pending initial review</p>
      </div>

      {/* In-Progress Syncs */}
      <div className='rounded-xl p-6 bg-slate-900/45 border border-slate-800/80 hover:border-amber-500/30 transition-all duration-300 shadow-lg relative group overflow-hidden'>
        <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-amber-500/10 transition-all duration-300"></div>
        <h2 className='text-3xl font-black text-amber-400 tracking-tight'>{data.taskCounts.active}</h2>
        <h3 className='text-xs font-bold mt-1 text-slate-400 uppercase tracking-widest'>In Flight</h3>
        <p className='text-[10px] text-slate-500 mt-0.5'>Active development sync</p>
      </div>

      {/* Resolved Objectives */}
      <div className='rounded-xl p-6 bg-slate-900/45 border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 shadow-lg relative group overflow-hidden'>
        <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-300"></div>
        <h2 className='text-3xl font-black text-emerald-400 tracking-tight'>{data.taskCounts.completed}</h2>
        <h3 className='text-xs font-bold mt-1 text-slate-400 uppercase tracking-widest'>Resolved</h3>
        <p className='text-[10px] text-slate-500 mt-0.5'>Successfully archived</p>
      </div>

      {/* Blocked Deliverables */}
      <div className='rounded-xl p-6 bg-slate-900/45 border border-slate-800/80 hover:border-rose-500/30 transition-all duration-300 shadow-lg relative group overflow-hidden'>
        <div className="absolute top-0 right-0 w-16 h-16 bg-rose-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-rose-500/10 transition-all duration-300"></div>
        <h2 className='text-3xl font-black text-rose-400 tracking-tight'>{data.taskCounts.failed}</h2>
        <h3 className='text-xs font-bold mt-1 text-slate-400 uppercase tracking-widest'>Blocked</h3>
        <p className='text-[10px] text-slate-500 mt-0.5'>Needs support/review</p>
      </div>

    </div>
  )
}

export default TaskListNumbers