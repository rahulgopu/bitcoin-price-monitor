import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';

function Header(props){
    return(
        
            // <nav className="header navbar navbar-dark bg-dark" style={{overflowX: 'hidden'}}>
            //     <div className="text-center mx-auto">            
            //         <div className="">
            //             <i className="fa fa-btc fa-3x my-auto d-inline-block" style={{color: '#ff9900'}}></i>
            //             <div className="h3 ml-3 my-auto text-light d-inline-block">{props.title}</div>
            //         </div>
            //     </div>
            // </nav>

        <AppBar position="static">
            <div className="text-center mx-auto">
                <Toolbar>
                    <i className="fa fa-btc fa-3x my-auto d-inline-block" style={{color: '#ff9900'}}></i>
                    <Typography align="center" variant="h6" component="div">
                        <Box fontWeight="fontWeightBold" fontSize={26} fontStyle="italic" fontFamily="Monospace" m={1}>
                            {props.title}
                        </Box>
                    </Typography>
                </Toolbar>
            </div>
        </AppBar>
    );
} 

Header.defaultProps = {
    title: 'App'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;