import React from 'react';
import '../../App.css';
import Card from './Card';
import {Grid} from "@material-ui/core"

function Home () {
    return (
        <div style={{ padding: 30 }}>
            <Grid container direction="row" alignItems="center" justify="center" style={{minHeight: "75vh"}} spacing={7} className='home-container'>
                <Grid item>
                    <Card
                    title="Contour Drawing"
                    imageUrl='data:image/jpeg;base64,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'
                    body='Learn how to contour draw! It is an essential technique that will help you build the foundation for any drawing or painting.'
                    video=""
                    role = "Contour-Card"
                    />
                </Grid>
                <Grid item>
                    <Card
                    title = "Shading"
                    imageUrl='data:image/jpeg;base64,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'
                    body='Learn the principles of shading! It is an important technique that helps create the illusion of form, space, and light in a drawing.'
                    video=""
                    role = "Shading-Card"
                    />
                </Grid>
                <Grid>
                    <Card
                    title = "Perspective Drawing"
                    imageUrl='data:image/png;base64,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'
                    body='Learn the basics of perspective drawing! Perspective drawing is a useful technique that helps to create a realistic impression of depth.'
                    video=""
                    role = "PD-Card"
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;