import React from 'react';

export const Wrapper = ({loading, children}) => !loading ? <h2>loading...</h2> : <div>{children}</div>