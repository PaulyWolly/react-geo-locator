import React, { FC, ReactElement } from "react";
import {HashLoader} from 'react-spinners';

import './loading.styles.scss';
const Loading: FC = (): ReactElement => (
  <div className="loading">
    <HashLoader />
  </div>
);

export default Loading;
