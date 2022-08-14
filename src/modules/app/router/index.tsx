import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AuthRouter = lazy(() => import("../../auth/router"));
const HomeRouter = lazy(() => import("../../home/router"));

export const AppRouter: FC = () => 
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Suspense fallback={<div>loading</div>}><HomeRouter/></Suspense> }/>  
        <Route path='/auth/*' element={<Suspense fallback={<div>loading</div>}><AuthRouter/></Suspense> }/>        
      </Routes>
    </BrowserRouter>
  