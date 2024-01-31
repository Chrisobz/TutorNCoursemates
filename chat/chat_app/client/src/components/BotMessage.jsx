import React from 'react';
import {
    Text,
    Card
} from "@nextui-org/react";

const BotMessage = ({name, text, time}) => {
  return (
    <div className="BotMessage mb-5 p-2">
        <Card>
            <div className='flex justify-center items-baseline'>
                <Text className="font-bold pt-2" size={25} css={{
                    textGradient: "45deg, $blue400 -20%, $blue800 50%"
                }}>{name}</Text>
                <Text size={12} className='font-extralight pl-1'>{time}</Text>
            </div>
            <Text className='pb-2'>{text}</Text>
        </Card>
    </div>
  )
}

export default BotMessage