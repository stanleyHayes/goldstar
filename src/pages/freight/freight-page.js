import Layout from "../../components/layout/layout";
import {Box, CardMedia, Container, Stack, Typography} from "@mui/material";
import airFreight from "../../assets/images/unitedship-78-1.jpg";
import seaFreight from "../../assets/images/unitedship-73-1.jpg";
import landLogistics from "../../assets/images/unitedship-76-1.jpg";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/logistics.jpg";

const FreightPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    title="Freight Services"
                    links={[{label: 'Home', link: '/'}, {label: 'Freight', link: '/freight'}]}
                    backgroundImage={banner}
                />
            </Box>
            <Box sx={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.paper',
                py: 4
            }}>
                <Container maxWidth="md">
                    <Typography sx={{color: 'text.primary', mb: 2}} variant="h5">
                        Freight Services
                    </Typography>
                    <Box>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h6">
                            Warehousing and fulfillment services
                        </Typography>
                        <Typography sx={{color: 'text.secondary', mb: 2}} variant="body1">
                            Gold Star Security and Shipping Company Shipping Department provide forward stock locations,
                            warehousing, and pick and pack fulfillment services from our national network of service
                            centres. With experience across a number of sectors that require tailored services,
                            including
                            Healthcare, Retail, Publishing, IT and Telecoms industries, we provide a valuable support
                            service.
                        </Typography>
                        <Typography sx={{color: 'text.secondary', mb: 2}} variant="body1">
                            Using our proprietary or customers’ stock management solutions, we ensure efficient stock
                            control, replenishment and rotation, sending you regular updates on stock levels
                        </Typography>
                    </Box>

                    <Box>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h6">
                            Our warehousing service provides:
                        </Typography>
                        <Typography sx={{color: 'text.secondary', mb: 2}} variant="body1">
                            Flexible storage contract terms – only pay for what you need

                        </Typography>
                        <Typography sx={{color: 'text.secondary', mb: 2}} variant="body1">
                            Temporary and long term storage available
                        </Typography>
                        <Typography sx={{color: 'text.secondary', mb: 2}} variant="body1">
                            Stock replenishment and account management & reporting
                        </Typography>
                    </Box>

                    <Box>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h6">
                            Our forward stock locations and pick and pack services provide:
                        </Typography>
                        <Typography sx={{color: 'text.secondary', mb: 2}} variant="body1">
                            Immediate dispatch from a centralised location or forward stock location
                        </Typography>
                        <Typography sx={{color: 'text.secondary', mb: 2}} variant="body1">
                            Efficient stock control management via our bespoke system or via a provider of your choice
                        </Typography>
                        <Typography sx={{color: 'text.secondary', mb: 2}} variant="body1">
                            Parts swap and return service
                        </Typography>
                        <Typography sx={{color: 'text.secondary', mb: 2}} variant="body1">
                            As part of the pre-tender process or as a one-off review, if you need consultancy support to
                            optimise your existing delivery routes, model the impact of new routes or tighter delivery
                            windows, or just completely overhaul your ground transport strategy, our logistics planning
                            experts can help.
                        </Typography>
                        <Typography sx={{color: 'text.secondary', mb: 2}} variant="body1">
                            Our approach to logistics solution design combines industry experience, professional routing
                            software and a strategic consultancy team to provide optimised robust, reliable and scalable
                            solutions.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h6">
                            Our logistic solution design services offer:
                        </Typography>
                        <ol>
                            <li>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Independent consultancy
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Cost-benefit analysis
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Professional route audits and modelling
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Detailed transport planning
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    End-to-end route optimisation and work flow management
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Tender preparation support and logistics solutions scoping
                                </Typography>
                            </li>
                        </ol>
                    </Box>
                </Container>
            </Box>
            <Box sx={{minHeight: '50vh', backgroundColor: 'background.default'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Container sx={{flex: 1, py: 4}}>
                        <Stack direction="column" spacing={2}>
                            <Box>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="h6" sx={{
                                        color: 'text.primary',
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize'
                                    }}>
                                        AIR FREIGHT
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Gold Star Security and Shipping Company Shipping Dept is equipped with the right
                                        expertise, experience and capacity to ensure the safe handling and appropriate
                                        transportation of your valuable shipments that may range from large scale
                                        manufacturing and sensitive equipment, engineering products
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Container>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={airFreight}
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
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'center',
                flexDirection: {xs: 'column', lg: 'row'}
            }}>
                <Box sx={{flex: 1, minHeight: '100%'}}>
                    <CardMedia
                        component="img"
                        src={seaFreight}
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </Box>
                <Container sx={{py: 4, flex: 1}}>
                    <Stack direction="column" spacing={2}>
                        <Box>
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h6" sx={{
                                    color: 'text.primary',
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold'
                                }}>
                                    SEA FREIGHT
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Gold Star Security and Shipping Company Shipping Department understand that cost is a
                                    prime factor for our customers. With our large scale cargo volume to various
                                    destinations,
                                    Gold Star Security and Shipping Company Shipping Department is able to provide cargo
                                    consolidation services at maximum frequency to the benefit of our customers .
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Gold Star Security and Shipping Company Shipping Department understand that cost is a
                                    prime factor for our customers. With our large scale cargo volume to various
                                    destinations, Gold Star Security and Shipping Company Shipping Departments Courier is
                                    able to provide cargo consolidation services at maximum frequency to the benefit of
                                    our customers by carrying their small volume cargo at minimal cost
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Gold Star Security and Shipping Company Shipping Department offers its Sea Freight
                                    Services at competitive advantage, benchmarking on her international partners
                                    contract with many of the world’s leading ocean carriers. We handle all sea freight
                                    businesses and all other international security standards and environmental
                                    standards. We offer professional and high quality sea freight services, with
                                    personal escort which will enable you to transfer your cargo to its destination in
                                    the most secure and low priced manner. The sea freight department of Courier offers
                                    a wide variety of sea shipping solutions, such as: whole and partial container
                                    shipping, refrigerated shipments, food, textiles, raw materials, machines, personal
                                    items and more.
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{minHeight: '50vh', backgroundColor: 'background.default'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Container sx={{flex: 1, py: 4}}>
                        <Typography variant="h5" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                            LAND LOGISTICS
                        </Typography>
                        <Box>
                            <Stack direction="column" spacing={2}>
                                <Typography variant="body2" sx={{color: 'text.primary'}}>
                                    Gold Star Security and Shipping Company Shipping Department offers an efficient
                                    integrated transport system with multiple types of trucks available to support your
                                    trucking and distribution needs. Our trucking service extends to various locations
                                    such as offices, warehouses, exhibition venue to neigh.
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.primary'}}>
                                    Gold Star Security and Shipping Company Shipping Department offers an efficient
                                    integrated transport system with multiple types of trucks available to support your
                                    trucking and distribution needs. Our trucking service extends to various locations
                                    such as offices, warehouses, exhibition venue to neighboring countries. All cargos
                                    are handled carefully, tracked and distributed in precise accordance with our
                                    customer’s schedule, assuring on-time deliveries.
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.primary'}}>
                                    Gold Star Security and Shipping Company Shipping Department Courier offers an
                                    efficient integrated transport system with multiple types of trucks available to
                                    support your trucking and distribution needs. All cargos are handled carefully,
                                    tracked and distributed in precise accordance with our customer’s schedule, assuring
                                    on-time deliveries. Outsourced logistics services are a perfect solution for
                                    businessmen and companies who strive to focus on their core business and leave the
                                    peripheral solutions to the professionals. As part of the variety of our services,
                                    we offer to our clients extensive, advanced and varied services whilst handling the
                                    various goods strictly and accurately.
                                </Typography>
                            </Stack>
                        </Box>
                    </Container>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={landLogistics}
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
            <Box sx={{minHeight: '50vh', py: 5, display: 'flex', alignItems: 'center', backgroundColor: 'background.paper'}}>
                <Container>
                    <Typography sx={{color: 'secondary.main', mb: 2, textTransform: "uppercase"}} variant="h5">
                        We are Fastest and most reliable courier service
                    </Typography>
                    <Typography sx={{color: 'text.primary'}} variant="body2">
                        We are determined to set ourselves apart as the fastest and most reliable courier service in
                        United Kingdom, and across the world. In order to do that, we will continue to work very hard to
                        ensure that vital business and personal packages go where they need to go and get there on time,
                        every time. We will be happy to go the extra mile for you, and you can count on us to get your
                        letter or parcel to its destination when you need it to be there, not hours later or at our
                        convenience. At Gold Star Security and Shipping Company Shipping Department, our main objective
                        is to provide professional, reliable, and economical courier and messenger service for anyone
                        who needs it. From letter and small parcels to large freight items, we can accommodate all your
                        courier service requirements in United Kingdom, United States, and across all continents. Give
                        us a call and see how much our affordable, fast, and on-time delivery service can benefit your
                        business. You will improve the relationship you have with your customers and have one less worry
                        when it comes to keeping your company moving forward.
                    </Typography>
                </Container>
            </Box>
        </Layout>
    )
}

export default FreightPage;
