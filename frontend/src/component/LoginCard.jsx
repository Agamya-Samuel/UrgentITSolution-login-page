import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';

function LoginCard() {
	useEffect(() => {
		// clear the sessionToken if it exists
		localStorage.removeItem('sessionToken');
	}, []);

	const [formData, setFromData] = useState({
		email: '',
		password: '',
		remember: false,
	});

	return (
		<Card className="w-96">
			<form className="flex flex-col gap-4">
				<div>
					<div className="mb-2 block">
						<Label htmlFor="email1" value="Enter email" />
					</div>
					<TextInput
						id="email1"
						type="email"
						placeholder="name@agamya.com"
						required
						value={formData.email}
						onChange={(e) => {
							setFromData({ ...formData, email: e.target.value });
						}}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="password1" value="Enter password" />
					</div>
					<TextInput
						id="password1"
						type="password"
						required
						value={formData.password}
						onChange={(e) => {
							setFromData({
								...formData,
								password: e.target.value,
							});
						}}
					/>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="remember" />
					<Label htmlFor="remember">Remember me</Label>
				</div>
				<Button
					type="submit"
					color={'blue'}
					onClick={async (event) => {
						event.preventDefault();
						if (formData.email === '' || formData.password === '') {
							alert('Please fill all the fields');
							return;
						}
						const res = await fetch(
							`${import.meta.env.VITE_BACKEND_API}/api/login`,
							{
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
									email: formData.email,
									password: formData.password,
								},
							}
						);
						const sessionToken = await res.json();
						if (sessionToken.message === 'user_not_found') {
							alert('Invalid email or password combination... ');
							return;
						}
						alert('Logged in successfully');
						localStorage.setItem(
							'sessionToken',
							sessionToken.sessionToken
						);
						window.location.href = '/dashboard';
					}}
				>
					Submit
				</Button>
				<p className="text-lg text-gray-700">
					Don{"'"}t have an account?{' '}
					<a href="/register" className="underline">
						Register here
					</a>
				</p>
			</form>
		</Card>
	);
}

export default LoginCard;
