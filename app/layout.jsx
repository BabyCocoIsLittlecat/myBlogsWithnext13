import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provide";

export const metadata = {
  title: "Share blogs",
  description: "Share your Idea with easy blogs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
        <link rel='icon' href='/assets/icons/block.ico' />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider>
          <main className="col main">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
