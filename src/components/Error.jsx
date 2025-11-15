import { IoIosFootball } from "react-icons/io";
import { useRouteError } from "react-router-dom"

function Error() {
    const err = useRouteError()
    console.log(err);
    
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-y-1 max-w-full bg-gray-700 text-white'>
        <h1 className="flex text-9xl">
            4<IoIosFootball className="text-green-400"/>4
        </h1>
        <h2 className="text-2xl">Opps Page Not Found</h2>
        <h3 className="text-xl">{err.status} - {err.statusText}</h3>
        <h3 className="text-l">{err.data}</h3>
        <button className="bg-green-400 p-2 rounded-2xl mt-3 cursor-pointer font-semibold">Back To Home</button>
    </div>
  )
}

export default Error