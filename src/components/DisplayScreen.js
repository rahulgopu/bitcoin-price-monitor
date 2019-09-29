import React from 'react';
import PropTypes from 'prop-types';
import {Indicator} from './Indicator';
import { Table, TableBody, TableCell, TableHead, TableRow, Card, Toolbar, FormControl, Select } from '@material-ui/core';

const formatNumber = (number) => number.toFixed(4).toString().padEnd(11, '0');

const DisplayScreen = (props) => ( 
    <div>
        <Card>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Currency</TableCell>
                        <TableCell>Previous Rate</TableCell>
                        <TableCell>Current Rate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Toolbar>
                                <i className="fa fa-usd fa-lg"></i>
                            </Toolbar>
                        </TableCell>
                        <TableCell>{formatNumber(props.prices.USD.previousRate)}</TableCell>
                        <TableCell>
                            {formatNumber(props.prices.USD.currentRate)}
                            <Indicator
                                currentRate={props.prices.USD.currentRate}
                                previousRate={props.prices.USD.previousRate} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Toolbar>
                                <i className="fa fa-eur fa-lg"></i>
                            </Toolbar>
                        </TableCell>
                        <TableCell>{formatNumber(props.prices.EUR.previousRate)}</TableCell>
                        <TableCell>
                            {formatNumber(props.prices.EUR.currentRate)}
                            <Indicator
                                currentRate={props.prices.EUR.currentRate}
                                previousRate={props.prices.EUR.previousRate} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Toolbar>
                                <i className="fa fa-gbp fa-lg"></i>
                            </Toolbar>
                        </TableCell>
                        <TableCell>{formatNumber(props.prices.GBP.previousRate)}</TableCell>
                        <TableCell>
                            {formatNumber(props.prices.GBP.currentRate)}
                            <Indicator 
                                currentRate={props.prices.GBP.currentRate}
                                previousRate={props.prices.GBP.previousRate} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <FormControl variant="outlined">
                                <Select
                                    native
                                    onChange={props.onCurrencyChanged}
                                >
                                {
                                    props.currencies && props.currencies.map(currency => (
                                        <option key={currency.currency} value={currency.currency}>
                                            {currency.currency}
                                        </option>
                                    ))
                                }
                                </Select>
                            </FormControl>

                        </TableCell>
                        <TableCell>
                            {props.prices.SELECTED && formatNumber(props.prices.SELECTED.previousRate)}
                        </TableCell>
                        <TableCell>
                            {
                                props.prices.SELECTED &&
                                <div>
                                    {formatNumber(props.prices.SELECTED.currentRate)}
                                    <Indicator
                                        currentRate={props.prices.SELECTED.currentRate}
                                        previousRate={props.prices.SELECTED.previousRate} />
                                </div>
                            }
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    </div>
);

DisplayScreen.propTypes = {
    currencies: PropTypes.array,
    prices: PropTypes.object,
    onCurrencyChanged: PropTypes.func,
};

export {DisplayScreen};