import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {Call, LocationOn, Mail, MailOutline, PersonOutline} from "@mui/icons-material";
import contactLogo from "./../../assets/images/contact-us.png";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {AUTH_ACTION_CREATORS, selectAuth} from "../../redux/features/auth/auth-slice";
import {useSnackbar} from "notistack";
import {useFormik} from "formik";
import * as yup from "yup";
import "yup-phone";
import {LoadingButton} from "@mui/lab";


const ContactPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {authLoading, authError, authMessage} = useSelector(selectAuth);
    const {enqueueSnackbar} = useSnackbar();

    const showMessage = (message, options) => {
        enqueueSnackbar(message, options);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            subject: '',
            email: '',
            phone: '',
            message: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {
            dispatch(AUTH_ACTION_CREATORS.login({values, navigate, resetForm, showMessage, setSubmitting}));
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            email: yup.string().email('Invalid email').required('email required'),
            name: yup.string().required('name required'),
            phone: yup.string().phone('Invalid phone').required('phone required'),
            subject: yup.string().required('subject required'),
            message: yup.string().required('Message required'),
        })
    });

    return (
        <Layout>
            <Box sx={{py: 5}}>
                <Container>
                    <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                        Contact Us
                    </Typography>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Typography variant="h5" sx={{color: 'text.primary'}}>
                                            United Kingdom Office.
                                        </Typography>
                                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                                            Gold Star Security and Shipping Company
                                        </Typography>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <LocationOn sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="#" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    13 Exning Rd Newmarket, CB8 OJD
                                                </Typography>
                                            </Link>
                                        </Stack>

                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Call sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="tel://+233 30 2738 473" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    +447520605728
                                                </Typography>
                                            </Link>
                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Mail sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="mailto://info@goldstarsshipping.com." underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    info@goldstarshipping.com.
                                                </Typography>
                                            </Link>
                                        </Stack>

                                        <Typography
                                            gutterBottom={true} variant="body2"
                                            sx={{color: 'text.secondary'}}>
                                            Tours are available Monday-Saturday during any time of day (even outside
                                            business
                                            hours); if scheduled in advance.
                                        </Typography>
                                        <Typography
                                            gutterBottom={true} variant="body2"
                                            sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                            Walk in’s are not available without contacting us in advance.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Typography variant="h5" sx={{color: 'text.primary'}}>
                                            United States Office.
                                        </Typography>
                                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                                            Gold Star Security and Shipping Company
                                        </Typography>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <LocationOn sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="#" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    36-06 43rd Avenue
                                                    Long Island City, NY 11101
                                                </Typography>
                                            </Link>
                                        </Stack>

                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Call sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="tel://+1 443-341-1848" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    +1 443-341-1848
                                                </Typography>
                                            </Link>
                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Mail sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="mailto://info@goldstarsshipping.com." underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    info@goldstarsshipping.com.
                                                </Typography>
                                            </Link>
                                        </Stack>

                                        <Typography
                                            gutterBottom={true} variant="body2"
                                            sx={{color: 'text.secondary'}}>
                                            Tours are available Monday-Saturday during any time of day (even outside
                                            business
                                            hours); if scheduled in advance.
                                        </Typography>
                                        <Typography
                                            gutterBottom={true} variant="body2"
                                            sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                            Walk in’s are not available without contacting us in advance.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Typography variant="h5" sx={{color: 'text.primary'}}>
                                            Ghana Office.
                                        </Typography>
                                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                                            Gold Star Security and Shipping Company
                                        </Typography>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <LocationOn sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="#" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    22 Cown Ave.
                                                    PO Box 136.
                                                    Kotoka International Airport
                                                    Ghana
                                                </Typography>
                                            </Link>
                                        </Stack>

                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Call sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="tel://+233 54-948-7681" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    +233 54-948-7681
                                                </Typography>
                                            </Link>
                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Mail sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="mailto://info@goldstarsshipping.com." underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    info@goldstarsshipping.com.
                                                </Typography>
                                            </Link>
                                        </Stack>

                                        <Typography
                                            gutterBottom={true} variant="body2"
                                            sx={{color: 'text.secondary'}}>
                                            Tours are available Monday-Saturday during any time of day (even outside
                                            business
                                            hours); if scheduled in advance.
                                        </Typography>
                                        <Typography
                                            gutterBottom={true} variant="body2"
                                            sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                            Walk in’s are not available without contacting us in advance.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Typography variant="h5" sx={{color: 'text.primary'}}>
                                            Finland Office.
                                        </Typography>
                                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                                            Gold Star Security and Shipping Company
                                        </Typography>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <LocationOn sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="#" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    Kaivosrinteentie 4,
                                                    01610 Vantaa,
                                                </Typography>
                                            </Link>
                                        </Stack>

                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Call sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="tel://+358 24 8090327" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    +358 24 8090327
                                                </Typography>
                                            </Link>
                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Mail sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                                borderRadius: '25%',
                                                backgroundColor: 'light.secondary'
                                            }}/>
                                            <Link href="mailto://info@goldstarsshipping.com." underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    info@goldstarsshipping.com.
                                                </Typography>
                                            </Link>
                                        </Stack>

                                        <Typography
                                            gutterBottom={true} variant="body2"
                                            sx={{color: 'text.secondary'}}>
                                            Tours are available Monday-Saturday during any time of day (even outside
                                            business
                                            hours); if scheduled in advance.
                                        </Typography>
                                        <Typography
                                            gutterBottom={true} variant="body2"
                                            sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                            Walk in’s are not available without contacting us in advance.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{py: 5}}>
                <Container>
                    <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                        Send Us an Email
                    </Typography>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <form autoComplete="off" onSubmit={formik.handleSubmit}>

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
                                                    Name
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="name">Name</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.name}
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <PersonOutline
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'secondary.main',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.name && formik.errors.name}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter name"
                                                        required={true}
                                                        label="Name"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.name && formik.errors.name && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.name}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Email
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="email">Email</InputLabel>
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
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Message
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="message">Message</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        id="message"
                                                        value={formik.values.message}
                                                        name="message"
                                                        type="text"
                                                        error={formik.touched.message && formik.errors.message}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter message"
                                                        required={true}
                                                        label="Message"
                                                        size="medium"
                                                        margin="dense"
                                                        multiline={true}
                                                        minRows={5}
                                                    />
                                                    {formik.touched.message && formik.errors.message && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.message}
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
                                                {authLoading ? 'Sending...' : 'Send message'}
                                            </LoadingButton>
                                        </form>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Box
                                sx={{
                                    flex: 1,
                                    maxHeight: '100vh',
                                    backgroundColor: 'background.default'
                                }}>
                                <Stack sx={{height: '100%'}} justifyContent="center" alignItems="center">
                                    <img
                                        style={{
                                            maxHeight: '100vh',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                        alt=""
                                        src={contactLogo}
                                    />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default ContactPage;
