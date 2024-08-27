/* eslint-disable react/prop-types */
import { Button } from 'flowbite-react';

function CustomButton({ text, btnColor, toPath, fn=()=>{} }) {
	return (
		<Button
			color={btnColor}
			onClick={() => {
				fn();
				window.location.href = `${toPath}`;
			}}
		>
			{text}
		</Button>
	);
}

export default CustomButton;
