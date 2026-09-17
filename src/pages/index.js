import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import SectionIcon from '../components/DocumentationNavigation/SectionIcon';
import styles from './index.module.css';

function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const steps = [
    {
      title: translate({id: 'homepage.steps.install.title', message: 'Install Open-Science'}),
      description: translate({id: 'homepage.steps.install.description', message: 'Choose your operating system.'}),
      to: 'guides/installation/',
    },
    {
      title: translate({id: 'homepage.steps.setup.title', message: 'Set up your workspace'}),
      description: translate({id: 'homepage.steps.setup.description', message: 'Connect a model and prepare your runtimes.'}),
      to: 'guides/onboarding/',
    },
    {
      title: translate({id: 'homepage.steps.firstResult.title', message: 'Create your first result'}),
      description: translate({id: 'homepage.steps.firstResult.description', message: 'Follow a project from input to saved output.'}),
      to: 'guides/first-project/',
    },
  ];
  const sections = [
    {
      id: 'guides',
      title: translate({id: 'homepage.sections.guides.title', message: 'Guides'}),
      description: translate({id: 'homepage.sections.guides.description', message: 'Projects, conversations, files and workspace settings.'}),
      to: 'intro/',
    },
    {
      id: 'workflows',
      title: translate({id: 'homepage.sections.workflows.title', message: 'Research workflows'}),
      description: translate({id: 'homepage.sections.workflows.description', message: 'Follow worked examples with real research data.'}),
      to: 'workflows/journal-club/',
    },
    {
      id: 'tools',
      title: translate({id: 'homepage.sections.tools.title', message: 'Explore tools'}),
      description: translate({id: 'homepage.sections.tools.description', message: 'Find databases, inspect files and run calculations.'}),
      to: 'tools/overview/',
    },
    {
      id: 'skills',
      title: translate({id: 'homepage.sections.skills.title', message: 'Skills'}),
      description: translate({id: 'homepage.sections.skills.description', message: 'Find, use and create reusable research methods.'}),
      to: 'skills/overview/',
    },
    {
      id: 'specialists',
      title: translate({id: 'homepage.sections.specialists.title', message: 'Specialists'}),
      description: translate({id: 'homepage.sections.specialists.description', message: 'Delegate focused tasks and review the results.'}),
      to: 'specialists/overview/',
    },
    {
      id: 'reference',
      title: translate({id: 'homepage.sections.reference.title', message: 'Reference'}),
      description: translate({id: 'homepage.sections.reference.description', message: 'Look up controls, file formats, the CLI and APIs.'}),
      to: 'reference/',
    },
  ];
  const topics = [
    {title: translate({id: 'homepage.topics.reproducibility', message: 'Reproducibility'}), to: 'guides/reproducibility/'},
    {title: translate({id: 'homepage.topics.packages', message: '.science research packages'}), to: 'guides/research-packages/'},
    {title: translate({id: 'homepage.topics.marketplace', message: 'Skill marketplace'}), to: 'skills/marketplace/'},
  ];

  return (
    <Layout
      title={translate({id: 'homepage.meta.title', message: 'Open-Science documentation'})}
      description={translate({
        id: 'homepage.meta.description',
        message: 'Operating, configuration, and research reproducibility guides for AIPOCH Open-Science',
      })}>
      <main className={styles.home}>
        <header className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>
              <span className={styles.marker} aria-hidden="true" />
              <Translate id="homepage.eyebrow">Documentation</Translate>
            </p>
            <Heading as="h1" className={styles.title}>Open-Science</Heading>
            <p className={styles.description}>
              <Translate id="homepage.introduction">
                Set up your workspace, work with research data, and check and share your results.
              </Translate>
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryLink} to="intro/">
                <Translate id="homepage.readDocs">Read the documentation</Translate>
                <Arrow />
              </Link>
              <Link className={styles.textLink} to="guides/troubleshooting/">
                <Translate id="homepage.troubleshooting">Troubleshooting</Translate>
              </Link>
            </div>
          </div>
          <nav className={styles.getStarted} aria-labelledby="start-heading">
            <Heading as="h2" id="start-heading" className={styles.startTitle}>
              <Translate id="homepage.startHeading">Start here</Translate>
            </Heading>
            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.to}>
                  <Link className={styles.stepLink} to={step.to}>
                    <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span>
                    <span className={styles.stepCopy}>
                      <strong>{step.title}</strong>
                      <span>{step.description}</span>
                    </span>
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </header>

        <section className={styles.directory} aria-labelledby="browse-heading">
          <Heading as="h2" id="browse-heading" className={styles.sectionTitle}>
            <Translate id="homepage.browseHeading">Explore the documentation</Translate>
          </Heading>
          <ul className={styles.sectionGrid}>
            {sections.map((section) => (
              <li key={section.id}>
                <Link className={styles.sectionLink} to={section.to}>
                  <span className={styles.sectionIcon}><SectionIcon section={section.id} /></span>
                  <div className={styles.sectionCopy}>
                    <Heading as="h3">{section.title}</Heading>
                    <p>{section.description}</p>
                  </div>
                  <Arrow />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <nav className={styles.topics} aria-labelledby="topics-heading">
          <Heading as="h2" id="topics-heading" className={styles.topicsTitle}>
            <Translate id="homepage.topicsHeading">Go further</Translate>
          </Heading>
          <ul className={styles.topicLinks}>
            {topics.map((topic) => (
              <li key={topic.to}>
                <Link className={styles.topicLink} to={topic.to}>
                  <span>{topic.title}</span><Arrow />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </Layout>
  );
}
