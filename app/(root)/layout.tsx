export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section>
			SIDEBAR
			{children}
		</section>
	);
}
