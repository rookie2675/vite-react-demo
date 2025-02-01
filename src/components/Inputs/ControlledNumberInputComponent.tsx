interface Props {
    readonly min: number;
    readonly max: number;
    readonly value: number;
    readonly setValue: (value: number) => void;
}

export default function ControlledNumberInputComponent(props: Props): React.JSX.Element {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const inputValue = parseInt(event.target.value) || props.min;
        const clampedValue = Math.min(props.max, Math.max(props.min, inputValue));
        props.setValue(clampedValue);
    }

    return <input type="number" min={props.min} max={props.max} value={props.value} onChange={handleChange} />;
}
