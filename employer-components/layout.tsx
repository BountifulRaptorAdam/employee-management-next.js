import HomeSideBar from "@/employer-components/HomeSideBar"
 import NavBar from "./NavBar"

export default function HomeLayout({children} : {children : React.ReactNode}) {
    return (
        <>

        <div className=" bg-btnSecondary h-screen w-screen flex" style={{boxShadow: 'inset 0 0 10px grey'}}>
            
            <HomeSideBar />
            <div  style={{ flex : "1 0 auto"}}>
            <NavBar />
            {children}     
            </div>           
           
        </div>
        </>

    )
}