import React from 'react'
import { Stack  } from '@mui/material';
import { categories } from '../Utils/Constants';

function SideBar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack direction="row"
    sx={{
        overflow: "auto",
        height: {sx: "auto", md: "95%"},
        flexDirection: { md: "column"}
    }}>
        {
            categories.map(cato => (
                <button 
                className='category-btn'
                onClick={() => setSelectedCategory(cato.name)}
                style={{
                    background: cato.name === selectedCategory && '#FC1503',
                    color: 'white'
                }}
                key={cato.name}>
                    <span style={{ color: cato.name === selectedCategory ? "white" : "red",marginRight: '15px'}}>{cato.icon}</span>
                    <span style={{opacity: cato.name === selectedCategory ? "1" : '0.8'}}>{cato.name}</span>
                </button>
            ))
        }
    </Stack>
  )
}

export default SideBar