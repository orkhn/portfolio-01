import Card from '../card/Card';
const Beau = () => {
  return (
    <Card
      name={'BEAU'}
      icon="beau"
      info="An e-commerce app with cutting edge technologies and visually appealing design that is aimed to sell beauty products for Women. The app Was created with only Javascript."
      technologies={[
        'reactjs',
        'nextjs',
        'firebase',
        'styled-components',
        'figma',
        'mongodb',
      ]}
      githubLink="https://github.com/orkhn"
      pageLink="https://orkhn.com/"
    />
  );
};

export default Beau;
