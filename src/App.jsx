import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Footer from "./component/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorList1 from "./component/doctor-list-1/DoctorList1";
import DoctorList2 from "./component/doctor-list-2/DoctorList2";
import DoctorListDetails from "./component/doctor-list-details/DoctorListDetails";
import HospitalList1 from "./component/hospital-list-1/HospitalList1";
import HospitalList2 from "./component/hospital-list-2/HospitalList2";
import HospitalListDetails1 from "./component/hospital-list-details-1/HospitalListDetails1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="doc1" element={<DoctorList1 />} />
          <Route path="doc2" element={<DoctorList2 />} />
          <Route path="doc3" element={<DoctorListDetails />} />
          <Route path="hos1" element={<HospitalList1 />} />
          <Route path="hos2" element={<HospitalList2 />} />
          <Route path="hos3" element={<HospitalListDetails1 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
