import {Fragment} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/auth';
import { Path } from '../constants/path';

export function Router() {
  return (
    <Fragment>
        <Routes>
          <Route path={Path.login} element={<Login/>} />
        </Routes>
    </Fragment>
  );
}
