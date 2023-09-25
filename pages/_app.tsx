import Layout from "@/components/Layout";
import AppContextProvider from "@/contexts/AppContextProvider";
import { AppProps } from "next/app";
import '@/styles/global.css'


export default function App({Component,pageProps}:AppProps){

    return(
        <AppContextProvider>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </AppContextProvider>

    )
}