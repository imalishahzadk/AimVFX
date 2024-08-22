import React from 'react'

const TeamMembers = ({ name, position, imageUrl }) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
    <img src={imageUrl} alt={name} className="w-16 h-16 object-cover object-center rounded-full " />
    <div className='flex flex-col items-center text-white'>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-200">{position}</p>
    </div>
  </div>
  )
}

export default TeamMembers