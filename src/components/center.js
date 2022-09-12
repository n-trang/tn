import * as React from 'react'
import {center} from './center.module.css'

const Center = ({ children }) => {
  return (
    <div className={center}>
        {children}
    </div>
  )
}

export default Center