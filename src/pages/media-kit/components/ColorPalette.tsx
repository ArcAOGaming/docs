import React, { JSX, useState } from 'react';
import styles from './ColorPalette.module.css';

interface ColorSwatch {
    name: string;
    hex?: string;
    gradient?: string;
    description?: string;
}

const brandColors: ColorSwatch[] = [
    {
        name: 'Black',
        hex: '#000000',
        description: 'Used for text and high contrast elements.'
    },
    {
        name: 'White',
        hex: '#FFFFFF',
        description: 'Used for backgrounds and light elements.'
    },
    {
        name: 'Green',
        hex: '#22C55E',
        description: 'Represents Minting of $GAME.'
    },
    {
        name: 'Purple',
        hex: '#9333EA',
        description: 'Represents Creating Games & Content in the $GAME Ecosystem.'
    },
    {
        name: 'Blue',
        hex: '#3B82F6',
        description: 'Represents Playing Games in the $GAME Ecosystem.'
    },
    {
        name: 'Yellow',
        hex: '#F59E0B',
        description: 'Represents Earning in the $GAME Ecosystem.'
    },
    {
        name: 'Gradient',
        gradient: 'linear-gradient(#8e44ad, #3498db)',
        description: 'Represents Asset Ownership in the $GAME Ecostystem.'
    }
];

export default function ColorPalette(): JSX.Element {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const copyToClipboard = (hex: string) => {
        navigator.clipboard.writeText(hex);
        setCopiedColor(hex);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    return (
        <div className={styles.colorGrid}>
            {brandColors.map((color) => {
                const colorValue = color.gradient || color.hex;
                return (
                    <div key={color.name} className={styles.colorCard}>
                        <div className={styles.colorSwatch}>
                            <div
                                style={{
                                    background: colorValue,
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                        </div>
                        <div className={styles.colorInfo}>
                            <h3>{color.name}</h3>
                            {colorValue && (
                                <button
                                    className={styles.hexButton}
                                    onClick={() => copyToClipboard(colorValue)}
                                >
                                    {colorValue}
                                    <span className={styles.copyIndicator}>
                                        {copiedColor === colorValue ? 'Copied!' : 'Click to copy'}
                                    </span>
                                </button>
                            )}
                            {color.description && (
                                <p className={styles.description}>{color.description}</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}