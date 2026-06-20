import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext)

    const acceptHandler = () => {
        if (!userData) return
        
        const updatedData = userData.map(emp => {
            const taskIndex = emp.tasks.findIndex(t => t.taskTitle === data.taskTitle && t.taskDate === data.taskDate)
            if (taskIndex !== -1) {
                emp.tasks[taskIndex].newTask = false
                emp.tasks[taskIndex].active = true
                emp.taskCounts.active = (emp.taskCounts.active || 0) + 1
                emp.taskCounts.newTask = Math.max(0, (emp.taskCounts.newTask || 0) - 1)
            }
            return emp
        })

        setUserData(updatedData)
        localStorage.setItem('employees', JSON.stringify(updatedData))

        const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
        if (loggedIn && loggedIn.role === 'employee') {
            const currentEmp = updatedData.find(e => e.email === loggedIn.data.email)
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: currentEmp }))
        }
        window.location.reload()
    }

    return (
        <div className='flex-shrink-0 w-[310px] p-6 bg-slate-900/60 backdrop-blur-md border border-indigo-500/25 rounded-2xl flex flex-col justify-between shadow-xl relative overflow-hidden group'>
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-indigo-500/10 transition-all duration-300"></div>
            <div>
                <div className='flex justify-between items-center'>
                    <span className='bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg'>
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
                <button 
                    onClick={acceptHandler} 
                    className='w-full bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-300 border border-indigo-500/20 rounded-xl py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 outline-none'
                >
                    Claim Sync
                </button>
            </div>
        </div>
    )
}

export default NewTask