import React, { useState } from 'react'
import { Box, Card, CardContent, CardHeader, CardMedia, Divider, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Select, Switch, Tab, Tabs, Tooltip, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TaskIcon from '@mui/icons-material/Task';

const TroubleshootUI = () => {
    const [eqpLevelTreeCheck, setEqpLevelTreeCheck] = useState(false);
    const [troubleshootingTabs, setTroubleshootingTabs] = useState(1);
    const onEqpLevelTreeCheckChange = () => {
        setEqpLevelTreeCheck((prev) => !prev);
    }
    const onTroubleshootingTabsChange = (event, newValue) => {
        setTroubleshootingTabs(newValue);
    }
    return (
        <>
            <Card sx={{ padding: '17px' }}>
                <CardHeader
                    title="Troubleshooting"
                    action={
                        <FormControlLabel
                            control={
                                <Switch checked={eqpLevelTreeCheck} onChange={onEqpLevelTreeCheckChange} name="Equipment_Level_Tree" />
                                //import Switches from additional UI 
                            }
                            label="Show Equipment Level Tree"
                        />
                    }
                />
                <Divider />
                <CardContent>
                    <Box >
                        {/* Import tabs from addtional UI */}
                        <Tabs value={troubleshootingTabs} onChange={onTroubleshootingTabsChange} aria-label="Troubleshoot Tabs">
                            <Tab
                                label="EPIKS"
                                value={1}
                            />
                            <Tab
                                label="KMS"
                                value={2}
                            />
                        </Tabs>
                    </Box>

                    <Divider />
                    {troubleshootingTabs === 1 ? <>Implement EPIKS UI</> : <LoadKms />}
                </CardContent>

            </Card>
        </>
    )
}
// KMS UI
const LoadKms = () => {
    const [ksmTabValue, setksmTabValue] = useState(1);
    const [equipment_type, setEquipment_type] = useState('');
    const [equipment_value, setEquipment_value] = useState('');
    const onKmsTabChange = (event, newValue) => {
        setksmTabValue(newValue);
    }
    const onEquipmentTypeChange = (event) => {
        setEquipment_type(event.target.value)
    }
    const onEquipmentValueChange = (event) => {
        setEquipment_value(event.target.value)
    }
    return <div>
        <Box >
            {/* Import tabs from addtional UI */}
            <Tabs value={ksmTabValue} onChange={onKmsTabChange} aria-label="KMS Tabs">
                <Tab
                    label="MAINTENANCE MANUALS"
                    value={1}
                />
                <Tab
                    label="Docs"
                    value={2}
                />
                <Tab
                    label="Videos"
                    value={3}
                />
            </Tabs>
        </Box>
        {ksmTabValue === 1 ? <>
            <Card>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle1"
                        sx={{ fontWeight: "20px", padding: "15px" }}>
                        Filters
                    </Typography>
                    <Divider orientation="vertical" variant='middle' flexItem />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: 170 }}>
                        <InputLabel id="demo-simple-select-standard-label">Equipment Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={equipment_type}
                            onChange={onEquipmentTypeChange}
                            label="Equipment Type"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Lorem 1</MenuItem>
                            <MenuItem value={2}>Lorem 2</MenuItem>
                            <MenuItem value={3}>Lorem 3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: 170 }}>
                        <InputLabel id="demo-simple-select-standard-label">Equipment</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={equipment_value}
                            onChange={onEquipmentValueChange}
                            label="Equipment"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Lorem 1</MenuItem>
                            <MenuItem value={2}>Lorem 2</MenuItem>
                            <MenuItem value={3}>Lorem 3</MenuItem>
                        </Select>
                    </FormControl>
                </CardContent>
            </Card>
        </> : ksmTabValue === 2 ? <>
            {/* KMS Second Tab UI */}
            {/* <Card>
                <CardHeader
                    avatar={
                        <TaskIcon />
                    }
                    action={
                        <Tooltip title="View Doc" arrow>
                            <IconButton aria-label="settings">
                                <RemoveRedEyeIcon />
                            </IconButton>
                        </Tooltip>
                    }
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum voluptatem, quos repellendus eius aperiam voluptate"
                    subheader="Size: 200kb"
                />
            </Card> */}
            {/* <Card key={Math.random()} sx={{ marginBottom: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'initial', justifyContent: 'space-between', padding: 1.1 }}>
                    <Box sx={{ margin: '4px' }}>
                        <TaskIcon />
                    </Box>
                    <Box>
                        <Typography variant='subtitle1' sx={{ marginTop: '0px' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores magni eius maiores dolore ipsum. Libero qui facilis voluptatem, recusandae quam ullam, rem id ex delectus consequatur inventore fugit deleniti minima.
                        </Typography>
                        <Typography variant='caption' display={'block'}>
                            Size: 200kb
                        </Typography>
                    </Box>
                    <Box>
                        <Tooltip title="View Doc" arrow>
                            <IconButton aria-label="settings">
                                <RemoveRedEyeIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Card> */}
            {/* For Testing  UI */}
            {[...new Array(12)]
                .map(
                    (e) => {
                        return (<Card key={Math.random()} sx={{ marginBottom: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'initial', justifyContent: 'space-between', padding: 1.1 }}>
                                <Box sx={{ margin: '4px' }}>
                                    <TaskIcon />
                                </Box>
                                <Box>
                                    <Typography variant='subtitle1' sx={{ marginTop: '0px' }}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores magni eius maiores dolore ipsum. Libero qui facilis voluptatem, recusandae quam ullam, rem id ex delectus consequatur inventore fugit deleniti minima.
                                    </Typography>
                                    <Typography variant='caption' display={'block'}>
                                        Size: 200kb
                                    </Typography>
                                </Box>
                                <Box>
                                    <Tooltip title="View Doc" arrow>
                                        <IconButton aria-label="settings">
                                            <RemoveRedEyeIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>
                        </Card>)
                    })
            }
        </> : <>
            {/* KMS Third Tab UI */}
            {/* <Card key={Math.random()} sx={{ marginBottom: 4, width: '320px' }}>
                <CardMedia
                    component="img"
                    height="179"
                    image="https://media.istockphoto.com/photos/technology-picture-id505532958?k=6&m=505532958&s=170667a&w=0&h=6FbwWIIw0F9KMzzIDQvXsr-bukKNpuQ4Psddx0C0HBc="
                    alt="green iguana"
                />
                <CardContent sx={{ margin: 0 }}>
                    <Typography gutterBottom={false} variant="h6" >
                        Wahser Temprerature Calibration
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Duration: 30mins
                    </Typography>
                </CardContent>
            </Card> */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                {[...new Array(12)].map((e) => {
                    return (
                        <Card key={Math.random()} sx={{ margin: 2, width: '320px' }}>
                            <CardMedia
                                component="img"
                                height="179"
                                image="https://media.istockphoto.com/photos/technology-picture-id505532958?k=6&m=505532958&s=170667a&w=0&h=6FbwWIIw0F9KMzzIDQvXsr-bukKNpuQ4Psddx0C0HBc="
                                alt="green iguana"
                            />
                            <CardContent sx={{ margin: 0 }}>
                                <Typography gutterBottom={false} variant="h6" >
                                    Wahser Temprerature Calibration
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Duration: 30mins
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })
                }
            </Box>
        </>}

    </div>
}

export default TroubleshootUI