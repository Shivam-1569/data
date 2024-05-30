import React, { useEffect, useState } from 'react'

import { Link, NavLink } from 'react-router-dom';
function Github() {

    const tab = 'p-3'


    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/hiteshchoudhary')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])

   

  return (
    <>
        <div className='flex items-center justify-center w-full h-7/8 min-h-96'>
            <div className=' bg-gray-300 mt-14 mb-14 w-2/4 min-h-80 h-fit border shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg'>
                <h1 className='text-center m-4 font-sans text-4xl font-bold mt-10'>Profile</h1>
                <h2 className='text-center m-3 text-2xl font-mono'>{data.name}</h2>
                <img src={data.avatar_url} alt="img" className='w-28 rounded-full m-auto' />
                <table className='m-auto font-mono mt-10 mb-8 p-12 '>
                    <tr>
                        <td className={tab}>User Id:</td>
                        <td className={tab}>{data.login}</td>
                    </tr>
                    <tr>
                        <td className={tab}>GitHub Profile:</td>
                        <td className={tab}><Link to={data.html_url}> Link </Link></td>
                    </tr>
                    <tr>
                        <td className={tab}>Followers:</td>
                        <td className={tab}>{data.followers}</td>
                    </tr>
                </table>
            
                
            </div>
        </div>
    </>
  )
}

export default Github

