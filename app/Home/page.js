import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-yellow-200 -500 -200">
    {/* Navigation Bar */}
    <div className="bg-white-400 p-4 flex justify-between items-center">       
        <div className="text-black font-extrabold text-4xl  ml-8">
         <span className="text-blue-500">C</span>
            <span className="text-blue-500">u</span>
            <span className="text-blue-500">s</span>
            <span className="text-yellow-500">t</span>
            <span className="text-blue-500">M</span>
            <span className="text-yellow-500">e</span> 
        </div>
            <div className="flex justify-end items-center ">
                    <div className="bg-amber-100 rounded text-black  ml-3 font-semibold px-2 py-2">Home</div>
                    <div className="bg-amber-100 rounded text-black  ml-3 font-semibold px-2 py-2">About</div>
                    <div className="bg-amber-100 rounded text-black  ml-3 font-semibold px-2 py-2 ">Services</div>
                <div className="bg-yellow-500 rounded text-white ml-6 font-semibold px-5 py-2">Sign In</div>
            </div>
        </div>
  {/* Center  */}
    <div className="flex justify-center mt-16">
      
      <div className="bg-white-400 w-96 h-80 p-8 flex flex-col items-center justify-center">
        <div className="text-black font-bold text-xl ">Personalize your world with</div>
        <div className="text-black font-bold mt-1 text-xl">CustMe</div>
        <div className="text-black font-cursive mt-1 text-xl text-center">Connect Freelance Designers and Printing Providers</div>
        <div className="flex space-x-6 mt-7 ">
          <div className="bg-yellow-500 rounded text-black font-semibold px-5 py-2 -mr-4">Sign In</div>
          <div className="bg-white rounded text-black font-semibold px-5 py-2 ">Join</div>
        </div>
      </div>

    {/* Image */}
      <div className=" w-96 h-80 ml-3">
      <img src="https://5.imimg.com/data5/SELLER/Default/2024/1/380516394/CA/MJ/IL/62581795/designer-mens-sports-t-shirt-1000x1000.jpg" alt="Your Image" className="w-full h-full " />
      </div>
      
    </div>
  </div>
  );
}

export default Home;

