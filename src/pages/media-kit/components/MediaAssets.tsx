import React, { JSX } from 'react';
import styles from './MediaAssets.module.css';

interface MediaAsset {
    name: string;
    preview: string;
    formats: {
        type: string;
        url: string;
    }[];
    dimensions?: string;
    background?: 'light' | 'dark';
}

const mediaAssets: MediaAsset[] = [
    {
        name: 'ArcAO Logo',
        preview: '/media-kit/assets/arcao-logo.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/arcao-logo.png' }
        ],
        dimensions: '400x400px'
    },
    {
        name: 'ArcAO Logo Black Transparent',
        preview: '/media-kit/assets/arcao-logo-black-transparent.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/arcao-logo-black-transparent.png' }
        ],
        dimensions: '1090x1290px'
    },
    {
        name: 'ArcAO Logo White Transparent',
        preview: '/media-kit/assets/arcao-logo-white-transparent.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/arcao-logo-white-transparent.png' }
        ],
        dimensions: '1090x1290px'
    },
    {
        name: 'Pong Game',
        preview: '/media-kit/assets/pong-game.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/pong-game.png' }
        ],
        dimensions: '2057x2057px'
    },
    {
        name: 'Brick Blitz Game',
        preview: '/media-kit/assets/brick_blitz-game.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/brick_blitz-game.png' }
        ],
        dimensions: '2050x2050px'
    },
    {
        name: 'Maze Muncher Game',
        preview: '/media-kit/assets/maze_muncher-game.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/maze_muncher-game.png' }
        ],
        dimensions: '2057x2057px'
    },
    {
        name: 'Feast or Famine Game',
        preview: '/media-kit/assets/feast_or_famine-game.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/feast_or_famine-game.png' }
        ],
        dimensions: '2029x2029px'
    },
    {
        name: 'Collab Mark',
        preview: '/media-kit/assets/collab-mark.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/collab-mark.png' }
        ],
        dimensions: '2000x2000px'
    },
    {
        name: 'Collab Background',
        preview: '/media-kit/assets/collab-background.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/collab-background.png' }
        ],
        dimensions: '1200x675px'
    }
];

export default function MediaAssets(): JSX.Element {
    return (
        <div className={styles.mediaGrid}>
            {mediaAssets.map((asset) => (
                <a
                    key={asset.name}
                    href={asset.formats[0].url}
                    download
                    className={styles.mediaCard}
                    title={`Download ${asset.name}`}
                >
                    <div
                        className={`${styles.previewContainer} ${asset.background === 'dark' ? styles.darkBg : ''}`}
                    >
                        <img
                            src={asset.preview}
                            alt={`${asset.name} preview`}
                            className={styles.previewImage}
                        />
                    </div>
                    <div className={styles.mediaInfo}>
                        <h3>{asset.name}</h3>
                        {asset.dimensions && (
                            <span className={styles.dimensions}>{asset.dimensions}</span>
                        )}
                    </div>
                </a>
            ))}
        </div>
    );
}