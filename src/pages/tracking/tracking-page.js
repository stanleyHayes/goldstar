import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Alert,
    AlertTitle,
    Typography
} from "@mui/material";
import boxes from "../../assets/images/Shipping-Boxes-Around-Globe-Feature.jpg";
import {LoadingButton} from "@mui/lab";
import {ConfirmationNumber, InfoOutlined, Share} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as yup from "yup";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/tracking.jpg";
import {selectTracking, TRACKING_ACTION_CREATORS} from "../../redux/features/tracking/tracking-slice";
import {Link} from "react-router-dom";
import {useSnackbar} from "notistack";

const TrackingPage = () => {

    const {shipmentLoading, shipmentError, shipmentMessage, shipment} = useSelector(selectTracking);

    const {enqueueSnackbar} = useSnackbar();

    const showMessage = (message, options) => {
        enqueueSnackbar(message, options);
    }

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            tracking: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {
            dispatch(TRACKING_ACTION_CREATORS.track({
                trackingID: values.tracking,
                resetForm,
                setSubmitting,
                showMessage
            }));
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            tracking: yup.string().required('tracking required'),
        })
    });

    const handleShare = () => {
        window.navigator.clipboard.writeText(`https://tracking.goldstarshipping.com/${shipment.tracking}`).then(() => {
            enqueueSnackbar('Tracking link copied', {variant: 'success'});
        }).catch(error => {
            enqueueSnackbar(error, {variant: 'error'});
        });
    }

    return (
        <Layout>
            <Box>
                <Banner
                    title="Tracking"
                    links={[{label: 'Home', link: '/'}, {label: 'Tracking', link: '/tracking'}]}
                    backgroundImage={banner}
                />
            </Box>
            <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Box sx={{flex: 1, py: 4}}>
                        <Container maxWidth="sm">
                            <Typography sx={{color: 'text.primary', mb: 2}} variant="h5">
                                Tracking
                            </Typography>
                            <Box>
                                <Typography sx={{color: 'text.primary', mb: 2}} variant="body2">
                                    If you are expecting to receive a delivery from Star Gold Security and Shipping
                                    Company
                                    Shipping Department , then you can Track your Parcel or Shipment below:
                                </Typography>
                                <Typography sx={{color: 'text.secondary', mb: 2}} variant="body2">
                                    Our tracking system will tell you the current status of your delivery and when you
                                    can
                                    expect your parcel to be delivered
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={boxes}
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                minHeight: '50vh',
                backgroundColor: 'background.default',
                alignItems: 'center',
                display: 'flex',
                py: 4
            }}>
                <Container>
                    <Grid container={true} spacing={5}>
                        <Grid item={true} xs={12} md={6}>
                            <Box sx={{}}>
                                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                                    <Card variant="outlined" sx={{height: '100%'}}>
                                        <CardContent>
                                            {shipmentError && (
                                                <Alert sx={{mb: 2}} severity="error">
                                                    <AlertTitle>{shipmentError}</AlertTitle>
                                                </Alert>
                                            )}

                                            {shipmentMessage && (
                                                <Alert sx={{mb: 2}} severity="success">
                                                    <AlertTitle>{shipmentMessage}</AlertTitle>
                                                </Alert>
                                            )}

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Tracking Number
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel
                                                        htmlFor="tracking">Tracking ID</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.tracking}
                                                        id="tracking"
                                                        name="tracking"
                                                        type="text"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <ConfirmationNumber
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'secondary.main',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={Boolean(formik.touched.tracking && formik.errors.tracking)}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter shipment tracking id"
                                                        required={true}
                                                        label="Tracking ID"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.tracking && formik.errors.tracking && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.tracking}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <LoadingButton
                                                type="submit"
                                                size="large"
                                                color="secondary"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    py: 1.2
                                                }}
                                                fullWidth={true}
                                                loadingPosition="start"
                                                startIcon={shipmentLoading ?
                                                    <CircularProgress color="secondary"/> : null}
                                                loadingIndicator={shipmentLoading ?
                                                    <CircularProgress color="secondary"/> : null}
                                                loading={shipmentLoading}
                                                variant="contained"
                                                disableElevation={true}>
                                                {shipmentLoading ? 'Tracking...' : 'Track'}
                                            </LoadingButton>
                                        </CardContent>
                                    </Card>
                                </form>
                            </Box>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            {shipment ? (
                                <Card variant="outlined" sx={{height: '100%', borderStyle: 'dashed', borderWidth: 2}}>
                                    <CardContent>
                                        <Stack direction="column" spacing={2}>
                                            <Box>
                                                <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                    Package
                                                </Typography>
                                                {shipment && shipment.packages.map(p => {
                                                    return (
                                                        <Box key={p._id}>
                                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                                {`${p.content} x ${p.quantity}`}
                                                            </Typography>
                                                        </Box>
                                                    )
                                                })}
                                            </Box>
                                            <Box>
                                                <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                    Tracking Number
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    {shipment && shipment.tracking}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1" sx={{color: 'text.primary'}}>
                                                    Delivered to
                                                </Typography>
                                                <Box>
                                                    <Typography variant="body2"
                                                                sx={{color: 'text.secondary'}}>
                                                        {shipment && shipment.recipient && shipment.recipient.name}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                        ({shipment && shipment.recipient && shipment.recipient.phone})
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{color: 'text.secondary'}}>
                                                        {shipment && shipment.destination && `${shipment.destination.addressLine1} ${shipment.destination.addressLine2 ? shipment.destination.addressLine2 : ''}`}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                    <Divider variant="fullWidth" light={true}/>
                                    <CardActions>
                                        <Stack sx={{width: '100%'}} direction="row" justifyContent="space-between" alignItems="center">
                                            <Box sx={{flexGrow: 1}}>
                                                <Button
                                                    onClick={handleShare}
                                                    color="secondary"
                                                    size="medium"
                                                    sx={{textTransform: 'capitalize', flex: 1}}
                                                    fullWidth={true}
                                                    startIcon={<Share/>}
                                                    variant="text">
                                                    Share
                                                </Button>
                                            </Box>
                                            <Box sx={{ flexGrow: 1}}>
                                                <Link
                                                    to={`/tracking/${shipment.tracking}`}
                                                    style={{textDecoration: 'none'}}>
                                                    <Button
                                                        color="secondary"
                                                        size="medium"
                                                        sx={{textTransform: 'capitalize'}}
                                                        fullWidth={true}
                                                        startIcon={<InfoOutlined/>}
                                                        variant="text">
                                                        View Details
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </Stack>
                                    </CardActions>
                                </Card>
                            ) : (
                                <Card variant="outlined" sx={{height: '100%', borderStyle: 'dashed', borderWidth: 2}}>
                                    <Box
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                        <Typography sx={{color: 'text.primary'}} variant="h6">
                                            Shipping Details will appear here
                                        </Typography>
                                    </Box>
                                </Card>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default TrackingPage;
