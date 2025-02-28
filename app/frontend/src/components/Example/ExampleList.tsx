// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "Who was the first Commander of AFRL?", value: "Who was the first Commander of AFRL?" },
    { text: "What is the Air Force S&T 2030 Strategy?", value: "What is the Air Force S&T 2030 Strategy?" },
    { text: "What was Fly-By-Wire and how was it developed?", value: "What was Fly-By-Wire and how was it developed?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
