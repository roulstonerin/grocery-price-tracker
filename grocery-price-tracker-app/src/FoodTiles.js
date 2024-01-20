// GroceryList.js
import * as React from 'react';
import { Box, CardActionArea, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
function Milk() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="./groceryItemImages/NEILSON True Taste, 2percent Milk.png"
                    alt="NEILSON True Taste, 2% Milk"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        NEILSON True Taste, 2% Milk
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $5.49 each
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function Butter() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="./groceryItemImages/GAY LEA Unsalted Butter.png"
                    alt="GAY LEA Unsalted Butter"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        GAY LEA Unsalted Butter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        6.99 each
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function Chips() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="./groceryItemImages/Lay's Ketchup flavoured potato chips.png"
                    alt="Lay's Ketchup flavoured potato chips"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Lay's Ketchup flavoured potato chips
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $3.99 each
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function Bread() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="./groceryItemImages/DEMPSTER 100percent Whole Grains 12 Grain Bread.png"
                    alt="DEMPSTER 100% Whole Grains 12 Grain Bread"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        DEMPSTER 100% Whole Grains 12 Grain Bread
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $2.99 each
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function RowOfTiles() {
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Milk />
            </Grid>
            <Grid item xs={3}>
                <Butter />
            </Grid>
            <Grid item xs={3}>
                <Chips />
            </Grid>
            <Grid item xs={3}>
                <Bread />
            </Grid>
        </React.Fragment>
    );
}

/* Nested Grid of Rows containing Food tiles*/
const FoodTiles = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}  >
                <Grid container item spacing={3}>
                    <RowOfTiles />
                </Grid>
            </Grid>
        </Box>
    );
};

export default FoodTiles;

