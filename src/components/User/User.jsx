import { useParams } from 'react-router-dom'

function User() {
    const {userId} =useParams();
  return (
    <div className=' bg-gray-400 text-white text-3xl text-center'>
      User: {userId}
    </div>
  )
}

export default User;