import Layout from "../../components/layout/layout";
import {useParams} from "react-router";
import {
    Alert,
    AlertTitle,
    Avatar,
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme
} from "@mui/material";
import {useEffect} from "react";
import {selectTracking, TRACKING_ACTION_CREATORS} from "../../redux/features/tracking/tracking-slice";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import currencyFormatter from "currency-formatter";
import {SpatialTracking} from "@mui/icons-material";
import moment from "moment";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

const TrackingDetailPage = () => {
    const {tracking} = useParams();

    const dispatch = useDispatch();

    const {enqueueSnackbar} = useSnackbar();

    const showMessage = (message, options) => {
        enqueueSnackbar(message, options);
    }

    useEffect(() => {
        dispatch(TRACKING_ACTION_CREATORS.track({
            trackingID: tracking,
            showMessage
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tracking]);

    const {shipment, shipmentLoading, shipmentError} = useSelector(selectTracking);

    const theme = useTheme();

    return (
        <Layout>
            {shipmentLoading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 4}}>
                <Container>
                    {shipmentError && (
                        <Alert sx={{mb: 2}} severity="error">
                            <AlertTitle>{shipmentError}</AlertTitle>
                        </Alert>
                    )}


                    {shipment && (
                        <Box sx={{mb: 4}}>
                            <Typography variant="h6" sx={{color: 'text.primary', mb: 4}}>
                                Shipping Details
                            </Typography>
                            <Grid container={true} spacing={4}>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Stack direction="column" spacing={2}>
                                                <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                    Sender
                                                </Typography>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Name
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {`${shipment?.sender?.firstName} ${shipment?.sender?.lastName}`}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Phone
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.sender?.phone}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Email
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.sender?.email}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Stack direction="column" spacing={2}>
                                                <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                    Recipient
                                                </Typography>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Name
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.recipient?.name}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Phone
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.recipient?.phone}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Email
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.recipient?.email}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Stack direction="column" spacing={2}>
                                                <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                    Shipping Information
                                                </Typography>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Mode
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.mode}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Status
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.status}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Total Cost
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {currencyFormatter.format(shipment?.totalCost?.amount, {code: shipment?.totalCost?.currency})}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    )}

                    {shipment && (
                        <Box sx={{mb: 4}}>
                            <Typography variant="h6" sx={{color: 'text.primary', mb: 4}}>
                                Address Information
                            </Typography>
                            <Grid container={true} spacing={4}>
                                <Grid item={true} xs={12} md={6}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Stack direction="column" spacing={2}>
                                                <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                    Destination
                                                </Typography>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Country
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.destination?.country}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        State
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.destination?.stateOrRegionOrProvince}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        City
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.destination?.city}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Address Line 1
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.destination?.addressLine1}
                                                    </Typography>
                                                </Box>
                                                {shipment?.destination && shipment.destination.addressLine2 && (
                                                    <Box>
                                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                            Address Line 2
                                                        </Typography>
                                                        <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                            {shipment?.destination?.addressLine2}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Stack direction="column" spacing={2}>
                                                <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                    Origin
                                                </Typography>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Country
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.origin?.country}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        State
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.origin?.stateOrRegionOrProvince}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        City
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.origin?.city}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        Address Line 1
                                                    </Typography>
                                                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                        {shipment?.origin?.addressLine1}
                                                    </Typography>
                                                </Box>
                                                {shipment?.origin && shipment.origin.addressLine2 && (
                                                    <Box>
                                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                            Address Line 2
                                                        </Typography>
                                                        <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                            {shipment?.origin?.addressLine2}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    )}

                    {shipment && (
                        <Box>
                            <Typography variant="h5" sx={{color: 'text.primary', mb: 2}}>Packages</Typography>
                            <TableContainer component={Paper} elevation={0}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Content</TableCell>
                                            <TableCell>Value</TableCell>
                                            <TableCell>Weight</TableCell>
                                            <TableCell>Dimensions</TableCell>
                                            <TableCell>Insured</TableCell>
                                            <TableCell>Fragile</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {shipment && shipment.packages.map(p => {
                                            return (
                                                <TableRow key={p._id}>
                                                    <TableCell>
                                                        {`${p.quantity} X ${p.content}`}
                                                    </TableCell>
                                                    <TableCell>
                                                        {currencyFormatter.format(p?.value?.amount, {code: p?.value?.currency})}
                                                    </TableCell>
                                                    <TableCell>
                                                        {`${p.weight.amount} ${p.weight.unit}`}
                                                    </TableCell>
                                                    <TableCell>
                                                        {`${p.dimensions.length.amount}${p.dimensions.length.unit} X ${p.dimensions.width.amount}${p.dimensions.width.unit} X ${p.dimensions.height.amount}${p.dimensions.height.unit}`}
                                                    </TableCell>
                                                    <TableCell>
                                                        {p.extras.insured ? 'Yes' : 'No'}
                                                    </TableCell>
                                                    <TableCell>
                                                        {p.extras.fragile ? 'Yes' : 'No'}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )}

                    {shipment && (
                        <Grid container={true} justify="center">
                            <Grid item={true} xs={12}>
                                <VerticalTimeline animate={true}>
                                    {shipment?.stages.map((stage, index) => {
                                        return (
                                            <VerticalTimelineElement
                                                key={index}
                                                iconStyle={{
                                                    backgroundColor: theme.palette.background.paper
                                                }}
                                                icon={<SpatialTracking color="secondary"/>}
                                                date={
                                                    <Avatar sx={{backgroundColor: 'light.secondary'}}>
                                                        <Typography variant="h4" sx={{color: 'secondary.main'}}>
                                                            {stage.order}
                                                        </Typography>
                                                    </Avatar>
                                                } contentStyle={{
                                                background: theme.palette.background.paper,
                                                borderRadius: 16
                                            }}>
                                                <Card variant="elevation" elevation={0}>
                                                    <CardContent>
                                                        <Typography
                                                            sx={{color: 'text.secondary'}} gutterBottom={true}
                                                            variant="body2">
                                                            {stage.name}
                                                        </Typography>
                                                        <Divider sx={{my: 1}} variant="fullWidth" light={true}/>
                                                        <Typography
                                                            sx={{color: 'text.secondary'}}
                                                            variant="body2">
                                                            {stage.location}
                                                        </Typography>
                                                        <Divider sx={{my: 1}} variant="fullWidth" light={true}/>
                                                        <Typography
                                                            sx={{color: 'text.secondary'}}
                                                            gutterBottom={true}
                                                            variant="body2">
                                                            {moment(stage.date).fromNow()}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </VerticalTimelineElement>
                                        )
                                    })}
                                </VerticalTimeline>
                            </Grid>
                        </Grid>
                    )}

                </Container>
            </Box>
        </Layout>
    )
}

export default TrackingDetailPage;
