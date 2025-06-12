import React from 'react'

function Container({children}: React.PropsWithChildren){
    return (
    <>
        <div className='flex-col justify-center-safe p-1 bg-blue-400 rounded-lg px-5 py-3'>
            {children}
        </div>
    </>
    )
}

export default Container