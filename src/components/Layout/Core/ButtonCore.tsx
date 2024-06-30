import { Button } from '@nextui-org/react';
import React from 'react';

function ButtonCore({children,classNames}:{children:React.ReactNode, classNames?:string}) {
    return (
        <Button className={`bg-gradient-main hover:text-white hover:birght-5 duration-300 ${classNames}`} radius='full'>
            {children}
        </Button>
    );
}

export default ButtonCore;