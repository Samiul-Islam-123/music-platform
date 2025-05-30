import React from 'react'

function Sidebar({click}) {
  return (
    <div className={`  flex justify-center h-[93vh] border-r pt-36 ${click? 'w-0' : 'w-[15rem]'}`}>
        <div className=' flex items-center flex-col w-full h-auto '>
            {["Home","Library","Profile"].map((opt)=>(
                <div className='w-[95%] h-[7vh] hover:bg-[#ffffff56] rounded-md m-2 flex items-center justify-center'>
                    <h1 className=' text-xl'>{opt}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar