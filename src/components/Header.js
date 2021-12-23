import React from 'react'

function Header() {
  return (
		<div className="bg-[#19194f] p-4 fixed w-full border-b-2 shadow-md shadow-cyan-800">
			<div className="font-mono text-gray-100 text-xl md:text-2xl font-extrabold">
				Blog<span className="italic font-normal">Buddy</span>
			</div>
		</div>
	);
}

export default Header;