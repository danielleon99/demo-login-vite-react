import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Route, Routes, Navigate } from 'react-router-dom';

import { LoginPage, RegisterPage } from '../pages';

export const AuthRouter: FC = () => {

    return (
        <Routes>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path="*" element={<Navigate replace to="login" />} />
        </Routes>
    )
}
export default AuthRouter;