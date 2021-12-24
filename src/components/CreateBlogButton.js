import React, { useState } from "react";
import SmallScreen from "./SmallScreen.js";

function CreateBlogButton() {
	const [showCreateBlog, setShowCreateBlog] = useState(false);

	return (
		<>
			{showCreateBlog && (
				<div className="flex justify-center items-center h-screen w-screen z-10 top-0 fixed">
					{/* <div className="h-8 w-8 fixed bg-black rounded-full right-8 z-50 flex items-center justify-center shadow-md shadow-gray-200/60">
						x
					</div> */}
					<SmallScreen />
				</div>
			)}
			<div className="fixed md:hidden w-16 h-16 rounded-full bottom-8 right-4 shadow-md shadow-blue-500 border-2 cursor-pointer hover:scale-105 hover:bg-opacity-95 transition z-50">
				<div
					className="h-full w-full flex items-center justify-center text-2xl font-extrabold text-gray-300"
					onClick={() => setShowCreateBlog(!showCreateBlog)}
				>
					{!showCreateBlog && (
						<div
							className="h-full w-full flex items-center justify-center text-2xl font-bold text-gray-300 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full"
							onClick={() => setShowCreateBlog(!showCreateBlog)}
						>
							+
						</div>
					)}
					{showCreateBlog && (
						<div
							className="h-full w-full flex items-center justify-center text-2xl font-bold text-gray-300 bg-red-600/100 rounded-full"
							onClick={() => setShowCreateBlog(!showCreateBlog)}
						>
							x
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default CreateBlogButton;
