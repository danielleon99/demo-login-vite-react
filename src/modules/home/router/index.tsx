import { FC } from 'react'
import { useSelector } from 'react-redux';

import { Routes, Route, Navigate } from 'react-router-dom';
import { userSelector } from '../../auth/slices';

import { HomePage } from '../pages';

export const HomeRouter: FC = () => {

    const {user} = useSelector(userSelector); 

    if(!user)
        return <Navigate to="/auth"/>

    return (
        <Routes>
            <Route path='' element={<HomePage/>}/>
            <Route path="*" element={<Navigate replace to="" />} />
        </Routes>
    )
}

export default HomeRouter;