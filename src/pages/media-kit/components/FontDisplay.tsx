import React, { JSX } from 'react';
import styles from './FontDisplay.module.css';

interface FontExample {
    name: string;
    family: string;
    weights: {
        weight: string;
        name: string;
        sample: string;
    }[];
}

const fonts: FontExample[] = [
    {
        name: 'Heading Font',
        family: 'Inter',
        weights: [
            {
                weight: '400',
                name: 'Regular',
                sample: 'The quick brown fox jumps over the lazy dog'
            }
        ],
        usage: 'Used for H1–H2 big titles.'
    },
    {
        name: 'Body Font',
        family: 'Roboto Condensed',
        weights: [
            {
                weight: '300',
                name: 'Light',
                sample: 'The quick brown fox jumps over the lazy dog'
            }
        ],
        usage: 'Used for body text and H3+ titles.'
    }
];

export default function FontDisplay(): JSX.Element {
    return (
        <div className={styles.fontContainer}>
            {fonts.map((font) => (
                <div key={font.name} className={styles.fontFamily}>
                    <div className={styles.fontHeader}>
                        <h3>{font.name}</h3>
                        <span className={styles.fontMeta}>Font Family: {font.family}</span>
                    </div>

                    <div className={styles.weightExamples}>
                        {font.weights.map((weight) => (
                            <div key={weight.weight} className={styles.weightExample}>
                                <div className={styles.weightInfo}>
                                    <span className={styles.weightName}>{weight.name}</span>
                                    <span className={styles.weightValue}>{weight.weight}</span>
                                </div>
                                <p
                                    className={styles.sampleText}
                                    style={{
                                        fontFamily: font.family,
                                        fontWeight: weight.weight
                                    }}
                                >
                                    {weight.sample}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}