import { Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import References from './pages/References';
import Projects from './pages/Projects';
import Credits from './pages/Credits';
import styled from 'styled-components';

const AppWrapper = styled.div`
    width: 80vw;
    margin: 0 15%;
    box-sizing: border-box;
    border: 2px solid red;
    
    @media screen and (max-width: 900px) {
        align-items: center;
    }
`;

const ContentWrapper = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: #3490e0;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        width: 100%;
    }
`;


function Root() {
    return (
        <AppWrapper>
            <Header />
            <ContentWrapper>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={<Home/>}
                    />
                    <Route
                        path="/Education"
                        element={<Education/>}
                    />
                    <Route
                        path="/Experience"
                        element={<Experience/>}
                    />
                    <Route
                        path="/Skills"
                        element={<Skills/>}
                    />
                    <Route
                        path="/References"
                        element={<References/>}
                    />
                    <Route
                        path="/Projects"
                        element={<Projects/>}
                    />
                    <Route
                        path="/Credits"
                        element={<Credits/>}
                    />
                </Routes>
            </ContentWrapper>
            <Footer />
        </AppWrapper>
    )
}

const router=createBrowserRouter(
    [
        {path:"*", Component: Root},
    ]
)

export default function App() {
    return (
        // <StyledApp>
            <RouterProvider router={router}/>
        // </StyledApp>
    )
}