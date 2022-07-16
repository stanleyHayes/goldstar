import Layout from "../../components/layout/layout";
import {Box, Container, Stack, Typography} from "@mui/material";

const SafetyAndSecurityPage = () => {
    return (
        <Layout>
            <Box sx={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.default',
                py: 4
            }}>
                <Container maxWidth="md">
                    <Typography sx={{color: 'text.primary', mb: 2}} variant="h5">
                        The ultimate in secure storage
                    </Typography>
                    <Typography sx={{color: 'text.primary', mb: 2}} variant="body1">
                        The security of your possessions and/or business items, together with your own safety while
                        accessing our stores is the most important aspect of our business!
                    </Typography>
                    <Stack spacing={2}>
                        <Box>
                            <Stack spacing={2}>
                                <Typography sx={{color: 'text.primary'}} variant="body1">
                                    Our security measures for secure storage include:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            access control – all new customers are required to have their photograph
                                            taken,
                                            as well as provide proof of identity and current residential address
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            electrified perimeter fencing and, in some facilities, supported by infrared
                                            beams on the inside of the perimeter fence
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            computer controlled access via your dedicated personal tag which is linked
                                            to
                                            our system
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            alarm systems
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            24 hour CCTV surveillance via strategically located cameras
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            the unit is locked with your own padlock and you retain the key
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            fire extinguishers, as well as fire detection and alarm system in some
                                            facilities
                                        </Typography>
                                    </li>
                                </ul>
                            </Stack>
                        </Box>

                        <Box>
                            <Stack spacing={2}>
                                <Typography sx={{color: 'text.primary'}} variant="body1">
                                    Items which we have identified as hazardous and/or not suitable for self storage,
                                    and
                                    which we do not allow our customers to store in our secure storage facilities are
                                    (please note this list is no exhaustive):
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            toxic, pollutants or contaminated goods
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            firearms, munitions or explosives
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            radioactive materials
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            hazardous goods
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            living plants or animals
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            food or perishable goods
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            cash and securities
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            illegal goods
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            waste
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            flammable liquids, including petrol
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            full or empty gas cylinders
                                        </Typography>
                                    </li>
                                </ul>
                            </Stack>
                        </Box>

                        <Box>
                            <Stack spacing={2}>
                                <Typography sx={{color: 'text.primary'}} variant="body1">
                                    Platinum Security and ShippingCompany Vaults serve the needs of government,
                                    corporations, business and private individuals. Various sizes in storage vaults and
                                    other storage facilities are available to suit big and small needs. The following
                                    safe depository sizes are available.
                                </Typography>
                                <ol>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            Standard Safe Deposit Boxes: Ranging from 2″ x 5″ x 24″ to 10″ x 10″ x 24″.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            Large Safe Deposit Boxes: Ranging from 22″ x 16″ x 24″ to 44″ x 16″ 24″
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            Bulk Storage Depository: Ranging from 34 5″/ 8 x 16 15″ /16 x 24″.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            Computer Media / Microfilm / Microfiche Record Cabinets
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            An underground library type storage vault.
                                        </Typography>
                                    </li>
                                </ol>
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Layout>
    )
}

export default SafetyAndSecurityPage;
