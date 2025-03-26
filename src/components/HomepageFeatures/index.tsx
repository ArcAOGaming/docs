import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Game Developers',
    emoji: '🎮',
    description: (
      <>
        Resources, guides, and technical documentation for developers building games on the ArcAO platform.
      </>
    ),
    link: '/docs/game-developers/overview',
  },
  {
    title: 'Content Creators',
    emoji: '🎨',
    description: (
      <>
        Tools, resources, and guides for content creators looking to engage with the ArcAO ecosystem.
      </>
    ),
    link: '/docs/content-creators/overview',
  },
  {
    title: 'Gamers',
    emoji: '🏆',
    description: (
      <>
        Resources and guides for gamers looking to play and engage with games in the ArcAO ecosystem.
      </>
    ),
    link: '/docs/gamers/overview',
  },
  {
    title: 'Investors',
    emoji: '💰',
    description: (
      <>
        Investment opportunities, tokenomics information, and governance participation in the ArcAO ecosystem.
      </>
    ),
    link: '/docs/investors/overview',
  },
];

function Feature({title, emoji, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          <div className={styles.featureEmoji} role="img" aria-label={title}>
            {emoji}
          </div>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
