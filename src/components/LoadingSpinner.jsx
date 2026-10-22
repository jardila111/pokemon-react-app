// Shown while a page is waiting for PokéAPI
function LoadingSpinner({ text = 'Loading...' }) {
  return (
    <div className='flex flex-col items-center justify-center gap-3 py-20' role='status'>
      <div className='h-12 w-12 animate-spin rounded-full border-4 border-red-200 border-t-red-500' />
      <p className='text-gray-500'>{text}</p>
    </div>
  )
}

export default LoadingSpinner
