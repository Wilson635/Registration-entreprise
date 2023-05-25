"use client"

import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getListings, { 
    IListingsParams
} from "@/app/actions/getListings";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

interface UserProps {
    searchParams: IListingsParams
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export const TabsProfile = async ({ searchParams }: UserProps) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const listings = await getListings(searchParams);
    const currentUser = await getCurrentUser();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <>
            <div className="items-center mx-auto">
                
                <Box sx={{ width: 800, alignItems: 'center' }}>
                    <AppBar position="static" className='mt-8 rounded-lg'>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            className='bg-indigo-100'
                        >
                            <Tab label="Articles" className='capitalize font-bold text-indigo-500' {...a11yProps(0)} />
                            <Tab label="Discussions" className='capitalize font-bold text-indigo-500' {...a11yProps(1)} />
                            <Tab label="Paramètres" className='capitalize font-bold text-indigo-500' {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className='items-center grid grid-cols-1 p-5 border-1px border-dashed mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
                                
                                <p>
                                    {currentUser?.name} n'a pas encore posté d'articles
                                </p>
                            </div>
                            <main>
                                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                <p>
                                    {currentUser?.name} n'a pas encore posté d'articles
                                </p>
                                </div>
                            </main>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            Item Three
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>           
        </>
    );
}