
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home/Home";
import Softwaredevelopment from "./Component/SoftwareDevelopment/Softwaredevelopment";
import Infrastructure from "./Component/SoftwareDevelopment/infrastructure/infrastructure";
import Cybersecurity from "./Component/SoftwareDevelopment/Cybersecurity/Cybersecurity";
import SystemsIntegration from "./Component/SoftwareDevelopment/SystemsIntegration/SystemsIntegration";
import TechnicalSupport from "./Component/SoftwareDevelopment/TechnicalSupport/TechnicalSupport";
import DatabaseServices from "./Component/SoftwareDevelopment/DatabaseServices/DatabaseServices";
import TechnicalConsulting from "./Component/SoftwareDevelopment/TechnicalConsulting/TechnicalConsulting";
import CloudComputing from "./Component/SoftwareDevelopment/CloudComputing/CloudComputing";
import DataAnalytics from "./Component/SoftwareDevelopment/DataAnalytics/DataAnalytics";
import HeaderSmall from "./Component/headerSmall/HeaderSmall";
import Problem from "./Component/SoftwareDevelopment/Proplem/problem";
import OperationAndMaintenance from "./Component/Solutions/Operationandmaintenance/OperationAndMaintenance";
import CustomSystems from "./Component/Solutions/CustomSystems/CustomSystems";
import Research from "./Component/Research/Research";
 import Employment from "./Component/Employment/Employment";
import SuccessStories from "./Component/SuccessStories/SuccessStories";
import WhyAkwad from "./Component/WhyAkwad/WhyAkwad";
import Contact from "./Component/Contact/Contact";
import Broducts from "./Component/products/Products";

function App() {
  
  const routers = createBrowserRouter([{
    path :'' , element : <Layout/>, children:[
      {index  : true , element: <Home/>},
      {path  :'/Softwaredevelpment' , element: <Softwaredevelopment/>},
      {path  :'/infrastructure' , element: <Infrastructure/>},
      {path  :'/Cybersecurity' , element: <Cybersecurity/>},
      {path  :'/SystemsIntegration' , element: <SystemsIntegration/>},
      {path  :'/TechnicalSupport' , element: <TechnicalSupport/>},
      {path  :'/DatabaseServices' , element: <DatabaseServices/>},
      {path  :'/TechnicalConsulting' , element: <TechnicalConsulting/>},
      {path  :'/CloudComputing' , element: <CloudComputing/>},
      {path  :'/DataAnalytics' , element: <DataAnalytics/>},
      {path  :'/HeaderSmall' , element: <HeaderSmall/>},
      {path  :'/problem' , element: <Problem/>},
      {path  :'/OperationAndMaintenance' , element: <OperationAndMaintenance/>},
      {path  :'/CustomSystems' , element: <CustomSystems/>},
      {path  :'/Research' , element: <Research/>},
      {path  :'/products' , element: <Broducts/>},
      {path  :'/Employment' , element: <Employment/>},
      {path  :'/Successstories' , element: <SuccessStories/>},
      {path  :'/WhyAkwad' , element: <WhyAkwad/>},
      {path  :'/contact' , element: <Contact/>},
    ]
  }])

  
  return (
    <>
         <RouterProvider router={routers}/>         
   
    </>
  )
}

export default App