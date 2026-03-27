import {Fragment} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Path } from '../constants/path';
import { Landing } from '../pages';

export function Router() {
  return (
    <Fragment>
        <Routes>
          <Route path={Path.landing} element={<Landing/>} />
        </Routes>
    </Fragment>
  );
}
