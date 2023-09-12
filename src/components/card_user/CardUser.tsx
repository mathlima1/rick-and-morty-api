import { ReactElement } from "react"

import { IEpisodio } from "./IEpisodiosInterface"

interface ICardUserProps {
   episodio: IEpisodio
}

const CardUser = (props: ICardUserProps): ReactElement => {
    return (
        <div className="card">
            <span>Nome do episodio: {props.episodio.name}</span>
            <span>Data lançamento: {props.episodio.air_date}</span>
        </div>
    )
}

export { CardUser }