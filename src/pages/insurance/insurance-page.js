import Layout from "../../components/layout/layout";
import {Box, CardMedia, Container, Stack, Typography} from "@mui/material";
import safe from "../../assets/images/oggif-2.jpg";
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/insurnce.jpg";

const InsurancePage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    title="Insurance"
                    links={[{label: 'Home', link: '/'}, {label: 'Insurance', link: '/insurance'}]}
                    backgroundImage={banner}
                />
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

export default InsurancePage;
