/* eslint-disable react/no-unescaped-entities */
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
import { SafeUser } from '@/app/types';
import { HiNewspaper, HiChatBubbleBottomCenterText, HiAcademicCap } from 'react-icons/hi2';
import Button from '@mui/material/Button';
import Add from '@material-ui/icons/Add';
import Properties from './properties';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

interface UserProps {
    currentUser?:SafeUser|null
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

export const TabsProfile: React.FC<UserProps> = ({
    currentUser
  }) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

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
                            className='bg-white text-indigo-500'
                        >
                            <Tab label="Articles" className='capitalize font-bold text-indigo-500' {...a11yProps(0)} />
                            <Tab label="Discussions" className='capitalize font-bold text-indigo-500' {...a11yProps(1)} />
                            <Tab label="Entreprises" className='capitalize font-bold text-indigo-500' {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <main>
                                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-12 border-dashed border-2 rounded-lg items-center gap-y-5">
                                    <div className="flex items-center justify-center flex-col py-6  ">
                                        <HiNewspaper className='text-indigo-500 text-4xl text-center' />
                                        <p>
                                            {currentUser?.name} n'a pas encore posté d'articles
                                        </p>
                                        <Button className='bg-none text-white capitalize px-12 hover:text-indigo-500' variant="outlined" startIcon={<Add />}>
                                            Nouvel Article
                                        </Button>
                                    </div>
                                </div>
                            </main>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <main>
                                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 border-dashed border-2 rounded-lg items-center gap-y-5">
                                    <div className="flex items-center justify-center flex-col py-6  ">
                                        <HiChatBubbleBottomCenterText className='text-indigo-500 text-4xl' />
                                        <p>
                                            {currentUser?.name} n'a pas encore posté de discussions
                                        </p>
                                        <Button className='bg-none text-white capitalize px-12 hover:text-indigo-500' variant="outlined" startIcon={<Add />}>
                                            Nouvelle dicussion
                                        </Button>
                                    </div>
                                </div>
                            </main>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <main>
                                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 border-dashed border-2 rounded-lg items-center gap-y-5">
                                    <div className="flex items-center justify-center flex-col py-6  ">
                                        <HiAcademicCap className='text-indigo-500 text-4xl' />
                                        <p>
                                            {currentUser?.name} n'a pas encore posté d'entreprises
                                        </p>
                                        <Button className='bg-none text-white capitalize py-5 px-12 hover:text-indigo-500' variant="outlined" startIcon={<Add />}>
                                            Nouvelle entreprise
                                        </Button>
                                    </div>
                                </div>
                            </main>
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>           
        </>
    );
}