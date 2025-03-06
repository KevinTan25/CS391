import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Main imports
import Index from "./components/mains/Index.tsx";
import Education from "./components/mains/Education.tsx";
import Employment from "./components/mains/Employment.tsx";
import Projects from "./components/mains/Projects.tsx";


const PageWrapper = styled.div`
    width: 70%;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
        width: 70%;
        margin: 0 auto;
    }
`;

const Container = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #00246B;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`;

function Root() {
    return (
        <>
            <PageWrapper>
                <Header />
                <Container>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Index />}/>
                        <Route path="/education" element={<Education />}/>
                        <Route path="/employment" element={<Employment />}/>
                        <Route path="/projects" element={<Projects />}/>
                    </Routes>
                </Container>
                <Footer />
            </PageWrapper>
        </>
    );
}

const router = createBrowserRouter(
    [{path: "*", Component: Root}]
);

export default function App() {
  return (
      <>
          {/* This is the import style code from google fonts */}
          <style>@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');</style>

          <RouterProvider router={router} />
      </>
  );
}