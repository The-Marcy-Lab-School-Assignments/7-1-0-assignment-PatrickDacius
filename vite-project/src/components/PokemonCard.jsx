// TODO: This component should render a single pokemon's stats and image.

const PokemonCard = ({ name, hp, front, back }) => {
    return (
        <div className="ui card">
            <div>
                <div className="image">
                    <img alt="pokemon name" src={front} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        Pokemon HP: {hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard