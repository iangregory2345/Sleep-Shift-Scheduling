import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table, TableCellRenderer, TableHeaderProps } from 'react-virtualized';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import moment from 'moment';
import { Button } from '@material-ui/core';
import './Table.css'

const styles = (theme) =>
    createStyles({
        flexContainer: {
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
        },
        table: {
            // temporary right-to-left patch, waiting for
            // https://github.com/bvaughn/react-virtualized/issues/454
            '& .ReactVirtualized__Table__headerRow': {
                flip: false,
                paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
            },
        },
        tableRow: {
            cursor: 'pointer',
        },
        tableRowHover: {
            '&:hover': {
                backgroundColor: theme.palette.grey[200],
            },
        },
        tableCell: {
            flex: 1,
        },
        noClick: {
            cursor: 'initial',
        },
    });

// interface ColumnData {
//   dataKey: string;
//   label: string;
//   numeric?: boolean;
//   width: number;
// }

// interface Row {
//   index: number;
// }

// interface MuiVirtualizedTableProps extends WithStyles<typeof styles> {
//   columns: ColumnData[];
//   headerHeight?: number;
//   onRowClick?: () => void;
//   rowCount: number;
//   rowGetter: (row: Row) => Data;
//   rowHeight?: number;
// }

class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, classes, rowHeight, onRowClick } = this.props;
        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{ height: rowHeight }}
                align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns, classes } = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight}
                        gridStyle={{
                            direction: 'inherit',
                        }}
                        headerHeight={headerHeight}
                        className={classes.table}
                        {...tableProps}
                        rowClassName={this.getRowClassName}
                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={(headerProps) =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

const toReadableTime = (duration) => {
    var minutes = moment.utc(duration).format("mm")
    var hours = moment.duration(duration).asHours().toFixed()
    return hours + ":" + minutes
}

export default function ReactVirtualizedTable(props) {

    const onClick = () => {
        props.history.push({
            pathname: "/home", 
            props: props.history.location.props
        })
    }

    console.log(props)
    const rawData = props.location.props;
    console.log(rawData)
    var rows = []
    rawData.forEach(elem => {
        rows.push({ eventType: elem.eventType, start: elem.startMoment.toDate().toDateString() + ',' + elem.startMoment.format('HH:MM'), end: elem.endMoment.toDate().toDateString()+ ',' + elem.endMoment.format('HH:MM'), duration: toReadableTime(elem.duration) })
    })
    console.log(rows)
    rows = rows.filter(elem => elem.eventType !== "mbt")
    return (
        <div>
            <h1 className={"title"}>Schedule <AssignmentIcon fontSize="large"></AssignmentIcon></h1>
            <Paper style={{ height: 400, width: '100%', top: "100px" }}>
                <VirtualizedTable
                    rowCount={rows.length}
                    rowGetter={({ index }) => rows[index]}
                    columns={[
                        {
                            width: 100,
                            label: 'Event',
                            dataKey: 'eventType',
                        },
                        {
                            width: 200,
                            label: 'Start',
                            dataKey: 'start',
                        },
                        {
                            width: 200,
                            label: 'End',
                            dataKey: 'end',
                        },
                        {
                            width: 150,
                            label: 'Duration',
                            dataKey: 'duration',
                            // numeric: true,
                        },
                    ]}
                />
            </Paper>
            <Button startIcon={<HomeIcon></HomeIcon>} variant="contained" className={"table-button-icon"} onClick={() => onClick()}>Home</Button>
        </div>

    );
}