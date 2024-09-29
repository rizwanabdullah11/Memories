import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import memories from './images/memories.jpeg';
import Post from './Component/Post/posts';
import Form from './Component/Form/form';
import useStyles from './style';

const App = () => {
    const [currentId, setcurrentId] = useState(null);
    const classes = useStyles();  // Correct use of useStyles
    const dispatch = useDispatch();  // Correct use of useDispatch

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth='lg'>  {/* Corrected maxWidth */}
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' />
            </AppBar>
            <Grow in>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Post setcurrentId={setcurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setcurrentId={setcurrentId}/>
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    );
}

export default App;
