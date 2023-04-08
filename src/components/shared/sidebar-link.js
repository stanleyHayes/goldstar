import {Link} from "react-router-dom";
import {Button, Stack} from "@mui/material";
import {useDispatch} from "react-redux";
import {closeDrawer} from "../../redux/features/ui/ui-slice";

const SidebarLink = ({path, label, active, icon}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(closeDrawer());
    }
    return (
        <Link to={path} onClick={handleClick} style={{textDecoration: 'none'}}>
            <Stack
                spacing={2}
                sx={{
                    justifyContent: 'flex-start',
                    borderLeftWidth: active ? 3 : 0,
                    borderLeftStyle: active ? 'solid' : false,
                    borderLeftColor: active ? 'secondary.main' : false,
                    backgroundColor: active ? 'light.secondary' : false,
                    px: 2
                }}
                direction="row" justifyContent="flex-start" alignItems="center">
                {icon}
                <Button
                    fullWidth={true}
                    size="large"
                    variant="text"
                    sx={{
                        borderRadius: 0,
                        justifyContent: 'flex-start',
                        color: active ? 'secondary.main' : 'text.primary',
                        textTransform: 'capitalize',
                    }}>
                    {label}
                </Button>
            </Stack>
        </Link>
    )
}

export default SidebarLink;