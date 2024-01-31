import React from 'react';
import {
    Text
} from "@nextui-org/react";

const UserMessage = ({text, time}) => {
    return (
        <div className="UserMessage flex flex-row-reverse gap-5 mb-5 items-center p-2">
            <div>
                <Text className="font-bold">You</Text>
                <span className="font-light text-gray-400">{time}</span>
            </div>
            <div className="w-4/5 flex gap-3 justify-end">
                <p className="bg-slate-400 text-black px-3 py-5 rounded-b-lg rounded-tl-lg max-w-sm break-words text-left">{text}</p>
            </div>
        </div>
    )
}

export default UserMessage;