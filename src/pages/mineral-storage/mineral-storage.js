import Layout from "../../components/layout/layout";
import {Box, Container, Stack, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/storage.jpg";

const MineralStoragePage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    title="Mineral Storage"
                    links={[{label: 'Home', link: '/'}, {label: 'Storage', link: '/mineral-storage'}]}
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
                        SAFE KEEPING
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}} variant="body2">
                        We are a global gold safety keeping company operating across the world. Our client’s demands has
                        expanded in this age of international terrorism to include a new approach for the security of
                        their valuables and properties. This service goes beyond normal confidential work and the risks
                        involved in theft, robbery, foul play, and assault; security has become indispensable to the
                        overall performance of people and business assets. We provide our clients with the peace of mind
                    </Typography>
                </Container>
            </Box>
            <Box sx={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.default',
                py: 4
            }}>
                <Container maxWidth="md">
                    <Typography sx={{color: 'text.primary', mb: 2}} variant="h5">
                        PHYSICAL GOLD STORAGE SOLUTIONS
                    </Typography>
                    <Stack direction="column" spacing={2}>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            Gold Star and Shipping Company Vaults is a purpose built facility in Ghana CBD built
                            to hold the weight of bullion as well as any other items that you need to keep safe.
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            As a subsidiary of Pallion, Gold Star and Shipping Company Vaults is not only built on solid
                            bedrock, but also on 40+ years of trusted experience in the bullion industry.
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            Gold Star and Shipping Company Vaults has 4 different size safety deposit boxes available:
                            Envelope (15kg), Small (60kg), Medium (120kg) and Large (240kg).
                            Specifically designed for the storage of bullion, we have boxes that will hold all types of
                            bullion from single ounce coins all the way through to 15kg silver bars and monster boxes.
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            The boxes available at Gold Star and Shipping Company Vaults are designed so that they will
                            not warp or become damaged by the weight of bullion storage.
                            We are confident that our facility provides peace of mind to our clients where other
                            facilities may not.
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            Being partnered with ABC Bullion means we are well known in the industry and Gold Star and
                            Shipping Company Vaults clients can have their bullion not only stored here safely, but also
                            transported from our bullion partners around the world. We can also organise buy backs, SMSF
                            Auditing and Valuations on your metals.
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            Bullion acquisition, storage, valuation and auditing can be facilitated in the vault and is
                            a convenient solution for anyone looking to store, collect or re-sell their metals
                        </Typography>
                    </Stack>

                </Container>
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
                        Choice of Safe Deposit Boxes to Suit Your Needs
                    </Typography>
                    <Stack direction="column" spacing={2}>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            Our facility offers various box sizes to suit all client requirements. The smaller boxes are
                            ideal for the storage of jewelry, cash, valuable coins and computer back-up discs. The
                            mid-range boxes are designed to keep papers, house deeds and other important documents.
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            The larger boxes are ideal to hold larger amounts of paperwork and artwork which need to be
                            stored securely. We are also the only safe deposit box facility to offer high security
                            private walk-in vaults for the storage of fine Art and valuable furniture.
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            We at Platinum Security and Shipping Company have a very strong and long term background in
                            the Bullion and Jewellery industry and understand the sense of security an individual or
                            business seeks for their precious & prized possessions.
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </Layout>
    )
}

export default MineralStoragePage;
