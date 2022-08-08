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
    Typography,
    useTheme
} from "@mui/material";
import {GOLD_STAR_DATA} from "../../utils/data";
import Service from "../../components/shared/service";
import facility from "./../../assets/images/facility.jpg";
import safe from "./../../assets/images/oggif-2.jpg";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Alert, AlertTitle, LoadingButton} from "@mui/lab";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import {AUTH_ACTION_CREATORS, selectAuth} from "../../redux/features/auth/auth-slice";
import {ConfirmationNumber, MailOutline, Visibility, VisibilityOff} from "@mui/icons-material";
import banner from "./../../assets/images/banner.jpg";
import Overlay from "../../components/shared/overlay";
import {selectTracking, TRACKING_ACTION_CREATORS} from "../../redux/features/tracking/tracking-slice";

const HomePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {authLoading, authError, authMessage} = useSelector(selectAuth);
    const {shipmentLoading} = useSelector(selectTracking);
    const {enqueueSnackbar} = useSnackbar();

    const showMessage = (message, options) => {
        enqueueSnackbar(message, options);
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {
            dispatch(AUTH_ACTION_CREATORS.login({values, navigate, resetForm, showMessage, setSubmitting}));
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            email: yup.string().required('email required'),
            password: yup.string().required('Password required'),
        })
    });

    const [showPassword, setShowPassword] = useState(false);

    const theme = useTheme();

    const trackingFormik = useFormik({
        initialValues: {
            tracking: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {
            dispatch(TRACKING_ACTION_CREATORS.track({trackingID: values.tracking, resetForm, setSubmitting, navigate, showMessage}));
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            tracking: yup.string().required('tracking required'),
        })
    });


    return (
        <Layout>
            <Overlay
                children={
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                        <Container>
                            <Grid container={true} spacing={4} alignItems="center">
                                <Grid item={true} xs={12} md={6}>
                                    <Typography variant="h4" sx={{color: 'white', mb: 2}}>
                                        Gold Star Shipping and Security
                                    </Typography>
                                    <form autoComplete="off" onSubmit={trackingFormik.handleSubmit}>
                                        <Card variant="outlined" sx={{backgroundColor: 'background.transparent'}}>
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
                                                            error={Boolean(trackingFormik.touched.tracking && trackingFormik.errors.tracking)}
                                                            onChange={trackingFormik.handleChange}
                                                            onBlur={trackingFormik.handleBlur}
                                                            placeholder="Enter shipment tracking number"
                                                            required={true}
                                                            label="Tracking Number"
                                                            size="medium"
                                                            color="secondary"
                                                            margin="dense"
                                                        />
                                                        {trackingFormik.touched.tracking && trackingFormik.errors.tracking && (
                                                            <FormHelperText
                                                                error={true}>
                                                                {trackingFormik.errors.tracking}
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
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>}
                image={banner}
                backgroundColor="#000000"/>
            <Box sx={{backgroundColor: 'background.paper', minHeight: '50vh', py: 5, display: 'flex', alignItems: 'center'}}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
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
                                                    Email
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel
                                                        htmlFor="email">Email</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.email}
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <MailOutline
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'secondary.main',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.email && formik.errors.email}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter username or email or phone"
                                                        required={true}
                                                        label="Email"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.email && formik.errors.email && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.email}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Box mb={4}>
                                                <Typography mb={1} variant="body2"
                                                            sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Password
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="password">Password</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        id="password"
                                                        value={formik.values.password}
                                                        name="password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                {showPassword ?
                                                                    <VisibilityOff
                                                                        onClick={() => setShowPassword(false)}
                                                                        sx={{
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            padding: 1,
                                                                            fontSize: 24,
                                                                        }}
                                                                    /> :
                                                                    <Visibility
                                                                        onClick={() => setShowPassword(true)}
                                                                        sx={{
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            padding: 1,
                                                                            fontSize: 24,
                                                                        }}
                                                                    />}
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.password && formik.errors.password}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter password"
                                                        required={true}
                                                        label="Password"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.password && formik.errors.password && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.password}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Typography mb={4} variant="body2" sx={{color: 'text.secondary'}}>
                                                <Link
                                                    style={{
                                                        color: theme.palette.secondary.main,
                                                        textDecoration: 'none'
                                                    }}
                                                    to="/auth/forgot-password">
                                                    I forgot my password
                                                </Link>
                                            </Typography>

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
                                                {authLoading ? 'Signing In...' : 'Sign In'}
                                            </LoadingButton>
                                        </CardContent>
                                    </Card>
                                </form>
                            </Box>
                        </Grid>
                        <Grid item={true} xs={12} md={8}>
                            <Typography sx={{color: 'secondary.main', mb: 2}} variant="h5">
                                Gold Star Security and Shipping Company Storage For Gold And Silver
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                You can rest well knowing your precious metals are stored with Platinum Security and
                                Shipping Company. We offer the safest and most cost effective gold and silver vault
                                storage in the industry, with 24 hour online access and our legendary customer service.
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Through strategic partnerships with the world’s top institutional vault providers, our
                                customers can attain fully-insured and segregated gold and silver storage around the
                                world, at prices far below the alternatives.
                            </Typography>

                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                With our segregated storage:
                            </Typography>
                            <ul>
                                <li>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Metals are held solely in your name (or a joint account, trust, LLC or other
                                        option you choose).
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        The exact bullion you buy is always stored separately, and independently audited
                                        and verified – no pooling or shared ownership, just your metals in your title.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Customers receive regular custody certificates documenting their holdings and
                                        account inventory levels.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Your holdings are a secure phone call or a few clicks away from door delivery or
                                        a sellback directly from storage.
                                    </Typography>
                                </li>
                            </ul>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{minHeight: '50vh', py: 5}}>
                <Container>
                    <Typography sx={{color: 'secondary.main', mb: 2}} variant="h4">
                        Our Services
                    </Typography>

                    <Grid container={true} spacing={2}>
                        {GOLD_STAR_DATA.SERVICES.map((service, index) => {
                            return (
                                <Grid xs={12} md={6} lg={4} item={true} key={index}>
                                    <Service service={service}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
            <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Container sx={{flex: 1, py: 4}}>
                        <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                            Vault & Secure Storage Facilities
                        </Typography>
                        <Stack direction="column" spacing={2}>
                            <Box>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="h6" sx={{
                                        color: 'text.primary',
                                        fontWeight: 500,
                                        textTransform: 'capitalize'
                                    }}>
                                        Vault & Secure Storage Facilities
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Platinum Security and Shipping Company Limited’s highly-secured, strategically
                                        located storage facilities are recognized as market leaders. All our vaults are
                                        strategically located in international Free Trade Zones or enjoy bonded status.
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="h6" sx={{
                                        color: 'text.primary',
                                        fontWeight: 500,
                                        textTransform: 'capitalize'
                                    }}>
                                        Vault Storage Specifications
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Storage units available range from safety deposit boxes suitable for individuals
                                        all the way up to entire dedicated vaults customized to meet the most stringent
                                        requirements of banks, global corporations and financial institutions.
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Container>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={facility}
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
                py: 4,
                display: 'flex',
                alignItems: 'center'
            }}>
                <Container>
                    <Stack direction="column" spacing={2}>
                        <Box>
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h6" sx={{
                                    color: 'text.primary',
                                    fontWeight: 500,
                                    textTransform: 'capitalize'
                                }}>
                                    Security and Safety Features
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.primary'}}>
                                    Our vaults’ security and safety systems have been designed from the ground up
                                    incorporating a unique tailored mix of physical surveillance, cutting-edge
                                    technology, 24/7 monitored CCTV together with alarm, climate, and fire control
                                    systems. Security at each vault is paramount. Our Belgium,USA,Singapore facility
                                    has attracted international acclaim and our London facility is the only
                                    commercial facility in the UK to have a vault that meets levels Grade XII (EX)
                                    (CD) and EN 1143-1. Platinum Security and Shipping Company Security has CTPAT
                                    approval; AEO approval; and is a DFT Regulated Agent.
                                </Typography>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h6" sx={{
                                    color: 'text.primary',
                                    fontWeight: 500,
                                    textTransform: 'capitalize'
                                }}>
                                    FTZ Advantages
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.primary'}}>
                                    Our secured storage facilities located in Free Trade Zones around the world
                                    enable
                                    companies, institutions and individuals to store precious metals, luxury goods,
                                    fine art &
                                    rarities and diamonds & jewellery with a 100% duty-free exemption. Commodities
                                    can be
                                    imported into the FTZ located facilities tax-free, allowing them to be stored
                                    and freely
                                    traded there until imported into the region or re-exported tax-free. Platinum
                                    Security and
                                    Shipping Company provides flexible and full-service logistical support service
                                    for the
                                    importation process of any items, return of items to overseas, as
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Container sx={{flex: 1, py: 4}}>
                        <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                            Safe Deposit Box Insurance
                        </Typography>
                        <Box>
                            <Stack direction="column" spacing={2}>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    At Gold Star Security and Shipping Company Limited, we offer our clients a
                                    comprehensive insurance policy to cover the contents of their safe deposit box.
                                    Clients can acquire immediate insurance cover for the contents of their safe
                                    deposit box at Platinum Security and Shipping Company Limited to the value of
                                    the contents of their box. This will also allow our clients to avail of much
                                    lower household premiums by storing their valuables with us – please check with
                                    your insurer for further details. Platinum Security and Shipping Company Limited
                                    also provide complimentary insurance to all box holders for year 1 of rental.
                                    Each box can be insured at an additional cost. Higher insurance amounts by
                                    request – Please contact us to find out more.
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Please note our clients are not required to disclose the nature of the items
                                    stored in their box at the time of rental. In the highly unlikely event of a
                                    claim, a client would be required to disclose the nature of the items to which
                                    the claim relates and, as with any insurance claim, you will be required to back
                                    up any claim with proof of the items being claimed. We would recommend that you
                                    keep valuation certificates, invoices and/or photographs of the items stored.
                                </Typography>
                            </Stack>
                        </Box>
                    </Container>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={safe}
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
        </Layout>
    )
}

export default HomePage;
