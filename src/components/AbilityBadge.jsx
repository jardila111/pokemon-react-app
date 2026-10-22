// One ability pill on the details page
function AbilityBadge({ name, isHidden }) {
  return (
    <span className='mr-2 mb-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold capitalize text-indigo-700'>
      {name.replaceAll('-', ' ')}
      {isHidden && <span className='font-normal text-indigo-500'> (hidden)</span>}
    </span>
  )
}

export default AbilityBadge
