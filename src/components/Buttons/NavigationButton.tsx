import React from "react";
import { useNavigate } from "react-router";

interface Props {
    readonly text: string;
    readonly path: string;
}

export default function Button(props: Props): React.JSX.Element {
    const navigate = useNavigate();

    async function handleNavigation(): Promise<void> {
        await navigate(props.path);
    }

    return (
        <button onClick={() => void handleNavigation()} className="button">
            {props.text}
        </button>
    );
}
