import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState()
    // useEffect(() => {

    //     async function getData() {
    //         try {
    //             const res = await fetch("https://api.github.com/users/shubhamyadav166")

    //             const result = await res.json()
    //             // console.log(result);
    //             setData(result)


    //         } catch (error) {
    //             console.log("Data not fetched", error);

    //         }
    //     }
    //     getData()

    // }, [])




    return (
        <div className='bg-gray-500'>
            <h1>git Following :{data?.following}</h1>
            <div className='p-5'>
                <img src={data?.avatar_url} alt="" className='h-100 w-100' />
            </div>
        </div>
    )
}

export { Github }

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/shubhamyadav166")

    return await res.json()
}