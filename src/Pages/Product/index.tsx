import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import { useGetGameQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Product = () => {
  const { id } = useParams() as { id: string }

  const { data: game, isLoading } = useGetGameQuery(id) as {
    data: Game
    isLoading: boolean
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title={'Sobre o jogo'} $background={'black'}>
        <p>{game.description}</p>
      </Section>
      <Section title={'Mais detalhes'} $background={'gray'}>
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferecesuporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ') + '.'}
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        name={game.name}
        items={game.media.gallery}
      />
    </>
  )
}
export default Product
