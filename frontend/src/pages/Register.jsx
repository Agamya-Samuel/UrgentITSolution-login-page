/* eslint-disable no-unused-vars */
// import { useState } from 'react';
import { RegisterCard, Toast } from '../component';

function Register() {
	// const [showToast, setShowToast] = useState(false);

	return (
		<>
			<div className="flex justify-end">
				{/* <Toast text={'Registered Successfully.'} /> */}
			</div>
			<div className="flex flex-col items-center justify-center h-screen">
				<RegisterCard />
			</div>
		</>
	);
}

export default Register;
