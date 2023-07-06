import React from 'react'

function card1() {
  return (
    <>
        
<div class="flex items-center mt-8 w-full justify-center rounded-3xl">

<div class="px-5 rounded-3xl">
    <div class="bg-[#F7EAA9] shadow-xl py-3 px-5 rounded-3xl">
        <div class="photo-wrapper p-2">
            <img class="w-20 h-20 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div class="p-1">
            <h3 class="text-center text-xl text-black font-medium leading-8">Joh Doe</h3>
            <div class="text-center text-black text-md font-semibold">
                <p>Director</p>
            </div>
            <div class="text-center text-black text-md font-semibold">
                <p>I didn't go to film school, I went to films.</p>
            </div>

            <div class="flex flex-row bg-[#C6B34E] p-2 rounded-3xl mt-4">
                <div class="flex text-white px-3"> 12 posts</div>
                <div class="flex text-white px-3">882 followers</div>
                <div class="flex text-white px-3">64 following</div>
                <div class="flex text-white px-3">918 likes</div>
            </div>

            <div class="text-center my-3 mt-5">
                <a class="text-md text-white bg-[#C6B34E] p-1 px-7 py-2 rounded-2xl hover:underline hover:text-yellow-600 font-medium" href="#">Edit Profile</a>
            </div>

        </div>
    </div>
</div>

</div>
    </>
  )
}

export default card1