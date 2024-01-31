import React from 'react';
import {
    Button,
    Text,
    Popover
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const leaveChat = () => {
        localStorage.removeItem('userName');
        navigate('/', { replace:true });
        window.location.reload();
    }

    return (
        <div className="Navbar flex items-center justify-center bg-slate-900 p-3 h-16 xl:justify-between">
            <Text size={30} css={{
            textGradient: "45deg, $blue400 -20%, $blue800 50%",
            }} className="font-extrabold pb-1 hidden xl:block">Coursemates</Text>
            <div className="items-center gap-3 hidden xl:block pb-1">
                <Text size={15}>{localStorage.getItem('userName')}</Text>
                <Button size="sm" color="primary" onPress={ leaveChat }>Leave</Button>
            </div>
            <div className="xl:hidden">
                <Popover>
                    <Popover.Trigger>
                        <Button size="sm" color="">
                            <Text size={30} css={{
                            textGradient: "45deg, $blue400 -20%, $blue800 50%",
                            }} className="font-extrabold pb-1">Coursemates</Text>
                        </Button>
                    </Popover.Trigger>
                    <Popover.Content>
                    <div className="p-3">
                        <Text size={15} className="text-center">{localStorage.getItem('userName')}</Text>
                        <Button size="sm" color="primary" onPress={ leaveChat }>Leave</Button>
                    </div>
                    </Popover.Content>
                </Popover>
            </div>
        </div>
    )
}

export default Navbar;