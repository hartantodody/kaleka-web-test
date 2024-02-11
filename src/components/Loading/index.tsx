const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full bg-gray-200'>
      <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mb-3'></div>
      <p className='text-gray-900'>Loading the map...</p>
    </div>
  );
};

export default Loading;
