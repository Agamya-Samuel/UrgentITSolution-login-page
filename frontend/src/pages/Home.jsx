import { CustomButton } from '../component';

function Home() {
	return (
		<>
			<header className="p-4 flex justify-end max-w-7xl mx-auto gap-2 items-center">
				<CustomButton
					text="Login"
					btnColor={'blue'}
					toPath={'/login'}
				/>
				<p className="text-4xl">•</p>
				<CustomButton
					text="Register"
					btnColor={'blue'}
					toPath={'/register'}
				/>
				<p className="text-4xl">•</p>
				<CustomButton
					text="Dashboard"
					btnColor={'blue'}
					toPath={'/dashboard'}
				/>
			</header>
			<main>
				<section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24">
					<h1 className="text-3xl font-extrabold">
						Welcome Page ⚡️
					</h1>

					<p className="text-lg opacity-80">
						This is a simple Welcome Page... What are you gonna
						experience Next?
					</p>

					<a
						className="btn btn-primary flex flex-col items-center underline"
						href="https://agamya.dev"
						target="_blank"
					>
						My Portfolio{' '}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path
								fillRule="evenodd"
								d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
								clipRule="evenodd"
							/>
						</svg>
					</a>

					<a
						href="https://github.com/Agamya-Samuel/UrgentITSolution-login-page"
						target="_blank"
						className="link link-hover text-2xl underline"
					>
						Source Code
					</a>
				</section>
			</main>
		</>
	);
}

export default Home;
