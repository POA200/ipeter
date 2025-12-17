import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>iPeter</title>
        <meta
          name="description"
          content="Portfolio of iPeter, a Web3 designer and developer."
        />
        <meta
          property="og:title"
          content="iPeter - Web3 Designer and Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of iPeter, a Web3 designer and developer."
        />
        <meta property="og:image" content="/ipeterdp.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
