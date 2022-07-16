import Layout from "../../components/layout/layout";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import boxes from "../../assets/images/Shipping-Boxes-Around-Globe-Feature.jpg";
import {Alert, AlertTitle, LoadingButton} from "@mui/lab";
import {ConfirmationNumber} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {useFormik} from "formik";
import * as yup from "yup";

const TrackingPage = () => {


    const {authLoading, authError, authMessage} = useSelector(selectAuth);

    const formik = useFormik({
        initialValues: {
            tracking: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {

        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            tracking: yup.string().required('tracking required'),
        })
    });


    return (
        <Layout>
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
                                    <Card variant="outlined">
                                        <CardContent>
                                            {authError && (
                                                <Alert severity="error">
                                                    <AlertTitle>{authError}</AlertTitle>
                                                </Alert>
                                            )}

                                            {authMessage && (
                                                <Alert severity="error">
                                                    <AlertTitle>{authMessage}</AlertTitle>
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
                                                        htmlFor="tracking">Tracking Number</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.tracking}
                                                        id="tracking"
                                                        name="tracking"
                                                        type="tracking"
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
                                                        error={formik.touched.tracking && formik.errors.tracking}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter shipment tracking number"
                                                        required={true}
                                                        label="Tracking Number"
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
                                                startIcon={authLoading ?
                                                    <CircularProgress color="secondary"/> : null}
                                                loadingIndicator={authLoading ?
                                                    <CircularProgress color="secondary"/> : null}
                                                loading={authLoading}
                                                variant="contained"
                                                disableElevation={true}>
                                                {authLoading ? 'Tracking...' : 'Track'}
                                            </LoadingButton>
                                        </CardContent>
                                    </Card>
                                </form>
                            </Box>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Card variant="outlined" sx={{height: '100%', borderStyle: 'dashed', borderWidth: 2}}>
                                <CardContent sx={{height: '100%'}}>
                                    <Stack
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{height: '100%'}}>
                                        <Typography align="center" sx={{color: 'text.primary', mb: 2}} variant="h6">
                                            Shipping Details will appear here
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default TrackingPage;
