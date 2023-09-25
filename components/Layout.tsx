import Footer from "./Footer"
import Header from "./Header"

type LayoutProps={
    children:any,
}

const Layout: React.FC<LayoutProps>=({children})=>{
    return(
        <div className="">

            <Header/>
                 {children}
            <Footer/>
        </div>
    )
}

export default Layout