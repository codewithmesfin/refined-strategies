"use client"

import Footer from './Footer';



import PublicNavbar from  './public/PublicNavbar'


interface PROPS {
  children: any;
}


const CustomLayout = ({ children }: PROPS) => {


  return <>
   <PublicNavbar />
    {children}

    <Footer />
  </>

};

export default CustomLayout;