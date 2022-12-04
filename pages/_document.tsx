import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html style={{ scrollBehavior: "smooth" }}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="keywords"
                    content="AL Development, AL Develop, aldevelop.com, aldevelopment, aldevelop, Alex LC, Alex, L-C, Alexander Lay-Calvert, Alexander Laycalvert, Alex Laycalvert, Dev, Development, Web, Web Dev, Web App, Application, Alex Lay-Calvert, Alex, Alexander, Node, Javascript, Typescript, Contracting, Lay, Calvert, lay, calvert, Laycalvert, LayCalvert"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
