import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';

function RegisterCard() {
	const [formData, setFromData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		remember: false,
	});
	return (
		<Card className="w-96">
			<form
				className="flex flex-col gap-4"
				onSubmit={async (e) => e.preventDefault()}
			>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="email1" value="Enter email" />
					</div>
					<TextInput
						id="email1"
						type="email"
						placeholder="name@agamya.com"
						required
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
						onChange={(e) => {
							setFromData({
								...formData,
								password: e.target.value,
							});
						}}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="confirmPassword"
							value="Confirm password"
						/>
					</div>
					<TextInput
						id="confirmPassword"
						type="password"
						required
						onChange={(e) => {
							setFromData({
								...formData,
								confirmPassword: e.target.value,
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
						if (
							formData.email === '' ||
							formData.password === '' ||
							formData.confirmPassword === ''
						) {
							alert('Please fill all the fields');
							return;
						}
						if (formData.password !== formData.confirmPassword) {
							alert(
								'"Password" and "ConfirmPassword" field do not match'
							);
							return;
						}
						const res = await fetch(
							`${import.meta.env.VITE_BACKEND_API}/api/register`,
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
						alert('Registered in successfully');
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
					Already have an account?{' '}
					<a href="/login" className="underline">
						Login here
					</a>
				</p>
			</form>
		</Card>
	);
}

export default RegisterCard;
