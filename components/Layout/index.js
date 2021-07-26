import Head from "next/head";
import styles, {globalStyles} from "./style";

export default function Layout({ children }) {


    return (
        <>
        
            

            <Head>
                <title>Nextjs App Demo</title>
            </Head>

            <div>
                <main className="layout">
                    {children}
                </main>
            </div>


            {/* <style jsx>{styles}</style>

            <style jsx global>{globalStyles}
            </style> */}
        </>

    )
}