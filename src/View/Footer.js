import React from 'react'

import SystemSelectConnect from '../components/System-Select-Connect';

const Footer = () => {
    return (
        <div>筛选： 
            <SystemSelectConnect type="all" />
            <SystemSelectConnect type="admin" />
        </div>
    )
}

export default Footer