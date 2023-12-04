import React from 'react'
import classes from './Title.module.css'

export const Title = (props) => {
    return (
        <h1 className={classes.Container}>{props.children}</h1>
    )
}
