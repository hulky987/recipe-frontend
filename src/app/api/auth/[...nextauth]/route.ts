import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';

const handler = NextAuth({
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	// database: process.env.DATABASE_URL,
});

export { handler as GET, handler as POST };
