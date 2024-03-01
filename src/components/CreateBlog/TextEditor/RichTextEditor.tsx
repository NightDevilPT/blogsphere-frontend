import React, { useState } from "react";
import { Editor } from "primereact/editor";

interface TextProps {
	blogData: any;
	setBlogData: any;
}

const TextEditor = ({ blogData, setBlogData }: TextProps) => {
	return (
			<Editor
				className="text-primary-fg border-none bg-primary-bg rounded"
				value={blogData}
				onTextChange={(e) => setBlogData(e.htmlValue)}
				style={{ height: "380px" }}
			/>
	);
};

export default TextEditor;
