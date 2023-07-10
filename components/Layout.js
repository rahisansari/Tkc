import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const router = useRouter();
  if (router.pathname == "/signup") return <>{children}</>;
  else if (router.pathname == "../Login") return <>{children}</>;
  else {
    return (
      <>
        <Header />

   
          
          {children}
        

        <Footer />
      </>
    );
  }
};

export default Layout;
