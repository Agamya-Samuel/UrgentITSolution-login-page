/* eslint-disable no-unused-vars */
// import { useState } from 'react';

import { LoginCard, Toast } from '../component';

function Login() {
	// const [showToast, setShowToast] = useState(false);
	return (
		<>
			<div className='flex justify-end'>
				{/* <Toast text={"Logged in Successfully."}/> */}
			</div>
			<div className="flex flex-col items-center justify-center h-screen">
				<LoginCard />
			</div>
		</>
	);
}
export default Login;
