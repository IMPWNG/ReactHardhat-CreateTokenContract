import React, { useContext, useEffect, useState } from "react";
import { GreeterContext } from "./../buidler/BuidlerContext";

interface Props { }

export const Greeter: React.FC<Props> = () => {
    const greeter = useContext(GreeterContext);
    const [message, setMessage] = useState("");
    useEffect(() => {
        const doAsync = async () => {
            if (greeter.instance) {
                console.log("Greeter is deployed at ", greeter.instance.address);
                setMessage(await greeter.instance.greet());
            }
        };
        doAsync();
    }, [greeter]);
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};