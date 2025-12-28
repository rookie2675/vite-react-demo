import styles from "./ControlledNumberInputComponent.module.css";

interface Props {
    readonly min: number;
    readonly max: number;
    readonly value: number;
    readonly disabled?: boolean;
    readonly setValue: (value: number) => void;
}

export default function ControlledNumberInputComponent(props: Props): React.JSX.Element {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const inputValue: number = parseInt(event.target.value) || props.min;
        const clampedValue: number = Math.min(props.max, Math.max(props.min, inputValue));
        props.setValue(clampedValue);
    }

    return <input className={styles.input + (props.disabled ? ' ' + styles.disabled : '')} type="number" min={props.min} max={props.max} value={props.value} onChange={handleChange} disabled={props.disabled} />;
}
