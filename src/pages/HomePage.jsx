import dataFig from '../components/atomns/DataFigures';
import SlidesImage from '../components/molecules/SlidesImage';

function HomePage() {
  return (
    <div>
      <SlidesImage items={dataFig} />
    </div>

  );
}

export default HomePage;
