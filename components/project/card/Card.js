import * as styled from './styles';
import Link from 'next/link';

const Card = ({ name, icon, info, technologies, githubLink, pageLink }) => {
  return (
    <styled.GridContainer>
      <styled.TitleCard
        animate="visible"
        initial="hidden"
        transition={{ type: 'spring', bounce: 0.4, duration: 0.8, ease: 'backOut' }}
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
          },
        }}
      >
        <img src={`/icons/${icon}.svg`} alt="" />
        <span>{name}</span>
      </styled.TitleCard>
      <styled.DemonstrationCard
        variants={{
          hidden: { x: 100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', bounce: 0.4, duration: 0.8, ease: 'backOut' },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <styled.Links>
          <ul>
            <li>
              <Link href={githubLink}>
                <a target="_blank">
                  <img src="/icons/github.svg" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href={pageLink}>
                <a target="_blank">
                  <img src="/icons/linkToPage.svg" alt="" />
                </a>
              </Link>
            </li>
          </ul>
        </styled.Links>
      </styled.DemonstrationCard>
      <styled.InfoCard
        variants={{
          hidden: { y: 70, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', bounce: 0.4, duration: 0.8, ease: 'backOut' },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <p>{info}</p>
      </styled.InfoCard>
      <styled.TechnologiesCard
        variants={{
          hidden: { y: 70, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              bounce: 0.4,
              delay: 0.2,
              duration: 0.6,
              ease: 'backOut',
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <h2>Used technologies:</h2>
        <div>
          <ul>
            {technologies.map((technology) => {
              return (
                <li>
                  <img src={`/icons/${technology}.svg`} alt="" />
                  <span>{technology}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </styled.TechnologiesCard>
    </styled.GridContainer>
  );
};

export default Card;
