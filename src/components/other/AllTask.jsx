import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData] = useContext(AuthContext)

    return (
        <div className='bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-6 rounded-2xl mt-6 shadow-xl'>
            <h2 className="text-xl font-bold text-slate-100 mb-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500"></span>
                Team Synergy Ledger
            </h2>
            
            {/* Table Header Row */}
            <div className='bg-slate-950/60 border border-slate-800/50 mb-3 py-3 px-4 flex justify-between rounded-xl text-xs font-bold uppercase tracking-wider text-slate-400'>
                <h2 className='w-1/5'>Teammate</h2>
                <h3 className='w-1/5 text-left md:text-center text-indigo-400'>Queued</h3>
                <h5 className='w-1/5 text-left md:text-center text-amber-400'>In Flight</h5>
                <h5 className='w-1/5 text-left md:text-center text-emerald-400'>Resolved</h5>
                <h5 className='w-1/5 text-left md:text-center text-rose-400'>Blocked</h5>
            </div>
            
            {/* Table Body */}
            <div className='space-y-2 max-h-[300px] overflow-y-auto pr-1'>
                {userData.map(function(elem, idx) {
                    return (
                        <div 
                            key={idx} 
                            className='bg-slate-950/20 border border-slate-800/40 hover:bg-slate-900/40 hover:border-slate-700/60 transition-all duration-200 py-3.5 px-4 flex justify-between rounded-xl items-center shadow-sm'
                        >
                            <h2 className='text-sm font-bold text-slate-200 w-1/5'>{elem.firstName}</h2>
                            <h3 className='text-sm font-black w-1/5 text-left md:text-center text-indigo-300'>{elem.taskCounts.newTask}</h3>
                            <h5 className='text-sm font-black w-1/5 text-left md:text-center text-amber-300'>{elem.taskCounts.active}</h5>
                            <h5 className='text-sm font-black w-1/5 text-left md:text-center text-emerald-300'>{elem.taskCounts.completed}</h5>
                            <h5 className='text-sm font-black w-1/5 text-left md:text-center text-rose-400'>{elem.taskCounts.failed}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllTask