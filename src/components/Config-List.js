import React from 'react'

let styleObj = {
    padding: '3px 6px'
}

const ConfigList = ({list}) => {
    return (
        list.map((item, idx) => {
            return <span style={styleObj} key={idx}>
                {item.num} + {item.type}
            </span>
        })
    )
}

export default ConfigList;