/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { CustomButton } from '../component';

function Dashboard() {
	const [sessionData, setSessionData] = useState({});
	useEffect(() => {
		localStorage.getItem('sessionToken') ||
			window.location.replace('/login');

		// Fetch the user's data from the backend
		fetch(`${import.meta.env.VITE_BACKEND_API}/api/dashboard`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message === 'valid_session') {
					setSessionData(data.user);
				} else {
					window.location.replace('/login');
				}
			});
	}, []);

	return (
		<div className="h-screen">
			{sessionData.email ? (
				<UserProfile user={sessionData} />
			) : (
				<div className="flex items-center justify-center h-full">
					<div className="spinner" />
				</div>
			)}
		</div>
	);
}

export default Dashboard;

const UserProfile = ({ user }) => {
	const handleClearSession = () => {
		localStorage.removeItem('sessionToken');
		alert('Logged out Successfully');
	};

	const handleLogout = async () => {
		const res = await fetch(
			`${import.meta.env.VITE_BACKEND_API}/api/logout`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem(
						'sessionToken'
					)}`,
				},
			}
		);
		const data = await res.json();
		if (data.message === 'session_deleted_successfully') {
			alert('Session Deleted Successfully in DB');
		} else {
			alert('Error Deleting Session');
		}
		localStorage.removeItem('sessionToken');
	};

	return (
		<>
			<div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4 flex flex-col items-center-center">
				<CustomButton
					text={
						'Only Clear SessionToken (does not delete Session from DB, USE this Button to create multiple Sessions)'
					}
					btnColor={'blue'}
					fn={handleClearSession}
					toPath={'/login'}
				/>
				<CustomButton
					text={'Logout, (Delete Session from DB)'}
					btnColor={'failure'}
					fn={handleLogout}
					toPath={'/login'}
				/>
				{/* User Info */}
				<div className="space-y-2">
					<h1 className="text-3xl font-bold">User Profile</h1>
					<p>
						<strong>Email:</strong> {user.email}
					</p>
					<p>
						<strong>User ID:</strong> {user._id}
					</p>
					<p>
						<strong>Account Created At:</strong>{' '}
						{new Date(user.createdAt).toLocaleString()}
					</p>
				</div>

				{/* Current Session */}
				<h2 className="text-2xl font-semibold underline">
					Current Session
				</h2>
				<div className="space-y-2">
					<div className="border p-4 rounded-lg">
						<p>
							<strong>Session ID:</strong>{' '}
							{user.currentSession._id}
						</p>
						<p>
							<strong>Session Token:</strong>{' '}
							{user.currentSession.sessionToken}
						</p>
						<p>
							<strong>Session Name:</strong>{' '}
							{user.currentSession.sessionName}
						</p>
						<p>
							<strong>Session Created At:</strong>{' '}
							{new Date(
								user.currentSession.createdAt
							).toLocaleString()}
						</p>
					</div>
				</div>

				{/* Other Sessions */}
				<div className="space-y-2">
					<h2 className="text-2xl font-semibold underline">
						Other Sessions
					</h2>
					{user.otherSessions.map((session) => (
						<div
							key={session._id}
							className="border p-4 rounded-lg"
						>
							<p>
								<strong>Session ID:</strong> {session._id}
							</p>
							<p>
								<strong>Session Token:</strong>{' '}
								{session.sessionToken}
							</p>
							<p>
								<strong>Session Name:</strong>{' '}
								{session.sessionName}
							</p>
							<p>
								<strong>Session Created At:</strong>{' '}
								{new Date(session.createdAt).toLocaleString()}
							</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
