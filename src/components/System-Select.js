//  选择当前的configType

import React from 'react'

const SystemSelect = ({ onClick, type, active }) => {
  return (
    <button className={active ? 'active' : ''} onClick={onClick}>{type}</button>
  )
};

export default SystemSelect;