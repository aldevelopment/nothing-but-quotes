import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                title="Nothing But Quotes"
                description="Nothing But Quotes - A free, open-source API and web page for getting quotes."
                canonical="https://nothingbutquotes.com"
                openGraph={{
                    url: "https://aldevelop.com",
                    title: "AL Development",
                    description: "Nothing But Quotes - A free, open-source API and web page for getting quotes.",
                    images: [
                        {
                            url: "https://aldevelop.com/assets/images/logo.png",
                            alt: "AL Development Logo",
                            type: "image/png",
                        },
                        {
                            url: "https://aldevelop.com/assets/images/headshot.jpg",
                            alt: "Alex Lay-Calvert Headshot",
                            type: "image/jpeg",
                        },
                    ],
                    siteName: "Nothing But Quotes",
                    profile: {
                        firstName: "Alexander",
                        lastName: "Lay-Calvert",
                        gender: "Male",
                        username: "laycalva",
                    },
                }}
            />
            <Component {...pageProps} />
        </>
    );
}
